import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({}) => {
    
    return (
        <nav className="nav">
            <ul className="menu">
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/work"><li>Work</li></Link>
                <Link to="/media"><li>Media</li></Link>
            </ul>
        </nav>
    )
}



export default Header;