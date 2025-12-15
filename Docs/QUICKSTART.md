# 🚀 Quick Start Guide

## Prerequisites
- Node.js 18 or higher
- npm package manager

## Installation (Choose One Method)

### Method 1: Automated Setup (Recommended)
```bash
cd Website
./setup.sh
```

### Method 2: Manual Setup
```bash
cd Website
npm install
mkdir -p public
```

## Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## What You'll See

✅ **Responsive Header** with navigation (Home, About, Projects, Blog, Contact)  
✅ **Dark/Light Mode Toggle** with system preference detection  
✅ **Mobile Menu** (hamburger icon on small screens)  
✅ **Placeholder Home Page**

## Next Steps

1. **Test the Header:**
   - Click navigation links
   - Toggle dark/light mode
   - Resize window to test responsive behavior
   - Test mobile menu on small screens

2. **Review Documentation:**
   - `PROJECT_SETUP.md` - Full technical setup guide
   - `IMPLEMENTATION_GUIDE.md` - Implementation details and what's next
   - `README.md` - Project overview

3. **Ready for More?**
   - Confirm the Header implementation works as expected
   - Get approval to proceed with additional sections:
     - Hero section
     - About section
     - Projects showcase
     - Blog with MDX
     - Contact form

## Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Run production server
npm run lint     # Run ESLint
```

## Project Structure

```
Website/
├── src/
│   ├── app/              # App Router pages & layouts
│   ├── components/       # React components
│   │   ├── ui/          # shadcn/ui components
│   │   ├── header.tsx   # Main header ✅
│   │   └── ...
│   └── lib/             # Utilities
├── public/              # Static assets
└── ...config files
```

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui (Radix UI)
- **Icons:** Lucide React
- **Dark Mode:** next-themes
- **Content:** MDX

## Troubleshooting

**Port 3000 already in use?**
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use a different port
npm run dev -- -p 3001
```

**Dependencies not installing?**
```bash
# Clear npm cache
npm cache clean --force
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build errors?**
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

## Status

✅ **Phase 1 Complete:** Header component and foundational setup  
⏳ **Awaiting Confirmation:** Review and approve before building additional sections

---

Need help? Check the detailed guides:
- `PROJECT_SETUP.md` for technical details
- `IMPLEMENTATION_GUIDE.md` for step-by-step implementation
