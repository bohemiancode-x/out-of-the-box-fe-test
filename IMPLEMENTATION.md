# Hall of Zero Limits - Test Task Implementation

## Technical Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5.9.3
- **UI Library:** React 19.2.3
- **Animation Libraries:**
  - GSAP 3.14.2 with ScrollTrigger for scroll-driven animations
  - Framer Motion 12.23.26 for component transitions
- **Styling:** Tailwind CSS 4.1.18
- **Package Manager:** pnpm 10.18.1

## Project Overview

This project is a test task implementation that replicates the core user interface and scroll-driven experience of the [Hall of Zero Limits](https://wakanda-forever-master.dogstudio-dev.co/zerolimits) cinematic website. The original site features complex 3D WebGL animations, which this implementation replaces with a combination of AI-generated video backgrounds, parallax effects, and 2D image layers while maintaining the immersive, cinematic atmosphere.

**Live Deployment:** [https://out-of-the-box-fe-test.vercel.app/](https://out-of-the-box-fe-test.vercel.app/)

**Video Walkthrough:** [Loom Video - Project Demonstration & Technical Walkthrough](https://www.loom.com/share/5615a703d4fc49fca48eb5cfd52dba71)

### Core Objective

The task required reproducing the essential visual and interactive elements of the reference website without implementing the 3D logic. The focus was on:
- Scroll-driven animations synchronized with element transitions
- Matching layout, typography, and visual structure
- Creating a smooth, performant experience
- Capturing the overall "feel" and atmosphere of the original

## Implementation Approach

### Minimalist Focus

Given the constraints of a test task, the implementation focuses on the **core sections** that demonstrate the essential user experience:

1. **Landing Page** - Hero section with door visual, title, and "ENTER" button
2. **Video Transition** - Fullscreen video transition between sections
3. **Central Hall** - Panoramic garden environment with scroll-driven horizontal panning

This minimalist approach ensures that each implemented feature is polished and functional, rather than attempting to replicate every section of the original site.

### Architecture

The application uses a **section-based state management** approach:
- State-driven section transitions (`landing` → `transition` → `garden`)
- Component-based architecture with clear separation of concerns
- Custom hooks for reusable logic (e.g., `useMousePosition`)
- GSAP ScrollTrigger for precise scroll-driven animations

## Limitations & Creative Solutions

### Challenge 1: Visual Asset Generation

**Limitation:** The original site uses proprietary 3D models and custom-rendered assets that cannot be directly accessed or replicated.

**Solution:**
- **Background Images:** Screenshots from the reference website were processed using **Gemini's Nano Banana** (Google's image generation tool) to create similar garden/panoramic backgrounds
- **Video Transitions:** Screen recordings of the original site's transitions were used as reference, then recreated using **Runway AI Video Generator** to produce similar cinematic transition effects
- **Result:** Assets that maintain the visual aesthetic while being original creations

### Challenge 2: Typography & Design Elements

**Limitation:** The original site uses custom fonts and SVG paths that are not publicly available.

**Solution:**
- **HTML Inspection:** Browser DevTools were used to inspect the source code of the reference website
- **SVG Extraction:** The landing page hero title ("THE HALL OF ZERO LIMITS") was extracted by copying the SVG paths directly from the DOM
- **Font Matching:** Typography was matched by analyzing computed styles and recreating similar visual effects using CSS
- **Result:** Pixel-accurate replication of the title treatment and typographic hierarchy

### Challenge 3: 3D Effects Without 3D

**Limitation:** The original site's immersive feel comes from 3D camera movements and WebGL rendering.

**Solution:**
- **Parallax Layers:** Custom `ParallaxLayer` component creates depth using multiple 2D layers with different scroll/mouse parallax strengths
- **Perspective Transforms:** CSS `perspective` and `transform-style: preserve-3d` simulate 3D space
- **Scroll-Driven Panning:** GSAP ScrollTrigger maps vertical scroll to horizontal camera pan, creating the illusion of rotating through the hall
- **Result:** A convincing 3D-like experience using 2D techniques

### Challenge 4: Performance & Optimization

**Limitation:** Video backgrounds and complex animations can impact performance, especially on mobile devices.

**Solution:**
- **Video Compression:** Multiple video quality versions (HQ and standard) for different use cases
- **Lazy Loading:** Components and assets load only when needed
- **Deterministic Animations:** Particle effects use index-based calculations to avoid hydration mismatches
- **Result:** Smooth 60fps animations across devices

### Challenge 5: AI-Assisted Planning with Visual Context

**Limitation:** Effective implementation planning required visual context from the reference website, but the planning AI tool (Claude AI Opus) couldn't directly process video screen recordings.

**Solution:**
- **Multi-Tool Workflow:** Created a pipeline to make video content accessible to the planning AI:
  1. **Screen Recordings:** Captured the reference website's behavior and animations
  2. **Gemini Integration:** Used Google's Gemini AI to analyze video files and generate accurate textual descriptions of visual elements, animations, and interactions
  3. **FFmpeg Conversion:** Converted video files into small, optimized GIFs using FFmpeg, making them readable by Claude AI
  4. **Claude Opus Planning:** Leveraged Claude AI's Opus model (known for its planning capabilities) with the converted GIFs and Gemini descriptions to create detailed implementation plans
- **Result:** Comprehensive planning documentation that captured both visual details and technical requirements, enabling structured implementation

### Challenge 6: Image Loading Performance

**Limitation:** On initial page load, images (particularly the garden background and door visuals) may load slowly, creating visual gaps or layout shifts before assets are fully loaded.

**Current Solution:**
- **Browser Caching:** Once images are loaded, browser caching ensures subsequent visits load instantly without visual gaps
- **Next.js Image Optimization:** Using Next.js `Image` component with `priority` flag for above-the-fold content

**Future Optimization (with more time):**
- **WebP Format:** Convert all images to WebP format for significantly smaller file sizes while maintaining quality
- **Responsive Image Sizes:** Implement `srcset` with multiple image sizes for different viewport widths
- **Progressive Loading:** Add blur placeholders or skeleton screens during image load
- **CDN Optimization:** Serve optimized images through a CDN with automatic format conversion
- **Result:** Faster initial load times and better perceived performance

### Challenge 7: Mobile Responsiveness

**Limitation:** The garden background image and panoramic effects were designed primarily for desktop viewports. While the site remains functional and responsive on mobile devices, the visual experience could be further optimized for smaller screens.

**Current State:**
- **Responsive Layout:** The site adapts to mobile viewports with functional layouts
- **Touch Interactions:** Scroll and touch gestures work correctly on mobile devices
- **Visual Adaptation:** Some visual elements scale appropriately, but background images maintain desktop aspect ratios

**Future Enhancement (with more time):**
- **Mobile-Optimized Backgrounds:** Create separate, cropped versions of the garden background optimized for mobile aspect ratios
- **Responsive Image Sourcing:** Use `srcset` and `sizes` attributes to serve different images based on viewport size
- **Mobile-Specific Parallax:** Adjust parallax strength and effects for touch devices
- **Performance Tuning:** Reduce particle count and animation complexity on mobile for better performance
- **Result:** A more tailored mobile experience that maintains the cinematic feel while being optimized for smaller screens

### Challenge 8: Feature Completeness

**Limitation:** Due to time constraints of a test task, some visual elements that would enhance the immersive experience were not fully implemented.

**Current State:**
- **Quote Cards:** The `QuoteCard` component exists and is partially implemented in `Panorama.tsx`, but is currently commented out
- **Origin Stories:** The `OriginStories` component is built but not integrated into the main navigation flow
- **Visual Polish:** Core features are polished, but additional decorative elements could enhance the atmosphere

**Future Enhancement (with more time):**
- **Quote Cards Integration:** Uncomment and fully integrate the quote cards positioned around the central hall panorama
- **Additional Visual Elements:** Add more atmospheric elements like floating particles, light rays, and decorative overlays
- **Section Completion:** Integrate the Origin Stories section into the main flow
- **Enhanced Interactions:** Add hover effects, click interactions, and micro-animations to existing elements
- **Result:** A more complete experience that captures additional nuances of the original site's atmosphere

## AI Tool Usage

As part of this test task, several AI tools were strategically used to overcome limitations:

### Planning & Strategy
- **Claude AI (Opus Model):** Used for implementation planning and architectural decisions. The model's planning capabilities helped structure the approach to replicating the reference site without 3D tools.
- **Visual Context Pipeline:** Since Claude couldn't read video files directly:
  - **Gemini AI:** Analyzed screen recordings to extract accurate descriptions of visual elements, animations, and user interactions
  - **FFmpeg:** Converted video recordings into GIF format that Claude could process, enabling visual context for planning

### Asset Generation
- **Gemini Nano Banana:** Used to generate background images from screenshots of the reference website
- **Runway AI Video Generator:** Created video transition effects based on screen recordings of the original site

### Development Assistance
- **Execution Tasks:** For implementation and coding tasks:
  - **Claude Sonnet 4.5:** Used for code implementation, debugging, and technical problem-solving during development
  - **GPT 4.1:** Assisted with code generation, refactoring, and solving specific technical challenges
- AI tools were used primarily for:
  - Planning and architectural decisions
  - Code implementation and execution tasks
  - Asset generation when original assets weren't accessible
  - Extracting visual context from reference materials
  - All production code was developed with AI assistance, but follows original implementation approach

## Key Features Implemented

### Landing Page
- Hero section with door visual and parallax effects
- Extracted SVG title with glow effects matching the original
- "ENTER" button with hover animations
- Decorative elements (glowing halos, grid overlays, light rays)

### Video Transition
- Fullscreen video transition between sections
- Completion callback system for seamless flow
- Multiple transition variants (experimented with different approaches)

### Central Hall
- Panoramic garden background with parallax
- Scroll-driven horizontal panning (vertical scroll controls horizontal camera movement)
- Mouse-follow parallax effect
- Floating particle effects
- Section pinning during scroll

### Component Architecture
- Modular, reusable components
- TypeScript for type safety
- Custom hooks for shared logic
- GSAP configuration centralized in `lib/gsap.ts`

## Development Philosophy

This project demonstrates several key development principles:

1. **Working Within Constraints:** Rather than being limited by the absence of 3D tools, creative 2D solutions were developed that achieve similar visual results.

2. **Resourcefulness:** When direct access to assets wasn't available, modern AI tools and browser inspection techniques were used to recreate necessary elements.

3. **Quality Over Quantity:** Focus on perfecting core features rather than implementing every section, ensuring each element is polished and functional.

4. **Problem-Solving Mindset:** Each limitation became an opportunity to find innovative solutions, whether through AI-assisted asset generation or creative CSS techniques.

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Main entry with section state management
│   └── layout.tsx         # Root layout
├── components/
│   ├── Landing/           # Landing page components
│   ├── CentralHall/       # Central hall panoramic section
│   ├── OriginStories/     # Creator cards (component exists, not integrated)
│   ├── transitions/       # Video transition components
│   ├── effects/           # Parallax and visual effects
│   └── ui/                # Reusable UI components
├── hooks/                 # Custom React hooks
└── lib/                   # GSAP and utility configurations
```

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## Notes

- The `docs/` folder contains planning documents, reference materials, and implementation guides (excluded from git)
- Some components like `OriginStories` exist but are not yet integrated into the main flow
- Quote cards in `Panorama.tsx` are currently commented out, ready for future integration

## Reflection

This test task provided valuable experience in:
- Replicating complex visual designs without access to original assets
- Using AI tools as part of the development workflow
- Creating immersive experiences with 2D techniques
- Balancing feature completeness with time constraints
- Working with performance trade-offs and optimization opportunities

### Known Limitations & Future Improvements

While the current implementation successfully captures the core experience, there are several areas that would benefit from additional development time:

1. **Performance Optimization:** Image loading could be improved with WebP formats and responsive image sizing
2. **Mobile Experience:** Background images and visual effects could be further optimized for mobile viewports
3. **Feature Completeness:** Additional visual elements like quote cards and enhanced interactions would strengthen the immersive atmosphere
4. **Progressive Enhancement:** Better loading states and skeleton screens would improve perceived performance

The implementation successfully captures the essence of the original site's cinematic atmosphere while demonstrating adaptability and problem-solving skills in the face of technical limitations. The identified areas for improvement show awareness of production-ready considerations and a commitment to delivering polished user experiences.

