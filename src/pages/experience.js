import React from 'react'

import Layout from '../components/layout'

const ExperiencePage = () => {
    return (
        <Layout>
            <main>
                <h1>
                    experience
                </h1>
                <div className="md:mx-12">
                    <h2>
                        321 the agency / front end developer
                    </h2>
                    <h3 className="text-sm">
                        orlando, fl <br/>
                        <date >
                            nov 2019 - present
                        </date>
                    </h3>
                    <hr/>
                    <h2>
                        quick weight loss center / jr front end developer
                    </h2>
                    <h3 className="text-sm">
                        pompano beach, fl <br/>
                        <date >
                            march 2019 - october 2019
                        </date>
                    </h3>
                    <hr/>
                    <h2>
                        agile element / jr front end developer
                    </h2>
                    <h3 className="text-sm">
                        fort lauderdale, fl <br/>
                        <date >
                             oct 2018 - feb 2019
                        </date>
                    </h3>
                </div>
            </main>
        </Layout>
    )
}

export default ExperiencePage