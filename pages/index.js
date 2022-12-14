import Faq from '../components/Faq'
import Footer from '../components/Footer'
import FreeQuote from '../components/FreeQuote'
import HeroSectionFive from '../components/HeroSectionFive'
import HeroSectionFour from '../components/HeroSectionFour'
import HeroSectionOne from '../components/HeroSectionOne'
import HeroSectionSeven from '../components/HeroSectionSeven'
import HeroSectionThree from '../components/HeroSectionThree'
import HeroSectionTwo from '../components/HeroSectionTwo'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSectionOne />
      <HeroSectionTwo />
      <HeroSectionThree />
      <HeroSectionFour />
      <HeroSectionFive />
      <HeroSectionSeven />
      <FreeQuote />
      <Faq />
      <Footer />
    </div>
  )
}
