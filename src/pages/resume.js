import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import iconFingerPrint from '../images/icon-finger-print.png'
import iconInstagram from '../images/icon-instagram.png'

const ResumePage = () => {
    return (
        <Layout>
            <main>
                <h1>resume / carlos caro</h1>  
                <div 
                    className="flex flex-col flex-wrap md:mx-12"
                >
                    <div className="md:flex-1">
                        <h2 className="m-0">
                            skills
                        </h2>
                        <p className="text-sm mt-2 uppercase">
                            html / tailwind css / Gatsby js / php / git
                        </p>
                        <p className="text-sm mt-2 uppercase">
                            adobe xd / photoshop / blender
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
                            experience
                        </h2>
                        <p className="text-sm mt-2 uppercase">
                            321 the agency / front end developer
                        </p>
                        <p className="text-sm mt-2">
                            orlando, fl /&nbsp;
                            <date>
                                nov 2019 - present
                            </date>
                        </p>
                        <br/>
                        <p className="text-sm mt-2 uppercase">
                            quick weight loss center / front end developer
                        </p>
                        <p className="text-sm mt-2">
                            pompano beach, fl /&nbsp;
                            <date>
                                march 2019 - october 2019
                            </date>
                        </p>
                        <br/>
                        <p className="text-sm mt-2 uppercase">
                            agile element / front end developer
                        </p>
                        <p className="text-sm mt-2">
                            fort lauderdale, fl /&nbsp;
                            <date>
                                oct 2018 - feb 2019
                            </date>
                        </p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default ResumePage