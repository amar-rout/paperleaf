import React from 'react';
// import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Meta from '../Meta';

const Help = () => {

    // const navigate = useNavigate();

    return (
        <> 
            <Meta title="Help" />
            <Breadcrumb
                links={[
                    { name: 'Home', link: '/', active: false },
                    { name: 'Help', link: '/help', active: true }
                ]}
            />
            <div className="card border-0 my-5">
                <h4 className='text-center text-decoration-underline'>Questions and Answers</h4>

                <div className="card-body">
                    <div className="row justify-content-center">
                        <div className="col-lg-4">
                            <input type="text" className="form-control form-control-lg border-2 border-warning rounded-pill mb-4 px-4 fs-6 text-decoration-none shadow-none" placeholder="Write a question or problem" />
                        </div>
                    </div>
                    {/* <!-- / .row --> */}

                    <div className="row justify-content-center my-4">
                        <div className="col-lg-8 col-xl-6 text-center">
                            <a href="/" className="badge fs-6 text-black bg-light py-2 px-3 m-2 mb-1"><small>How secure is your Payment method?</small></a>
                            <a href="/" className="badge fs-6 text-black bg-light py-2 px-3 m-2 mb-1"><small>How secure is my data?</small></a>
                            <a href="/" className="badge fs-6 text-black bg-light py-2 px-3 m-2 mb-1"><small>How can I upgrade my plan?</small></a>
                            <a href="/" className="badge fs-6 text-black bg-light py-2 px-3 m-2 mb-1"><small>How do I know I have the latest version?</small></a>
                            <a href="/" className="badge fs-6 text-black bg-light py-2 px-3 m-2 mb-1"><small>Can I invite team members?</small></a>
                            <a href="/" className="badge fs-6 text-black bg-light py-2 px-3 m-2 mb-1"><small>Where do I find my API usage?</small></a>
                        </div>
                    </div>
                    {/* <!-- / .row --> */}

                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-xxl-9">
                            <h5 className="text-center text-decoration-underline">Frequently Asked Questions</h5>

                            <div className="row mt-5">
                                <div className="col-xl-6">
                                    <div className="d-flex mb-4">
                                        <div className="text-warning me-2">
                                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20" width="20"><path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,19a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,19Zm1.6-6.08a1,1,0,0,0-.6.92,1,1,0,0,1-2,0,3,3,0,0,1,1.8-2.75A2,2,0,1,0,10,9.25a1,1,0,0,1-2,0,4,4,0,1,1,5.6,3.67Z" style={{fill:"currentColor"}}></path></svg> */}
                                            <i className='bx bx-question-mark bg-warning text-light rounded-circle p-1'></i>
                                        </div>
                                        <div>
                                            <h5 className=" mb-0">Vivamus dapibus libero sed ultricies dapibus?</h5>
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nibh sem, convallis id tincidunt et, tempor vitae turpis. Curabitur sagittis et dictum turpis vitae tellus.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-4">
                                        <div className="text-warning me-2">
                                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20" width="20"><path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,19a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,19Zm1.6-6.08a1,1,0,0,0-.6.92,1,1,0,0,1-2,0,3,3,0,0,1,1.8-2.75A2,2,0,1,0,10,9.25a1,1,0,0,1-2,0,4,4,0,1,1,5.6,3.67Z" style={{fill: "currentColor"}}></path></svg> */}
                                            <i className='bx bx-question-mark bg-warning text-light rounded-circle p-1'></i>
                                        </div>
                                        <div>
                                            <h5 className=" mb-0">Nullam gravida orci id venenatis facilisis?</h5>
                                            <p className="mb-0">Donec non diam nec leo efficitur congue ut ac nisi. Integer ut tincidunt ligula, nec cursus augue. Proin sed augue magna. Sed viverra vehicula faucibus.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-4">
                                        <div className="text-warning me-2">
                                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20" width="20"><path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,19a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,19Zm1.6-6.08a1,1,0,0,0-.6.92,1,1,0,0,1-2,0,3,3,0,0,1,1.8-2.75A2,2,0,1,0,10,9.25a1,1,0,0,1-2,0,4,4,0,1,1,5.6,3.67Z" style={{fill: "currentColor"}}></path></svg> */}
                                            <i className='bx bx-question-mark bg-warning text-light rounded-circle p-1'></i>
                                        </div>
                                        <div>
                                            <h5 className=" mb-0">In sagittis risus ac massa auctor interdum?</h5>
                                            <p className="mb-0">Phasellus efficitur nunc et tortor aliquam rhoncus. Ut facilisis malesuada tincidunt. Aliquam mollis lectus et.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-4">
                                        <div className="text-warning me-2">
                                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20" width="20"><path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,19a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,19Zm1.6-6.08a1,1,0,0,0-.6.92,1,1,0,0,1-2,0,3,3,0,0,1,1.8-2.75A2,2,0,1,0,10,9.25a1,1,0,0,1-2,0,4,4,0,1,1,5.6,3.67Z" style={{fill: "currentColor"}}></path></svg> */}
                                            <i className='bx bx-question-mark bg-warning text-light rounded-circle p-1'></i>
                                        </div>
                                        <div>
                                            <h5 className=" mb-0">Aliquam cursus dolor eget lobortis porta?</h5>
                                            <p className="mb-0">Aliquam ornare malesuada enim eget congue. Nam massa purus, consequat a libero eu, molestie sollicitudin neque?Quisque varius vulputate leo non blandit. Sed iaculis justo.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-4">
                                        <div className="text-warning me-2">
                                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20" width="20"><path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,19a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,19Zm1.6-6.08a1,1,0,0,0-.6.92,1,1,0,0,1-2,0,3,3,0,0,1,1.8-2.75A2,2,0,1,0,10,9.25a1,1,0,0,1-2,0,4,4,0,1,1,5.6,3.67Z" style={{fill: "currentColor"}}></path></svg> */}
                                            <i className='bx bx-question-mark bg-warning text-light rounded-circle p-1'></i>
                                        </div>
                                        <div>
                                            <h5 className=" mb-0">Suspendisse non odio et nisl aliquet consequat?</h5>
                                            <p className="mb-0">Quisque varius vulputate leo non blandit. Sed iaculis justo nec nisl consequat, ut varius dolor efficitur. Fusce dictum lobortis nunc vitae mattis. Vivamus ac tellus iaculis, aliquam augue ut libero.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="d-flex mb-4">
                                        <div className="text-warning me-2">
                                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20" width="20"><path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,19a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,19Zm1.6-6.08a1,1,0,0,0-.6.92,1,1,0,0,1-2,0,3,3,0,0,1,1.8-2.75A2,2,0,1,0,10,9.25a1,1,0,0,1-2,0,4,4,0,1,1,5.6,3.67Z" style={{fill: "currentColor"}}></path></svg> */}
                                            <i className='bx bx-question-mark bg-warning text-light rounded-circle p-1'></i>
                                        </div>
                                        <div>
                                            <h5 className=" mb-0">Duis consectetur mauris tristique luctus vehicula?</h5>
                                            <p className="mb-0">Phasellus pretium urna sed risus scelerisque tristique. Integer sodales commodo ullamcorper. Vestibulum id tortor ut odio sodales vestibulum.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-4">
                                        <div className="text-warning me-2">
                                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20" width="20"><path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,19a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,19Zm1.6-6.08a1,1,0,0,0-.6.92,1,1,0,0,1-2,0,3,3,0,0,1,1.8-2.75A2,2,0,1,0,10,9.25a1,1,0,0,1-2,0,4,4,0,1,1,5.6,3.67Z" style={{fill: "currentColor"}}></path></svg> */}
                                            <i className='bx bx-question-mark bg-warning text-light rounded-circle p-1'></i>
                                        </div>
                                        <div>
                                            <h5 className=" mb-0">Ut ut urna ut felis vulputate bibendum eu quis leo?</h5>
                                            <p className="mb-0">Nunc fermentum gravida nisi, vehicula consectetur libero mattis eu. Vestibulum pharetra massa in purus ullamcorper, in malesuada enim congue. Pellentesque efficitur nec erat.                                                </p>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-4">
                                        <div className="text-warning me-2">
                                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20" width="20"><path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,19a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,19Zm1.6-6.08a1,1,0,0,0-.6.92,1,1,0,0,1-2,0,3,3,0,0,1,1.8-2.75A2,2,0,1,0,10,9.25a1,1,0,0,1-2,0,4,4,0,1,1,5.6,3.67Z" style={{fill: "currentColor"}}></path></svg> */}
                                            <i className='bx bx-question-mark bg-warning text-light rounded-circle p-1'></i>
                                        </div>
                                        <div>
                                            <h5 className=" mb-0">Ut elementum dolor quis consequat dapibus?</h5>
                                            <p className="mb-0">Praesent vel quam molestie, placerat nunc a, consequat nisi. Curabitur viverra vitae purus vitae volutpat. Nulla facilisi.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-4">
                                        <div className="text-warning me-2">
                                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20" width="20"><path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,19a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,19Zm1.6-6.08a1,1,0,0,0-.6.92,1,1,0,0,1-2,0,3,3,0,0,1,1.8-2.75A2,2,0,1,0,10,9.25a1,1,0,0,1-2,0,4,4,0,1,1,5.6,3.67Z" style={{fill: "currentColor"}}></path></svg> */}
                                            <i className='bx bx-question-mark bg-warning text-light rounded-circle p-1'></i>
                                        </div>
                                        <div>
                                            <h5 className=" mb-0">Proin consequat nunc efficitur luctus facilisis?</h5>
                                            <p className="mb-0">Aenean ultricies elementum risus vitae pulvinar. Aenean porttitor, felis eget accumsan facilisis, risus nunc eleifend massa, in consectetur nisl lectus et risus. Sed eu nulla tellus.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-4">
                                        <div className="text-warning me-2">
                                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20" width="20"><path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,19a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,19Zm1.6-6.08a1,1,0,0,0-.6.92,1,1,0,0,1-2,0,3,3,0,0,1,1.8-2.75A2,2,0,1,0,10,9.25a1,1,0,0,1-2,0,4,4,0,1,1,5.6,3.67Z" style={{fill: "currentColor"}}></path></svg> */}
                                            <i className='bx bx-question-mark bg-warning text-light rounded-circle p-1'></i>
                                        </div>
                                        <div>
                                            <h5 className=" mb-0">Curabitur sed velit et elit pretium sodales?</h5>
                                            <p className="mb-0">Curabitur dictum turpis vitae commodo tincidunt. Nam id faucibus tortor. Donec elementum nunc diam, nec imperdiet libero auctor et. Cras maximus justo in commodo auctor.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- / .row --> */}

                            {/* <div className="d-flex align-items-end bg-warning rounded text-center mt-5 px-4 position-relative">
                                <div className="position-absolute bg-warning top-50 start-50 translate-middle">
                                    <h2 className="text-white">Can't find what you're looking for?</h2>
                                    <button className="mt-3 w-50 py-2 btn btn-default btn-dark text-white rounded-pill fw-normal" onClick={() => navigate('/contact')}>
                                        <small>CONTACT US</small>
                                    </button>
                                </div>
                                <img src="https://d33wubrfki0l68.cloudfront.net/3b17577d9510ca8e973cf1ec6558bb69279745e7/40233/assets/images/illustrations/faq-illustration.svg" className="img-fluid ms-auto d-none d-md-block" alt="..." width="150" height="150" />
                            </div> */}
                        </div>
                    </div>
                    {/* <!-- / .row --> */}
                </div>
            </div>
        </>
    )
}

export default Help;