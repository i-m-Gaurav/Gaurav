import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'


export default function Home() {
  return (
    <>
      
    <Navbar />
    <Hero />
    <section id="about">
      {/* <About /> */}
      {/* About component contents */}
    </section>{" "}
    <Skills />
    <Services />
    <section id="projects">
      <Projects />

      {/* About component contents */}
    </section>{" "}
    <section id="contact">
      <Contact />

      {/* About component contents */}
    </section>{" "}
    <Footer />
  </>
  )
}
