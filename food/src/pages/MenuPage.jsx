import Header1 from "../components/Header1"
import Starters from "../components/Starters"
import Mains from "../components/Main"
import PastriesDrinks from "../components/PastriesDrinks"
import ReservationForm from "../components/ReservationForm"
import Footer from "../components/Footer"
import HeroMenu from "../components/HeroMenu"



const MenuPage = () => {
  return (
    <>
    <Header1/>
    <HeroMenu />
    <Starters/>
    <Mains/>
    <PastriesDrinks/>
    <ReservationForm/>
    <Footer/>
    
    
    
    </>
  )
}

export default MenuPage