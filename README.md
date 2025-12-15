# Next.js Portfolio

A modern, responsive portfolio website built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui (Radix UI + Tailwind)
- **Icons**: Lucide React
- **Dark Mode**: next-themes
- **Content**: MDX
- **Fonts**: Next.js Font Optimization

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Initialize shadcn/ui components (if not already done):
```bash
npx shadcn-ui@latest init
```

3. Add required shadcn/ui components:
```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add navigation-menu
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add separator
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx       # Root layout with theme provider
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── header.tsx      # Main navigation header
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
└── lib/                # Utility functions
    └── utils.ts        # Helper functions
```

## Features

- ✅ Responsive header with mobile menu
- ✅ Dark/Light mode with system preference detection
- ✅ TypeScript for type safety
- ✅ Accessible components (Radix UI)
- ✅ SEO optimized with Next.js Metadata API
- ✅ Font optimization with next/font

## Next Steps

Additional sections to be implemented:
- Hero section
- About section
- Projects showcase
- Blog with MDX
- Contact form

## License

MIT
