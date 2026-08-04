# How to Add Your Car Images

## Step-by-Step Instructions

### Step 1: Save Your Car Photos

You have 2 car photos that need to be added:

**Car 1 - License Plate: बा १ य ९३०**
- The first white Ford car (appears to have JJ SPORT branding)
- This is the classic sedan for airport transfers

**Car 2 - License Plate: बा १ य ९९९**  
- The second white Ford car with red and blue sport stripes
- This is the premium sedan for family travel

### Step 2: Rename the Photos

1. Save the first car photo as: `car1.jpg`
2. Save the second car photo as: `car2.jpg`

### Step 3: Place in Correct Folder

1. Navigate to: `d:\projects\travelwebsite\public\images\fleet\`
2. Copy both images into this folder
3. Final paths should be:
   - `d:\projects\travelwebsite\public\images\fleet\car1.jpg`
   - `d:\projects\travelwebsite\public\images\fleet\car2.jpg`

### Step 4: Update the Code

Open file: `d:\projects\travelwebsite\app\about\page.tsx`

Find these lines (around line 550):

```typescript
image: "/images/about_taxi.png",
```

Change to:
```typescript
image: "/images/fleet/car1.jpg",
```

And find:
```typescript
image: "/images/service_airport.png",
```

Change to:
```typescript
image: "/images/fleet/car2.jpg",
```

### Step 5: Refresh Your Browser

The real car photos will now display!

---

## Alternative: Quick Copy-Paste Method

If the above seems complex, I can provide you the exact code changes needed. Just:

1. Save both car images in the fleet folder
2. Let me know when done
3. I'll update the code immediately

---

## Important Notes

- **Keep the license plates visible** - The design already shows them
- **Image quality** - Higher resolution is better (min 1200x800px recommended)
- **File format** - JPG or PNG works fine
- **File size** - Try to keep under 500KB for fast loading

---

Once images are added, your fleet section will display the actual cars with the correct license plate numbers!
