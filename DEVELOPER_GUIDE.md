# 👨‍💻 Developer Guide - Classic Journey Nepal

Quick reference guide for developers working on this project.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open browser
http://localhost:3000

# 4. Make changes and see live updates!
```

---

## 📂 Where to Find Things

### **Need to edit a page?**
```
app/
├── page.tsx          → Home page
├── about/page.tsx    → About page
├── contact/page.tsx  → Contact page
├── gallery/page.tsx  → Gallery page
└── services/
    ├── page.tsx      → Services listing
    └── [slug]/page.tsx → Service detail pages
```

### **Need to edit navigation or footer?**
```
components/shared/
├── Navbar.tsx  → Top navigation
└── Footer.tsx  → Site footer
```

### **Need to edit home page sections?**
```
components/home/
├── Hero.tsx         → Carousel hero
├── Features.tsx     → Feature badges
├── About.tsx        → About preview
├── Services.tsx     → Services cards
├── Testimonials.tsx → Reviews carousel
├── CTA.tsx          → Call-to-action banner
└── Contact.tsx      → Contact form
```

### **Need to change colors or styles?**
```
app/globals.css      → Colors, fonts, animations
```

### **Need to change images?**
```
public/images/       → All images here
```

---

## 🎨 Common Tasks

### **1. Change Colors**

**File:** `app/globals.css`

```css
/* Find these variables */
--color-primary: #1a365d;      /* Navy blue */
--color-gold: #c49b63;         /* Gold accent */
--color-luxury-dark: #1a1a1a;  /* Dark */
```

### **2. Add a New Page**

```bash
# Create folder and file
mkdir app/my-page
touch app/my-page/page.tsx
```

```tsx
// app/my-page/page.tsx
export default function MyPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="font-playfair text-4xl font-bold text-primary">
          My New Page
        </h1>
        <p className="mt-4 text-zinc-600">
          Page content here...
        </p>
      </div>
    </div>
  );
}
```

**Add to navbar:**
```tsx
// components/shared/Navbar.tsx
const navLinks = [
  { name: "Home", href: "/" },
  { name: "My Page", href: "/my-page" }, // Add this
  // ... other links
];
```

### **3. Change Contact Number**

**Current:** +977 9824962065

**Files to update:**
1. `components/shared/Navbar.tsx` - Book Now button
2. `components/home/Contact.tsx` - Contact section
3. `app/contact/page.tsx` - Contact page
4. `app/about/page.tsx` - Driver phone buttons
5. `app/drivers/*/page.tsx` - Driver profile pages

**Search for:** `9779824962065` or `9824962065`

### **4. Add a New Service**

**Step 1:** Add to service listing
```tsx
// app/services/page.tsx
const services = [
  {
    title: "New Service",
    slug: "new-service",
    description: "Description here",
    image: "/images/service.png",
    price: "Contact for pricing"
  },
  // ... existing services
];
```

**Step 2:** Add service data
```tsx
// app/services/[slug]/page.tsx
const serviceDetails = {
  "new-service": {
    title: "New Service",
    subtitle: "Subtitle here",
    image: "/images/service.png",
    description: "Full description...",
    duration: "2 hours",
    vehicle: "Premium Car",
    included: ["Feature 1", "Feature 2"],
    faqs: [
      { q: "Question?", a: "Answer..." }
    ]
  },
  // ... existing services
};
```

### **5. Update Driver Information**

**Files:**
- `app/about/page.tsx` - Driver cards (around line 307)
- `app/drivers/kusal-nepal/page.tsx` - Kusal's profile
- `app/drivers/ramanath-upadhyaya/page.tsx` - Ramanath's profile

**Change name, experience, languages, etc.**

### **6. Add Images**

```bash
# 1. Place image in public folder
public/images/my-image.jpg

# 2. Use in code
<Image 
  src="/images/my-image.jpg"
  alt="Description"
  fill
  className="object-cover"
/>
```

**For driver photos:**
```bash
public/images/drivers/driver-name.jpg
```

### **7. Change Fonts**

**File:** `app/layout.tsx`

```tsx
// Change these imports
import { Montserrat, Poppins, Playfair_Display } from "next/font/google";

const myFont = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-my-font" 
});
```

Then update `globals.css`:
```css
--font-sans: var(--font-my-font);
```

---

## 🐛 Common Issues & Fixes

### **Issue: Images not loading**

**Fix:** Make sure image is in `public/` folder and path starts with `/`
```tsx
// ✅ Correct
<Image src="/images/hero.png" />

// ❌ Wrong
<Image src="images/hero.png" />
<Image src="./images/hero.png" />
```

### **Issue: Page not found (404)**

**Fix:** Create `page.tsx` in the route folder
```bash
# For /about route
app/about/page.tsx must exist
```

### **Issue: Styles not applying**

**Fix:** Check Tailwind classes are correct
```tsx
// ✅ Correct
<div className="bg-primary text-white">

// ❌ Wrong (custom color not in Tailwind config)
<div className="bg-custom-blue">
```

### **Issue: TypeScript errors**

**Fix:** Add proper types
```tsx
// ✅ Correct
interface Props {
  title: string;
  description?: string;
}

function MyComponent({ title, description }: Props) {
  // ...
}
```

### **Issue: Build fails**

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

---

## 🎯 Code Patterns

### **Page Structure**
```tsx
export default function PageName() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh]">
        {/* Hero content */}
      </section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section content */}
        </div>
      </section>
    </div>
  );
}
```

### **Component Structure**
```tsx
"use client"; // Only if using hooks/interactivity

import { motion } from "framer-motion";
import { Icon } from "lucide-react";

interface ComponentProps {
  title: string;
}

export default function MyComponent({ title }: ComponentProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6"
    >
      <h2>{title}</h2>
    </motion.div>
  );
}
```

### **Animation Pattern**
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  {/* Animated content */}
</motion.div>
```

### **Responsive Grid**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Grid items */}
</div>
```

### **Button Pattern**
```tsx
<a
  href="https://wa.me/9779824962065"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-white font-bold py-3 px-6 rounded-full transition-all duration-300"
>
  Book Now
</a>
```

---

## 📱 Testing Checklist

### **Desktop**
- [ ] All pages load
- [ ] Navigation works
- [ ] Images load
- [ ] Buttons work
- [ ] Forms submit
- [ ] Animations smooth

### **Mobile**
- [ ] Hamburger menu works
- [ ] Images fit screen
- [ ] Text readable
- [ ] Buttons clickable
- [ ] Forms usable
- [ ] WhatsApp opens

### **Browsers**
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

---

## 🚀 Deployment

### **Vercel (Easiest)**
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel
```

### **Manual Build**
```bash
# Build
npm run build

# Test production build locally
npm start

# Upload .next folder to server
# Run: npm start
```

---

## 🔍 Useful Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Run production build
npm start

# Check for errors
npm run lint

# Type check
npx tsc --noEmit

# Clear cache
rm -rf .next

# Install new package
npm install package-name

# Update all packages
npm update
```

---

## 📖 Learning Resources

### **Next.js**
- [Next.js Documentation](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)

### **React**
- [React Documentation](https://react.dev)
- [React Hooks](https://react.dev/reference/react)

### **Tailwind CSS**
- [Tailwind Documentation](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com)

### **Framer Motion**
- [Framer Motion Docs](https://www.framer.com/motion)
- [Animation Examples](https://www.framer.com/motion/examples)

---

## 💡 Pro Tips

1. **Use VS Code** - Best editor for this project
2. **Install Extensions:**
   - ESLint
   - Tailwind CSS IntelliSense
   - TypeScript and JavaScript Language Features
3. **Use Terminal inside VS Code** - Ctrl + ` (backtick)
4. **Hot Reload** - Changes appear instantly in browser
5. **Component First** - Create components, then use them in pages
6. **Mobile First** - Design for mobile, then scale up
7. **Git Commits** - Commit often with clear messages
8. **Console Logs** - Use for debugging (`console.log()`)

---

## 🆘 Getting Help

### **Check Documentation**
1. This guide (DEVELOPER_GUIDE.md)
2. Project structure (PROJECT_STRUCTURE.md)
3. Component docs (components/README.md)
4. App docs (app/README.md)

### **Common Solutions**
1. Clear cache: `rm -rf .next`
2. Reinstall: `rm -rf node_modules && npm install`
3. Check types: `npx tsc --noEmit`
4. Check lint: `npm run lint`

### **Still Stuck?**
- Check browser console (F12) for errors
- Check terminal for build errors
- Google the error message
- Ask the team!

---

## ✅ Before Committing

```bash
# 1. Check for errors
npm run lint

# 2. Type check
npx tsc --noEmit

# 3. Build test
npm run build

# 4. Test locally
npm start

# 5. If all good, commit!
git add .
git commit -m "Your message"
git push
```

---

**Happy Coding! 🎉**

Remember: The best way to learn is by doing. Don't be afraid to break things - that's what local development is for!

---

**Last Updated:** August 2026
**Maintained by:** Classic Journey Nepal Development Team
