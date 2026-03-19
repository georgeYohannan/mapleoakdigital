const supabaseUrl = process.env.VITE_SUPABASE_URL;
const anonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !anonKey) {
  console.error("Missing env vars: VITE_SUPABASE_URL and/or VITE_SUPABASE_ANON_KEY");
  process.exit(1);
}

const functionUrl = `${supabaseUrl}/functions/v1/contact-form`;

async function run() {
  const preflight = await fetch(functionUrl, {
    method: "OPTIONS",
    headers: {
      Origin: "https://mapleoakdigital.com",
      "Access-Control-Request-Method": "POST",
    },
  });

  if (!preflight.ok) {
    console.error(`Preflight failed with ${preflight.status}`);
    process.exit(1);
  }

  const now = new Date().toISOString();
  const response = await fetch(functionUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${anonKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "Automated Smoke Test",
      email: "smoke-test@mapleoakdigital.com",
      subject: "Smoke Test",
      message: `Automated contact function smoke test at ${now}`,
    }),
  });

  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    console.error("Contact function test failed:", {
      status: response.status,
      payload,
    });
    process.exit(1);
  }

  console.log("Contact function smoke test passed:", payload);
}

run().catch((error) => {
  console.error("Contact function smoke test crashed:", error);
  process.exit(1);
});
