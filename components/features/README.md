# Features Directory

This directory contains all feature-specific components organized by page/functionality.

## Directory Structure

```
features/
├── home/           # Home page components
├── about/          # About Us page components
└── (other features as needed)
```

## Feature Folders

### 🏠 Home (`/home`)
Components used on the main landing page:
- `Hero.tsx` - Main hero section with image carousel
- `Features.tsx` - Feature badges/cards section
- `About.tsx` - About company preview section
- `Services.tsx` - Services showcase grid
- `Testimonials.tsx` - Customer testimonials carousel
- `CTA.tsx` - Call-to-action banner
- `Contact.tsx` - Contact form and info section

### 📖 About (`/about`)
Components used on the About Us page:
- `AboutHero.tsx` - About page hero section
- `OurStory.tsx` - Company timeline and story
- `OurFleet.tsx` - Vehicle fleet showcase
- `DestinationsSection.tsx` - Destinations covered
- `WhyChooseUsAbout.tsx` - Benefits and advantages
- `TestimonialsCarousel.tsx` - Customer testimonials

## Guidelines

1. **Feature-based Organization**: Each folder represents a specific page or feature area
2. **Component Naming**: Use PascalCase and descriptive names
3. **Reusability**: If a component is used across multiple features, consider moving it to `/common`
4. **Imports**: Use relative imports within the same feature, absolute imports for cross-feature usage

## Adding New Features

When adding a new page/feature:
1. Create a new folder under `features/` (e.g., `features/booking/`)
2. Add all components specific to that feature
3. Update this README with the new feature documentation
