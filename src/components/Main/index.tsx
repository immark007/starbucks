import SectionWithImage from '../Sections/index'
import Banner from '../../assets/img/banner.jpg'
import Jungle from '../../assets/img/jungle.jpg'
import Coffee from '../../assets/img/coffe.png'
import Coockies from '../../assets/img/coockies.png'
import UberEats from '../../assets/img/uber-eats.png'
import Rewards from '../Rewards'

export default function Main(){
    return(
        <>
        <SectionWithImage
            title="Cups of appreciation"
            text="This Administrative Professionals’ Day,express your thanks with a well-deserved Starbucks Card."
            buttonLabel="Send an eGift"
            imageUrl={Banner}
            reverseOrder={false} // ou true, dependendo da ordem desejada
            backgroundColor="#A0C292"
        />
        <Rewards />
        <SectionWithImage
            title="Find your sunny side"
            text="The Paradise Drink Starbucks Refreshers® beverage shines with pineapple and passionfruit flavors."
            buttonLabel="Order now"
            imageUrl={Jungle}
            reverseOrder={false}
            backgroundColor="#F6BFD9"
        />
        <SectionWithImage
            title="Nitro your way"
            text="Try the new Cinnamon Caramel Cream NitroCold Brew or go for the Vanilla Sweet CreamNitro Cold Brew."
            buttonLabel="Order now"
            imageUrl={Coffee}
            reverseOrder={true} 
            backgroundColor="#FFC519"
        />
        <SectionWithImage
            title="Just-right choice"
            text="Our Egg White & Roasted Red Pepper Egg Bites are tasty, protein rich and 170 calories."
            buttonLabel="Order now"
            imageUrl={Coockies}
            reverseOrder={false} 
            backgroundColor="#fff"
        />
        <SectionWithImage
            title="Just-right choice"
            text="Our Egg White & Roasted Red Pepper Egg Bites are tasty, protein rich and 170 calories."
            buttonLabel="Order now"
            imageUrl={UberEats}
            reverseOrder={true} 
            backgroundColor="#1E3932"
            titleColor= "#fff"
            textColor = "#fff"
        />
        </>
    )
}