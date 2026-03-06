# Where to Provide Your Logos

Place your logo files in this folder: **`public/`** (the same folder as this file).

## Files to add

| Purpose        | File name (exact)              | Used for                          |
|----------------|--------------------------------|-----------------------------------|
| **Light mode** | `mapleoakdigitallogo.png`      | Header & footer when theme is light |
| **Dark mode**  | `maple_oak_digital_darkmode_.png` | Header & footer when theme is dark (and over hero) |

## Steps

1. **Light-mode logo**  
   Save your logo (for use on cream/light backgrounds) as:
   ```
   public/mapleoakdigitallogo.png
   ```
   It appears in the header and footer when the site is in light mode.

2. **Dark-mode logo**  
   Save your logo (for use on dark backgrounds, e.g. white or light icon on dark) as:
   ```
   public/maple_oak_digital_darkmode_.png
   ```
   It appears in the header and footer when the site is in dark mode, and in the header when it’s over the dark hero section.

3. **Favicon (optional)**  
   The favicon is set from the same light logo in `index.html`. To change it, replace `public/mapleoakdigitallogo.png` or update the `<link rel="icon">` in `index.html` to point to another file in `public/`.

After adding or replacing these files, refresh the site; no code changes are required.
