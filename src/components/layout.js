import React from 'react'

import Header from './header'
import Footer from './footer'

import '../styles/global.scss'
import '../styles/header.scss'
import '../styles/footer.scss'

const Layout = (props) => {
    return (
        <div className="container container-grid sm:mx-auto px-4 py-2">
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )
}

export default Layout