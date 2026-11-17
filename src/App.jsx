import Header from './components/Header'
import Hero from './components/Hero'
import { Metrics, Problem, Services, Process, Results, About, Faq } from './components/Sections'
import Contact from './components/Contact'
import Weave from './components/Weave'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  return (
    <>
      <Header />
      <main id="inicio">
        <Hero />
        <Metrics />
        <Problem />
        <Weave />
        <Services />
        <Process />
        <Results />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
