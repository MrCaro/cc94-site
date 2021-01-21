import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const HomePage = () => {
  return (
    <Layout>
      <main style={{margin: "initial"}}>
        <div className="flex items-center" style={{height: '100%'}}>
          <h1 className="text-8xl -z-1 lg:block hidden">ca</h1>
          <div className="neumorphism-circle circle-home-left"></div>
          <div className="neumorphism-circle circle-home m-auto"></div>
          <div className="neumorphism-circle circle-home-right"></div>
          <h1 className="text-8xl -z-1 lg:block hidden">ro</h1>
        </div>
      </main>
    </Layout>
  )
}

export default HomePage