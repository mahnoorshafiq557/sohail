import Hero from '../components/hero'
import Section from '../components/section'
import About from '../components/about'
import WhyChooseMe from '../components/WhyChoose'
import SiteInventory from '../components/SitesInventory'
import ClientReviews from '../components/ClientReviews'
import Contact from '../components/ContactCard'

const Home = () => {
  return (
    <div>
      <Hero />
      <Section/>
      <About/>
      <WhyChooseMe/>
      <SiteInventory/>
      <ClientReviews/>
      <Contact/>
    </div>
  )
}

export default Home