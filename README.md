# Sequence Ladder Analytics Tile

## Description
The **Sequence Ladder Analytics Tile** is a high-fidelity, standalone React component designed for visualizing complex conversion funnels. It features a "deep zodiac" dark mode aesthetic, glassmorphism panels, and a connected timeline that visually links user actions (Outreach -> Engagement -> Conversion). It includes subtle animations like pulsing active states, glowing rails, and a continuously rotating sync indicator.

## Tech Stack
- **Framework:** React 18+
- **Styling:** Tailwind CSS (with arbitrary values for precise color matching)
- **Icons:** Lucide React
- **Animation:** Framer Motion (for smooth, infinite rotation of the sync icon)

## Usage

1. **Install Dependencies**
   Ensure you have the required packages installed:
   ```bash
   npm install lucide-react framer-motion
   ```

2. **Import and Use**
   Simply import the component and place it within your layout. Note that the component has a fixed intrinsic size of `600px x 600px` to maintain its design integrity. To fit it on smaller screens, use CSS transforms (scale) on a parent wrapper.

   ```tsx
   import EmailLadderTile from './components/EmailLadderTile';

   function Dashboard() {
     return (
       <div className="flex justify-center items-center bg-slate-950 min-h-screen">
         <EmailLadderTile />
       </div>
     );
   }
   ```

## Color Palette

The component relies on a specific "Deep Zodiac" color scheme to achieve its signature dark mode look.

| Variable Name | Hex / RGBA | Usage |
|--------------|------------|-------|
| **Blue Zodiac** | `#0D1846` | Primary background gradient start |
| **Navy Deep** | `#05091d` | Deep background gradient end |
| **Anakiwa** | `#A6D1FF` | Primary accents, text, active glows |
| **Anakiwa Dim** | `rgba(166, 209, 255, 0.2)` | Subtle borders, glass highlights |
| **Surface** | `rgba(13, 24, 70, 0.6)` | Glass panel backgrounds |

## Key Features
- **Self-Contained:** No external CSS files required.
- **Glassmorphism:** Uses backdrop-blur and semi-transparent gradients to create depth.
- **Custom Glow Effects:** Utilizes Tailwind's arbitrary shadow values (`shadow-[...]`) to replicate specific Figma glow effects.
- **Timeline Logic:** Visually connects steps with gradient lines, highlighting the active "flow".