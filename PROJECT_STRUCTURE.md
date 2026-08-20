# Classic Journey Nepal - Project Structure

## 📁 Directory Organization

```
travelwebsite/
├── app/                          # Next.js 15 App Router
│   ├── layout.tsx               # Root layout with fonts & metadata
│   ├── page.tsx                 # Home page (main entry point)
│   ├── template.tsx             # Page transition wrapper
│   ├── globals.css              # Global styles & theme
│   │
│   ├── about/                   # About Us page
│   │   └── page.tsx            # Complete about page
│   │
│   ├── contact/                 # Contact page
│   │   └── page.tsx            # Contact form & info
│   │
│   ├── gallery/                 # Gallery page
│   │   └── page.tsx            # Image gallery by services
│   │
│   ├── services/                # Services section
│   │   ├── page.tsx            # Services listing page
│   │   └── [slug]/             # Dynamic service detail pages
│   │       └── page.tsx        # Individual service page
│   │
│   ├── drivers/                 # Driver profiles
│   │   ├── kusal-nepal/
│   │   │   └── page.tsx        # Kusal Nepal profile
│   │   └── ramanath-upadhyaya/
│   │       └── page.tsx        # Ramanath Upadhyaya profile
│   │
│   └── testimonials/            # Testimonials page
│       └── page.tsx            # Customer reviews
│
├── components/                   # Reusable React components
│   │
│   ├── home/                    # Home page specific components
│   │   ├── Hero.tsx            # Carousel hero section
│   │   ├── Features.tsx        # Feature badges (24/7, Safe, etc.)
│   │   ├── About.tsx           # About preview section
│   │   ├── Services.tsx        # Services showcase cards
│   │   ├── Testimonials.tsx    # Testimonial carousel
│   │   ├── CTA.tsx             # Call-to-action banner
│   │   └── Contact.tsx         # Contact form preview
│   │
│   ├── about/                   # About page components (unused/legacy)
│   │   ├── AboutHero.tsx
│   │   ├── OurStory.tsx
│   │   ├── MeetOurDrivers.tsx
│   │   ├── DestinationsSection.tsx
│   │   ├── OurFleet.tsx
│   │   ├── WhyChooseUsAbout.tsx
│   │   └── TestimonialsCarousel.tsx
│   │
│   ├── shared/                  # Shared/global components
│   │   ├── Navbar.tsx          # Top navigation bar
│   │   └── Footer.tsx          # Site footer
│   │
│   ├── Destinations.tsx         # Legacy/unused
│   └── Gallery.tsx              # Legacy/unused
│
├── public/                       # Static assets
│   ├── images/                  # All images
│   │   ├── drivers/            # Driver photos (placeholders)
│   │   ├── hero_mountains.png
│   │   ├── hero_pashupatinath.png
│   │   ├── hero_pokhara.png
│   │   ├── about_taxi.png
│   │   ├── service_airport.png
│   │   ├── service_chitwan.png
│   │   └── ... (other images)
│   │
│   ├── favicon.ico
│   └── ... (other static files)
│
├── next.config.ts               # Next.js configuration (redirects)
├── package.json                 # Dependencies & scripts
├── tsconfig.json                # TypeScript configuration
├── tailwind.config.ts           # Tailwind CSS config
├── eslint.config.mjs            # ESLint rules
└── postcss.config.mjs           # PostCSS config

```

## 🎯 Page Flow

### 1. **Home Page** (`/`)
**File:** `app/page.tsx`

**Sections (in order):**
1. Hero (carousel with 3 slides)
2. Features (badges)
3. About (preview with link to /about)
4. Services (cards with links to /services)
5. Testimonials (carousel)
6. CTA (banner)
7. Contact (form preview)

**Components used:**
- `components/home/Hero.tsx`
- `components/home/Features.tsx`
- `components/home/About.tsx`
- `components/home/Services.tsx`
- `components/home/Testimonials.tsx`
- `components/home/CTA.tsx`
- `components/home/Contact.tsx`

---

### 2. **About Page** (`/about`)
**File:** `app/about/page.tsx`

**Sections (in order):**
1. Hero (mountain background)
2. Our Story (timeline 2020-2026)
3. Who We Are (two-column with images)
4. **Statistics** (Numbers That Speak)
5. Meet Our Drivers (2 drivers: Kusal & Ramanath)
6. Destinations We Cover (8 destinations)
7. Why Choose Us (8 features)
8. Our Fleet (4 vehicle types)
9. Call to Action

**Note:** Currently a monolithic page. All sections are inline.

---

### 3. **Services** (`/services`)
**Main Page:** `app/services/page.tsx`
**Detail Pages:** `app/services/[slug]/page.tsx`

**Service Slugs:**
- `airport-pickup`
- `airport-drop`
- `hotel-transfer`
- `kathmandu-city-tour`
- `pokhara-tour`
- `chitwan-tour`
- `lumbini-tour`
- `bhaktapur-tour`
- `nagarkot-tour`
- `airport-to-hotel-transfer`
- `all-day-booking`
- `custom-nepal-tour`

---

### 4. **Gallery** (`/gallery`)
**File:** `app/gallery/page.tsx`

**Categories:**
- Kathmandu City Tour
- Pokhara Tour
- Chitwan Safari
- Mountain Views
- Airport Services

---

### 5. **Contact** (`/contact`)
**File:** `app/contact/page.tsx`

**Sections:**
1. Hero
2. Contact Info Cards (Phone, Email, Location, Hours)
3. Contact Form (sends to WhatsApp)
4. Google Maps

---

### 6. **Driver Profiles**
**Files:**
- `app/drivers/kusal-nepal/page.tsx`
- `app/drivers/ramanath-upadhyaya/page.tsx`

**Sections:**
1. Header with profile photo
2. Quick Info (experience, languages, license)
3. Contact Card
4. Professional Introduction
5. Specializations
6. Safety & Service
7. Why Choose

---

## 🎨 Shared Components

### **Navbar** (`components/shared/Navbar.tsx`)
- Sticky header
- Links: Home, About, Services, Gallery, Contact
- Book Now button (WhatsApp)
- Mobile responsive menu

### **Footer** (`components/shared/Footer.tsx`)
- Company info
- Quick links
- Contact details
- Social media
- Copyright

---

## 🎭 Design System

### **Colors** (defined in `app/globals.css`)
```css
--color-primary: #1a365d        (Navy Blue)
--color-primary-dark: #0f2744   (Darker Navy)
--color-secondary: #2c5282      (Secondary Blue)
--color-gold: #c49b63           (Gold)
--color-gold-dark: #a57c4a      (Dark Gold)
--color-gold-light: #d4af7a     (Light Gold)
--color-luxury-cream: #faf8f5   (Cream)
--color-luxury-dark: #1a1a1a    (Dark)
```

### **Fonts**
- **Headings:** Playfair Display (serif)
- **Body:** Montserrat (sans-serif)
- **Alternative:** Poppins (sans-serif)

### **Animations**
- Float, Float Delayed
- Pulse Slow
- Bounce Slow
- Fade In, Slide Up

---

## 🔄 Data Flow

### **Contact Actions**
- All "Book Now" buttons → WhatsApp: `+977 9851005029`
- All "Call" buttons → `tel:+9779817872015` or `tel:+9779851005029`
- Contact form → WhatsApp with pre-filled message

### **Navigation**
- Home → All pages
- Services cards → Individual service pages
- Driver cards → Individual driver profiles
- Back buttons on all detail pages

### **Redirects** (configured in `next.config.ts`)
```
/drivers/ram-bahadur-thapa → /drivers/kusal-nepal (301)
/drivers/suresh-gurung → /drivers/ramanath-upadhyaya (301)
```

---

## 📦 Dependencies

### **Core**
- Next.js 15 (App Router)
- React 19
- TypeScript

### **UI/Animation**
- Tailwind CSS
- Framer Motion
- Lucide React (icons)

### **Images**
- Next.js Image component (optimized)

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## 📝 Code Organization Best Practices

### **Current Structure:**
✅ Pages organized by route in `app/` directory
✅ Home components separated in `components/home/`
✅ Shared components in `components/shared/`
✅ Clear naming conventions

### **Recommendations for Future:**
1. **Break down About page** into smaller components (currently monolithic)
2. **Remove unused components** in `components/about/` folder
3. **Create reusable UI components** (Button, Card, Badge, etc.)
4. **Add TypeScript interfaces** for data types
5. **Create a constants file** for service data, driver data, etc.

---

## 🎯 Key Features

1. **Responsive Design** - Works on all devices
2. **Smooth Animations** - Framer Motion transitions
3. **Image Optimization** - Next.js Image component
4. **SEO Friendly** - Proper metadata and structure
5. **Fast Loading** - Optimized assets
6. **WhatsApp Integration** - Direct booking
7. **Dynamic Routing** - Service detail pages
8. **URL Redirects** - For renamed drivers

---

## 📱 Contact Information

- **Phone/WhatsApp:** +977 9851005029, +977 9817872015
- **Email:** classicjourneynepal2007@gmail.com
- **Location:** Kathmandu, Nepal
- **Hours:** 24/7 Service

---

## 🏗️ Future Improvements

1. Extract About page sections into separate components
2. Create a data layer (constants) for services and drivers
3. Add TypeScript interfaces for all data structures
4. Implement error boundaries
5. Add loading states
6. Create a reusable UI component library
7. Add unit tests
8. Optimize images further (WebP format)
9. Add analytics tracking
10. Implement blog/news section

---

**Last Updated:** August 2026
**Version:** 1.0.0
**Maintained by:** Classic Journey Nepal Development Team
