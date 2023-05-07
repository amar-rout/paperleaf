import React from "react";

import './Footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="main border-top">
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
                        <div className="col-lg-4 col-md-6">
                            <div className="font-md mb-md-5 mb-lg-0">
                                <div className="text-center" style={{ visibility: 'visible' }}>
                                    <Link to="/"><img height="70" width="70" src="/assets/images/logo/logo2.png" alt="logo" /></Link>
                                </div>
                                <h6 className="my-2 fw-400 text-muted text-decoration-underline" style={{ visibility: 'visible' }}>Contact us</h6>
                                <p className="d-flex justify-content-start align-items-start" style={{ visibility: 'visible' }}>
                                    <span className="me-2 fw-semibold">Address: </span>
                                    <span className="">Plot No. 1710/2978, Kanchana Palace, Pandra, Cuttack - Puri Bypass Rd, Laxmisagar, Bhubaneswar, Odisha 751006</span>
                                </p>
                                <p className="d-flex justify-content-start align-items-start" style={{ visibility: 'visible' }}>
                                    <span className="me-2 fw-semibold">Phone: </span>
                                    <span className="">+91 9692852485</span>
                                </p>
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
                                <p className="d-flex justify-content-start align-items-start" style={{ visibility: 'visible' }}>
                                    <span className="me-2 fw-semibold">
                                        Contact Hours :
                                    </span>
                                    <span className="">
                                        Mon to Fri (9.00AM - 10.00PM),<br />
                                        Sat ( 9.00AM - 2.00PM ),<br />
                                        Sun ( Holiday )
                                    </span>
                                </p>
                                <h6 className="text-muted"><small>Follow us on :</small></h6>
                                {/* <div className="mobile-social-icon wow fadeIn animated mb-sm-5 mb-md-0 animated animated" style="visibility: visible;">
                                    <a href="/"><img src="assets/imgs/theme/icons/icon-facebook.svg" alt=""/></a>
                                    <a href="/"><img src="assets/imgs/theme/icons/icon-twitter.svg" alt=""/></a>
                                    <a href="/"><img src="assets/imgs/theme/icons/icon-instagram.svg" alt=""/></a>
                                    <a href="/"><img src="assets/imgs/theme/icons/icon-pinterest.svg" alt=""/></a>
                                    <a href="/"><img src="assets/imgs/theme/icons/icon-youtube.svg" alt=""/></a>
                                </div> */}
                                <ul className="d-flex list-unstyled" style={{ listStyle: 'outside none none' }}>
                                    <li className="">
                                        <a className="link-dark" href="/">
                                            {/* <svg className="bi text-muted" width="20" height="20">
                                                <use xlink:href="#twitter"/>
                                            </svg> */}
                                            <img width="20" height="20" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAgxJREFUSEvtVtt100AUnFl/x74d4A4QFWAqSFIBpgKcCiIqACrAVBBTAU4HpAOXsFJ+YYezSmIsWY+1fQ75gP3z8ezMfe1cEc90+Ey6+C/81yp/eqnNDCG8pzgDMQOwEbSEc5/hva8yMZsC8NvfQKPHZsZfutGIl7ugzjKYTRn0HUAkbp4qAIIXIAoVRQxqe+oZn9kFqRsQKxXF5VDdOZmsIbzuxQl3GvGiCs779RO2JuzGlgu6rv4U1hrxCt7/aCU2mz1mOxRfLDflONvlqmfcQiYor/XrSWZsC0Ifh1QBFE3ReGdvuDieqIXME1oFuRVGuI39r1WnR53gh1D6vAnZn+ozm5P6kpDJpmOoalfThMe2cAgvJGaPTyNBvx8i8R3u/bI/4/SBSQ5Ijq/aBrQ5XMagWMJJMnM/sFBZWBvklB4nxKZvKsv4hvdOu2WaZQwhB3iewN4JkeObXdPYBbYLxzcqnZ80YMRt0yaHhR88ODrW0b3uGqpWy6zVrCq3orceLC7wCqX/1Nem/rVYrTzMHUIm8G1Kvwl9DWU5H8IOCrsQrgUuhoge/DdNtO7VMbufeAnCwJCRzKBqsbe+w0YghcRFm0N1Bby/naR8cMf+YSsILYNzedKHw04UXe946gLmQshA2jYQ4Q4OntKm2lT3fpXSgnQDOZbtgHunf+wdIDZsIEeSHXLt38v4NxkJ2R94OMSiAAAAAElFTkSuQmCC" />
                                        </a>
                                    </li>
                                    <li className="ms-3">
                                        <a className="link-dark" href="/">
                                            {/* <svg className="bi text-muted" width="20" height="20">
                                                <use xlink:href="#instagram"/>
                                            </svg> */}
                                            <img width="20" height="20" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAldJREFUSEvNl71uE0EUhc+d0O7u8AQkNNDhVDQURqICIYwEPfRImAoERYyEFInKkXiA9CBBEDQ0gGgonRJRYD8Bs+MWzUGz69/9sdeblZLpvDM739wzd8+9FpzSkFPi4oyDtd7GP1yopM45jGDMcN3a8oi11sq5PUIeANDrNsrMGwEPnVIvYYwpercYrHVbHN/XAGYZhkruwphv2Yk8WGstjn8agE5ZQyrZzUaeA6sw7BPyeENp58uJ4+SH4Mr0oYAHztru4p45sISRv5OoFpg45jhuJdwgGizAh7TxTjk4lfnvSqjgO50cYgtJ5iqHNsnOBDKgjXcLwKCS84tyL0ecJtXXMjApDzE2h0XzKtQ9gntAciCvWhL5dFDJ9cUkqwyeQYPgMkTuC+Sa35TgD5BvMR7/WoDnzlYP7OWN4zaC4JKIegPgRmbnLwQfwdrfEkY+4pzZ1AIT8gTW9BFFL4R4VSQ1Bc8Rx/tlUdcDT+5HwugzgJvFOcCPtPYOAt0RScxnaZwQrD8BvFUCPqK1nWbBc6mfCbFfKDXxFOP4daNS+08kMYAouihkH5DbGSGPqFTXV6VGkyv9bGYJtgOHewJcTZ/jJ7bknYeusttadzwzAUgX1hzkpJ6X0CU/3sRA1lumlx3Sh4P3Yg1xLUlr9vYqq11tmd7cSwygVtGYvzSijZcO1nxZLDhhpbKItEINimyvZtQjKmmtbQSSzbVuieOHBuAxlXSqtT7TsNJM7RHSqXGAeNLs9TZr9rKaau27zKX6ukL24cna25oXWvW1M/5PomoYG6z7D1zFRS43c6caAAAAAElFTkSuQmCC" />
                                        </a>
                                    </li>
                                    <li className="ms-3">
                                        <a className="link-dark" href="/">
                                            {/* <svg className="bi text-muted" width="20" height="20">
                                                <use xlink:href="#facebook"/>
                                            </svg> */}
                                            <img width="20" height="20" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAjBJREFUSEvFlt2V0zAQhe/Me+yhAkIFhAowFZCtgHTAoQKyFXC2AkIFhApgKyAdkO1ANjyChiM767Vs2bL8Ej3alr+580+40qErcZEOFinwDznIbmqjlU9QGPwx9yki5oFFNmztewVtAcgIwBD0aJnvYMwpZsQ0WETY2k8K2sV+1H1P0INl/gBjzNi9cbDIhqx+BbBOgXa+PSvTzZj6MLiBfp9w61xbjDK9CcGHYBEhqz9nKn1wcQW4damSFlC87il/1Xf7AMxZdlDQu5gkgt5Z5n3/h5zJXqEfezH/YqvKyxMf3LjYqZ0+hHstyyL0UQjcVB29gDHnxzseeK5aVbrBb3P0wK6+/0KZ7S5UBQT1VHtgynIXqzwmWJlczNpapSw7AvQ2cs9oVT4bKhYpLpkc40Krsm+wRi817nYZ/sN9+/SDlWyJ6rqNnsXgToha8FhShKxYCibQra3M3lM8CZ7I4r5hU/EOgrGSHZF+Dvo5BbzKTyC8DHoq5GpMJVcKOMtHE61bDXPL6azQQ6uiqm67ilyYLGwNJFAdw8AptSrbkbqsgSwop8kGApE1Wf0Vq6clWT3ZMmtXzehCqeC+Wr+BPMpsxqJrh8/HlCeCH5RpEx2LNayZUq61Bft2ArhUpmLeIvCk3MHdBBoonwl2Srdpq4/ndnvoT544WL8p827ZstcNsMiard1f1tt8BFxe1lu3lbQDfyxP5u3VvhEuUfy9WWT4LFKT6eBYkc98fzXwf47bMC4ZMOFdAAAAAElFTkSuQmCC" />
                                        </a>
                                    </li>
                                    <li className="ms-3">
                                        <a className="link-dark" href="/">
                                            <i className="bi-youtube text-dark" style={{ fontSize: '1.2rem', color: 'cornflowerblue' }} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="ps-2 pe-2 d-md-none"><hr /></div>
                        <div className="col-lg-2 col-md-3 col-6">
                            <h6 className="widget-title text-muted"><strong>About</strong></h6>
                            <ul className="footer-list mb-sm-5 mb-md-0">
                                <li><a href="/about">About Us</a></li>
                                <li><a href="/deliveryInfo">Delivery Information</a></li>
                                <li><a href="/privacyPolicy">Privacy Policy</a></li>
                                <li><a href="/termsConditions">Terms &amp; Conditions</a></li>
                                <li><a href="/contact">Contact Us</a></li>
                                <li><a href="/supportCenter">Support Center</a></li>
                                <li><a href="/faqs">FAQs</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-3 col-6">
                            <h6 className="widget-title text-muted"><strong>My Account</strong></h6>
                            <ul className="footer-list mb-sm-5 mb-md-0" style={{ listStyleType: 'none' }}>
                                <li><a href="/login">Sign In</a></li>
                                <li><a href="/wishlists">My Wishlist</a></li>
                                <li><a href="/carts">View Cart</a></li>
                                <li><a href="/orders">My Previous Orders</a></li>
                                <li><a href="/trackOrder">Track My Order</a></li>
                                <li><a href="/help">Help</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <h6 className="widget-title "><strong>Install App</strong></h6>
                            <div className="row">
                                <div className="col-md-8 col-lg-12">
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
                                </div>
                                <div className="col-md-4 col-lg-12 mt-md-3 mt-lg-0">
                                    <p className="my-3"><small>Secured UPI Payment Gateways</small></p>
                                    {/* <img className="" src="assets/imgs/theme/payment-method.png" alt="" style="visibility: visible;"> */}
                                    {/* <p><strong>Gpay | Phonepe</strong></p> */}
                                    <img src="/assets/images/google-pay.png" alt="Android App from Playstore" width="80" height="80" />
                                    <img src="/assets/images/phone-pe.png" alt="Android App from Playstore" width="50" height="50" />
                                    <img src="/assets/images/bhim.png" alt="Android App from Playstore" width="70" height="70" />
                                    <img src="/assets/images/visa.png" alt="Android App from Playstore" width="75" height="19" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container pb-2 mb-2" style={{ visibility: 'visible' }}>
                <hr />
                <a className='whatsappChat' href='https://wa.me/919692852485' target='_blank' rel='noopener noreferrer'>
                    <img alt='Chat on WhatsApp' src="https://stkiwiwebdev.z23.web.core.windows.net/assets/svg/whatsapp-icon.svg" />
                    <span className="d-none text-white fw-bold whatsappChatText"><small>Open Chat</small></span>
                </a>
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