
import './App.css'
import Services from './components/Services/Services';
import Aboutus from './components/Aboutus/Aboutus'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles
import LandingPage from './components/LandingPage/LandingPage'
import WhyChooseUs from './components/WhyChosseUs/WhyChooseUs'
import Header from './pages/Header/Header'
import OurTeam from './components/OurTeam/OurTeam'
import ContactUs from './components/ContactUs/ContactUs'
import Footer from './pages/Footer/Footer.jsx'
import CareerPage from './components/CareerPage.jsx';

function App() {
  AOS.init({
    duration: 1200, // Animation duration (1.2 seconds)
    offset: 200,    // Start animation 200px before the element enters the viewport
    delay: 100,     // Delay in starting the animation
  });

  return (
   <div className="h-full w-full"> 
   
    <Header/>
    <LandingPage/>
    
    <Aboutus/>
       <OurTeam />
       <Services/> 
       <WhyChooseUs/>    
      <ContactUs/>
      <CareerPage/>
      <Footer/>
      </div>
  )
}

export default App
