import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Meta from "../Meta";

import "./Contact.css";

const Contact = () => {
    return (
        <>
            <Meta title="Contact" />
            <Breadcrumb
                links={[
                    { name: 'Home', link: '/', active: false },
                    { name: 'Contact', link: '/contact', active: true }
                ]}
            />
            <section>
                <div class="container">
                    <div className="my-5 text-center">
                        <span className="mb-0 h2">Contact Us</span>
                    </div>
                    <div class="row gutter-4 my-4">
                        <div class="col-12 col-md-6 d-flex justify-content-start align-items-center">
                            <p2 class="fw-normal"><b>Fill the form.Its Easy.</b></p2>
                        </div>
                        <div class="col-12 col-md-6 px-4">
                            <div class="row">
                                <div class="form-group col-12 col-md-6 mb-3">
                                    <label htmlFor="inputFirstName">First Name</label>
                                    <input type="text" class="form-control px-2 px-md-4 py-2 mt-2 border-dark shadow-none" id="inputFirstName" placeholder="Enter your first name" />
                                </div>
                                <div class="form-group col-12 col-md-6 mb-3">
                                    <label htmlFor="inputLastName">Last Name</label>
                                    <input type="text" class="form-control px-2 px-md-4 py-2 mt-2 border-dark shadow-none" id="inputLastName" placeholder="Enter your last name" />
                                </div>
                                <div class="form-group col-12 mb-3">
                                    <label htmlFor="inputEmail">Email</label>
                                    <input type="email" class="form-control px-2 px-md-4 py-2 mt-2 border-dark shadow-none" id="inputEmail" placeholder="Enter your email" />
                                </div>
                                <div class="form-group col-12 mb-3">
                                    <label htmlFor="inputNameSecond">Subject</label>
                                    <input type="text" class="form-control px-2 px-md-4 py-2 mt-2 border-dark shadow-none" id="inputNameSecond" placeholder="Enter subject" />
                                </div>
                                <div class="form-group col-12 mb-3">
                                    <label htmlFor="inputTextarea">Write your message</label>
                                    <textarea class="form-control px-2 px-md-4 py-2 mt-2 border-dark shadow-none" id="inputTextarea" rows="5" placeholder="Enter messages"></textarea>
                                </div>
                                <div class="col-12 mb-3">
                                    {/* <div class="form-control mb-2 border-0">
                                        <input type="checkbox" class="form-control-input" id="customSwitch1" />
                                        <label class="form-control-label text-muted" htmlFor="customSwitch1"></label>
                                    </div> */}
                                    <div className="form-check">
                                        <input className="form-check-input form_check_input_checkbox bg-dark border-dark shadow-none" type="checkbox" value="" id="checkNewsLetter" style={{cursor:"pointer"}} />
                                        <label className="form-check-label" htmlFor="checkNewsLetter" style={{cursor:"pointer"}}>
                                            Subscribe me to weekly newsletter
                                        </label>
                                    </div>
                                </div>
                                <div class="col-12 mb-3">
                                    <button class="btn px-5 py-2 mb-3 bg-dark text-white" type="submit">
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;