import './App.css'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Journey from './sections/Journey'
import ThingsBuilding from './sections/ThingsBuilding'
import Currently from './sections/Currently'
import Guestbook from './sections/Guestbook'
import Contact from './sections/Contact'

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Journey />
        <ThingsBuilding />
        <Currently />
        <Guestbook />
        <Contact />
      </main>
    </>
  )
}

export default App