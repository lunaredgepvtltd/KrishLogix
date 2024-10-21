
import './App.css'
import ContactUs from './components/ContactUs'
import LandingPage from './components/LandingPage/LandingPage'
import WhyChooseUs from './components/WhyChosseUs/WhyChooseUs'
import Aboutus from './components/Aboutus/Aboutus'
import Footer from './pages/Footer/Footer'
import Header from './pages/Header/Header'
import OurTeam from './components/OurTeam/OurTeam'
import ContactUs from './components/ContactUs/ContactUs'
import Footer from './pages/Footer/Footer.jsx'

function App() {
  

  return (
   <div className="h-full w-full"> 
   
    <Header/>
       <OurTeam /> 
      <ContactUs /> 

      <Footer />
      


      
   
 
      <Header/>
      <LandingPage/>
      <WhyChooseUs/>
      <ContactUs/>
    
      <Aboutus/>
      <Footer/>
      </div>
  )
}

export default App
