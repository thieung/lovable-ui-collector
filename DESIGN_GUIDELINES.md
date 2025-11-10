# AI2SQL Clone - Design Guidelines

## Design Philosophy
Clean, modern, and professional UI with a focus on **Gradient Glassmorphism** aesthetic. The design balances technical sophistication with approachability, using gradients, frosted glass effects, and smooth animations.

---

## Color Palette

### Primary Colors
- **Primary Blue**: `217 91% 60%` - Main brand color for CTAs and accents
- **Primary Glow (Cyan)**: `189 94% 43%` - Secondary gradient color for depth
- **Accent (Emerald)**: `160 84% 39%` - Highlighting and success states

### Gradients
- **Main Gradient**: Blue → Cyan → Teal
  - From: `217 91% 60%`
  - Via: `200 98% 54%`
  - To: `189 94% 43%`

### Neutral Colors
- **Background (Light)**: `210 40% 98%` - Soft off-white
- **Background (Dark)**: `215 28% 10%` - Deep blue-gray
- **Foreground**: Automatically adjusts for contrast

### Glass Effects
- **Glass Background**: Semi-transparent with backdrop blur
- **Glass Border**: Primary color at 20-30% opacity

---

## Typography

### Fonts
- **Headings**: Space Grotesk (Modern, geometric, tech-forward)
- **Body**: Inter (Clean, highly legible, professional)

### Scale
- Hero Heading: `text-5xl md:text-7xl`
- Section Heading: `text-3xl md:text-4xl`
- Card Title: `text-xl font-semibold`
- Body: `text-base md:text-lg`
- Small: `text-sm`

---

## Components

### Buttons
- **Default**: Primary blue, shadow-lg, hover scale effect
- **Gradient**: Blue-to-cyan gradient, dramatic shadow, hover scale
- **Glass**: Frosted glass card styling with hover glow
- **Sizes**: sm, default, lg, xl (for hero CTAs)

### Cards
- **Glass Cards**: `.glass-card` utility class
  - Semi-transparent background
  - Backdrop blur (xl)
  - Subtle border with primary color
  - Shadow-xl
- **Standard Cards**: White/dark background with subtle shadow

### Inputs & Forms
- Border matches theme (`border-input`)
- Focus ring in primary color
- Smooth transitions on all interactions

---

## Animations

### Keyframe Animations
- **Float**: Gentle up-down motion (6s infinite)
  ```css
  translateY: 0 → -20px → 0
  ```
- **Glow**: Pulsing shadow effect (2s infinite alternate)
  ```css
  box-shadow intensity increases
  ```

### Transition Effects
- **Buttons**: Scale on hover (1.05), shadow expansion
- **Cards**: Subtle hover lift with shadow increase
- **Links**: Text color transition (200ms)

### Utility Classes
- `.animate-float` - For decorative background elements
- `.animate-glow` - For emphasizing interactive elements
- `.gradient-text` - Gradient text clip effect

---

## Layout Principles

### Spacing
- **Container padding**: 2rem (responsive)
- **Section gaps**: 8-16 units (32-64px)
- **Card padding**: 6 units (24px)
- **Element gaps**: 4-8 units (16-32px)

### Structure
- **Hero**: Full viewport height (min-h-[90vh])
- **Sections**: Generous vertical padding
- **Max widths**: Container max 1400px, content max 2xl-4xl

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1400px)
- Grid: 1 column mobile → 2-3 columns desktop

---

## Visual Effects

### Glassmorphism
- Frosted glass appearance with `backdrop-blur-xl`
- Semi-transparent backgrounds
- Subtle borders with opacity
- Layered depth through shadows

### Gradients
- Use for: Headings, CTAs, backgrounds, decorative elements
- Direction: Usually left-to-right or diagonal
- Colors: Always from brand palette

### Shadows
- **Subtle**: Default cards and inputs
- **Medium**: Elevated cards and dropdowns  
- **Strong (xl-2xl)**: CTAs and interactive elements
- **Glow**: Primary color at low opacity for emphasis

---

## Best Practices

### DO:
✅ Use semantic color tokens from `index.css`  
✅ Apply `.glass-card` for frosted containers  
✅ Use `.gradient-text` for highlighted text  
✅ Add hover effects (scale, shadow) to interactive elements  
✅ Maintain consistent spacing using Tailwind scale  
✅ Use `font-heading` for titles, `font-body` for content  

### DON'T:
❌ Use hardcoded color values (e.g., `text-blue-500`)  
❌ Mix design styles (keep glassmorphism consistent)  
❌ Overuse animations (subtle is better)  
❌ Ignore dark mode styling  
❌ Create overly complex gradients  

---

## Component Patterns

### Hero Section
- Full viewport height
- Gradient background with image overlay
- Floating decorative gradient orbs
- Glass badge for social proof
- Large gradient heading
- Dual CTA buttons (primary gradient + glass)
- Stats cards with glass effect

### Feature Cards
- Grid layout (responsive)
- Icon with gradient background
- Bold title with gradient text
- Muted description
- Hover effect with shadow lift

### Input Areas
- Large textarea for user input
- Glass card container
- Clear labels
- Action buttons with gradient variant
- Visual feedback on interaction

---

## Dark Mode Considerations

- All colors automatically adjust via CSS variables
- Glass effects use darker base with higher opacity borders
- Shadows remain visible with adjusted colors
- Text contrast maintained automatically
- Test all components in both modes

---

## Implementation Notes

### Tailwind Config
- Custom colors defined in `tailwind.config.ts`
- Extends default Tailwind with brand tokens
- All colors use HSL format for consistency

### CSS Variables
- Defined in `src/index.css`
- Separate light/dark mode values
- Use `hsl(var(--color))` format in Tailwind

### Component Structure
- Keep components focused and single-purpose
- Use composition over large monolithic components
- Extract repeated patterns into utilities