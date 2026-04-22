import './styles/Navbar.css';
import { Link } from "react-router-dom";
function Navbar() {

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <h2>Helmet.info</h2>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>

                    <li className='login-btn'>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>

        </>

    )

}

export default Navbar;