import React, { useEffect, useState } from "react";

import './Footer.css';
import { Link } from "react-router-dom";

const Footer = () => {

    const [loginUser, setLoginUser] = useState({});

    useEffect(() => {
        setLoginUser(JSON.parse(localStorage.getItem('user')));
    }, []);

    return (
        <footer className="main" style={{ boxShadow: '0px -0.25rem 8px 2px rgba(0, 0, 0, 0.2)' }}>
            {/* <section className="py-2 text-white footerStart"
                     style={{ visibility: 'visible', backgroundColor: 'rgba(230, 200, 130, 0.8)' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 mb-md-3 mb-lg-0 py-2">
                            <div className="row align-items-center">
                                <div className="col d-flex flex-0 justify-content-center align-items-center">
                                    <img className="fw-bold" src="./aassets/images/icon-email.svg" alt="" width="20" height="20" />
                                    <i className='bx bx-envelope' style={{ color: '#413b3b', fontSize: '28px' }} ></i>
                                    <h6 className="font-size-2 mb-0 mx-3 text-dark">Sign up to PaperLeaf Newsletter</h6>
                                </div>
                                <div className="col my-2 my-md-0 d-none d-lg-inline d-md-inline">
                                    <p className="font-size-14 ml-4 mb-0 text-dark">Receive <strong>₹25</strong> discount coupon for first shopping.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 py-2">
                            <form className="form-subcriber d-flex input-group  ms-lg-4 ms-md-3" style= {{ visibility : 'visible' }}>
                                <input type="email" className="form-control bg-white ps-4 py-2 small-font-size subscribe-button" placeholder="Enter your email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <button className="btn input-group-text subscribe-button"
                                        id="basic-addon2" type="submit">
                                        Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="footer-mid">
                <div className="container pt-3 pb-2">
                    <div className="row">
                        {/* <div className="col-lg-4 col-md-6">
                            <div className="font-md mb-md-5 mb-lg-0"> */}
                        {/* <div className="text-center" style={{ visibility: 'visible' }}>
                                    <Link to="/"><img height="70" width="70" src="/assets/images/logo/logo2.png" alt="logo" /></Link>
                                </div> */}
                        {/* <h6 className="my-2 fw-400 text-muted text-decoration-underline" style={{ visibility: 'visible' }}>Contact us</h6> */}
                        {/* <p className="d-flex justify-content-start align-items-start" style={{ visibility: 'visible' }}> */}
                        {/* <p className="fw-semibold">
                                    Address:<br />
                                    <span className="fw-normal small">Plot No. 1710/2978, Kanchana Palace, Pandra, Cuttack - Puri Bypass Rd, Laxmisagar, Bhubaneswar, Odisha 751006</span>
                                </p> */}
                        {/* </p> */}
                        {/* <p className="d-flex justify-content-start align-items-start" style={{ visibility: 'visible' }}> */}
                        {/* <p className="me-2 fw-semibold">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                                        <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                                        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                    </svg>
                                    :<br />
                                    <span className="fw-normal small">+91 9692852485</span>
                                </p> */}

                        {/* </p> */}
                        {/* <p className="row" style={{ visibility: 'visible' }}>
                                    <span className="col-lg-4 col-md-4 col-4 m-0">
                                        <strong><small>Contact Hours : </small></strong>
                                    </span>
                                    <span className="col-lg-8 col-md-8 col-8">
                                        <small>
                                            Mon to Fri ( 9.00AM - 10.00PM),<br />
                                            Sat ( 9.00AM - 2.00PM ),<br />
                                            Sun ( Holiday )
                                        </small>
                                    </span>
                                </p> */}
                        {/* <p className="d-flex justify-content-start align-items-start" style={{ visibility: 'visible' }}>
                                    <span className="me-2 fw-semibold">
                                        Contact Hours :
                                    </span>
                                    <span className="">
                                        Mon to Fri (9.00AM - 10.00PM),<br />
                                        Sat ( 9.00AM - 2.00PM ),<br />
                                        Sun ( Holiday )
                                    </span>
                                </p> */}
                        {/* <div>
                                    <div className="fw-semibold">Contact Hours:<br />
                                        <ul className="ps-0 fw-normal small me-5 pe-5">
                                            <li className="d-flex flex-row align-items-start justify-content-between">
                                                <span>Monday:</span>
                                                <span className="ml-auto">8:00am - 9:00pm</span>
                                            </li>
                                            <li className="d-flex flex-row align-items-start justify-content-between">
                                                <span>Thuesday:</span>
                                                <span className="ml-auto">8:00am - 9:00pm</span>
                                            </li>
                                            <li className="d-flex flex-row align-items-start justify-content-between">
                                                <span>Wednesday:</span>
                                                <span className="ml-auto">8:00am - 9:00pm</span>
                                            </li>
                                            <li className="d-flex flex-row align-items-start justify-content-between">
                                                <span>Thursday:</span>
                                                <span className="ml-auto">8:00am - 9:00pm</span>
                                            </li>
                                            <li className="d-flex flex-row align-items-start justify-content-between">
                                                <span>Friday:</span>
                                                <span className="ml-auto">8:00am - 7:00pm</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div> */}
                        {/* <h6 className="text-muted"><small>Follow us on:</small></h6> */}
                        {/* <div className="mobile-social-icon wow fadeIn animated mb-sm-5 mb-md-0 animated animated" style="visibility: visible;">
                                    <a href="/"><img src="assets/imgs/theme/icons/icon-facebook.svg" alt=""/></a>
                                    <a href="/"><img src="assets/imgs/theme/icons/icon-twitter.svg" alt=""/></a>
                                    <a href="/"><img src="assets/imgs/theme/icons/icon-instagram.svg" alt=""/></a>
                                    <a href="/"><img src="assets/imgs/theme/icons/icon-pinterest.svg" alt=""/></a>
                                    <a href="/"><img src="assets/imgs/theme/icons/icon-youtube.svg" alt=""/></a>
                                </div> */}
                        {/* <ul className="d-flex list-unstyled" style={{ listStyle: 'outside none none' }}> */}
                        {/* <li className="">
                                        <a className="link-dark" href="/"> */}
                        {/* <svg className="bi text-muted" width="20" height="20">
                                                <use xlink:href="#twitter"/>
                                            </svg> */}
                        {/* <img width="20" height="20" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAgxJREFUSEvtVtt100AUnFl/x74d4A4QFWAqSFIBpgKcCiIqACrAVBBTAU4HpAOXsFJ+YYezSmIsWY+1fQ75gP3z8ezMfe1cEc90+Ey6+C/81yp/eqnNDCG8pzgDMQOwEbSEc5/hva8yMZsC8NvfQKPHZsZfutGIl7ugzjKYTRn0HUAkbp4qAIIXIAoVRQxqe+oZn9kFqRsQKxXF5VDdOZmsIbzuxQl3GvGiCs779RO2JuzGlgu6rv4U1hrxCt7/aCU2mz1mOxRfLDflONvlqmfcQiYor/XrSWZsC0Ifh1QBFE3ReGdvuDieqIXME1oFuRVGuI39r1WnR53gh1D6vAnZn+ozm5P6kpDJpmOoalfThMe2cAgvJGaPTyNBvx8i8R3u/bI/4/SBSQ5Ijq/aBrQ5XMagWMJJMnM/sFBZWBvklB4nxKZvKsv4hvdOu2WaZQwhB3iewN4JkeObXdPYBbYLxzcqnZ80YMRt0yaHhR88ODrW0b3uGqpWy6zVrCq3orceLC7wCqX/1Nem/rVYrTzMHUIm8G1Kvwl9DWU5H8IOCrsQrgUuhoge/DdNtO7VMbufeAnCwJCRzKBqsbe+w0YghcRFm0N1Bby/naR8cMf+YSsILYNzedKHw04UXe946gLmQshA2jYQ4Q4OntKm2lT3fpXSgnQDOZbtgHunf+wdIDZsIEeSHXLt38v4NxkJ2R94OMSiAAAAAElFTkSuQmCC" /> */}
                        {/* </a>
                                    </li> */}
                        {/* <li className="ms-3">
                                        <a className="link-dark btn btn-default bg-body text-dark" href="https://www.instagram.com/invites/contact/?i=dlbeee92r9o5&utm_content=pc8jl5z">
                                            {/* <img width="20" height="20" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAldJREFUSEvNl71uE0EUhc+d0O7u8AQkNNDhVDQURqICIYwEPfRImAoERYyEFInKkXiA9CBBEDQ0gGgonRJRYD8Bs+MWzUGz69/9sdeblZLpvDM739wzd8+9FpzSkFPi4oyDtd7GP1yopM45jGDMcN3a8oi11sq5PUIeANDrNsrMGwEPnVIvYYwpercYrHVbHN/XAGYZhkruwphv2Yk8WGstjn8agE5ZQyrZzUaeA6sw7BPyeENp58uJ4+SH4Mr0oYAHztru4p45sISRv5OoFpg45jhuJdwgGizAh7TxTjk4lfnvSqjgO50cYgtJ5iqHNsnOBDKgjXcLwKCS84tyL0ecJtXXMjApDzE2h0XzKtQ9gntAciCvWhL5dFDJ9cUkqwyeQYPgMkTuC+Sa35TgD5BvMR7/WoDnzlYP7OWN4zaC4JKIegPgRmbnLwQfwdrfEkY+4pzZ1AIT8gTW9BFFL4R4VSQ1Bc8Rx/tlUdcDT+5HwugzgJvFOcCPtPYOAt0RScxnaZwQrD8BvFUCPqK1nWbBc6mfCbFfKDXxFOP4daNS+08kMYAouihkH5DbGSGPqFTXV6VGkyv9bGYJtgOHewJcTZ/jJ7bknYeusttadzwzAUgX1hzkpJ6X0CU/3sRA1lumlx3Sh4P3Yg1xLUlr9vYqq11tmd7cSwygVtGYvzSijZcO1nxZLDhhpbKItEINimyvZtQjKmmtbQSSzbVuieOHBuAxlXSqtT7TsNJM7RHSqXGAeNLs9TZr9rKaau27zKX6ukL24cna25oXWvW1M/5PomoYG6z7D1zFRS43c6caAAAAAElFTkSuQmCC" /> */}
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                            </svg>
                                        </a>
                                    </li> */}
                        {/* <li className="ms-3">
                                        <a className="link-dark" href="/"> */}
                        {/* <svg className="bi text-muted" width="20" height="20">
                                                <use xlink:href="#facebook"/>
                                            </svg> */}
                        {/* <img width="20" height="20" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAjBJREFUSEvFlt2V0zAQhe/Me+yhAkIFhAowFZCtgHTAoQKyFXC2AkIFhApgKyAdkO1ANjyChiM767Vs2bL8Ej3alr+580+40qErcZEOFinwDznIbmqjlU9QGPwx9yki5oFFNmztewVtAcgIwBD0aJnvYMwpZsQ0WETY2k8K2sV+1H1P0INl/gBjzNi9cbDIhqx+BbBOgXa+PSvTzZj6MLiBfp9w61xbjDK9CcGHYBEhqz9nKn1wcQW4damSFlC87il/1Xf7AMxZdlDQu5gkgt5Z5n3/h5zJXqEfezH/YqvKyxMf3LjYqZ0+hHstyyL0UQjcVB29gDHnxzseeK5aVbrBb3P0wK6+/0KZ7S5UBQT1VHtgynIXqzwmWJlczNpapSw7AvQ2cs9oVT4bKhYpLpkc40Krsm+wRi817nYZ/sN9+/SDlWyJ6rqNnsXgToha8FhShKxYCibQra3M3lM8CZ7I4r5hU/EOgrGSHZF+Dvo5BbzKTyC8DHoq5GpMJVcKOMtHE61bDXPL6azQQ6uiqm67ilyYLGwNJFAdw8AptSrbkbqsgSwop8kGApE1Wf0Vq6clWT3ZMmtXzehCqeC+Wr+BPMpsxqJrh8/HlCeCH5RpEx2LNayZUq61Bft2ArhUpmLeIvCk3MHdBBoonwl2Srdpq4/ndnvoT544WL8p827ZstcNsMiard1f1tt8BFxe1lu3lbQDfyxP5u3VvhEuUfy9WWT4LFKT6eBYkc98fzXwf47bMC4ZMOFdAAAAAElFTkSuQmCC" />
                                        </a>
                                    </li> */}
                        {/* <li className="ms-3">
                                        <a className="link-dark" href="/">
                                            <i className="bi-youtube text-dark" style={{ fontSize: '1.2rem', color: 'cornflowerblue' }} />
                                        </a>
                                    </li> */}
                        {/* </ul>
                            </div>
                        </div> */}
                        {/* <div className="ps-2 pe-2 d-md-none"><hr /></div> */}
                        <div className="col-6 col-md-4 my-md-5">
                            <h6 className="widget-title text-muted"><strong>About</strong></h6>
                            <ul className="footer-list mb-sm-5 mb-md-0">
                                <li><a href="/about">About Us</a></li>
                                <li><a href="/shipping">Shipping & Delivery Policy</a></li>
                                <li><a href="/returning">Return and Exchange Policy</a></li>
                                <li><a href="/privacy">Privacy Policy</a></li>
                                <li><a href="/termsConditions">Terms &amp; Conditions</a></li>
                                <li><a href="/contact">Contact Us</a></li>
                                {/* <li><a href="/supportCenter">Support Center</a></li>
                                <li><a href="/faqs">FAQs</a></li> */}
                            </ul>
                        </div>
                        <div className="col-6 col-md-4 my-md-5">
                            <h6 className="widget-title text-muted"><strong>My Account</strong></h6>
                            <ul className="footer-list mb-sm-5 mb-md-0" style={{ listStyleType: 'none' }}>
                                {!loginUser && loginUser === undefined ?
                                    <li><a href="/login">Sign In</a></li>
                                    :
                                    <>
                                        <li><a href="/user/profile">My Profile</a></li>
                                        <li><a href="/wishlists">My Wishlist</a></li>
                                        <li><a href="/carts">View Cart</a></li>
                                    </>
                                }
                                {/* <li><a href="/orders">My Previous Orders</a></li>
                                <li><a href="/trackOrder">Track My Order</a></li> */}
                                {/* <li><a href="/help">Help</a></li> */}
                            </ul>

                        </div>
                        <div className="col-6 col-md-4 my-md-5">
                            <div className="font-md mb-md-5 mb-lg-0">
                                <h6 className="text-muted fw-bold"><small>Follow us on:</small></h6>
                                <ul className="d-flex list-unstyled" style={{ listStyle: 'outside none none' }}>
                                    <li className="ms-3">
                                        <a className="link-dark btn btn-default bg-body text-dark" href="https://www.instagram.com/invites/contact/?i=dlbeee92r9o5&utm_content=pc8jl5z">
                                            {/* <img width="20" height="20" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAldJREFUSEvNl71uE0EUhc+d0O7u8AQkNNDhVDQURqICIYwEPfRImAoERYyEFInKkXiA9CBBEDQ0gGgonRJRYD8Bs+MWzUGz69/9sdeblZLpvDM739wzd8+9FpzSkFPi4oyDtd7GP1yopM45jGDMcN3a8oi11sq5PUIeANDrNsrMGwEPnVIvYYwpercYrHVbHN/XAGYZhkruwphv2Yk8WGstjn8agE5ZQyrZzUaeA6sw7BPyeENp58uJ4+SH4Mr0oYAHztru4p45sISRv5OoFpg45jhuJdwgGizAh7TxTjk4lfnvSqjgO50cYgtJ5iqHNsnOBDKgjXcLwKCS84tyL0ecJtXXMjApDzE2h0XzKtQ9gntAciCvWhL5dFDJ9cUkqwyeQYPgMkTuC+Sa35TgD5BvMR7/WoDnzlYP7OWN4zaC4JKIegPgRmbnLwQfwdrfEkY+4pzZ1AIT8gTW9BFFL4R4VSQ1Bc8Rx/tlUdcDT+5HwugzgJvFOcCPtPYOAt0RScxnaZwQrD8BvFUCPqK1nWbBc6mfCbFfKDXxFOP4daNS+08kMYAouihkH5DbGSGPqFTXV6VGkyv9bGYJtgOHewJcTZ/jJ7bknYeusttadzwzAUgX1hzkpJ6X0CU/3sRA1lumlx3Sh4P3Yg1xLUlr9vYqq11tmd7cSwygVtGYvzSijZcO1nxZLDhhpbKItEINimyvZtQjKmmtbQSSzbVuieOHBuAxlXSqtT7TsNJM7RHSqXGAeNLs9TZr9rKaau27zKX6ukL24cna25oXWvW1M/5PomoYG6z7D1zFRS43c6caAAAAAElFTkSuQmCC" /> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className="col-lg-4 my-md-5">
                            <h6 className="widget-title "><strong>Install App</strong></h6>
                            <div className="row"> */}
                        {/* <div className="col-md-8 col-lg-12">
                                    <p className=""><small>From App Store or Google Play</small></p>
                                    <div className="download-app d-flex justify-content-start align-items-center">
                                        <a href="/comingSoon">
                                            <img src="/assets/images/app-store.jpg" alt="iOS App from Applestore"
                                                style={{ width: '160px', border: '2px solid #e2e9e1', borderRadius: '5px' }} />
                                        </a>
                                        <a href="/comingSoon" className="ms-3">
                                            <img src="/assets/images/google-play.jpg" alt="Android App from Playstore"
                                                style={{ width: '160px', border: '2px solid #e2e9e1', borderRadius: '5px' }} />
                                        </a>
                                    </div>
                                </div> */}
                        {/* <div className="col-md-4 col-lg-12 mt-md-3 mt-lg-0">
                                    <p className="my-3"><small>Secured Payment Gateway</small></p> */}
                        {/* <img className="" src="assets/imgs/theme/payment-method.png" alt="" style="visibility: visible;"> */}
                        {/* <p><strong>Gpay | Phonepe</strong></p> */}
                        {/* <img src="/assets/images/razorpay.png" alt="Android App from Playstore" height="40" /> */}
                        {/* <img src="/assets/images/phone-pe.png" alt="Android App from Playstore" width="50" height="50" />
                                    <img src="/assets/images/bhim.png" alt="Android App from Playstore" width="70" height="70" />
                                    <img src="/assets/images/visa.png" alt="Android App from Playstore" width="75" height="19" /> */}
                        {/* </div> */}
                        {/* </div> */}
                        {/* </div> */}
                    </div>
                </div>
            </section>
            <section className="container pb-2 mb-2" style={{ visibility: 'visible' }}>
                <hr />
                <Link className='whatsappChat' to='https://wa.me/918260569234' target='_blank' rel='noopener noreferrer'>
                    <img alt='Chat on WhatsApp' src="https://stkiwiwebdev.z23.web.core.windows.net/assets/svg/whatsapp-icon.svg" />
                    <span className="text-white fw-bold whatsappChatText"><small>Open Chat</small></span>
                </Link>
                <div className="row">
                    <div className="col-12 mb-20">
                    </div>
                    <div className="col-lg-6">
                        <p className="float-md-left font-sm text-muted mb-0">
                            <small>© 2022, <a href="/"><strong className="text-brand"><small>PaperLeaf</small></strong></a> - Ecommerce</small>
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <p className="text-lg-end text-start font-sm text-muted mb-0">
                            <small>Designed by
                                <a className="" href="/comingSoon" target="_blank"><strong className="text-brand px-1"><small>TechRestore Services</small></strong></a>
                                . All rights reserved
                            </small>
                        </p>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;