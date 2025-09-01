# Illuminate Avenue - TinaCMS Website

A modern, high-performance marketing website built with Next.js 15, TinaCMS for content management, and Tailwind CSS for styling.

## 🚀 Features

- **Next.js 15**: Latest features with App Router and Server Components
- **TinaCMS Integration**: Visual editing capabilities for all content
- **Responsive Design**: Mobile-first design with perfect responsiveness
- **SEO Optimized**: Complete SEO setup with meta tags, schema markup, and sitemap
- **Performance Optimized**: Image optimization, code splitting, and static generation
- **Type Safety**: Full TypeScript implementation
- **Modern Stack**: Tailwind CSS, custom fonts, and modern web standards

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Content Management**: TinaCMS with visual editing
- **Styling**: Tailwind CSS with custom design tokens
- **Typography**: Google Fonts (Playfair Display, Inter, Space Grotesk)
- **Language**: TypeScript
- **Deployment**: Vercel-ready configuration

## 📁 Project Structure

```
src/
├── app/
│   ├── about/page.tsx         # About page
│   ├── services/page.tsx      # Services page  
│   ├── strategy/page.tsx      # Strategy page
│   ├── work/page.tsx         # Work/Case studies page
│   ├── insights/page.tsx     # Blog/Insights page
│   ├── layout.tsx            # Root layout with SEO
│   ├── page.tsx              # Homepage
│   ├── sitemap.ts            # Dynamic sitemap
│   └── globals.css           # Global styles
├── components/
│   ├── About.tsx             # About section
│   ├── Contact.tsx           # Contact form
│   ├── Footer.tsx            # Site footer
│   ├── Hero.tsx              # Hero section
│   ├── Navigation.tsx        # Main navigation
│   ├── Process.tsx           # Process steps
│   └── Services.tsx          # Services grid
content/
├── global/
│   └── index.json           # Global site settings
└── pages/
    └── home.json            # Homepage content
tina/
├── config.ts                # TinaCMS configuration
└── __generated__/           # Generated client code
```

## 🎨 Design System

The website uses a carefully crafted design system with:

- **Colors**: Gold accent (#D4AF37) with dark/light theme support
- **Typography**: Playfair Display (headings), Inter (body), Space Grotesk (accent)
- **Spacing**: Consistent spacing scale with responsive design
- **Components**: Reusable, accessible components

## 📝 Content Management

All content is managed through TinaCMS with visual editing capabilities:

- **Global Settings**: Site title, navigation, footer content
- **Page Content**: Hero sections, service cards, process steps
- **SEO Settings**: Meta titles, descriptions, schema markup
- **Visual Editing**: Real-time preview and editing

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3001](http://localhost:3001) in your browser

### TinaCMS Setup

For full TinaCMS functionality:

1. Sign up at [tina.io](https://tina.io)
2. Create a new project
3. Add your credentials to `.env.local`:
   ```
   NEXT_PUBLIC_TINA_CLIENT_ID=your_client_id
   TINA_TOKEN=your_token
   ```

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

The `vercel.json` configuration is already included for optimal deployment.

## 🔧 Customization

### Adding New Pages

1. Create a new page file in `src/app/[page-name]/page.tsx`
2. Add content structure to TinaCMS config in `tina/config.ts`
3. Create corresponding content file in `content/pages/`
4. Update navigation in `content/global/index.json`

### Modifying Content Structure

Edit `tina/config.ts` to add new fields or modify existing content structure. TinaCMS will automatically update the editing interface.

### Styling Changes

The design system is built with Tailwind CSS and custom CSS properties. Modify `src/app/globals.css` for global styles or component files for specific styling.

## 🔍 SEO Features

- Complete meta tag setup
- Open Graph and Twitter Card support
- Schema.org structured data
- Dynamic sitemap generation
- Robots.txt configuration
- Performance optimized images

## 📈 Performance

- Next.js App Router for optimal performance
- Image optimization with WebP/AVIF support
- Static generation where possible
- Code splitting and lazy loading
- Optimized font loading

## 🛡️ Security

- Security headers configuration
- XSS protection
- Content Security Policy ready
- Frame options and content type protection

## 📄 License

This project is proprietary software owned by Illuminate Avenue.

## 🤝 Support

For support and inquiries, contact the development team.
