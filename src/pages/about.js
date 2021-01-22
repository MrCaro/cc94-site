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
                <div 
                    className="flex flex-col flex-wrap items-center md:mx-12"
                >
                    <div 
                        className="w-full md:flex-1 md:text-right md:my-0 my-12"
                    >
                        <img 
                            src={iconFingerPrint} 
                            className="neumorphism-square md:mr-0 mx-auto mb-8 p-10"
                            style={{borderRadius: '70px'}}
                            alt=""
                        />
                        <div 
                            className="flex items-center md:justify-end justify-center"
                        >
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
                    <div className="md:flex-1">
                        <h2 className="m-0">
                            name
                        </h2>
                        <p className="text-sm mt-2">
                            Carlos "Charlie" Caro
                        </p>
                        <hr className="my-4"/>
                        <h2 className="m-0">
                            bio
                        </h2>
                        <p className="text-sm mt-2">
                            I am a professional Front-End Developer with an interest in UI Design and Game Development.
                            I am Currently living in Orlando, Fl. where I work for 321 The Agency as a full time dev. 
                            While not coding or catching up with new web dev trends you can find me playing video games or reading a
                            good book about psychological thrillers. 
                        </p>
                        <hr className="my-4"/>
                        <h2 className="m-0">
                            education
                        </h2>
                        <p className="text-sm mt-2">
                            MS Computer Science starting Fall 2021 - UCF, Fl.
                        </p>
                        <p className="text-sm mt-2">
                            BS Computer Science (Cum Laude) Spring 2018 - St. Thomas University, Fl.
                        </p>
                        <hr className="my-4"/>
                        <h2 className="m-0">
                            hobbies / fandom
                        </h2>
                        <p className="text-sm mt-2">
                            Soccer, video games, basketball, work out, theme parks, star wars, anime, dc comics, dragon ball z.
                        </p>
                        <Link to="/contact">
                            <p 
                                className="neumorphism-square cta-neumorphism relative"
                            >
                                contact me
                            </p>
                        </Link>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default AboutPage