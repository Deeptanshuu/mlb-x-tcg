# MLB Trading Cards Platform

A modern, web-based platform for collecting, trading, and battling with digital MLB trading cards. Built with React and Tailwind CSS, featuring real-time gameplay and blockchain-authenticated collectibles.

## 🌟 Features

### Core Features
- **Digital Card Collection**: Collect unique MLB player cards with varying rarities
- **Real-time Battles**: Challenge other players in strategic card battles
- **Live Trading**: Dynamic marketplace for buying, selling, and trading cards
- **Pack Openings**: Premium card pack system with special editions and rare finds
- **Tournament System**: Compete in organized tournaments with rewards
- **Player Rewards**: Earn rewards through gameplay and collection milestones

### Technical Features
- Responsive design optimized for all devices
- Smooth animations using Framer Motion
- Modern UI with gradient effects and micro-interactions
- Real-time updates and interactions
- Blockchain authentication for card ownership

## 🏗 Architecture

### Component Structure

#### Navigation (`/Frontend/src/components/Navigation`)
The navigation system features:
- Responsive navbar with mobile menu
- Seamless transitions and hover effects
- User authentication integration
- Dynamic navigation links
```jsx
// Key components:
- Navigation.jsx: Main navigation container
- NavLink.jsx: Reusable navigation link component
```

#### Hero Section (`/Frontend/src/components/HeroSection`)
Showcases featured cards and main call-to-action:
- Dynamic card display with rarity-based styling
- Animated transitions and hover effects
- Stats display for featured players
```jsx
// Key components:
- HeroSection.jsx: Main hero container
- HeroCard.jsx: Featured card component
- StatBadge.jsx: Player statistics display
```

#### Feature Section (`/Frontend/src/components/FeatureSection`)
Highlights platform features:
- Animated feature cards
- Gradient effects and micro-interactions
- Responsive grid layout
```jsx
// Key components:
- FeatureSection.jsx: Main features container
- FeatureCard.jsx: Individual feature display
```

### Styling System

#### Color Scheme
```css
Primary Colors:
- Red: #EF4444 (red-500)
- Blue: #3B82F6 (blue-500)
- Dark: #0A0A0A (Background)

Accent Colors:
- Gradients: red-500 to blue-500
- Glows: Various opacity levels of primary colors
```

#### Animation System
Using Framer Motion for:
- Page transitions
- Scroll-based animations
- Hover effects
- Loading states

#### Design Patterns
- Consistent spacing using Tailwind's spacing scale
- Responsive breakpoints (sm, md, lg, xl)
- Container-based layouts
- Grid and Flexbox combinations

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Modern web browser

### Installation
1. Clone the repository
```bash
git clone https://github.com/yourusername/mlb-trading-cards.git
```

2. Install dependencies
```bash
cd mlb-trading-cards
npm install
```

3. Start the development server
```bash
npm run dev
```

### Development Commands
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 🎨 Design System

### Typography
```css
Headings:
- Font: System font stack
- Weights: 900 (black), 700 (bold)
- Sizes: text-5xl to text-7xl for main headings

Body:
- Font: System font stack
- Weights: 400 (regular), 500 (medium)
- Sizes: text-base, text-lg, text-xl
```

### Components

#### Buttons
```jsx
Primary Button:
- Red background
- White text
- Hover animation
- Optional shimmer effect

Secondary Button:
- Transparent background
- Gradient text
- Hover state changes
```

#### Cards
```jsx
Feature Cards:
- Dark background
- Gradient borders
- Hover animations
- Icon containers

Player Cards:
- Rarity-based styling
- Stat displays
- Dynamic gradients
- Hover effects
```

## 🔧 Configuration

### Environment Variables
```env
REACT_APP_API_URL=your_api_url
REACT_APP_BLOCKCHAIN_NETWORK=network_name
```

### Build Configuration
```js
// vite.config.js
- Development and production settings
- Asset optimization
- Environment variable handling
```

## 📱 Responsive Design

### Breakpoints
```css
sm: 640px   // Mobile devices
md: 768px   // Tablets
lg: 1024px  // Laptops
xl: 1280px  // Desktops
2xl: 1536px // Large screens
```

### Mobile Considerations
- Touch-friendly interfaces
- Simplified navigation
- Optimized images
- Performance considerations

I'm a gambler.

I gamble.

I gamble.

I gamble.

I gamble.

I gamble.

I gamble.

I gamble.

I gamble.
