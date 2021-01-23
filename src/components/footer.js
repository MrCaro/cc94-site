import React from 'react'
import { Link } from 'gatsby'

import iconGit from '../images/icon-github.png'
import iconLinkedIn from '../images/icon-linkedin.png'
import iconMail from '../images/icon-mail.png'

const Footer = () => {
    return (
        <footer className="md:mx-0 mx-auto">
            <a 
                className="neumorphism-circle"
                href="https://github.com/MrCaro" 
                target="_blank"
                rel="noopener"
            >
                <img src={iconGit} />
            </a>
            <a  
                className="neumorphism-circle"
                href="https://www.linkedin.com/in/carlos-caro94/" 
                target="_blank"
                rel="noopener">
                <img src={iconLinkedIn} />
            </a>
            <Link
                className="neumorphism-circle"
                to="/contact" 
                target="_blank"
                rel="noopener"
            >
                <img src={iconMail} />
            </Link>
        </footer>
    )
}

export default Footer