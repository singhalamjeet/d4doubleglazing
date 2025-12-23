# D4 Double Glazing Website

A modern, professional double glazing website built with Next.js 14, Tailwind CSS, and Framer Motion.

## Features

- ✨ **Modern Design**: Stunning animations with Framer Motion
- 📱 **Fully Responsive**: Perfect on mobile, tablet, and desktop
- 🚀 **Next.js 14**: Server-side rendering and optimal performance
- 🎨 **Tailwind CSS v4**: Modern utility-first CSS framework
- 💬 **WhatsApp Integration**: Floating contact button with pulse animation
- 📸 **Instagram Gallery**: Social media integration (widget or API)
- ♿ **SEO Optimized**: Comprehensive metadata and semantic HTML
- 🐳 **Docker Ready**: Optimized for Coolify deployment

## Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Environment Configuration

1. Copy `env.example.txt` to `.env.local`
2. Update the following variables:
   ```env
   NEXT_PUBLIC_WHATSAPP_NUMBER=+447123456789
   ```

### Instagram Gallery Setup

**Option 1: Widget (Recommended)**
1. Visit [Elfsight](https://elfsight.com/instagram-feed-insta/) or [LightWidget](https://lightwidget.com/)
2. Create account and generate embed code
3. Replace placeholder in `components/SocialGallery.tsx`

**Option 2: API Integration**
1. Get Instagram Graph API access token
2. Add to `.env.local`: `INSTAGRAM_ACCESS_TOKEN=your_token`
3. Uncomment API code in `lib/instagram.ts`

## Deployment to Coolify

### Prerequisites
- Coolify instance
- Git repository connected to Coolify

### Steps

1. **Push to Git Repository**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Configure Coolify**
   - Create new service in Coolify
   - Connect your Git repository
   - Coolify will auto-detect the Dockerfile

3. **Set Environment Variables** in Coolify dashboard:
   ```
   NEXT_PUBLIC_WHATSAPP_NUMBER=+447123456789
   NODE_ENV=production
   ```

4. **Deploy**
   - Coolify will build using the Dockerfile
   - Application will be available at your domain

## Project Structure

```
d4doubleglazing/
├── app/
│   ├── layout.tsx          # Root layout with SEO
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── FloatingContact.tsx # WhatsApp button
│   ├── Header.tsx          # Navigation
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services grid
│   ├── WhyChooseUs.tsx     # Benefits section
│   ├── SocialGallery.tsx   # Instagram feed
│   └── Footer.tsx          # Footer
├── lib/
│   └── content.ts          # Centralized content
├── Dockerfile              # Docker config
├── .dockerignore           # Docker exclusions
└── env.example.txt         # Environment template
```

## Content Customization

All content is centralized in `lib/content.ts` for easy updates:
- Services descriptions
- Why Choose Us points
- Testimonials
- SEO metadata

## Build & Test

```bash
# Production build
npm run build

# Test production build locally
npm run start

# Docker build (local testing)
docker build -t d4doubleglazing:test .
docker run -p 3000:3000 d4doubleglazing:test
```

## Technologies

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Docker + Coolify

## License

© 2024 D4 Double Glazing. All rights reserved.
