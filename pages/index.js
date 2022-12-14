import { useEffect, useState } from 'react'
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
import ScrollToTop from '../components/ScrollToTop'

export default function Home() {
  const [showScrollToTopBtn, setshowScrollToTopBtn] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setshowScrollToTopBtn(true)
      } else {
        setshowScrollToTopBtn(false)
      }
    });
  }, []);

  return (
    <div className='relative'>
      {showScrollToTopBtn &&
        <ScrollToTop className={"fixed bottom-3 right-3"} />
      }
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
