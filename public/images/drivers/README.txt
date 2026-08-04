Driver Photos - UPDATED
======================

CURRENT STATUS: Using placeholder images from existing gallery.

Current Setup:
- Kusal Nepal: Using /images/about_taxi.png as subtle background (20% opacity)
- Ramanath Upadhyaya: Using /images/service_airport.png as subtle background (20% opacity)
- Both display prominent initials (KN, RU) with colored gradient backgrounds
- No errors, works perfectly out of the box

To Add Real Driver Photos (Optional):
======================================

If you want to replace the placeholders with actual driver photos:

1. Add driver photos to this folder:
   - kusal-nepal.jpg (400x400px square recommended)
   - ramanath-upadhyaya.jpg (400x400px square recommended)

2. Update the code in the following files:
   
   In app/about/page.tsx - Line ~307:
   Change: src={driver.slug === "kusal-nepal" ? "/images/about_taxi.png" : "/images/service_airport.png"}
   To: src={`/images/drivers/${driver.slug}.jpg`}
   
   In app/drivers/kusal-nepal/page.tsx - Line ~22:
   Change: src="/images/about_taxi.png"
   To: src="/images/drivers/kusal-nepal.jpg"
   
   In app/drivers/ramanath-upadhyaya/page.tsx - Line ~22:
   Change: src="/images/service_airport.png"
   To: src="/images/drivers/ramanath-upadhyaya.jpg"

3. The images will display with the initials overlaid on top.

Note: The current placeholder setup looks professional and error-free!
