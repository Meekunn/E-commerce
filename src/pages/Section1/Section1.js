import { FaArrowAltCircleDown } from 'react-icons/fa'
import Navbar from '../../components/Navbar/Navbar'
import Section2 from '../Section2/Section2'
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
            <Section2 />
        </div>
    )
}

export default Section1