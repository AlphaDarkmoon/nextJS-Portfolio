# Featured Projects Section

## Overview

The Featured Projects section displays a grid of project cards. Clicking any card opens a drawer with detailed information and an image carousel.

## Component Structure

```
components/projects/
├─ FeaturedProjects.tsx    # Main section container with state management
├─ ProjectCard.tsx          # Individual project card in grid
└─ ProjectDrawer.tsx        # Drawer with project details and carousel
```

## Adding or Modifying Projects

Edit the `projects` array in `FeaturedProjects.tsx`:

```typescript
const projects: Project[] = [
  {
    id: "unique-id",
    title: "Project Title",
    shortDescription: "Brief 1-2 line description shown on card",
    extendedDescription: "Longer description in drawer. Explain the problem, solution, and outcome.",
    technologies: ["Tech1", "Tech2", "Tech3"],
    thumbnail: "/projects/thumbnail.jpg",
    images: [
      "/projects/image1.jpg",
      "/projects/image2.jpg",
      "/projects/image3.jpg"
    ]
  }
]
```

## Image Requirements

1. **Create `/public/projects/` folder**
2. **Add project images** with descriptive names
3. **Recommended sizes:**
   - Thumbnails: 800x450px (16:9 aspect ratio)
   - Carousel images: 1200x675px (16:9 aspect ratio)
4. **Format:** JPG or PNG (optimized for web)

## Project Data Structure

```typescript
interface Project {
  id: string                    // Unique identifier
  title: string                 // Project name
  shortDescription: string      // Card description (1-2 lines)
  extendedDescription: string   // Drawer description (Problem → Solution → Outcome)
  technologies: string[]        // Array of tech stack items
  thumbnail: string             // Path to card image
  images: string[]              // Array of carousel images (min 1)
}
```

## Features

- ✅ Responsive grid (1/2/3 columns based on screen size)
- ✅ Click any card to open detailed drawer
- ✅ Image carousel with keyboard navigation (arrow keys)
- ✅ Thumbnail navigation below carousel
- ✅ Technology badges (shows first 4, then "+N more")
- ✅ Focus trap and ESC key to close drawer
- ✅ Smooth animations and transitions
- ✅ Accessible (keyboard navigation, ARIA labels)

## Usage in Page

```tsx
import { FeaturedProjects } from "@/components/projects/FeaturedProjects"

export default function Home() {
  return (
    <>
      {/* Other sections */}
      <FeaturedProjects />
    </>
  )
}
```

## Customization Tips

### Changing Grid Layout
Edit the grid classes in `FeaturedProjects.tsx`:
```tsx
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
```

### Adjusting Technology Badge Display
Modify the slice number in `ProjectCard.tsx`:
```tsx
{project.technologies.slice(0, 4).map((tech) => (
  // Change 4 to show more/fewer badges
))}
```

### Drawer Position
The drawer is responsive:
- **Mobile:** Slides from bottom (85vh height)
- **Desktop:** Slides from right (full height, max 2xl width)

## Sample Project Content

The section includes 6 sample security-focused projects:
1. Secure Authentication System
2. Vulnerability Scanner Dashboard
3. Mobile Security Audit Tool
4. Network Traffic Analyzer
5. Incident Response Platform
6. API Security Gateway

**Replace these with your actual projects!**

## Notes

- Each project should have at least 1 image
- Multiple images enable carousel navigation
- Keep short descriptions concise (recruiter-friendly)
- Extended descriptions should follow Problem → Solution → Outcome structure
- Technology badges should list most relevant/impressive tech first
