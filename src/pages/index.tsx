import GreenChoicesSection from '../components/greenChoicesSection'
import HeroSection from '../components/hero'
import ImpactTrackingSection from '../components/ImpactTrackingSection'

export default function Home() {
  return (
    <div className='bg-white h-screen'>
      <HeroSection />
      <GreenChoicesSection />
      <ImpactTrackingSection />
    </div>
  )
}
