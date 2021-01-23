import React from 'react'

import Layout from '../components/layout'
import '../styles/contact.scss'

const ContactPage = () => {
    return (
        <Layout>
            <main>
                <h1>contact me</h1>
                <div 
                    className="md:mx-12"
                >
                    <form 
                        action="https://getform.io/f/1a2c27a8-0e89-404c-99f0-1eb818196ef1" 
                        method="POST"
                    >
                        <div className="w-full flex md:flex-no-wrap flex-wrap md:justify-between">
                            <label className="md:w-2/5">
                                Name<span>*</span>
                                <input type="text" name="name" id="name" placeholder="John Doe" required="true" />
                            </label>
                            <label className="md:w-2/5">
                                Email<span>*</span>
                                <input type="email" name="email" id="email" placeholder="johndoe@test.com" required="true" />
                            </label>
                        </div>
                        <div className="w-full">
                            <label>
                                Subject<span>*</span>
                                <input type="text" name="subject" id="subject" placeholder="Hello Carlos this is" required="true" />
                            </label>
                            <label>
                                Message<span>*</span>
                                <textarea name="message" id="message" rows="5" placeholder="Thank you so much for reaching out!" required="true" />
                            </label>
                        </div>
                        <div className="w-full md:text-left text-center">
                            <button className="neumorphism-square mt-2" type="submit">Send</button>
                            <button className="neumorphism-square mt-2" type="reset" >clear</button>
                        </div>
                    </form>
                </div>
            </main>
        </Layout>
    )
}

export default ContactPage