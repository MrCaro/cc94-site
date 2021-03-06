import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import '../styles/work.scss' 

const WorkPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                            category
                            icon
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <main>
                <h1>work</h1>
                <div 
                    className="work-category-wrapper"
                >
                    {data.allMarkdownRemark.edges.map((edge) => {
                        return (
                            <div className="mx-4 my-6 text-center relative">
                                <div className="neumorphism-circle w-12 h-12 work-category">
                                    <span>
                                        {edge.node.frontmatter.category}
                                    </span>
                                </div>
                                <img 
                                    src={edge.node.frontmatter.icon} 
                                    className="neumorphism-square mx-auto mb-8"
                                    style={{borderRadius: '70px'}}
                                    alt=""
                                />
                                <p className="underline m-auto">
                                    <Link to={`/work/${edge.node.fields.slug}#top`}>
                                        {edge.node.frontmatter.title}
                                    </Link>
                                </p>
                                <p className="m-auto">    
                                    <time dateTime={edge.node.frontmatter.date}>
                                        {edge.node.frontmatter.date}
                                    </time>
                                </p>
                            </div>
                        )
                    })}
                </div>
            </main>
        </Layout>
    )
}

export default WorkPage