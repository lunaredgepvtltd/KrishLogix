
import './App.css'
import Services from './components/Services/Services';
import Header from './pages/Header/Header'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles

function App() {
  AOS.init({
    duration: 1200, // Animation duration (1.2 seconds)
    offset: 200,    // Start animation 200px before the element enters the viewport
    delay: 100,     // Delay in starting the animation
  });

  return (
    <>
      <Header/>
      <Services/>
    </>
  )
}

export default App
