
import './App.css'
import ContactUs from './components/ContactUs'
import LandingPage from './components/LandingPage/LandingPage'
import WhyChooseUs from './components/WhyChosseUs/WhyChooseUs'
import Header from './pages/Header/Header'

function App() {
  

  return (
    <div className='h-full w-full'>
      <Header/>
      <LandingPage/>
      <WhyChooseUs/>
      <ContactUs/>
    </div>
  )
}

export default App
