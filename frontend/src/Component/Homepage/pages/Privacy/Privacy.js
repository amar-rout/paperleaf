import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Meta from "../Meta";

const Privacy = () => {
    return (
        <>
            <Meta title="Privacy" />
            <Breadcrumb
                links={[
                    { name: 'Home', link: '/', active: false },
                    { name: 'Privacy', link: '/privacy', active: true }
                ]}
            />
            <div className="container mb-5">

                <div className="my-5 text-center">
                    <span class="position-relative">
                        <span className="fs-2 text-dark text-decoration-underline heading">Privacy Policy</span>
                        <span class="position-absolute top-50 start-50 translate-middle ms-3 z-n1">
                            <svg width="300px" height="62.1px" enable-background="new 0 0 366 62.1" viewBox="0 0 366 62.1" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#fff39e" d="m322.5 25.3c0 1.4 2.9 0.8 3.1 1.6 0.8 1.1-1.1 1.3-0.6 2.4 13.3 0.9 26.9 1.7 40.2 4-2.5 0.7-4.9 1.6-7.3 1.1-4-0.9-8.2-1-12.2-1.2-8.5-0.5-16.9-1.9-25.5-1.7h-3.1c2.6 0.6 4.8 0.4 5.7 2.2-7.3 0.4-14.1-0.8-21.2-1.1-0.2 0.6-0.5 1.2-0.8 1.8 21.3 0.7 42.5 1.6 64.3 4.6-4.2 1.6-7.7 1-10.8 0.8-6.8-0.5-13.5-1.3-20.3-1.9-0.9-0.1-2.3-0.1-2.9 0.2-2.2 1.6-4.3 0.6-7 0.4 1.4-1 2.5 0.5 3.9-0.8-5.6-1-10.7 0.6-15.9 0s-10.5-0.6-16.6-0.8c2 1.6 4.6 1.3 6.2 1.4 4.9 0 9.9 0.8 14.8 0.7 5.3-0.1 10.4 0.5 15.5 0.9 3.2 0.3 6.7-0.1 9.9-0.4 1.1-0.1 0.5 0.3 0.6 0.6 0.5 0.9 2.2 0.8 3.6 0.8 5.1-0.1 10.1 0.6 14.8 1.5 0.8 0.1 1.5 0 1.7 0.7 0 0.7-0.8 0.6-1.5 0.8-3.9 1.2-7.4-0.2-11.1-0.2-2 0-4.3-1.5-6 0.5-0.3 0.4-1.4 0.1-2.2-0.1-4.5-0.8-9.1-0.5-13.8-1.5-2.3-0.5-5.6 0.1-8.4 0.5-4 0.5-8-0.7-12.1-0.9-3.4-0.2-7.1-0.5-10.5-0.7-7.1-0.3-14.2-1.2-22.3-0.4 4.9 1.1 9.4 1.2 13.8 1.2 9.7 0 19.2 2.3 28.9 1.6 7.3 3.2 15.9 1.5 23.8 2.9 4.9 0.8 10.1 0.8 15.2 1.2 0.5 0 0.8 0.3 1.1 0.9-20-2.1-40.2-1.4-60.8-3 4.9 2.1 10.8-0.3 15.3 2.7-8 1.9-15.8-0.9-23.5-0.1 2.8 1.4 7.1 1.1 9.3 3.3 0.5 0.5 0.2 1.1-1.2 1.3 2.3 1 3.4-2.1 5.7-0.4 0.2-0.6 0.2-1 0.3-1.5 0.8-0.3 2 0.8 1.5 1.5-0.2 0.1 0 0.3 0 0.5 18.7 0.4 37.3 1.7 56.2 3.6-1.7 1.1-2.8 1.2-4.2 1.1-7.1-0.5-14.1-0.9-21.2-1.4-3.1-0.2-6.3-0.4-9.4-0.4-7.6-0.2-15-0.7-22.4-1-9-0.4-17.9-0.1-26.9-0.1-1.2 0-2.9-0.4-3.9 1 14.8 0.3 29.7 0.6 44.4 1.1 14.8 0.6 29.9 1.3 44.2 4.2-4.3 1-8.8 0.9-13 0.5-5.3-0.5-10.5-1.1-15.8-1.2-11.4-0.3-22.9-0.9-34.3-1.2-17.6-0.4-35.4-0.3-53.1-0.4-10.8-0.1-21.7-0.2-32.5 0-17.8 0.4-35.7 0.2-53.5 0.5-13.1 0.3-26.3 0.1-39.4 0.5-11.1 0.3-22.4 0.6-33.6 1-13.1 0.6-26.1 0.2-39.3 0.4-3.9 0.1-7.6 0.2-11.8-0.2 0.9-1.2 2.3-1.3 3.9-1.3 8.4 0.2 16.6-0.4 24.9-0.9 3.9-0.2 7.9-0.4 11.9 0.2 2.5 0.4 5.3-0.3 8-0.4 7.3-0.4 14.7-0.7 22-0.9 11.9-0.5 23.7-1.2 35.6-0.8 7.7 0.2 15.3-0.6 22.9-0.1 2.3 0.2 4.3-0.5 6.5-1h-17.6c-9.6 0-19-0.1-28.6 0-8 0.1-16.1 0.3-24 0.8-2.6 0.2-5.4 0.1-8.2 0.1-10.1 0.3-20.1 0.6-30.2 0.5-5.4 0-10.7-0.1-15.9 0.6-2.3 0.3-4-1.3-6.5-0.6 0.2 0.4 0.5 0.9 0.6 1.5-1.9 0-4 0.4-4.9-0.1-4.2-2.2-9.4-1.5-14.1-2.3-1.7-0.3-3.7-0.1-4.3-1.5-0.5-1.3 1.9-1.5 2.6-2.6-4.2-1.4-4.6-5-8.5-7.2-1.5 0.2-0.9 2.8-4.2 1.3 0.3 2.4 4.5 3.9 2.8 6.4-2.3 0.3-3.2-0.8-4.2-1.7-2.5-4-5.1-8.4-5.1-12.7 0.2-6.8 0.2-13.8 3.6-20.4 0.3-0.5 0.3-1 0.8-1.4 0.9-0.9 1.2-2.4 3.6-2.1 2.2 0.2 2.5 1.5 2.6 2.6 0.2 1.4 1.5 1.8 3.2 2.5 0.9-1.4 0.5-2.9 2.6-3.7 0.2-0.1 0.3-0.4 0.3-0.4-3.1-2.2 1.2-2.2 2.3-3.3-3.1-1.8-4-4.3-3.7-7-1.5-0.3-3.1-0.4-4.5 0-1.7 0.6-2.2-0.5-2.9-1 0.6-0.5 0.8-1.1 2.2-1.3 7.6-0.9 15.2-1.7 22.9-2 20-0.7 39.9-0.9 59.9-1 11.9-0.1 23.8 0.4 35.6 1.1 3.6 0.2 7.1-0.9 10.7-0.5 7.9 0.9 15.8 0.3 23.8 0.5 7.3 0.1 14.4-0.6 21.7-0.1 12.2 0.9 24.4 0.3 36.7 0.6 9.4 0.3 18.9 0.4 28.2 1 11.9 0.7 23.8 1.3 35.6 2 11.1 0.6 22.4 0.5 33.3 2 7.1 1 14.4 1.1 21.3 2.4 4 0.7 8.2 1.6 12.4 1.9 2.2 0.2 0.9 1 1.5 1.5-4-0.8-8-0.8-12.1-1.4-4.3-0.7-8.5-1-12.8 0.4-2.9 1-6.3 0.2-9.3-0.1-10.2-1.1-20.6-1.6-30.8-2.4-12.1-0.9-24.3-1.4-36.4-2.1-9.9-0.6-20-0.5-29.9-1-11.4-0.6-22.7 0-34.2-0.5-6.3-0.3-12.3-0.3-18.5-0.4-4.2-0.1-8.4 1.3-12.8 0.3 0.6 0.2 1.2 0.7 1.9 0.7 10.5 0 20.9 1.9 31.6 1.7 6.5-0.1 13.1 0.2 19.8 0.8 3.2 0.3 6.3-0.4 9.7-0.1 7.6 0.7 15.5 0.5 23 0.8 12.4 0.5 24.7 0.4 37.1 1.1 13.3 0.7 26.8 2.1 39.9 4.1 6.2 0.9 12.7 1.5 19.2 1.7 0.6 0 1.1 0.1 1.5 0.5-4.6 0.1-9.3 0-13.9-0.5-0.6 1.1 1.4 0.9 1.5 1.9-9.7 1.6-19.6-1.4-29.4-0.1 2.2 1.4 5.1 1 7.4 1 7.3 0.1 14.1 1.3 21.2 1.9 2.8 0.3 5.9 0 8.5 0.8 1.5 0.5 4.6-1.1 4.9 1.3 4-0.7 7.3 1.5 11.1 1.2 4-0.3 7.7 0.6 11.6 1.1 0.8 0.1 2.2 0.3 2.3 1.1 0.2 1-1.1 1.2-2 1.5-3.4 1-6.7-0.4-10.1-0.4-0.9 0-2-0.2-2.9-0.2-9.4 0.1-18.8-1.3-28.3-1.8-6-0.4-12.1-0.9-18.1-1.3 0 0.2 0 0.4-0.2 0.6 6.1 0.5 12.1 1.4 18.3 0.7z"></path>
                            </svg>
                        </span>
                    </span>
                </div>
                <div className="row">
                    {/* <div className="col-12 col-md-2"></div> */}
                    <div className="col-12">

                        <p>
                            This Privacy Policy Describes Our Policies & Procedure On The Collection, Use And Disclosure Of Your Information, As You Become A Part Of Our Buying / Selling Process.
                        </p>
                        <p>
                            However, While Using Our Service, We May Ask You To Provide Us With Certain Personally Identifiable Information That Can Be Used To Contact Or Identify You. Identifiable Information May Include
                        </p>
                        <ul className="my-2">
                            <li>Email Address </li>
                            <li>First Name & Last Name</li>
                            <li>Contact Number</li>
                            <li>Address, State, Province, Zip/ Postal Code</li>
                            <li>City </li>
                            <li>Usage Data </li>
                        </ul>
                        <p>
                            We Also Automatically Receive Your Computer's Internet Protocol (Ip) Address In Order To Provide Us With Information That Help Us Learn About Your Browser & Operating System.
                        </p>
                        <p>
                            Use Of Your Personal Data: -
                        </p>
                        <ul className="my-2">
                            <li>
                                To Provide & Maintain Our Service & Monitor The Usage Of Our Service.
                            </li>
                            <li>
                                To Manage Your Account - The Personal Data You Provide Can Give You Access To Different Functionalities Of The Service That Are Available To You As A Registered User.
                            </li>
                            <li>
                                To Contact You By Email, Telephone Calls, Sms, On Other Equivalent Forms Of Electronic Communication Such As A Mobile Application's Push Notification Regarding Updates Or Informative Communication Related To The Functionalities, Products Or Contracted Services, Including The Security Update, When Necessary Or Reasonable For Their Implementation.
                            </li>
                            <li>
                                To Provide You With News, Special Offers And General Information About Other Goods, Services And Events Which We Offer That Are Similar To Those That You Have Already Purchased Or Enquired About Unless You Have Opted Not To Receive Such Information.
                            </li>
                            <li>
                                To Manage Your Request. To Attend And Manage Your Requests To Us.
                            </li>
                            <li>
                                For Other Purposes: We May Use Your Information For Other Purposes, Such As Data Analysis, Identifying Usage Trends, Determining The Effectiveness Of Our Promotional Campaigns And To Evaluate And Improve Our Service, Products, Marketing And Your Experience
                            </li>
                        </ul>
                        <span className="text-decoration-underline fw-semibold">Secured Customer Information And Protection Against Fraud:</span>
                        <p>
                            When You Place Order With Paper Leaf, It Is Through A Secured Server And All Of The Customer Information Is Protected Against Any Unauthorized Access/Fraud. Paper Lear Does Not Sell, Trade Or Rent Your Personal Information To Others.
                        </p>
                        <span className="text-decoration-underline fw-semibold">
                            Retention Of Your Personal Data /Information:
                        </span>
                        <p>
                            Paper Leaf Will Retain Your Personal Data Only For As Long As Is Necessary For The Purposes Set Out In This Privacy Policy, We Will Retain And Use Your Personal Data To The Legal Extent Necessary To Comply With Our Legal Obligations.
                        </p>
                        <span className="text-decoration-underline fw-semibold">
                            Delete Your Personal Data
                        </span>
                        <p>
                            You Have The Right To Delete Or Request That And We Will Assist In Deleting The Personal Data That We Have Collected About You.
                        </p>
                        <p>
                            You May Update, Amend, On Delete Your Information At Any Time By Signing Into Your Account Settings, If You Have One, And Visiting The Account Settings Section That Allows You To Manage Your Personal Information. You May Also Contact Us To Request Access To Connect, Or Delete Any Personal Information That You Have Provided To Us.
                        </p>
                        <p>
                            Please Note, However, That We May Need To Retain Certain Information When We Have A Legal Obligation Or Lawful Basis To Do So.
                        </p>
                        <span className="text-decoration-underline fw-semibold">
                            Links To Other Websites
                        </span>
                        <p>
                            Our Service May Contain Links To Other Website That Are Not Operated By Us. If You Click On A Third Party Link, You Will Be Directed To That Third Party's Site. We Strongly Advise You To Review The Privacy Policy Of Every Visit.  We Have No Control Over And Assume No Responsibility For The Content, Privacy Policies Or Practices Of Any Third Party Sites On Services.
                        </p>
                        <span className="text-decoration-underline fw-semibold">
                            Changes To This Privacy Policy
                        </span>
                        <p>
                            We May Update Our Privacy Policy From Time To Time. We Will Notify You Of Any Changes By Posting The New Privacy Policy On This Page. We Will Let You Know Via Email /Or A Prominent Notice On Our Service, Prior To The Change Becoming Effective And Update The "Last Up- Dated" Date At The Top Of This Privacy Policy.
                        </p>
                        <p>
                            You Are Advised To Review This Privacy Policy Periodically For Any Changes. Change's To This Policy Are Effective When They Are Posted On This Page.
                        </p>
                        <span className="fw-semibold">
                            Contact Us:-
                        </span>
                        <p>
                            If You Have Any Questions About This Privacy Policy, You Can Contact Us:
                        </p>
                        <p className="lh-1 pb-0 mb-0">
                            By Email:
                        </p>
                        <p className="lh-2">
                            <a href="Mailto:contact@paperleaf.co.in" className="fs-6">contact@paperleaf.co.in</a>
                            <br />
                            <a href="Mailto:paperleaf.brand@gmail.com" className="fs-6">paperleaf.brand@gmail.com</a>
                        </p>

                        {/* <h4>Shipping Policy</h4>
                        
                        <p>Free shipping all over India for orders above Rs. 2,000. For orders below Rs.2000, a flat shipping fee of Rs.150 is changed per order. Shipping charges will be calculated at the time of checkout on our website.</p>

                        <h4>Orders shipment timelines:</h4>
                        <p>Our shipping timelines vary depending on the product ordered.</p>
                        <ul>
                            <li>Fabrics, Dupattas & Stole take 2 to 3 days to ship from our warehouse.</li>
                            <li>Jewellery product's take 1 to 2 days to ship from the warehouse.</li>
                            <li>Readymade clothing / products take 7 to 10 days to ship from the warehouse</li>
                        </ul>

                        <h4>Return / Exchange / Refund policy</h4>
                        <p><b>Return:</b></p>
                        <p>Any Clothing items (Readymade), dupattas, stole, semi-stitched materials are eligible for returns & exchange.</p>

                        <p>However, jewellery, Fabrics / pre-Cut fabrics, customized products & products bought on sale are not eligible for return of exchange.</p>

                        <p>The request to return on exchange must be placed within 15 days from the date of receipt of shipment. Once the reverse pick up is done a store Credit will be provided to you via Email in the form of a Coupon code which will be valid for 6 months from the date of issue. The store credit will be amount of the value of your returned order excluding any shipping cost paid by you at the time of placing an order. Items for return must be in original packing, shouldn't be worn and in original condition.</p> */}
                        {/* <h4 className="text-center"></h4> */}
                    </div>
                    {/* <div className="col-12 col-md-2"></div> */}
                </div>

            </div >
        </>
    )
}

export default Privacy;