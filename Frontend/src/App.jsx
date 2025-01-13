import Navigation from './components/Navigation/Navigation'
import HeroSection from './components/HeroSection/HeroSection'
import FeatureSection from './components/FeatureSection/FeatureSection'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeatureSection />
    </div>
  )
}