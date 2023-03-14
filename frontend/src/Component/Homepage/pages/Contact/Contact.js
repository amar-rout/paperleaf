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
                        <div class="col-12 col-md-6 px-4 mb-3 d-flex justify-content-start align-items-center">
                            <p2 class="fw-normal"><b>Fill the form. It's Easy.</b></p2>
                        </div>
                        <div class="col-12 col-md-6 px-4">
                            <div class="row">
                                <div class="col-12 col-md-6 mb-2">
                                    <div className="form-floating">
                                        <input type="text" class="form-control border-dark shadow-none" id="inputFirstName" placeholder="Enter your first name" />
                                        <label className="small" htmlFor="inputFirstName"><small>First Name</small></label>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 mb-2">
                                    <div className="form-floating">
                                        <input type="text" class="form-control border-dark shadow-none" id="inputLastName" placeholder="Enter your last name" />
                                        <label className="small" htmlFor="inputLastName"><small>Last Name</small></label>
                                    </div>
                                </div>
                                <div class="col-12 mb-2">
                                    <div className="form-floating">
                                        <input type="email" class="form-control border-dark shadow-none" id="inputEmail" placeholder="Enter your email" />
                                        <label className="small" htmlFor="inputEmail"><small>Email</small></label>
                                    </div>
                                </div>
                                <div class="col-12 mb-2">
                                    <div className="form-floating">
                                        <input type="text" class="form-control border-dark shadow-none" id="inputSubject" placeholder="Enter subject" />
                                        <label className="small" htmlFor="inputSubject"><small>Subject</small></label>
                                    </div>
                                </div>
                                {/* <div class="col-12 mb-2">
                                    <div className="form-group">
                                        <textarea class="form-control border-dark shadow-none" id="inputTextarea" rows="3" placeholder="Write your message here"></textarea>
                                        <label htmlFor="inputTextarea">Write your message here</label>
                                    </div>
                                </div> */}
                                <div class="col-12 mb-2">
                                    <div className="form-floating">
                                        <textarea class="form-control border-dark shadow-none" id="inputTextarea" rows="5" placeholder="Enter messages"></textarea>
                                        <label className="small" htmlFor="inputTextarea"><small>Write your message here</small></label>
                                    </div>
                                </div>
                                <div class="col-12 mb-2">
                                    {/* <div class="form-control mb-2 border-0">
                                        <input type="checkbox" class="form-control-input" id="customSwitch1" />
                                        <label class="form-control-label text-muted" htmlFor="customSwitch1"></label>
                                    </div> */}
                                    <div className="form-check my-2">
                                        <input className="form-check-input form_check_input_checkbox border-dark shadow-none" type="checkbox" value="" id="checkNewsLetter" style={{ cursor: "pointer" }} />
                                        <label className="form-check-label ms-2 small" htmlFor="checkNewsLetter" style={{ cursor: "pointer" }}>
                                            Subscribe me to weekly newsletter
                                        </label>    
                                    </div>
                                </div>
                                <div class="col-12 my-3 text-center">
                                    <button class="btn px-3 py-2 mb-3 bg-dark text-light shadow" type="submit">
                                        <small>Send Message</small>
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