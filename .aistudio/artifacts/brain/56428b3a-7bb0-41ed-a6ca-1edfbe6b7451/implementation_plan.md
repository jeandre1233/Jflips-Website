# iPhone Video Showcase in Confidence & Values Section

Integrate a clean, ultra-minimal modern smartphone mockup with an auto-playing, looping background video (`/phone.mp4`) into the *"Confidence, built on the mat"* section. Position the phone on the left, shifting the section heading, narrative text, and core values to the right for an energetic, editorial composition without marketing filler or promotional banners.

## User Review & Critical Decisions

> [!IMPORTANT]
> The implementation strictly adheres to the decisions confirmed during our interactive clarification:
> - **Section Placement**: The *"Confidence, built on the mat"* section (`Mission.tsx`).
> - **Layout Orientation**: Phone video placed in the **left column**; heading, descriptive copy, and value cards shifted to the **right column**.
> - **Phone Styling**: Ultra-minimal borderless smartphone frame with subtle glass sheen and modern Dynamic Island cutout.
> - **Video Asset**: Loads directly from `/phone.mp4` in the public directory (`autoPlay`, `muted`, `loop`, `playsInline`).
> - **Zero Text Adornments**: No promotional badges, "watch this", or overlay cards attached to the device; purely visual proof of real athletes in action.

---

## 1. Overview & Core Concept

### What It Does
Replaces the static training photo in the mission section with a responsive, modern smartphone mockup displaying real stunting, tumbling, and coaching footage. As visitors scroll down the page, the video plays automatically and silently in the background, giving parents, athletes, and school directors an immediate, genuine glimpse of JFLIPS athletes, coaches, and gym culture.

### Target Audience & Persona
- **Parents & Athletes**: See real faces, authentic gym energy, and safe progressions before signing up.
- **School Sports Heads**: Quickly assess professionalism, athlete form, and the high-energy athletic standard of the coaching team.

### Key Value
Delivers authentic proof of capability without intrusive marketing copy or video player chrome, maintaining the site's grounded, professional coaching identity.

---

## 2. User Experience & Visual Design

### Key User Flows
1. **Natural Scroll Reveal**: Visitor scrolls past the Hero into the *"Confidence, built on the mat"* section.
2. **Smooth Silent Playback**: The modern smartphone frame appears on the left; the video within the screen viewport begins playing silently and smoothly on loop without user interaction needed.
3. **Harmonious Reading Experience**: The visitor's eye is drawn naturally from the dynamic video on the left across to the bold headline, narrative prose, and the 4 foundational value pillars on the right.
4. **Mobile Responsiveness**: On desktop, a side-by-side split ($5/7$ or $5.5/6.5$ column layout) anchors the phone; on mobile screens, the phone centers gracefully above the copy with balanced margins.

### Visual Identity & Phone Mockup Specifications
- **Frame Profile**: Ultra-slim titanium bezel (`border-[2.5px] border-zinc-800/80` with an outer dark hairline rim and deep ambient shadow `shadow-2xl shadow-black/25`).
- **Screen Geometry**: Precise corner radius (`rounded-[38px] md:rounded-[44px]`) matching modern bezel-less flagship flagships.
- **Dynamic Island**: Sleek, proportional pill cutout centered at the top (`w-24 h-5 bg-black rounded-full`) without intruding on athlete action.
- **Glass Specular Sheen**: Subtle, angled gradient reflection across the glass surface (`bg-gradient-to-tr from-white/10 via-transparent to-white/5 pointer-events-none`) for authentic depth.
- **Aspect Ratio**: Standard modern smartphone display ratio ($9:19.5$ / $9:19$), ensuring vertical athletic clips fill the screen edge-to-edge with `object-cover`.
- **Zero-Clutter Policy**: No play buttons, progress bars, volume indicators, or promotional callouts. Pure editorial video frame.

---

## 3. Key Product Decisions & Trade-Offs

### 1. Section Architecture: Left Device vs. Right Narrative
- **Chosen Approach**: Place the phone frame in `lg:col-span-5` on the left, and combine the headline, story prose, and values grid into `lg:col-span-7` on the right.
- **Why**: Follows natural western reading patterns (visual anchor first, followed by message and details). Balances vertical device height with the text block height.
- **Alternative Considered**: Full-width standalone video section. Rejected because the user specifically requested replacing the photo in the confidence section and shifting text/cards to the right.

### 2. Video Loading & Graceful Resilience
- **Chosen Approach**: Reference `/phone.mp4` with `preload="metadata"`, `autoPlay`, `muted`, `loop`, and `playsInline`. Include a smooth, styled dark backdrop with subtle poster image fallback in case `/phone.mp4` is not yet placed in `/public`.
- **Why**: Prevents blank boxes or browser layout shift before the user places `phone.mp4` into the project root.
- **Alternative Considered**: External YouTube/Vimeo embed iframe. Rejected because iframes introduce third-party watermarks, cookies, controls, and branding that conflict with the clean, unadorned requirement.

---

## 4. Technical Architecture & System Flow

```
┌────────────────────────────────────────────────────────────────────────┐
│                        Mission & Values Section                        │
│                                                                        │
│   ┌───────────────────────────┐      ┌──────────────────────────────┐  │
│   │   Left Column (lg:col-5)  │      │   Right Column (lg:col-7)    │  │
│   │                           │      │                              │  │
│   │  ┌─────────────────────┐  │      │  "Confidence, built on mat"  │  │
│   │  │ Modern Phone Bezel  │  │      │  • Narrative paragraph 1     │  │
│   │  │ ┌─────────────────┐ │  │      │  • Narrative paragraph 2     │  │
│   │  │ │ [Dynamic Island]│ │  │      │                              │  │
│   │  │ │                 │ │  │      │  ┌────────────────────────┐  │  │
│   │  │ │   phone.mp4     │ │  │      │  │ Core Values 2x2 Grid   │  │  │
│   │  │ │  (loop/muted)   │ │  │      │  │ • Real confidence      │  │  │
│   │  │ │                 │ │  │      │  │ • Safety first         │  │  │
│   │  │ └─────────────────┘ │  │      │  │ • Trust & teamwork     │  │  │
│   │  │ [Glass Specular]    │  │      │  │ • Discipline & fitness │  │  │
│   │  └─────────────────────┘  │      │  └────────────────────────┘  │  │
│   └───────────────────────────┘      └──────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────┘
```

### Component Implementation Mapping
- **`PhoneFrame.tsx` (New Dedicated Component)**:
  - Encapsulates device geometry, titanium border, dynamic island, and glass highlight.
  - Hosts the `<video>` element with all background autoplay attributes (`autoPlay`, `muted`, `loop`, `playsInline`).
  - Accepts `src` (defaulting to `/phone.mp4`) and optional `poster`.
- **`Mission.tsx` (Updated)**:
  - Updates grid structure to 12 columns: `lg:col-span-5` (left) for `PhoneFrame`, `lg:col-span-7` (right) for heading, narrative, and the 4 value cards.
  - Maintains existing brand tokens (`text-ink`, `bg-white`, `border-zinc-200`).
