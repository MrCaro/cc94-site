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
                            html / tailwind css / Gatsby js / php / c++ / git
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
                        <p className="text-sm mt-2 font-bold uppercase">
                            321 the agency / front end developer
                        </p>
                        <p className="text-sm mt-2">
                            orlando, fl /&nbsp;
                            <date>
                                nov 2019 - present
                            </date>
                        </p>
                        <br/>
                        <ul className="text-sm">
                            <li>
                                - Introduced MJML email framework for dev team as our new dev stack.
                            </li>
                            <li>
                                - Main dev for Health Care client creating full websites ecosystems, landing pages, emails, setting up email journeys/triggers.
                            </li>
                            <li>
                                - Creating/updating client sites from Wordpress / Twig.
                            </li>
                            <li>

                            </li>
                        </ul>
                        <br/>
                        <p className="text-sm mt-2 font-bold uppercase">
                            quick weight loss center / front end developer
                        </p>
                        <p className="text-sm mt-2">
                            pompano beach, fl /&nbsp;
                            <date>
                                march 2019 - october 2019
                            </date>
                        </p>
                        <br/>
                        <ul className="text-sm">
                            <li>
                                - Updated site to meet better UI/UX for the audience. After analyzing the hotjar heatmaps I was able to point out possible weak points and
                            opportunities for improvemenet. 
                            </li>
                            <li>
                                - Able to solve an API Google maps integration on zappier that was causing the company losts in revenue.
                            </li>
                            <li>
                                - Created UI mockups for new ecommerce site which later I was able to translate in Shopify.
                            </li>
                            <li>
                                - Main developer for marketing funnel landing pages. 
                            </li>
                        </ul>
                        <br/>
                        <p className="text-sm mt-2 font-bold uppercase">
                            agile element / front end developer
                        </p>
                        <p className="text-sm mt-2">
                            fort lauderdale, fl /&nbsp;
                            <date>
                                oct 2018 - feb 2019
                            </date>
                        </p>
                        <br/>
                        <ul className="text-sm">
                            <li>
                                - Created custom wordpress plugins for clients.
                            </li>
                            <li>
                                - Creating and setting email journeys in mailchimp.
                            </li>
                            <li>
                                - Working on laravel projects as a front end developer. For the main translating mockups into actual pages/sites.
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default ResumePage