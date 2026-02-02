# ArtifactKeep Website - Comprehensive Plan

## Executive Summary

This is the plan for the ArtifactKeep marketing website to accompany the public release. The site will mirror the app's premium aesthetic—clean, modern, refined—using the same design language (gradient branding, soft shadows, smooth animations) while remaining fast and accessible.

**Core Principle**: Sleek and amazing UX without going overboard. Think Apple-inspired minimalism meets modern SaaS.

---

### Sitemap

**Purpose**: Required for Google Search Console to help search engines discover and index your pages.

**File**: `sitemap.xml` (place in root directory)

**Contents**:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://artifactkeep.com/</loc>
    <lastmod>2026-02-01</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://artifactkeep.com/features.html</loc>
    <lastmod>2026-02-01</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://artifactkeep.com/download.html</loc>
    <lastmod>2026-02-01</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://artifactkeep.com/help.html</loc>
    <lastmod>2026-02-01</lastmod>
    <priority>0.7</priority>
  </url>
</urlset>
```

**Setup**:

1. Create sitemap.xml in repo root
2. Deploy site to artifactkeep.com
3. Add site to Google Search Console
4. Submit sitemap URL: `https://artifactkeep.com/sitemap.xml`
5. Update `lastmod` dates when pages change

---

## Design System

### Brand Identity

**Logo & Mark**

- Use the same SVG gradient logo from the app (blue #007AFF → purple #5856D6)
- Logo mark can stand alone or pair with wordmark "ArtifactKeep"

**Color Palette** (from app's design system)

```css
/* Primary */
--color-accent: #007aff;
--color-accent-gradient: linear-gradient(135deg, #007aff 0%, #5856d6 100%);

/* Neutral - Light Theme */
--color-bg: #f5f5f7;           /* Page background */
--color-surface: #ffffff;       /* Cards, panels */
--color-text-primary: #1d1d1f;  /* Headings */
--color-text-secondary: #6e6e73; /* Body text */
--color-text-muted: #aeaeb2;    /* Supporting text */

/* Status Colors */
--color-success: #34c759;
--color-warning: #ff9500;
--color-danger: #ff3b30;
```

**Typography**

- Font Stack: `-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Segoe UI', Roboto, sans-serif`
- Hero:  42px–56px, weight 700
- H1: 36px, weight 600
- H2: 28px, weight 600  
- H3: 22px, weight 600
- Body: 17px, weight 400, line-height 1.6
- Small: 15px

**Spacing System**

- XS: 4px | SM: 8px | MD: 16px | LG: 24px | XL: 32px | 2XL: 48px | 3XL: 64px | 4XL: 96px

**Border Radius**

- SM: 6px | MD: 10px | LG: 14px | XL: 20px

**Shadows** (soft, layered)

```css
--shadow-card: 0 2px 12px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
--shadow-card-hover: 0 8px 24px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.05);
```

**Transitions**

- Fast: 120ms | Normal: 200ms | Smooth: 300ms

---

## Site Structure & Pages

### 1. Landing Page (`index.html`)

**Hero Section**

- Gradient background (subtle blue-to-purple tint)
- Logo + "ArtifactKeep" wordmark
- **Headline**: "Your AI Artifacts, Beautifully Organized"
- **Subheadline**: "Local-first desktop app for managing prompts, images, conversations, and model libraries. Privacy-focused. Cross-platform."
- **Primary CTA**: "Download" (gradient button)
- **Secondary CTA**: "Explore Features →"
- Hero visual: App screenshot (card view with gradient logo visible)

**Features Overview** (3-column grid)

1. **📁 Smart Organization** - Folders, tags, favorites, and search
2. **🎨 Image Metadata** - Instant extraction from ComfyUI/A1111 images
3. **🔒 Privacy First** - 100% local, no cloud, no tracking
4. **💬 Prompt Libraries** - Separate collections for image gen and LLM prompts
5. **📚 Model Indexing** - Index models without moving files
6. **💾 Export Anywhere** - JSON, Markdown, CSV, or plain text

**Visual Strip**: 3-4 app screenshots in carousel/grid

**CTA Section**: "Ready to organize your AI workflow?" → Download button

---

### 2. Features Page (`features.html`)

Detailed breakdown with alternating text/image sections:

- **Image Prompts**: Organize generation prompts with thumbnails, tags, folders
- **Metadata Extraction**: Auto-extract from ComfyUI/A1111 images
- **System Prompts**: Character cards and LLM instructions with profile images
- **Conversations Library**: Import and organize chat exports
- **Model Library**: Index SD/LLM models without moving files
- **Privacy & Local-First**: No cloud, no tracking, export anytime

---

### 3. Download Page (`download.html`)

**Platform Cards** (macOS, Windows, Linux)

- macOS: `.dmg`, `.app.tar.gz`
- Windows: `.msi`, `.exe`
- Linux: `.deb`, `.AppImage`, `.rpm`

**Downloads.json Integration**:
Fetch from `https://github.com/cleantoolsfornow/artifactkeep-releases/releases/latest/download/downloads.json`

Shows version, date, and populates download URLs dynamically.

**Installation Instructions** (collapsible per platform)

---

### 4. Help Page (`help.html`)

- **User Guide**: Rendered from `content/guide.md` (synced from app repo)
- **FAQ Section**: Common questions
- **Support**: Contact email with copy button
- **Donate Section**: Tasteful card for Ko-fi

---

## Components & UI Elements

### Header (Global, Sticky)

- Logo (clickable) | Nav: Features, Download, Help | Download button (accent gradient)
- Mobile: Hamburger menu

### Footer

- Links: Features, Download, Help
- Social: Ko-fi
- Copyright: "© 2026 ArtifactKeep"

### Buttons

**Primary** (gradient, shadow, hover lift)
**Secondary** (outlined, hover tint)

### Cards

- Border-radius: 14px | Shadow: card/card-hover
- Padding: 24px | Hover: elevate shadow

### Icons

- Inline SVG (Feather/Lucide style, 20-24px, stroke 2)

### Responsive Breakpoints

- Mobile: < 640px | Tablet: 640-1024px | Desktop: > 1024px

---

## Micro-Interactions & Polish

1. Smooth scrolling for anchor links
2. Fade-in on scroll (Intersection Observer)
3. Button hover: Scale 1.02, lift shadow
4. Card hover: Elevate shadow, translate -2px
5. Copy button: "Copy" → "Copied!" animation

---

## Technical Implementation

### Tech Stack

- Pure HTML/CSS/JS
- Marked.js for guide rendering
- No build tool initially (can add later)

### File Structure

```
artifactkeep-site/
├── index.html
├── features.html
├── download.html
├── help.html
├── assets/ (images, icons, screenshots)
├── css/ (variables, reset, layout, components, main)
├── js/ (main, downloads, guide, utils)
└── content/guide.md (synced from app)
```

### Downloads.json Fetch

```javascript
fetch(manifestUrl)
  .then(r => r.json())
  .then(data => {
    // Populate download buttons
    document.getElementById('mac-dmg').href = data.platforms.mac.dmg;
    // etc.
  });
```

### Guide Sync (GitHub Actions)

**Trigger**: On push when `src/assets/guide.md` changes
**Action**: Copy guide.md to website repo, commit, push

### Hosting

**Cloudflare Pages** (recommended): Free, fast CDN, auto-deploy from GitHub

---

## Content Strategy

**Tone**: Friendly, helpful, professional

**Key Messages**:

1. Privacy-first (local, no cloud)
2. Powerful organization (folders, tags, search)
3. AI-specific features (metadata, model indexing)
4. Cross-platform (macOS, Windows, Linux)
5. Export freedom (users own their data)

---

## Asset Requirements

### Screenshots Guide

**During Development**: Use placeholder images (gray boxes with text labels) until real screenshots are ready.

**Placeholder Format**: `1280x800px` gray (#e0e0e0) rectangle with centered text like "Image Prompts View" in dark gray.

**Screenshot Specifications**

- **Resolution**: 2560x1600 (retina) → export/scale to 1280x800 for web
- **Format**: WebP preferred (smaller file size), PNG fallback
- **Content**: Use realistic demo data (not lorem ipsum)
- **Cropping**: Remove OS window chrome, show only app content
- **Theme**: Primarily light mode, with 1-2 dark mode examples

---

### Required Screenshots (Detailed)

#### 1. **Hero Screenshot** (`hero-app.webp`)

**View**: Image Prompts (Card View)
**What to show**:

- 2-3 folders at top (with folder chips showing item counts)
- 6-8 prompt cards visible below folders
- Cards should have colorful thumbnails
- Some cards with multiple tags visible
- Show gradient logo in sidebar (visible on left)
- Clean, organized layout
**Purpose**: First impression on landing page - show the app at its best!

---

#### 2. **Image Prompts - Card View** (`image-prompts-cards.webp`)

**View**: Image Prompts (Card View)
**What to show**:

- Grid of 12-15 prompt cards
- Mix of cards with and without thumbnails
- Various tags ("landscape", "portrait", "anime", etc.)
- At least one favorited card (star icon visible)
- Model names visible on cards (e.g., "SDXL", "SD 1.5")
**Purpose**: Features page - demonstrate organization capabilities

---

#### 3. **Image Prompts - List View** (`image-prompts-list.webp`)

**View**: Image Prompts (List View)
**What to show**:

- Compact list view with 15-20 items visible
- Thumbnail column (small), title, tags, models visible
- Alternating row highlighting
**Purpose**: Show alternative view mode

---

#### 4. **Images Gallery** (`images-gallery.webp`)

**View**: Images Page
**What to show**:

- Grid of AI-generated images (12-16 images)
- Mix of styles (landscapes, portraits, anime, etc.)
- Consistent thumbnail sizes
- Search box visible at top
**Purpose**: Demonstrate image library organization

---

#### 5. **Image Detail with Metadata** (`image-detail-metadata.webp`)

**View**: Images Page → Detail Modal Open
**What to show**:

- Large image preview on left
- Metadata panel on right showing:
  - Positive prompt (visible, scrollable)
  - Negative prompt
  - Model name (e.g., "realismEngine_v1.safetensors")
  - Sampler, Steps, CFG Scale, etc.
- "Create Prompt" button visible
**Purpose**: Showcase metadata extraction feature (KEY DIFFERENTIATOR!)

---

#### 6. **System Prompts with Profile Images** (`system-prompts-profiles.webp`)

**View**: System Prompts (Card View)
**What to show**:

- 8-10 system prompt cards
- Each card with a profile image/avatar visible
- Character names as titles (e.g., "Helpful Assistant", "Code Reviewer")
- LLM model tags visible ("GPT-4", "Claude", "Llama 3")
- Mix of different avatar styles
**Purpose**: Show persona/character card organization

---

#### 7. **Conversations Library** (`conversations-cards.webp`)

**View**: Conversations (Card View)
**What to show**:

- 8-12 conversation cards
- Chat bubble icon or file type badges visible
- Titles like "ChatGPT - Project Planning", "Claude - Code Review"
- Date stamps visible
- Mix of .json, .txt, .md file types
**Purpose**: Demonstrate conversation archiving

---

#### 8. **Models Library** (`models-library.webp`)

**View**: Model Library
**What to show**:

- List of indexed model files (15-20 entries)
- Type badges ("Checkpoint", "LoRA", "LLM", "VAE")
- File paths visible but truncated
- File sizes shown
- At least one linked folder indicator
**Purpose**: Show model indexing without file copying

---

#### 9. **Folder Organization** (`folders-detail.webp`)

**View**: Any view (Image/System Prompts) → Inside a folder
**What to show**:

- Folder detail header at top (folder name, item count)
- Breadcrumb showing "All Items > [Folder Name]"
- Back button visible
- Items within folder displayed
**Purpose**: Demonstrate folder organization feature

---

#### 10. **Bulk Actions Toolbar** (`bulk-actions.webp`)

**View**: Any prompt view with items selected
**What to show**:

- 5-7 items with checkboxes selected
- Bulk toolbar visible at bottom showing:
  - "X selected" count
  - Move, Export, Copy, Delete buttons
- Select all checkbox checked
**Purpose**: Show multi-select and bulk operations

---

#### 11. **Dark Mode** (`dark-mode.webp`)

**View**: Any view in dark theme
**What to show**:

- Same content as another screenshot but in dark mode
- Show the gradient logo still looks good
- Demonstrate dark theme aesthetic
**Purpose**: Show theme support

---

#### 12. **Search & Filter** (`search-filter.webp`)

**View**: Any view with active filters
**What to show**:

- Search box with query entered
- Filter toolbar visible with active filter chips (e.g., "Model: SDXL", "Tag: Landscape")
- Filtered results displayed
- Results count visible
**Purpose**: Demonstrate search and filtering capabilities

---

#### 13. **Mobile Responsive** (Optional - `mobile-view.webp`)

**View**: Landing page or app on mobile
**What to show**:

- Hamburger menu visible
- Mobile-optimized layout
**Purpose**: Show cross-device support
**Note**: Lower priority, can skip for initial launch

---

### Additional Assets

### Icons

- Platform logos (macOS, Windows, Linux)
- Feature icons (Feather/Lucide, consistent rounded style)

### Logo

- SVG with gradient, transparent, multiple sizes (32px, 64px, 128px)

---

## SEO & Meta

```html
<title>ArtifactKeep – Organize Your AI Prompts, Images & Models</title>
<meta name="description" content="Local-first desktop app for managing AI prompts, images, conversations, and model libraries. Privacy-focused. Cross-platform.">
<meta property="og:image" content="https://artifactkeep.com/assets/og-image.png">
```

---

## Accessibility

- Semantic HTML (proper headings, nav, main)
- Alt text on all images
- Keyboard navigation
- Visible focus states
- ARIA labels where needed
- WCAG AA color contrast

---

## Performance Goals

- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Lighthouse Score: > 90

**Optimizations**: Minify, compress images (WebP), lazy load, inline critical CSS, CDN

---

## Phases

### Phase 1: MVP (Launch)

- Landing page (hero, features grid, CTA)
- Download page (platform cards, downloads.json)
- Help page (guide, contact, donate)
- Header/footer (duplicated markup)
- Responsive mobile layout
- Deploy to Cloudflare Pages

### Phase 2: Polish

- Features page (detailed breakdowns)
- FAQ section
- Scroll animations
- Screenshot carousel

### Phase 3: Growth

- Blog/changelog
- Community showcase
- Video walkthrough

---

## Confirmed Details

1. **Website repo**: <https://github.com/cleantoolsfornow/artifactkeep-site>
2. **Domain**: artifactkeep.com
3. **Donate platform**: <https://ko-fi.com/cleantoolsfornow>
4. **Support email**: <cleantoolsfornow@gmail.com>
5. **Social links**: None yet (can add later)
6. **Changelog**: Dedicated changelog page optional for Phase 2

---

## Next Steps

1. Answer open questions
2. Create `artifactkeep-site` repo
3. Build Phase 1 pages
4. Take app screenshots
5. Set up Cloudflare Pages
6. Configure guide sync action
7. Launch! 🚀
