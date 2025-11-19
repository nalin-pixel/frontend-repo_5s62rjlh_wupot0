import Header from './components/Header'
import Hero from './components/Hero'
import SubHero from './components/SubHero'
import Features from './components/Features'
import AdvancedStrip from './components/AdvancedStrip'
import PipelineSteps from './components/PipelineSteps'
import Trust from './components/Trust'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[hsl(222,47%,2%)] text-[hsl(210,15%,95%)]">
      <Header />
      <main>
        <Hero />
        <SubHero />
        <Trust />
        <Features />
        <AdvancedStrip />
        <PipelineSteps />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  )
}

export default App
