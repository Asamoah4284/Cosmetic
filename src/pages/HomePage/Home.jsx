import About from "./Home/About"
import Contact from "./Home/Contact"
import Deal from "./Home/Deal"
import Footer from "./Home/Footer"
import Gallery from "./Home/Gallery"
import Head from "./Home/Header"
import Hero from "./Home/Hero"
import Service from "./Home/service"
import Testimonials from "./Home/Testimonials"



function Home() {
   
  return <div>
    <Head/>
    <Hero/>
    <About/>
    <Service/>
    <Gallery/>
    <Contact/>
    <Deal/>
    <Testimonials/>
    <Footer/>
  </div>
  }

  export default Home
  
