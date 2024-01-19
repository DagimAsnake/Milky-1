import './App.css'
import Navbar from './components/Navbar'
import Home  from './components/Home'
import Features from './components/Features'
import About from './components/About'
import Newsletter from './components/Newsletter'
import Footer from './shared/Footer'

function App() {
  

  return (
    <> 
      <Navbar/> 
      <Home/>
      <Features/>
      <About/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default App
