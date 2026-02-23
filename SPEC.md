# Blog Platform Specification

## 1. Project Overview

- **Project Name**: Modern Blog Platform
- **Project Type**: Full-stack Blog Web Application
- **Core Functionality**: A SEO-optimized blog platform with SSR/SSG rendering, featuring blog posts listing, individual post pages, categories, and responsive design
- **Target Users**: Bloggers, content creators, and readers seeking a clean reading experience

## 2. Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI
- **Rendering**: SSR (Server-Side Rendering) + SSG (Static Site Generation) + SEO optimization

## 3. UI/UX Specification

### Layout Structure

#### Header
- Fixed navigation bar with blur backdrop
- Logo on left side
- Navigation links: Home, Blog, Categories, About
- Search icon on right side

#### Main Content Area
- Hero section on home page
- Featured posts grid
- Recent posts list
- Sidebar with categories and tags

#### Footer
- Three-column layout
- About section, Quick links, Social media links
- Copyright notice

### Responsive Breakpoints
- Mobile: < 640px (single column)
- Tablet: 640px - 1024px (two columns)
- Desktop: > 1024px (three columns with sidebar)

### Visual Design

#### Color Palette
- **Background**: `#0a0a0a` (dark) / `#fafafa` (light)
- **Primary**: `#22c55e` (green-500)
- **Secondary**: `#64748b` (slate-500)
- **Accent**: `#f97316` (orange-500)
- **Text Primary**: `#fafafa` (dark) / `#0a0a0a` (light)
- **Text Secondary**: `#a1a1aa` (zinc-400)
- **Border**: `#27272a` (zinc-800)

#### Typography
- **Font Family**: "Geist Sans" for headings, "Geist Mono" for code
- **Headings**: 
  - H1: 48px, font-weight: 800
  - H2: 36px, font-weight: 700
  - H3: 24px, font-weight: 600
- **Body**: 16px, font-weight: 400, line-height: 1.75

#### Spacing System
- Base unit: 4px
- Section padding: 64px vertical
- Card padding: 24px
- Component gap: 16px

#### Visual Effects
- Card hover: scale(1.02) with 200ms transition
- Button hover: brightness increase
- Page transitions: fade-in 300ms
- Skeleton loading states

### Components

#### Post Card
- Image thumbnail (16:9 aspect ratio)
- Category badge
- Title (H3)
- Excerpt (2 lines max)
- Author avatar + name
- Published date
- Read time estimate
- Hover: subtle lift effect with shadow

#### Category Badge
- Rounded pill shape
- Background: primary color with 10% opacity
- Text: primary color
- Hover: full primary background

#### Author Card
- Avatar (48px circle)
- Name
- Bio snippet
- Social links

#### Search Modal
- Full-screen overlay
- Large search input
- Real-time results
- Keyboard navigation support

## 4. Functionality Specification

### Core Features

#### Home Page
- Hero section with animated text
- Featured posts (3 latest)
- Recent posts grid (6 posts)
- Newsletter subscription form
- Category showcase

#### Blog Listing Page
- Paginated post list (9 per page)
- Filter by category
- Sort by: Latest, Popular, Featured
- Search functionality

#### Individual Post Page
- Full article content (Markdown rendered)
- Table of contents
- Share buttons
- Author bio
- Related posts
- Comments section (UI only)
- Reading progress bar

#### Categories Page
- Grid of all categories
- Post count per category
- Featured category image

#### About Page
- Author information
- Mission statement
- Contact form

### Data Handling
- Static blog posts stored as Markdown files
- Frontmatter for metadata (title, date, author, category, tags, excerpt)
- SSG for individual blog posts
- SSR for dynamic pages

### SEO Features
- Meta tags for all pages
- Open Graph tags
- Twitter Card tags
- JSON-LD structured data
- Sitemap generation
- robots.txt

## 5. Page Structure

```
/                           - Home page
/blog                       - Blog listing
/blog/[slug]               - Individual post
/categories                - All categories
/categories/[slug]         - Posts by category
/about                     - About page
```

## 6. Acceptance Criteria

- [ ] Next.js app initializes without errors
- [ ] All pages render correctly (home, blog, post, categories, about)
- [ ] Responsive design works on all breakpoints
- [ ] Dark/Light theme toggle works
- [ ] Blog posts load from markdown files
- [ ] SEO meta tags are present on all pages
- [ ] Navigation works between all pages
- [ ] ShadCN UI components are properly integrated
- [ ] Tailwind CSS styles are applied correctly
- [ ] No TypeScript errors
- [ ] Build completes successfully
