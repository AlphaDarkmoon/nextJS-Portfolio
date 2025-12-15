# Next.js Portfolio Project Setup Guide

## 1. Tech Stack Understanding

### Framework: Next.js (App Router)
- Provides file-based routing with the `app/` directory structure
- Server Components by default for improved performance
- Built-in optimization for images, fonts, and scripts
- Streaming and Suspense support for loading states

### Language: TypeScript
- Type safety for all components and functions
- Better IDE support and error catching
- Interfaces for props and data structures

### Runtime: Node.js
- JavaScript runtime for server-side rendering
- Required for Next.js build and development server

### Package Manager: npm
- Dependency management
- Script execution for development, build, and deployment

### CSS Framework: Tailwind CSS
- Utility-first CSS framework
- Configured via `tailwind.config.ts`
- Provides responsive design utilities and dark mode support

### Component System: shadcn/ui
- Pre-built accessible components based on Radix UI
- Styled with Tailwind CSS
- Components are copied into the project (not installed as dependencies)
- Provides consistent, customizable UI components

### Icons: Lucide React
- Modern icon library with tree-shaking support
- Consistent design language
- Easy to use with React components

### Fonts: Next.js Font Optimization
- Automatic font optimization via `next/font`
- Self-hosts Google Fonts for privacy and performance
- Eliminates layout shift with font loading

### Content Management: MDX
- Markdown with JSX support
- Allows embedding React components in markdown
- Perfect for blog posts and portfolio case studies

### Media & Assets: Next/Image
- Automatic image optimization
- Responsive images with lazy loading
- WebP/AVIF format generation

### SEO & Metadata: Next.js Metadata API
- Generate static and dynamic metadata
- Open Graph and Twitter cards support
- Configured per page or layout

### Dark Mode: next-themes
- Theme switching with system preference detection
- No flash of incorrect theme
- localStorage persistence

### Loading States: React Suspense
- Granular loading UI at component level
- Streaming UI from server
- Built-in loading.tsx file convention

### Error Boundaries: Next.js built-in
- error.tsx file convention for error handling
- Automatic error recovery
- Prevents entire app crashes

---

## 2. Project Initialization

### Step 1: Create Next.js Project
```bash
npx create-next-app@latest portfolio --typescript --tailwind --app --src-dir --import-alias "@/*"
cd portfolio
```

When prompted, select:
- TypeScript: Yes
- ESLint: Yes
- Tailwind CSS: Yes
- `src/` directory: Yes
- App Router: Yes
- Import alias: Yes (@/*)

### Step 2: Install Additional Dependencies
```bash
npm install next-themes lucide-react
```

### Step 3: Initialize shadcn/ui
```bash
npx shadcn-ui@latest init
```

When prompted, select:
- Style: Default
- Base color: Slate
- CSS variables: Yes

### Step 4: Add Required shadcn/ui Components
```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add navigation-menu
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add separator
```

### Step 5: Install MDX Dependencies
```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx
```

---

## 3. Folder Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with theme provider
│   │   ├── page.tsx            # Home page
│   │   ├── globals.css         # Global Tailwind styles
│   │   ├── favicon.ico         # Favicon
│   │   └── not-found.tsx       # 404 page
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── navigation-menu.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   └── separator.tsx
│   │   ├── header.tsx          # Main header component
│   │   ├── theme-provider.tsx  # Theme context provider
│   │   └── theme-toggle.tsx    # Dark mode toggle button
│   ├── lib/
│   │   └── utils.ts            # Utility functions (cn helper)
│   └── styles/
│       └── mdx.css             # MDX-specific styles (for future use)
├── public/
│   └── (static assets)
├── .eslintrc.json              # ESLint configuration
├── .gitignore                  # Git ignore rules
├── next.config.js              # Next.js configuration with MDX
├── package.json                # Dependencies and scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation
```

### Folder Purpose Explanation

- **src/app/**: App Router directory containing all routes and layouts
- **src/components/**: Reusable React components
- **src/components/ui/**: shadcn/ui components (auto-generated)
- **src/lib/**: Utility functions and helpers
- **src/styles/**: Additional CSS files
- **public/**: Static assets served from root

---

## 4. Global Configuration

### Tailwind Configuration (`tailwind.config.ts`)
```typescript
import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
```

### Next.js Configuration with MDX (`next.config.js`)
```javascript
const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  experimental: {
    mdxRs: true,
  },
}

module.exports = withMDX(nextConfig)
```

### Font Configuration (`src/app/layout.tsx` - partial)
```typescript
import { Inter, JetBrains_Mono } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})
```

### Global Styles (`src/app/globals.css`)
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
    font-feature-settings: "rlig" 1, "calt" 1;
  }
}
```

---

## 5. Header Component Implementation

### Theme Provider (`src/components/theme-provider.tsx`)
```typescript
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
```

### Theme Toggle Component (`src/components/theme-toggle.tsx`)
```typescript
"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Toggle theme">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

### Header Component (`src/components/header.tsx`)
```typescript
"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 max-w-screen-2xl items-center justify-between px-4">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center space-x-2 font-bold text-xl"
          aria-label="Home"
        >
          <span className="font-mono">Portfolio</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right side - Theme toggle and mobile menu */}
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <nav className="container flex flex-col space-y-1 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium",
                  "text-foreground/60 transition-colors hover:bg-accent hover:text-foreground"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
```

### Root Layout (`src/app/layout.tsx`)
```typescript
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Portfolio | Your Name",
    template: "%s | Your Name",
  },
  description: "A modern portfolio showcasing my work and expertise",
  keywords: ["portfolio", "web developer", "next.js", "react", "typescript"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",
    title: "Portfolio | Your Name",
    description: "A modern portfolio showcasing my work and expertise",
    siteName: "Your Name Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Your Name",
    description: "A modern portfolio showcasing my work and expertise",
    creator: "@yourusername",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
```

### Home Page (`src/app/page.tsx`)
```typescript
export default function Home() {
  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Welcome to My Portfolio
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          This is a placeholder for the home page. More sections will be added later.
        </p>
      </div>
    </div>
  )
}
```

---

## 6. What Will Be Built Next

### Upcoming Sections (Not Yet Implemented)

1. **Hero Section**
   - Introduction with name and role
   - Brief description
   - Call-to-action buttons

2. **About Section**
   - Bio and background
   - Skills showcase
   - Experience timeline

3. **Projects Section**
   - Project cards with images
   - Filtering by technology
   - Project detail pages

4. **Blog Section**
   - MDX-powered blog posts
   - Blog listing page
   - Dynamic routes for individual posts

5. **Contact Section**
   - Contact form
   - Social media links
   - Email integration

6. **Additional Pages**
   - Individual project pages
   - Blog post pages
   - 404 and error pages

7. **Performance Optimizations**
   - Image optimization
   - Code splitting
   - Metadata per page

---

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

---

## Next Steps

1. Review this setup guide
2. Confirm the Header component implementation meets requirements
3. Receive approval to proceed with additional portfolio sections

**Important:** Do NOT proceed with building additional sections until confirmation is received.
