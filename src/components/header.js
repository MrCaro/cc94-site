import React, { useState } from 'react'
import { Link } from 'gatsby'

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <header>
                <Link to="/">
                    <p>cc<span>94</span></p>
                </Link>
            </header>
            <nav 
                className={ open === true ? "open" : "" } 
                onClick={ () => setOpen(!open)}
            >    
                <span></span>
                <span></span>
                <div 
                    className={open === true ? "nav-wrapper" : "nav-wrapper nav-wrapper-hide"}
                >
                    <ul>
                        <li>
                            <Link to="/about">about</Link>
                        </li>
                        <li>
                            <Link to="/work">work</Link>
                        </li>
                        <li>
                            <Link to="/experience">experience</Link>
                        </li>
                        <li>
                            <Link to="/contact">contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header