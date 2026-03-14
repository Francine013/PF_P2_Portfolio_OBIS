import Header from './components/Header'
import AboutMe from './components/AboutMe'
import EducationBackground from './components/EducationBackgound'
import Certifications from './components/Cerifications'
import './App.css'

function App() {
  return (
    <div className="portfolio-container">
      <Header />
      
      <main className="portfolio-main">
        <AboutMe />
        <EducationBackground />
        <Certifications />
      </main>
      
      <footer className="portfolio-footer">
        <div className="footer-content">
          <div className="footer-brand">FMRO.</div>
          <p>&copy; {new Date().getFullYear()} Francine Mei R. Obis. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
