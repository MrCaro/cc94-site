import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import iconFingerPrint from '../images/icon-finger-print.png'
import iconInstagram from '../images/icon-instagram.png'

const AboutPage = () => {
    return (
        <Layout>
            <main>
                <h1>about</h1>  
                <div className="flex flex-wrap items-center md:mx-12">
                    <div className="md:flex-1">
                        <p>
                            My name is Carlos and I am a Front-End developer from Orlando with a interest in UI Design and Game Development.
                        </p>
                        <Link to="/contact">
                            <p className="neumorphism-square cta-neumorphism relative">
                                contact me
                            </p>
                        </Link>
                    </div>
                    <div className="md:flex-1 md:text-right md:my-0 my-32 mx-auto">
                        <img 
                            src={iconFingerPrint} 
                            className="neumorphism-square md:ml-auto mb-8 p-10"
                            style={{borderRadius: '70px'}}
                            alt=""
                        />
                        <div className="flex items-center md:justify-end justify-center">
                            <p className="mr-8">find me on</p>
                            <a
                                href=""
                                tagert="_blank"
                                rel="noopener"
                            >
                                <img 
                                    src={iconInstagram} 
                                    alt="go to my instagram account"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default AboutPage