import Wears from "../../components/Wears/Wears"
import gown1 from "../../assets/images/gown1.jpg"
import gown4 from '../../assets/images/gown4.jpg'
import gown5 from '../../assets/images/gown5.jpg'
import cap1 from '../../assets/images/cap1.jpg'
import cap2 from '../../assets/images/cap2.jpg'
import cap3 from '../../assets/images/cap3.jpg'
import './section2.scss'

const gowns = [
    {
        id: 1,
        img: gown1,
        title: 'Blue Gown',
        price: '$15.00'
    }, {
        id: 4,
        img: gown4,
        title: 'Peach Gown',
        price: '$25.00'
    }, {
        id: 5,
        img: gown5,
        title: 'Short Gown',
        price: '$19.00'
    }
]

const caps = [
    {
        id: 1,
        img: cap1,
        title: 'Face Cap',
        price: '$15.00'
    }, {
        id: 4,
        img: cap2,
        title: 'Headwarmer',
        price: '$25.00'
    }, {
        id: 5,
        img: cap3,
        title: 'Bucket Hat',
        price: '$19.00'
    }
]

const Section2 = () => {
    return (
        <div className="women-wrapper">
            <h2>Women wears</h2>
            <div className="img-flex">
                {gowns.map(gown => {
                    return (
                        <Wears 
                            key={gown.id} 
                            img={gown.img} 
                            title={gown.title} 
                            price={gown.price} 
                            alt={gown.title} 
                        />
                    )
                })}
            </div>
            <h2>Caps and Hats</h2>
            <div className="img-flex">
                {caps.map(cap => {
                    return (
                        <Wears 
                            key={cap.id} 
                            img={cap.img} 
                            title={cap.title} 
                            price={cap.price} 
                            alt={cap.title} 
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Section2