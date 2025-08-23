# Illuminate Avenue - Builder.io Website

A complete Next.js website for Illuminate Avenue Strategic Marketing, optimized for Builder.io CMS integration with full client editing capabilities.

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Builder.io**
   - Sign up at [Builder.io](https://builder.io)
   - Get your Public API Key from your Builder.io space
   - Add your API key to `.env.local`:
     ```
     BUILDER_PUBLIC_KEY=your_actual_builder_public_key_here
     NEXT_PUBLIC_BUILDER_API_KEY=your_actual_builder_public_key_here
     ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Access Your Site**
   - Local development: http://localhost:3000
   - Builder.io visual editor: Connect your space to this domain

## Pages Structure

- **Homepage** (`/`) - Main landing page with hero, services overview, and CTAs
- **About** (`/about`) - Company story, values, and team information
- **Services** (`/services`) - Detailed service offerings and processes
- **Work** (`/work`) - Case studies, testimonials, and portfolio
- **Contact** (`/contact`) - Contact form, information, and FAQ
- **Strategy** (`/strategy`) - Strategic methodology and philosophy

## Builder.io Integration

Each page includes:
- Full Builder.io visual editing support
- Fallback HTML content for immediate functionality
- SEO optimization with Next.js Head
- Responsive design system
- Professional styling and animations

## Client Editing

Once connected to Builder.io, clients can:
- Edit all text content visually
- Modify images and media
- Adjust layouts and styling
- Add/remove sections
- Update contact information
- Manage content without code

## Deployment

Deploy to Vercel, Netlify, or any Next.js hosting platform:

```bash
npm run build
npm start
```

## Features

- ⚡ Next.js 14 with App Router
- 🎨 Builder.io Visual CMS
- 📱 Fully Responsive Design
- 🔍 SEO Optimized
- 🎯 Client-Editable Content
- 💅 Professional Styling
- 🚀 Fast Performance