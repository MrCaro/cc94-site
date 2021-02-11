import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import aboutData from '../data/about.json'

const AboutPage = () => {
    return (
        <Layout>
            <main>
                <h1>about</h1>  
                <div 
                    className="flex flex-col flex-wrap items-center md:mx-12"
                >
                    <div className="md:flex-1">
                        {aboutData.map((about, i) => (
                            <section value={i} key={i}>
                                <h2 className="m-0">
                                    {about.title}
                                </h2>
                                <p className="text-sm mt-2">
                                    {about.content}
                                </p>
                                <hr className="my-4"/>
                            </section>
                        ))}
                        <Link to="/contact">
                            <p 
                                className="neumorphism-square cta-neumorphism relative uppercase"
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