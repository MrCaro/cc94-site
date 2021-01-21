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
                            My name is Carlos and I am a professional Front-End developer with an interest in UI Design and Game Development.
                            Currently living in Orlando, Fl.
                        </p>
                        <br/>
                        <p className="text-xs mb-4">
                            Education 
                            <br/>
                            <span className="md:ml-4">
                                BS Computer Science (Cum Laude) Spring 2018 St. Thomas University, Fl.
                            </span>
                            <br/>
                            <span className="md:ml-4">
                                MS Computer Science starting Fall 2021 at UCF, Fl.
                            </span>
                        </p>
                        <p className="text-xs mb-4">
                            Hobbies
                            <br/>
                            <span className="md:ml-4">
                                soccer, video games, reading psychological thrillers (favorite author John Katzenbach).
                            </span>
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
                            <p className="mr-8 text-xs">
                                find me on
                            </p>
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