import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { MdShoppingCart } from 'react-icons/md'
import './footer.scss'

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                {/* Column1 */}
                    <div className="col">
                        <h4>Resources</h4>
                        <ul className="list-unstyled">
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Return Policy</li>
                            <li>Privacy Policy</li>
                            <li>Shipping Policy</li>
                        </ul>
                    </div>
                {/* Column2 */}
                    <div className="col">
                        <h4>Social</h4>
                        <ul className="list-unstyled">
                            <li><FaFacebook /> Facebook</li>
                            <li><FaTwitter /> Twitter</li>
                            <li><FaInstagram /> Instagram</li>
                        </ul>
                    </div>
                {/* Column3 */}
                    <div className="col">
                        <h4>Shops</h4>
                        <ul className="list-unstyled">
                            <li>Men's wears</li>
                            <li>Shoes</li>
                            <li>Women's wear</li>
                            <li>Heels</li>
                            <li>Cap</li>
                        </ul>
                    </div>
                {/* Column3 */}
                    <div className="col">
                        <h4>Newsletter</h4>
                        <p>Join Our Newsletter</p>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="email" className="validate" />
                                <label for="email">Email</label>
                            </div>
                        </div>
                        <button>Subscribe</button>
                    </div>
                </div>
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} <MdShoppingCart />
                        ShopWithUs | All rights reserved |
                        Terms Of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer