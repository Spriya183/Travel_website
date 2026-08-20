# Common Components

This directory contains shared components used across multiple pages and features.

## Components

### 🧭 Navbar.tsx
**Purpose**: Main navigation header
**Used in**: All pages (via layout.tsx)
**Features**:
- Responsive mobile menu
- Active link highlighting
- "Book Now" WhatsApp button
- Sticky navigation on scroll

### 📄 Footer.tsx
**Purpose**: Site-wide footer
**Used in**: All pages (via layout.tsx)
**Features**:
- Company information
- Quick links
- Social media links
- Contact details
- Copyright information

## Guidelines

### When to add a component here:
✅ Component is used in 2+ different features/pages
✅ Component provides core functionality (navigation, layout, etc.)
✅ Component is a reusable UI element (buttons, cards, modals)

### When NOT to add a component here:
❌ Component is specific to one page/feature
❌ Component has specialized business logic for one feature
❌ Component is a one-off custom element

## Component Standards

All common components should:
1. Be fully responsive
2. Follow the site's design system (colors, typography)
3. Be well-documented with TypeScript types
4. Have clear prop interfaces
5. Be tested for cross-browser compatibility
