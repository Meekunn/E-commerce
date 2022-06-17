import { BiSearchAlt } from 'react-icons/bi'
import { MdShoppingCart } from 'react-icons/md'
import './navbar.scss'

const Navbar = () => {
    return (
        <div className='navbar-fixed'>
            <nav>
                <div className="container nav-wrapper">
                    <a href='#' className="left logo">
                        <span><MdShoppingCart /></span>
                        <span>ShopWithUs</span>
                    </a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a className='nav-links' href="#">Home</a></li>
                        <li><a className='nav-links' href="#">Login</a></li>
                        <li><a className='nav-links' href="#">About Us</a></li>
                        <li><a className='nav-links' href="#">Contact Us</a></li>
                    </ul>
                    {/* <div className='search' >
                        <input type='text' placeholder="Search here..." />
                        <BiSearchAlt />
                    </div> */}
                </div>
            </nav>
        </div>
    )
}

export default Navbar