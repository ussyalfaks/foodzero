import ExcellentCook from "../components/ExcellentCook"
import Header from "../components/Header"
import RestaurantMenu from "../components/MenuSec"
import Features from "../components/Features"
import Blog from "../components/Blog"
import ReservationForm from "../components/ReservationForm"
import CaloriesEnergyBalance from "../components/Calories"
import TestimonialSlider from "../components/TestimonialSlider"
import Footer from "../components/Footer"
import Hero from "../components/Hero"

const HomePage = () => {
  return (
    <>
        <Header />
        <Hero/>
        <RestaurantMenu/>
        <ExcellentCook/>
        <Features/>
        <Blog/>
        <ReservationForm/>
        <CaloriesEnergyBalance/>
        <TestimonialSlider/>
        <Footer/>
        
     
    
    
    
    </>
  )
}

export default HomePage