import Wears from "../../components/Wears/Wears"
import gown1 from "../../assets/images/gown1.jpg"
import gown4 from '../../assets/images/gown4.jpg'
import gown5 from '../../assets/images/gown5.jpg'
import cap1 from '../../assets/images/cap1.jpg'
import cap2 from '../../assets/images/cap2.jpg'
import cap3 from '../../assets/images/cap3.jpg'
import shirt1 from '../../assets/images/shirt1.jpg'
import shirt2 from '../../assets/images/shirt2.jpg'
import suit from '../../assets/images/suit.jpg'
import heels1 from '../../assets/images/heels1.jpg'
import heels2 from '../../assets/images/heels2.jpg'
import heels3 from '../../assets/images/heels3.jpg'
import sneakers1 from '../../assets/images/sneakers1.jpg'
import sneakers2 from '../../assets/images/sneakers2.jpg'
import sneakers3 from '../../assets/images/sneakers3.jpg'
import './catalog.scss'

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
        price: '$10.00'
    }, {
        id: 4,
        img: cap2,
        title: 'Headwarmer',
        price: '$7.00'
    }, {
        id: 5,
        img: cap3,
        title: 'Bucket Hat',
        price: '$18.00'
    }
]

const shirts = [
    {
        id: 1,
        img: shirt1,
        title: 'Gray-Black Shirt',
        price: '$30.00'
    }, {
        id: 4,
        img: shirt2,
        title: 'White Shirt',
        price: '$25.00'
    }, {
        id: 5,
        img: suit,
        title: 'Suit',
        price: '$40.00'
    }
]

const heels = [
    {
        id: 1,
        img: heels1,
        title: 'Laced Up',
        price: '$26.00'
    }, {
        id: 4,
        img: heels2,
        title: 'Open-toes',
        price: '$18.00'
    }, {
        id: 5,
        img: heels3,
        title: 'Gold',
        price: '$20.00'
    }
]

const sneakers = [
    {
        id: 1,
        img: sneakers1,
        title: 'Nike Shoe',
        price: '$45.00'
    }, {
        id: 4,
        img: sneakers2,
        title: 'Gray-Blue',
        price: '$40.00'
    }, {
        id: 5,
        img: sneakers3,
        title: 'Brown',
        price: '$42.00'
    }
]

const Catalog = () => {
    return (
        <div className="catalog-wrapper">
            <h2>Women's wears</h2>
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
            <h2>Men's wears</h2>
            <div className="img-flex">
                {shirts.map(shirt => {
                    return (
                        <Wears 
                            key={shirt.id} 
                            img={shirt.img} 
                            title={shirt.title} 
                            price={shirt.price} 
                            alt={shirt.title} 
                        />
                    )
                })}
            </div>
            <h2>Heels</h2>
            <div className="img-flex">
                {heels.map(heel => {
                    return (
                        <Wears 
                            key={heel.id} 
                            img={heel.img} 
                            title={heel.title} 
                            price={heel.price} 
                            alt={heel.title} 
                        />
                    )
                })}
            </div>
            <h2>Sneakers</h2>
            <div className="img-flex">
                {sneakers.map(sneaker => {
                    return (
                        <Wears 
                            key={sneaker.id} 
                            img={sneaker.img} 
                            title={sneaker.title} 
                            price={sneaker.price} 
                            alt={sneaker.title} 
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Catalog