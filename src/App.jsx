import './App.css'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Skills from '../components/Skills/Skills'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Projects from '../components/Projects/Projects'
import HeaderCTA from '../components/HeaderCTA/HeaderCTA'



function App() {
  return (
    <div className='mainContainer'>
      <Navbar />
      <Hero />
      <HeaderCTA />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
