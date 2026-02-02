# ArtifactKeep Website

Marketing website for ArtifactKeep - a local-first desktop app for managing AI prompts, images, conversations, and model libraries.

🌐 **Live Site**: [artifactkeep.com](https://artifactkeep.com)

## Overview

This is a static website built with vanilla HTML, CSS, and JavaScript. No build process required—just deploy the files.

## Features

- **Four Main Pages**: Landing, Features, Download, Help
- **Responsive Design**: Mobile-first with tablet and desktop breakpoints
- **Modern UI**: Premium design system with gradients, shadows, and animations
- **Dynamic Downloads**: Fetches latest release info from GitHub
- **User Guide Rendering**: Markdown guide rendered with marked.js
- **SEO Optimized**: Semantic HTML, meta tags, sitemap.xml

## Project Structure

```
artifactkeep-site/
├── index.html              # Landing page
├── features.html           # Detailed features page
├── download.html           # Download page with platform cards
├── help.html              # Help page with user guide
├── sitemap.xml            # SEO sitemap
├── css/
│   ├── variables.css      # Design system tokens
│   ├── reset.css          # Modern CSS reset
│   ├── layout.css         # Grid and layout utilities
│   ├── components.css     # UI components (buttons, cards, header, footer)
│   ├── utilities.css      # Typography and utility classes
│   └── main.css           # Main stylesheet (imports all)
├── js/
│   ├── main.js            # Mobile menu, scroll effects, copy buttons
│   ├── downloads.js       # Fetch GitHub releases
│   └── guide.js           # Render user guide from markdown
├── assets/
│   ├── favicon.svg        # Site favicon
│   └── screenshots/       # App screenshots
└── content/
    └── guide.md           # User guide (synced from app repo)
```

## Local Development

No build process needed. Just open files in a browser or use a simple HTTP server:

```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve

# PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## Deployment

### Cloudflare Pages (Recommended)

1. Push to GitHub
2. Connect repo to Cloudflare Pages
3. Set build settings:
   - Build command: (none)
   - Build output directory: `/`
4. Deploy!

### Alternative Hosting

This site works on any static host:

- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

## Content Updates

### Screenshots

Replace files in `assets/screenshots/` with actual app screenshots:

- `hero-app.png` - Main hero image
- `image-prompts-cards.png` - Image prompts view
- `system-prompts-profiles.png` - System prompts with avatars
- `image-detail-metadata.png` - Metadata extraction modal
- `conversations-cards.png` - Conversations library
- `models-library.png` - Model library list
- `folders-detail.png` - Inside folder view

**Recommended**: 1280x800px, WebP format for best performance

### User Guide

The `content/guide.md` file should be synced from the main app repository. Set up a GitHub Action to copy `src/assets/guide.md` from the app repo to this repo on changes.

### Download Links

Download links are automatically populated from:

```
https://github.com/cleantoolsfornow/artifactkeep-releases/releases/latest/download/downloads.json
```

No manual updates needed when releasing new versions.

## Design System

The site uses a comprehensive design system with:

- **Colors**: Blue-purple gradient brand identity
- **Typography**: System fonts (SF Pro, Segoe UI, Roboto)
- **Spacing**: 8-point grid system
- **Components**: Reusable buttons, cards, badges
- **Animations**: Scroll reveals, hover effects, transitions

See `css/variables.css` for all design tokens.

## SEO

- ✅ Semantic HTML
- ✅ Meta tags (OG, Twitter)
- ✅ Sitemap.xml
- ✅ Descriptive page titles
- ✅ Alt text on images
- ✅ Mobile-friendly
- ✅ Fast loading

**Update sitemap.xml** when adding new pages or making major content changes.

## Accessibility

- Keyboard navigation supported
- ARIA labels where needed
- Focus states visible
- Color contrast WCAG AA compliant
- Screen reader friendly

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile Safari (iOS 13+)
- Chrome for Android (latest)

## License

Same as ArtifactKeep main project.

## Contact

- Email: <cleantoolsfornow@gmail.com>
- GitHub: [github.com/cleantoolsfornow/artifactkeep-site](https://github.com/cleantoolsfornow/artifactkeep-site)
