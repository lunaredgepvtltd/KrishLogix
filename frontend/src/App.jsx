
import './App.css'
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
      


   </div>
      
   
  )
}

export default App
