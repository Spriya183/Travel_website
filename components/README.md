# Components Directory

This folder contains all reusable React components for the Classic Journey Nepal website.

## 📁 Directory Structure

```
components/
├── home/           # Home page specific components
├── about/          # About page components (legacy - not currently used)
├── shared/         # Globally shared components (Navbar, Footer)
├── Destinations.tsx # Legacy component (not in use)
└── Gallery.tsx     # Legacy component (not in use)
```

---

## 🏠 Home Components (`/home`)

Components used specifically on the home page (`/app/page.tsx`)

### **Hero.tsx**
**Purpose:** Main hero section with carousel
**Features:**
- 3 rotating slides (Mountains, Pokhara, Pashupatinath)
- Smooth Ken Burns effect animations
- Dynamic text changes with each slide
- Stat cards on the right (Destinations, Travelers, Rating)
- CTA buttons (Explore Services, Book Now)

**Props:** None
**Used in:** Home page only

---

### **Features.tsx**
**Purpose:** Feature badges showing key benefits
**Features:**
- 4-6 feature cards (24/7 Service, Safe Travel, etc.)
- Icon + text layout
- Hover animations
- Responsive grid

**Props:** None
**Used in:** Home page

---

### **About.tsx**
**Purpose:** About preview section on home page
**Features:**
- Brief company introduction
- Animated counter statistics
- Link to full About page
- Two-column layout with image

**Props:** None
**Used in:** Home page (links to `/about`)

---

### **Services.tsx**
**Purpose:** Services showcase with cards
**Features:**
- Grid of service cards
- Each card links to service detail page
- Hover effects
- Icons and descriptions

**Props:** None
**Used in:** Home page (links to `/services`)

---

### **Testimonials.tsx**
**Purpose:** Customer testimonials carousel
**Features:**
- Auto-rotating carousel
- Customer photos, names, ratings
- Smooth transitions
- Responsive

**Props:** None
**Used in:** Home page

---

### **CTA.tsx**
**Purpose:** Call-to-action banner
**Features:**
- Full-width scenic background
- "Ready to Explore" message
- Book Now button
- Gradient overlay

**Props:** None
**Used in:** Home page, Service detail pages

---

### **Contact.tsx**
**Purpose:** Contact form preview on home page
**Features:**
- Contact information cards
- Inquiry form
- Google Maps embed
- WhatsApp integration

**Props:** None
**Used in:** Home page

---

## 🌐 Shared Components (`/shared`)

Components used across multiple pages

### **Navbar.tsx**
**Purpose:** Site-wide navigation header
**Features:**
- Sticky header with scroll effects
- Logo with company name
- Navigation links (Home, About, Services, Gallery, Contact)
- Book Now button (WhatsApp)
- Mobile hamburger menu
- Active page highlighting
- Glass morphism effects

**Props:** None
**Used in:** All pages (via `app/layout.tsx`)

**Navigation Links:**
```tsx
[
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" }
]
```

---

### **Footer.tsx**
**Purpose:** Site-wide footer
**Features:**
- Dark gradient background
- 4-column layout:
  1. Company info & logo
  2. Quick links
  3. Services links
  4. Contact info
- Social media icons
- Copyright notice
- Premium styling

**Props:** None
**Used in:** All pages (via `app/layout.tsx`)

---

## 📚 About Components (`/about`)

**Note:** These components are NOT currently used. The About page (`app/about/page.tsx`) is a single monolithic component. These were created as separate components but not implemented.

### Available Components (Unused):
- `AboutHero.tsx` - Hero section for about page
- `OurStory.tsx` - Company timeline
- `MeetOurDrivers.tsx` - Driver profiles section
- `DestinationsSection.tsx` - Destinations showcase
- `OurFleet.tsx` - Vehicle showcase
- `WhyChooseUsAbout.tsx` - Benefits section
- `TestimonialsCarousel.tsx` - Testimonials slider

**Future Improvement:** Refactor `app/about/page.tsx` to use these components.

---

## 🗑️ Legacy Components (Root Level)

### **Destinations.tsx**
**Status:** Not in use
**Recommendation:** Can be deleted or integrated into a page

### **Gallery.tsx**
**Status:** Not in use (Gallery page is in `app/gallery/page.tsx`)
**Recommendation:** Can be deleted

---

## 🎨 Component Design Patterns

### **Common Patterns Used:**

1. **Framer Motion Animations**
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  {/* Content */}
</motion.div>
```

2. **Responsive Grid Layouts**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Items */}
</div>
```

3. **Hover Effects**
```tsx
<div className="transform hover:scale-105 hover:shadow-xl transition-all duration-300">
  {/* Content */}
</div>
```

4. **Glass Morphism**
```tsx
<div className="bg-white/10 backdrop-blur-xl border border-white/20">
  {/* Content */}
</div>
```

---

## 🔧 Technical Details

### **All Components Use:**
- TypeScript
- Tailwind CSS for styling
- Next.js Image component for images
- Lucide React for icons
- Framer Motion for animations

### **Component Structure:**
```tsx
"use client"; // If using hooks or interactivity

import { motion } from "framer-motion";
import { Icon } from "lucide-react";

export default function ComponentName() {
  return (
    <section className="py-20">
      {/* Component content */}
    </section>
  );
}
```

---

## 📱 Responsive Breakpoints

```css
sm:  640px  /* Small devices */
md:  768px  /* Tablets */
lg:  1024px /* Laptops */
xl:  1280px /* Desktops */
2xl: 1536px /* Large screens */
```

---

## 🎯 Usage Examples

### **Using a Component:**
```tsx
// In app/page.tsx
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
    </div>
  );
}
```

### **Using Shared Components:**
```tsx
// In app/layout.tsx
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
```

---

## 🚀 Creating New Components

### **Best Practices:**

1. **File Naming:** Use PascalCase (e.g., `MyComponent.tsx`)
2. **Component Naming:** Match file name
3. **Use TypeScript:** Add proper types for props
4. **Make it Responsive:** Use Tailwind breakpoints
5. **Add Animations:** Use Framer Motion for smooth effects
6. **Optimize Images:** Use Next.js Image component
7. **Keep it Reusable:** Avoid hardcoded data when possible

### **Template:**
```tsx
"use client";

import { motion } from "framer-motion";
import { Icon } from "lucide-react";

interface MyComponentProps {
  title?: string;
  description?: string;
}

export default function MyComponent({ 
  title = "Default Title",
  description = "Default description"
}: MyComponentProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-playfair text-3xl font-bold text-primary mb-6">
          {title}
        </h2>
        <p className="text-zinc-600">
          {description}
        </p>
      </div>
    </motion.section>
  );
}
```

---

## 📊 Component Status

| Component | Status | Location | Used In |
|-----------|--------|----------|---------|
| Hero | ✅ Active | `home/Hero.tsx` | Home page |
| Features | ✅ Active | `home/Features.tsx` | Home page |
| About | ✅ Active | `home/About.tsx` | Home page |
| Services | ✅ Active | `home/Services.tsx` | Home page |
| Testimonials | ✅ Active | `home/Testimonials.tsx` | Home page |
| CTA | ✅ Active | `home/CTA.tsx` | Home, Services |
| Contact | ✅ Active | `home/Contact.tsx` | Home page |
| Navbar | ✅ Active | `shared/Navbar.tsx` | All pages |
| Footer | ✅ Active | `shared/Footer.tsx` | All pages |
| About components | ⚠️ Unused | `about/*` | None |
| Destinations | ⚠️ Unused | Root | None |
| Gallery | ⚠️ Unused | Root | None |

---

## 🔮 Future Improvements

1. **Refactor About Page:** Break down monolithic About page into separate components
2. **Create UI Library:** Extract common patterns (Button, Card, Badge, etc.)
3. **Add Storybook:** For component documentation and testing
4. **Type Safety:** Add proper TypeScript interfaces for all props
5. **Accessibility:** Add ARIA labels and keyboard navigation
6. **Performance:** Lazy load heavy components
7. **Testing:** Add unit tests for components
8. **Documentation:** Add JSDoc comments to all components

---

**Last Updated:** August 2026
**Maintained by:** Classic Journey Nepal Development Team
