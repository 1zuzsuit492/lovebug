import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav className='Navbar'>
                <ul>
                    <div className="logo">
                        <Link to='/'>LoveBug Bakery Logo</Link>
                    </div>
                </ul>
                <div className="links">
                    <ul>
                        <Link to="/about">About Us</Link>
                    </ul>

                    <ul>
                        <Link to="/goodies">Goodies</Link>
                    </ul>

                    <ul>
                        <Link to="/contact">Contact Us</Link>
                    </ul>
                </div>

                <div className="menu-button">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>

                    test
                </div>

            </nav>
        </>
    )
}


        // <div className="navbar container">
        // <a href="#" className="logo">LoveBug Bakery</a>
        //     <div className="links">
        //         <a href="#">About Us</a>
        //         <a href="#">Goodies</a>
        //         <a href="#">Contact Us</a>
        //     </div>
        // </div>