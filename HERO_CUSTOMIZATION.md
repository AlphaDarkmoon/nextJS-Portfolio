# Hero Section - Customization Guide

## Overview

The Hero section has been successfully added to your portfolio homepage. It's the first section visitors see and communicates your identity, role, and value proposition.

## Location

**Component:** `src/components/hero/Hero.tsx`  
**Usage:** `src/app/page.tsx`

## Design Decisions

### Visual Design
- **Subtle gradient background**: Uses CSS gradients with semi-transparent colors that work in both light and dark mode
- **Radial gradient overlay**: Adds depth without being distracting
- **Clean typography**: Large, bold heading with excellent hierarchy
- **Gradient text accent**: The name is highlighted with a gradient for visual interest
- **Generous spacing**: Proper padding and margins for breathing room

### Responsiveness
- **Mobile-first**: Text scales from 4xl to 7xl across breakpoints
- **Flexible buttons**: Stack vertically on mobile, horizontal on desktop
- **Container constraints**: Max-width keeps content readable on large screens

### Accessibility
- **Semantic HTML**: Uses proper heading hierarchy (h1)
- **Color contrast**: Meets WCAG standards in both modes
- **Interactive elements**: Buttons have proper focus states
- **Icon labels**: Icons are decorative only, text provides context

### Dark Mode
- **Theme-aware**: Uses Tailwind's dark mode utilities
- **Adjusted opacity**: Gradient is more pronounced in dark mode
- **Consistent colors**: Uses design tokens that adapt to theme

## Customization Instructions

### 1. Personal Information

**Your Name:**
```tsx
// Line ~17
<span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
  Your Name  // ← Change this
</span>
```

**Headline:**
```tsx
// Line ~15
Hi, I'm [Your Name] — I build modern web experiences.
// Change to your own tagline, e.g.:
// "— I create seamless digital experiences."
// "— I transform ideas into elegant code."
// "— I craft pixel-perfect interfaces."
```

**Description:**
```tsx
// Lines ~24-26
Frontend Engineer specializing in React, Next.js, and TypeScript.
I create fast, accessible, and beautiful web applications that solve real problems.
// Change to your actual role and value proposition
```

**Location & Experience:**
```tsx
// Lines ~52-54
<span>Based in Your Location</span>
<span>5+ years experience</span>
// Update with your actual location and experience
```

### 2. Call-to-Action Buttons

**Primary CTA:**
```tsx
// Lines ~31-35
<Button asChild size="lg" className="group">
  <Link href="/projects">
    View Projects  // ← Change text
    // Change href to your projects page
  </Link>
</Button>
```

**Secondary CTA:**
```tsx
// Lines ~38-42
<Button asChild variant="outline" size="lg">
  <Link href="/contact">
    <Download className="mr-2 h-4 w-4" />
    Download Resume  // ← Change text
    // Or change to "Contact Me", "Get in Touch", etc.
    // Update href accordingly
  </Link>
</Button>
```

### 3. Status Badge

**Availability:**
```tsx
// Lines ~47-50
<div className="flex items-center gap-2">
  <div className="h-2 w-2 rounded-full bg-green-500" />
  <span>Available for work</span>
  // Change to "Open to opportunities", "Not available", etc.
  // Change bg-green-500 to bg-red-500 if not available
</div>
```

### 4. Visual Customization

**Background Gradient Colors:**
```tsx
// Line ~9 - Subtle background
from-background via-background to-muted/20
// Change to-muted/20 to adjust intensity

// Line ~10 - Radial gradient
rgba(120,119,198,0.1)  // Light mode
rgba(120,119,198,0.15) // Dark mode
// Change RGB values for different accent color
// Example: rgba(59,130,246,0.1) for blue
```

**Text Gradient (Name):**
```tsx
// Line ~17
from-primary to-primary/60
// Uses your theme's primary color
// Can change to:
// from-blue-500 to-purple-500
// from-pink-500 to-orange-500
// from-green-500 to-cyan-500
```

**Height:**
```tsx
// Line ~7
min-h-[calc(100vh-4rem)]
// 4rem accounts for header height
// Change to min-h-screen for full viewport
// Or min-h-[80vh] for shorter hero
```

### 5. Icons

**Change Icons:**
```tsx
import { ArrowRight, Download } from "lucide-react"
// Can change to any Lucide icons:
// import { ChevronRight, Mail, FileText, Github } from "lucide-react"
```

**Icon Usage:**
```tsx
<ArrowRight className="ml-2 h-4 w-4" />
// Replace ArrowRight with your chosen icon
```

### 6. Typography

**Heading Size:**
```tsx
// Line ~15
text-4xl sm:text-5xl md:text-6xl lg:text-7xl
// Reduce for smaller heading:
// text-3xl sm:text-4xl md:text-5xl lg:text-6xl
```

**Description Size:**
```tsx
// Line ~23
text-lg sm:text-xl md:text-2xl
// Adjust as needed
```

### 7. Spacing

**Vertical Padding:**
```tsx
// Line ~12
py-16 md:py-24 lg:py-32
// Increase for more space:
// py-20 md:py-32 lg:py-40
```

**Button Spacing:**
```tsx
// Line ~30
mt-10 md:mt-12
// Adjust top margin
```

## Adding a Profile Image (Optional)

To add a profile image, update the Hero component:

```tsx
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden">
      {/* ...existing gradient backgrounds... */}
      
      <div className="container px-4 py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-5xl">
          {/* Two-column layout */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Text content */}
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                {/* ...existing heading... */}
              </h1>
              {/* ...rest of content... */}
            </div>

            {/* Profile image */}
            <div className="flex items-center justify-center">
              <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-primary/20 md:h-80 md:w-80">
                <Image
                  src="/profile.jpg"  // Place your image in public/
                  alt="Your Name"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

## Color Schemes

### Option 1: Blue Gradient
```tsx
// Name gradient
from-blue-500 to-cyan-500

// Background
bg-[radial-gradient(circle_at_30%_20%,_rgba(59,130,246,0.1),transparent_50%)]
```

### Option 2: Purple Gradient
```tsx
// Name gradient
from-purple-500 to-pink-500

// Background
bg-[radial-gradient(circle_at_30%_20%,_rgba(168,85,247,0.1),transparent_50%)]
```

### Option 3: Green Gradient
```tsx
// Name gradient
from-green-500 to-emerald-500

// Background
bg-[radial-gradient(circle_at_30%_20%,_rgba(34,197,94,0.1),transparent_50%)]
```

## Testing Checklist

- [ ] Test on mobile (< 640px)
- [ ] Test on tablet (768px - 1024px)
- [ ] Test on desktop (> 1024px)
- [ ] Test dark mode toggle
- [ ] Test all button links
- [ ] Test with longer/shorter text
- [ ] Verify accessibility (tab navigation)
- [ ] Check text contrast in both modes

## Technical Notes

### Why Server Component?
The Hero component is a Server Component (default in App Router) because:
- No client-side interactivity needed
- Static content
- Better performance (less JavaScript sent to client)
- SEO-friendly

### Why These Packages?
- **next/link**: Client-side navigation
- **lucide-react**: Icons from approved tech stack
- **@/components/ui/button**: shadcn/ui component

### Responsive Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1400px

## Next Steps

After reviewing the Hero section:
1. Customize the text content
2. Update button links
3. Choose your color scheme
4. Test responsiveness
5. Test dark mode

**Status:** Hero section complete ✅

**Ready for:** Further sections (About, Projects, etc.) - awaiting confirmation
