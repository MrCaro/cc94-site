import React from 'react'

import Layout from '../components/layout'
import experienceData from '../data/experience.json'

const ExperiencePage = () => {
    return (
        <Layout>
            <main>
                <h1>
                    experience
                </h1>
                <div className="md:mx-12">
                {experienceData.map((experience, i) => (
                    <section value={i} key={i}>
                        <h2>{experience.company_tile}</h2>
                        <h3 className="text-sm">
                            {experience.location} <br/>
                            <date>{experience.dates}</date>
                        </h3>
                        <hr/>
                    </section>
                ))}
                </div>
            </main>
        </Layout>
    )
}

export default ExperiencePage