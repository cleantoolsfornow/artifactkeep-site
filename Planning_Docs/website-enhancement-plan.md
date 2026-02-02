# ArtifactKeep Website Enhancement Plan

## Overview

Enhance the ArtifactKeep marketing website to be more compelling, accurate, and complete. The site already has a solid foundation with good design; this plan focuses on fleshing out content and adding polish.

---

## Phase 1: Quick Wins (Low Effort, High Impact)

### 1.1 Add Missing Meta Assets
>
> Priority: High | Effort: Low

Currently missing assets referenced in meta tags or needed for SEO:

#### [NEW] [og-image.png](file:///Users/test/artifactkeep-site/assets/og-image.png)

- Generate a 1200x630px Open Graph image for social sharing
- Use the app screenshot with branding overlay

#### [NEW] [apple-touch-icon.png](file:///Users/test/artifactkeep-site/assets/apple-touch-icon.png)

- 180x180px icon for iOS home screen bookmarks

---

### 1.2 Enhance Homepage Hero Section
>
> Priority: High | Effort: Low

#### [MODIFY] [index.html](file:///Users/test/artifactkeep-site/index.html)

- Add version badge near the download button (e.g., "v2.0.3")
- Add platform icons (macOS, Windows, Linux) under the CTA
- Add a brief "What's New" link to latest release

---

### 1.3 Add Social Proof Elements
>
> Priority: Medium | Effort: Low

#### [MODIFY] [index.html](file:///Users/test/artifactkeep-site/index.html)

- Add a "Built for AI Creators" trust section with use case icons
- Consider adding download count or GitHub star badge (if applicable)

---

## Phase 2: Content Enhancements



### 2.2 Improve Features Page with More Detail
>
> Priority: Medium | Effort: Medium

#### [MODIFY] [features.html](file:///Users/test/artifactkeep-site/features.html)

- Add keyboard shortcuts section (from UserGuide)
- Add bulk actions callout
- Add import/export capabilities detail
- Ensure all screenshots are current (v2.0.3)

---

### 2.3 Add Getting Started Quick Guide
>
> Priority: Medium | Effort: Medium

#### [NEW] [getting-started.html](file:///Users/test/artifactkeep-site/getting-started.html)

A simple 3-step quickstart page:

1. Download & Install
2. Create Your First Prompt
3. Import Your First Image

Link from download page and features page.

---

## Phase 3: Polish & SEO

### 3.1 Add Structured Data (JSON-LD)
>
> Priority: Medium | Effort: Low

#### [MODIFY] [index.html](file:///Users/test/artifactkeep-site/index.html)

Add SoftwareApplication schema for rich search results:

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "ArtifactKeep",
  "operatingSystem": "macOS, Windows, Linux",
  "applicationCategory": "Productivity",
  "offers": { "@type": "Offer", "price": "0" }
}
```

---

### 3.2 Add Privacy Policy Page
>
> Priority: Low | Effort: Low

#### [NEW] [privacy.html](file:///Users/test/artifactkeep-site/privacy.html)

A simple privacy policy emphasizing:

- No data collection
- No telemetry
- 100% local storage
- No third-party analytics

---

### 3.3 Update Footer with More Links
>
> Priority: Low | Effort: Low

#### [MODIFY] [footer.html](file:///Users/test/artifactkeep-site/components/footer.html)

- Add Privacy Policy link
- Add Getting Started link
- Add version number in footer

---

## Verification Plan

### Manual Verification

- [ ] Open each page in browser and verify content displays correctly
- [ ] Check all internal links work
- [ ] Verify meta tags with social media preview tools
- [ ] Test responsive design on mobile viewport

---

## Implementation Order

1. **Phase 1.1** - Add meta assets (og-image, apple-touch-icon)
2. **Phase 1.2** - Enhance homepage hero
3. **Phase 2.1** - Add use cases section  
4. **Phase 3.1** - Add structured data
5. **Phase 3.2** - Add privacy policy
6. **Phase 3.3** - Update footer
7. **Phase 2.3** - Add getting started page (if time permits)

---

## Notes

- All improvements maintain the existing design language (gradient blues, clean cards, scroll animations)
- Focus on content that aligns with UserGuide.md as the source of truth
- Avoid adding features not actually in the app
