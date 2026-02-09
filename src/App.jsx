import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Amentities from './components/Amentities'
import ExperiencesPage from './components/Experience'
import Services from './components/Service'
import OffersPage from './components/Offer'
import EventsPage from './components/Events'
import WhyChoose from './components/WhyChooseus'
import Cta from './components/Cta'
import Map from './components/Map'
import Nearby from './components/Near'
import Footer from './components/Footer'
import Testimonial from './components/Testimonial'
import GalleryPage from './components/Gallery'
import Stories from './components/Stories'

const App = () => {
  return (
    <div className="bg-[#FAF9F6]">
      <Navbar />

      <main>

        <Hero />
        <About />


        <Services />
        <EventsPage />


        <OffersPage />
        <Amentities />
        <ExperiencesPage />
        <WhyChoose />

        <Stories />
        <GalleryPage />

        <Map />
        <Nearby />
        <Testimonial />
        <Cta />
      </main>

      <Footer />
    </div>
  )
}

export default App