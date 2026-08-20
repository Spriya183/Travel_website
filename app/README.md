# App Directory (Next.js 15 App Router)

This folder contains all pages and routing for the Classic Journey Nepal website using Next.js 15 App Router.

## 📁 Directory Structure

```
app/
├── layout.tsx              # Root layout (Navbar, Footer, Fonts)
├── page.tsx               # Home page (main entry)
├── template.tsx           # Page transition wrapper
├── globals.css            # Global styles and theme
│
├── about/
│   └── page.tsx          # About Us page
│
├── contact/
│   └── page.tsx          # Contact page
│
├── gallery/
│   └── page.tsx          # Gallery page
│
├── services/
│   ├── page.tsx          # Services listing
│   └── [slug]/
│       └── page.tsx      # Dynamic service details
│
├── drivers/
│   ├── kusal-nepal/
│   │   └── page.tsx      # Kusal Nepal profile
│   └── ramanath-upadhyaya/
│       └── page.tsx      # Ramanath Upadhyaya profile
│
└── testimonials/
    └── page.tsx          # Testimonials page
```

---

## 🏠 Root Files

### **layout.tsx**
**Purpose:** Root layout for entire application
**Wraps:** All pages

**Contains:**
- HTML and body tags
- Font configuration (Montserrat, Poppins, Playfair Display)
- Metadata (title, description)
- Navbar component
- Footer component
- Page transition template

**Key Features:**
- Applies fonts globally
- Sets up SEO metadata
- Provides consistent navigation structure

```tsx
export const metadata = {
  title: "Clasic Journey Nepal",
  description: "Premium travel services in Nepal",
};
```

---

### **page.tsx** (Home Page)
**URL:** `/`
**Purpose:** Main landing page

**Sections (in order):**
1. `<Hero />` - Carousel with 3 slides
2. `<Features />` - Feature badges
3. `<About />` - About preview
4. `<Services />` - Services showcase
5. `<Testimonials />` - Customer reviews
6. `<CTA />` - Call-to-action banner
7. `<Contact />` - Contact form

**Navigation Flow:**
- About section → Links to `/about`
- Services section → Links to `/services`
- Contact form → WhatsApp integration

---

### **template.tsx**
**Purpose:** Wraps page content with transitions
**Effect:** Smooth fade-in animation on page changes
**Used by:** All pages automatically

```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
>
  {children}
</motion.div>
```

---

### **globals.css**
**Purpose:** Global styles and CSS variables
**Contains:**
- Theme colors (primary, gold, luxury-dark, etc.)
- Font definitions
- Custom animations (float, fade, slide)
- Utility classes (text-shadow, glass effects)
- Scrollbar styling

**Key Variables:**
```css
--color-primary: #1a365d;
--color-gold: #c49b63;
--color-luxury-dark: #1a1a1a;
--font-playfair: Playfair Display;
--font-montserrat: Montserrat;
```

---

## 📄 Pages

### **About Page** (`/about`)
**File:** `about/page.tsx`
**URL:** `/about`

**Structure:**
```tsx
export default function AboutPage() {
  return (
    <div>
      {/* Hero with mountain background */}
      {/* Our Story Timeline (2020-2026) */}
      {/* Who We Are (two-column) */}
      {/* Statistics - Numbers That Speak */}
      {/* Meet Our Drivers (2 cards) */}
      {/* Destinations We Cover (8 destinations) */}
      {/* Why Choose Us (8 features) */}
      {/* Our Fleet (4 vehicles) */}
      {/* Call to Action */}
    </div>
  );
}
```

**Features:**
- Animated counter for statistics
- Clickable driver cards → `/drivers/[slug]`
- Full-page monolithic component
- Framer Motion animations throughout

**Data:**
- Driver info (Kusal Nepal, Ramanath Upadhyaya)
- Destinations (Kathmandu, Pokhara, Chitwan, etc.)
- Fleet vehicles (Car, SUV, Van, Jeep)

---

### **Contact Page** (`/contact`)
**File:** `contact/page.tsx`
**URL:** `/contact`

**Layout:**
```tsx
export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      {/* Two-Column Layout */}
      {/*   Left: Contact Info Cards */}
      {/*   Right: Contact Form */}
      {/* Google Maps Section */}
    </div>
  );
}
```

**Contact Cards:**
1. Phone/WhatsApp: +977 9851005029, +977 9817872015
2. Email: classicjourneynepal2007@gmail.com
3. Location: Kathmandu, Nepal
4. Hours: 24/7 Service

**Form Submission:**
- Collects: Name, Email, Phone, Date, Service, Message
- Sends to WhatsApp with pre-filled message
- No backend required

---

### **Gallery Page** (`/gallery`)
**File:** `gallery/page.tsx`
**URL:** `/gallery`

**Categories:**
1. Kathmandu City Tour (4 images)
2. Pokhara Tour (4 images)
3. Chitwan Safari (4 images)
4. Mountain Views (4 images)
5. Airport Services (4 images)

**Features:**
- Lightbox viewer for images
- Navigation arrows (prev/next)
- Close button
- Click to enlarge
- Responsive grid

---

### **Services Pages**

#### **Services Listing** (`/services`)
**File:** `services/page.tsx`
**URL:** `/services`

**Layout:**
- Hero section with mountain background
- Grid of service cards
- Each card clickable → `/services/[slug]`

**Services Listed:**
- Airport Pickup & Drop
- Hotel Transfer
- City Tours (Kathmandu, Pokhara, Chitwan, Lumbini)
- Day Bookings
- Custom Tours

---

#### **Service Detail** (`/services/[slug]`)
**File:** `services/[slug]/page.tsx`
**URL:** `/services/airport-pickup`, etc.

**Dynamic Routes:**
```
/services/airport-pickup
/services/pokhara-tour
/services/kathmandu-city-tour
... and more
```

**Structure:**
```tsx
export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = serviceDetails[slug];
  
  return (
    <div>
      {/* Hero with back button */}
      {/* Service Overview */}
      {/* What's Included */}
      {/* FAQs */}
      {/* Trip Details Sidebar */}
      {/* WhatsApp Inquiry Button */}
      {/* CTA Section */}
    </div>
  );
}
```

**Service Data:**
- Title, subtitle, description
- Duration, vehicle type
- Included features
- FAQs
- Hero image

**Back Button:**
- Top-left corner
- Links back to `/services`
- Glass morphism style

---

### **Driver Profile Pages**

#### **Kusal Nepal** (`/drivers/kusal-nepal`)
**File:** `drivers/kusal-nepal/page.tsx`
**URL:** `/drivers/kusal-nepal`

**Structure:**
```tsx
export default function KusalNepalPage() {
  return (
    <div>
      {/* Header with Pashupatinath photo */}
      {/* Quick Info (Experience, Languages, License) */}
      {/* Contact Card (Call, WhatsApp) */}
      {/* Professional Introduction */}
      {/* Specializations */}
      {/* Safety & Service */}
      {/* Why Choose */}
    </div>
  );
}
```

**Details:**
- Name: Kusal Nepal
- Role: Senior Tour Driver
- Experience: 12+ Years
- Languages: English, Hindi, Nepali
- Photo: Pashupatinath Temple
- Badge: Gold Certified

---

#### **Ramanath Upadhyaya** (`/drivers/ramanath-upadhyaya`)
**File:** `drivers/ramanath-upadhyaya/page.tsx`
**URL:** `/drivers/ramanath-upadhyaya`

**Structure:** Same as Kusal Nepal page

**Details:**
- Name: Ramanath Upadhyaya
- Role: Travel Guide & Driver
- Experience: 9+ Years
- Languages: English, Japanese, Nepali
- Photo: Pokhara Valley
- Badge: Premium Guide

---

### **Testimonials Page** (`/testimonials`)
**File:** `testimonials/page.tsx`
**URL:** `/testimonials`

**Note:** This page exists but is not linked in the navbar (removed per user request).

---

## 🔄 Routing & Navigation

### **Static Routes:**
```
/                  → Home page
/about            → About page
/contact          → Contact page
/gallery          → Gallery page
/services         → Services listing
/testimonials     → Testimonials (not in navbar)
```

### **Dynamic Routes:**
```
/services/[slug]           → Service detail pages
/drivers/kusal-nepal       → Kusal Nepal profile
/drivers/ramanath-upadhyaya → Ramanath profile
```

### **Redirects** (configured in `next.config.ts`):
```
/drivers/ram-bahadur-thapa → /drivers/kusal-nepal (301)
/drivers/suresh-gurung     → /drivers/ramanath-upadhyaya (301)
```

---

## 🎨 Page Components Pattern

### **Typical Page Structure:**

```tsx
"use client"; // If using React hooks

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "lucide-react";

export default function PageName() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh]">
        <Image src="/images/hero.png" alt="Hero" fill />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60" />
        <div className="relative z-10">
          <h1 className="font-playfair text-5xl font-black text-white">
            Page Title
          </h1>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Content */}
        </div>
      </section>
    </div>
  );
}
```

---

## 📱 Responsive Design

All pages are fully responsive using Tailwind breakpoints:

```css
/* Mobile First Approach */
.container {
  padding: 1rem;           /* Mobile */
}

@media (min-width: 768px) {
  .container {
    padding: 2rem;         /* Tablet */
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 4rem;         /* Desktop */
  }
}
```

---

## 🎯 SEO & Metadata

### **Root Metadata** (`layout.tsx`):
```tsx
export const metadata = {
  title: "Clasic Journey Nepal | Premium Travel Services",
  description: "Premium airport transfers, city tours, and travel services in Nepal",
};
```

### **Dynamic Metadata** (Service pages):
```tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceDetails[slug];
  
  return {
    title: `${service.title} | Clasic Journey Nepal`,
    description: service.description,
  };
}
```

---

## 🚀 Performance Optimization

### **Image Optimization:**
```tsx
<Image
  src="/images/hero.png"
  alt="Description"
  fill
  className="object-cover"
  priority  // For above-fold images
/>
```

### **Code Splitting:**
- Each page is automatically code-split by Next.js
- Components are only loaded when needed

### **Font Optimization:**
```tsx
import { Montserrat, Poppins, Playfair_Display } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });
```

---

## 🔧 Development Tips

### **Adding a New Page:**

1. Create folder: `app/my-page/`
2. Create file: `app/my-page/page.tsx`
3. Add component:
```tsx
export default function MyPage() {
  return <div>My Page</div>;
}
```
4. Add to navbar if needed

### **Adding a Dynamic Route:**

1. Create folder with brackets: `app/items/[id]/`
2. Create file: `app/items/[id]/page.tsx`
3. Access params:
```tsx
export default async function ItemPage({ params }) {
  const { id } = await params;
  return <div>Item {id}</div>;
}
```

---

## 📊 Page Status

| Page | URL | Status | Notes |
|------|-----|--------|-------|
| Home | `/` | ✅ Active | Main landing |
| About | `/about` | ✅ Active | Monolithic page |
| Contact | `/contact` | ✅ Active | Form + map |
| Gallery | `/gallery` | ✅ Active | Image viewer |
| Services | `/services` | ✅ Active | Service listing |
| Service Detail | `/services/[slug]` | ✅ Active | 12+ services |
| Kusal Profile | `/drivers/kusal-nepal` | ✅ Active | Driver 1 |
| Ramanath Profile | `/drivers/ramanath-upadhyaya` | ✅ Active | Driver 2 |
| Testimonials | `/testimonials` | ⚠️ Not linked | Exists but hidden |

---

**Last Updated:** August 2026
**Maintained by:** Classic Journey Nepal Development Team
