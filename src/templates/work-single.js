import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import { data } from 'autoprefixer'

export const query = graphql`
query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
        frontmatter {
            title
            date
            category
        }
        html
    }
}
`

const WorkSingle = (props) => {
    return (
        <Layout>
            <main id="top">
                <h1>
                    {props.data.markdownRemark.frontmatter.title}
                </h1>
                <div className="work-single-wrapper md:mx-12">
                    <div 
                        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
                        className="mb-4"
                    >
                    </div>
                    <div className="mb-12">
                        <p className="text-sm">
                            #{props.data.markdownRemark.frontmatter.category}
                        </p>
                    </div>
                    <div>
                        <Link to="/work">
                            <span></span>
                            <span>back</span>
                        </Link>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default WorkSingle