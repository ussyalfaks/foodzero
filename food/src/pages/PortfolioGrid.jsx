 import Footer from "../components/Footer";
 import Text from "../components/porfolioComps/Text";
import PortfolioHero from "../components/porfolioComps/PortfolioHero";
import Header from "../components/porfolioComps/Header";
import GridLayout from "../components/porfolioComps/GridLayout";
import Grid1 from '/image/grid-1.png';
import Grid2 from '/image/grid-2.png';
import Grid3 from '/image/grid-3.png';
import Grid4 from '/image/grid-4.png';
import Grid5 from '/image/grid-5.png';
import Grid6 from '/image/grid-6.png';
 export default function PortfolioGrid () {
    return (
        <>
        <Header />
        <PortfolioHero />
        <Text />
        <GridLayout img1={Grid1} img2={Grid2} col6='col-span-8' col3='col-span-4' Htext={["Premium Deep Sea Snow", <br />, "White Cod Fillet"]}
        Ptext1='Launch'
        Ptext2='Dinner' secHtext={['Option of natural', <br />, 'wine available']} secPtext1='Drink' secPtext2='Fruits'
        />
        <GridLayout img1={Grid3} img2={Grid4} col6='col-span-4' col3='col-span-8' Htext={["Best Pumpkin for", <br />, "pumpkin soup"]}
        Ptext1='Launch'
        Ptext2='Starters' secHtext={['Strip steak with Rosemary', <br />, 'Butter']} secPtext1='Dinner' secPtext2='Launch'
        />
        <GridLayout img1={Grid5} img2={Grid6} col6='col-span-6' col3='col-span-6' Htext={["Braised Sliced Abalone,Fish", <br />, "Maw with Premium Seafood"]}
        Ptext1='Cold Dishes'
        Ptext2='Starters' secHtext={['Pan Fried Live Prawn with', <br />, 'Superior Soy Sauce']} secPtext1='Starter' secPtext2='Dinner'
        />
        <Footer />
        </>
    )
}