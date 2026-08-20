# 🚗 Classic Journey Nepal

Premium travel and transportation website built with Next.js 15, TypeScript, and Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Pages](#pages)
- [Documentation](#documentation)
- [Contact](#contact)

---

## 🎯 Overview

Classic Journey Nepal is a premium travel service website offering:
- **Airport Transfers** - Pickup and drop services
- **City Tours** - Kathmandu, Pokhara, Chitwan, Lumbini
- **Custom Tours** - Personalized travel packages
- **Professional Drivers** - Experienced, multilingual guides

**Live Site:** [Your Domain Here]  
**WhatsApp:** +977 9851005029  
**Email:** classicjourneynepal2007@gmail.com

---

## ✨ Features

### 🎨 **Design**
- Premium luxury aesthetic with navy blue and gold color scheme
- Smooth animations using Framer Motion
- Fully responsive design (mobile, tablet, desktop)
- Glass morphism and modern UI effects

### 🚀 **Performance**
- Next.js 15 App Router for optimal performance
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Fast page transitions

### 📱 **User Experience**
- Intuitive navigation with sticky header
- Smooth carousel hero section
- WhatsApp integration for instant booking
- Direct call functionality
- Interactive image gallery with lightbox

### 🛠️ **Technical**
- TypeScript for type safety
- Tailwind CSS for styling
- SEO-optimized with proper metadata
- URL redirects for renamed pages
- Dynamic routing for services

---

## 🛠️ Tech Stack

### **Core**
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Node.js** - Runtime environment

### **Styling**
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- Custom CSS variables for theming

### **UI/Animation**
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- Next.js Image - Optimized images

### **Development**
- **ESLint** - Code linting
- **TypeScript Compiler** - Type checking

---

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18+ installed
- npm or yarn package manager

### **Installation**

1. **Clone the repository**
```bash
git clone <repository-url>
cd travelwebsite
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open browser**
```
http://localhost:3000
```

### **Build for Production**

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

### **Other Commands**

```bash
# Lint code
npm run lint

# Type check
npx tsc --noEmit
```

---

## 📁 Project Structure

```
travelwebsite/
├── app/                      # Next.js App Router pages
│   ├── about/               # About Us page
│   ├── contact/             # Contact page
│   ├── gallery/             # Gallery page
│   ├── services/            # Services pages
│   ├── drivers/             # Driver profile pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
│
├── components/              # React components
│   ├── home/               # Home page components
│   ├── shared/             # Shared components (Navbar, Footer)
│   └── about/              # About page components (unused)
│
├── public/                  # Static assets
│   └── images/             # All images
│       └── drivers/        # Driver photos
│
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies
│
└── Documentation/
    ├── README.md           # This file
    ├── PROJECT_STRUCTURE.md # Detailed structure
    ├── app/README.md       # App directory docs
    └── components/README.md # Components docs
```

---

## 📄 Pages

### **Public Pages**

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Landing page with hero, features, services |
| About | `/about` | Company story, drivers, destinations |
| Services | `/services` | Service listing with cards |
| Service Detail | `/services/[slug]` | Individual service pages |
| Gallery | `/gallery` | Image gallery by category |
| Contact | `/contact` | Contact form and information |
| Driver Profile | `/drivers/[name]` | Individual driver pages |

### **Service Pages**

All accessible via `/services/[slug]`:

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

## 🎨 Design System

### **Colors**
```css
Navy Blue:    #1a365d  (Primary)
Gold:         #c49b63  (Accent)
Light Gold:   #d4af7a
Dark Gold:    #a57c4a
Luxury Cream: #faf8f5
Dark:         #1a1a1a
```

### **Fonts**
- **Headings:** Playfair Display (serif)
- **Body:** Montserrat (sans-serif)
- **Alternative:** Poppins (sans-serif)

### **Animations**
- Float effects
- Fade in/out
- Slide up
- Smooth transitions

---

## 🗺️ Key Features Breakdown

### **1. Home Page**
- ✅ Carousel hero with 3 slides
- ✅ Feature badges (24/7, Safe, etc.)
- ✅ About preview with stats
- ✅ Services showcase
- ✅ Testimonials carousel
- ✅ Call-to-action banner
- ✅ Contact form

### **2. About Page**
- ✅ Hero with mountain background
- ✅ Timeline (2020-2026)
- ✅ Who We Are section
- ✅ Animated statistics
- ✅ Driver profiles (2 drivers)
- ✅ Destinations showcase (8)
- ✅ Why Choose Us (8 features)
- ✅ Fleet showcase (4 vehicles)

### **3. Services**
- ✅ Service listing page
- ✅ 12+ service detail pages
- ✅ Dynamic routing
- ✅ Back buttons
- ✅ WhatsApp inquiry

### **4. Drivers**
- ✅ Kusal Nepal profile
- ✅ Ramanath Upadhyaya profile
- ✅ Full bio and specializations
- ✅ Call and WhatsApp buttons
- ✅ Photo integration

### **5. Gallery**
- ✅ 5 categories
- ✅ Lightbox viewer
- ✅ Navigation arrows
- ✅ Responsive grid

### **6. Contact**
- ✅ Contact info cards
- ✅ Full-page form
- ✅ WhatsApp integration
- ✅ Google Maps embed

---

## 📚 Documentation

Detailed documentation available:

- **[PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)** - Complete project structure overview
- **[app/README.md](./app/README.md)** - App directory and routing
- **[components/README.md](./components/README.md)** - Component documentation
- **[DRIVER_UPDATES_SUMMARY.md](./DRIVER_UPDATES_SUMMARY.md)** - Driver updates history

---

## 🔄 Recent Updates

### **Latest Changes (August 2026)**
- ✅ Updated driver names (Kusal Nepal, Ramanath Upadhyaya)
- ✅ Added driver profile pages with landmark photos
- ✅ Implemented URL redirects for old driver pages
- ✅ Fixed hero carousel transitions (no more black flash)
- ✅ Enhanced text visibility on hero section
- ✅ Added back buttons to all service pages
- ✅ Removed Testimonials from navbar
- ✅ Positioned statistics early on About page
- ✅ Full-page contact form design
- ✅ Gallery organized by service categories

---

## 🔐 Environment Variables

This project uses no backend services, so no environment variables are required.

All contact functionality uses:
- **WhatsApp:** +977 9851005029
- **Email:** classicjourneynepal2007@gmail.com

---

## 🚀 Deployment

### **Vercel (Recommended)**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### **Other Platforms**

This is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- DigitalOcean
- Custom server with Node.js

**Build Output:**
```bash
npm run build
# Produces .next folder
# Serve with: npm start
```

---

## 🧪 Testing

```bash
# Type checking
npx tsc --noEmit

# Linting
npm run lint

# Manual testing checklist:
- [ ] All pages load correctly
- [ ] Navigation works (desktop + mobile)
- [ ] Forms submit to WhatsApp
- [ ] Call buttons open dialer
- [ ] Images load properly
- [ ] Animations are smooth
- [ ] Responsive on all devices
- [ ] Driver profile pages accessible
- [ ] Service detail pages load
- [ ] Gallery lightbox works
```

---

## 🐛 Known Issues

None at this time.

---

## 🔮 Future Enhancements

### **Planned Features**
- [ ] Blog/News section
- [ ] Online booking system
- [ ] Payment integration
- [ ] Admin dashboard
- [ ] Review system
- [ ] Multi-language support
- [ ] Customer portal
- [ ] Real-time availability

### **Technical Improvements**
- [ ] Extract About page into components
- [ ] Add unit tests
- [ ] Implement error boundaries
- [ ] Add loading states
- [ ] Create UI component library
- [ ] Add analytics tracking
- [ ] Optimize images to WebP
- [ ] Add sitemap generation

---

## 📞 Contact & Support

### **Company Contact**
- **Phone/WhatsApp:** +977 9851005029, +977 9817872015
- **Email:** classicjourneynepal2007@gmail.com
- **Location:** Kathmandu, Nepal
- **Hours:** 24/7 Service

### **Development**
For technical questions or contributions, please contact the development team.

---

## 📄 License

Copyright © 2026 Classic Journey Nepal. All rights reserved.

---

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- Lucide for beautiful icons
- All contributors and testers

---

## 📊 Stats

- **Total Pages:** 20+
- **Components:** 15+
- **Images:** 30+
- **Lines of Code:** 5,000+
- **Build Time:** ~30 seconds
- **Lighthouse Score:** 95+

---

**Built with ❤️ by Classic Journey Nepal Development Team**

**Last Updated:** August 2026  
**Version:** 1.0.0
