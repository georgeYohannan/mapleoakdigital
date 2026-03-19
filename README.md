# MapleOakDigital Website

Standalone project (lives under `cursor/` alongside other repos). Run from this directory.

A premium, modern website for MapleOakDigital showcasing AI-powered memorial videos and digital avatars. Built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Features

- **Interactive Memorial Video Generator Demo**: Experience the product with a fully functional demo interface
- **Dark Mode Support**: Seamless theme switching with localStorage persistence
- **Responsive Design**: Mobile-first approach optimized for all device sizes
- **Smooth Animations**: Parallax effects, scroll-triggered animations, and micro-interactions
- **Contact Form**: Fully validated form with real-time error handling
- **Newsletter Signup**: Email subscription with validation
- **Modern UI**: Clean design using custom color palette (forest green, amber, cream, rose gold, charcoal)

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **Database Ready**: Supabase integration configured

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Copy environment variables:

```bash
cp .env.example .env
```

4. Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── common/          # Reusable UI components (Button, Input, Card, etc.)
│   ├── layout/          # Layout components (Header, Footer)
│   ├── sections/        # Page sections (Hero, Products, Demo, etc.)
│   └── ui/              # UI utilities (DarkModeToggle)
├── contexts/            # React contexts (ThemeContext)
├── lib/                 # Utility functions
└── App.tsx              # Main application component
```

## Customization

### Where to provide logos (light & dark mode)

Place your logo files in the **`public/`** folder:

| Mode   | File name (exact)                   | Where it appears |
|--------|-------------------------------------|------------------|
| **Light** | `mapleoakdigitallogo.png`         | Header and footer in light theme |
| **Dark**  | `maple_oak_digital_darkmode_.png` | Header and footer in dark theme (and header over the hero) |

See **`public/LOGO-PLACEMENT.md`** for step-by-step instructions. No code changes are needed—just add or replace the files and refresh.

### Other customization

1. **Colors**: Update the color palette in `tailwind.config.js`
2. **Content**: Edit text content in each section component
3. **Images**: Add images to `/public` and update image references

### Integrating Backend Services

#### Contact Form

Update the `onSubmit` function in `src/components/sections/Contact.tsx`:

```typescript
const onSubmit = async (data: ContactFormData) => {
  const response = await fetch(import.meta.env.VITE_FORM_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  // Handle response
};
```

#### Newsletter

Update the `handleSubmit` function in `src/components/sections/Newsletter.tsx` to integrate with your email service provider (Mailchimp, ConvertKit, etc.)

## Building for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

## Deployment

### Hostinger

1. Build the project: `npm run build`
2. Upload the contents of the `dist/` folder to your hosting directory
3. Ensure your server is configured to serve `index.html` for all routes

### Other Platforms

The build output is a standard static site and can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## Environment Variables

Create a `.env` file based on `.env.example`:

- `VITE_SUPABASE_URL`: Your Supabase project URL (if using backend)
- `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key
- `VITE_FORM_ENDPOINT`: Form submission endpoint
- `VITE_NEWSLETTER_ENDPOINT`: Newsletter service endpoint

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility

The site follows WCAG AA guidelines:
- Proper ARIA labels
- Keyboard navigation support
- Color contrast compliance
- Screen reader compatibility

## Performance

- Lazy loading for images
- Code splitting for optimal load times
- Optimized animations (60fps)
- Minimal bundle size

## Future Enhancements

The codebase is structured for easy expansion:
- Add more product pages
- Integrate real video generation API
- Add user authentication
- Implement payment processing
- Add blog/news section

## Support

For questions or issues, contact: hello@mapleoakdigital.com

## License

Copyright © 2024 MapleOakDigital. All rights reserved.
