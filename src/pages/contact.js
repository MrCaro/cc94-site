import React from 'react'

import Layout from '../components/layout'
import '../styles/contact.scss'

// var Recaptcha = require('react-recaptcha');

// let recaptchaInstance;

// const executeCaptcha = function () {
//     recaptchaInstance.execute();
// };

// const verifyCallback = function (response) {
//     console.log(response);
//     document.getElementById("mainForm").submit();
//   };

const ContactPage = () => {
    return (
        <Layout>
            <main>
                <h1>contact me</h1>
                <div 
                    className="md:mx-12"
                >
                    <form 
                        id="mainForm"
                        action="https://getform.io/f/1a2c27a8-0e89-404c-99f0-1eb818196ef1" 
                        method="POST"
                    >
                        <div className="w-full flex md:flex-no-wrap flex-wrap md:justify-between">
                            <label className="md:w-2/5">
                                Name<span>*</span>
                                <input 
                                    className="md:pl-12 pl-4" 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    placeholder="John Doe" 
                                    required="true" 
                                />
                            </label>
                            <label className="md:w-2/5">
                                Email<span>*</span>
                                <input 
                                    className="md:pl-12 pl-4" 
                                    type="email" 
                                    name="email" id="email" 
                                    placeholder="johndoe@test.com" 
                                    required="true" 
                                />
                            </label>
                        </div>
                        <div className="w-full">
                            <label>
                                Subject<span>*</span>
                                <input 
                                    className="md:pl-12 pl-4" 
                                    type="text" 
                                    name="subject" 
                                    id="subject" 
                                    placeholder="Hello Carlos this is" 
                                    required="true" 
                                />
                            </label>
                            <label>
                                Message<span>*</span>
                                <textarea 
                                    className="md:pl-12 pl-4" 
                                    name="message" 
                                    id="message" rows="5" 
                                    placeholder="Thank you for reaching out!" 
                                    required="true" 
                                />
                            </label>
                        </div>
                        <div className="w-full md:text-left text-center">
                            <button 
                                className="neumorphism-square md:w-auto w-full mt-2" 
                                type="submit"
                            >
                                send
                            </button>
                            <button 
                                className="neumorphism-square md:w-auto w-full md:mt-2 mt-10 md:ml-8" 
                                type="reset" 
                            >
                                clear
                            </button>
                        </div>
                        {/* <Recaptcha
                            ref={e => recaptchaInstance = e}
                            sitekey="6LfITzgaAAAAAHwXUk7j0kbvWP6LE1EFBN7aNA6p"
                            size="invisible"
                            verifyCallback={verifyCallback}
                        /> */}
                    </form>
                </div>
            </main>
        </Layout>
    )
}

export default ContactPage