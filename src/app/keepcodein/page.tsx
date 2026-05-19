import Header from '@/components/KeepcodeIn/Header'
import HeroSec from '@/components/KeepcodeIn/HeroSec'
import MarqueeSection from '@/components/KeepcodeIn/MarqueeSection'
import Services from '@/components/KeepcodeIn/Services'
import Explore from '@/components/KeepcodeIn/Explore'
import AboutUs from '@/components/KeepcodeIn/AboutUs'
import CustomTech from '@/components/KeepcodeIn/CustomTech'
import FAQs from '@/components/KeepcodeIn/FAQs'
import ContactUs from '@/components/KeepcodeIn/ContactUs'
import Footer from '@/components/KeepcodeIn/Footer'

export const metadata = {
  title: 'KeepcodeIn — Customized Technology',
  description: 'Connecting & Linking you to ideal software resources.',
}

export default function KeepcodeInPage() {
  return (
    <main style={{ background: '#050023' }}>
      <Header />
      <HeroSec />
      <MarqueeSection />
      <Services />
      <Explore />
      <AboutUs />
      <CustomTech />
      <FAQs />
      <ContactUs />
      <Footer />
    </main>
  )
}
