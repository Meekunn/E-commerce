import { FaArrowAltCircleDown } from 'react-icons/fa'
import Navbar from '../../components/Navbar/Navbar'
import Catalog from '../Catalog/Catalog'
import './section1.scss'

const Section1 = () => {
    return ( 
        <div className='custom-container'>
            <Navbar />
            <div className='bg-overlay'>
                <div className='arrow'>
                    <FaArrowAltCircleDown />
                    <FaArrowAltCircleDown />
                    <FaArrowAltCircleDown />
                </div>
            </div>
            <Catalog />
        </div>
    )
}

export default Section1