import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { execSync } from "node:child_process";

const projectRoot = process.cwd();
const srcHeader = readFileSync(resolve(projectRoot, "src/components/layout/Header.tsx"), "utf8");
const srcFooter = readFileSync(resolve(projectRoot, "src/components/layout/Footer.tsx"), "utf8");
const srcIndex = readFileSync(resolve(projectRoot, "index.html"), "utf8");

const requiredAssets = [
  "mapleoakdigitallogo.png",
  "maple_oak_digital_darkmode_.png",
];

const missing = [];
const untracked = [];
for (const file of requiredAssets) {
  const fullPath = resolve(projectRoot, "public", file);
  if (!existsSync(fullPath)) {
    missing.push(file);
    continue;
  }

  // Prevent local-only pass: asset must be tracked so CI gets it too.
  try {
    execSync(`git ls-files --error-unmatch "public/${file}"`, {
      cwd: projectRoot,
      stdio: "ignore",
    });
  } catch {
    untracked.push(file);
  }
}

const checks = [
  {
    name: "Header references light logo",
    ok: srcHeader.includes("/mapleoakdigitallogo.png"),
  },
  {
    name: "Header references dark logo",
    ok: srcHeader.includes("/maple_oak_digital_darkmode_.png"),
  },
  {
    name: "Footer references light logo",
    ok: srcFooter.includes("/mapleoakdigitallogo.png"),
  },
  {
    name: "Footer references dark logo",
    ok: srcFooter.includes("/maple_oak_digital_darkmode_.png"),
  },
  {
    name: "index.html favicon points to light logo",
    ok: srcIndex.includes('href="/mapleoakdigitallogo.png"'),
  },
];

const failedChecks = checks.filter((c) => !c.ok);
if (missing.length || untracked.length || failedChecks.length) {
  console.error("Asset smoke test failed.");
  if (missing.length) {
    console.error("Missing files in public/:", missing.join(", "));
  }
  if (untracked.length) {
    console.error("Untracked files in public/ (commit these so CI can access them):", untracked.join(", "));
  }
  if (failedChecks.length) {
    for (const check of failedChecks) {
      console.error(`Failed check: ${check.name}`);
    }
  }
  process.exit(1);
}

console.log("Asset smoke test passed.");
