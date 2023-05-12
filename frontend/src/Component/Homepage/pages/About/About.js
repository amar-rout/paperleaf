import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Meta from "../Meta";

const About = () => {
    return (
        <>
            <Meta title="About" />
            <Breadcrumb
                links={[
                    { name: 'Home', link: '/', active: false },
                    { name: 'About', link: '/about', active: true }
                ]}
            />
            <div className="container text-start">
                <div className="my-5 text-center">
                    <span class="position-relative">
                        <span className="fs-4 text-dark text-decoration-underline">About</span>
                        <span class="position-absolute top-50 start-50 translate-middle ms-3 z-n1">
                            <svg width="300px" height="62.1px" enable-background="new 0 0 366 62.1" viewBox="0 0 366 62.1" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#fff39e" d="m322.5 25.3c0 1.4 2.9 0.8 3.1 1.6 0.8 1.1-1.1 1.3-0.6 2.4 13.3 0.9 26.9 1.7 40.2 4-2.5 0.7-4.9 1.6-7.3 1.1-4-0.9-8.2-1-12.2-1.2-8.5-0.5-16.9-1.9-25.5-1.7h-3.1c2.6 0.6 4.8 0.4 5.7 2.2-7.3 0.4-14.1-0.8-21.2-1.1-0.2 0.6-0.5 1.2-0.8 1.8 21.3 0.7 42.5 1.6 64.3 4.6-4.2 1.6-7.7 1-10.8 0.8-6.8-0.5-13.5-1.3-20.3-1.9-0.9-0.1-2.3-0.1-2.9 0.2-2.2 1.6-4.3 0.6-7 0.4 1.4-1 2.5 0.5 3.9-0.8-5.6-1-10.7 0.6-15.9 0s-10.5-0.6-16.6-0.8c2 1.6 4.6 1.3 6.2 1.4 4.9 0 9.9 0.8 14.8 0.7 5.3-0.1 10.4 0.5 15.5 0.9 3.2 0.3 6.7-0.1 9.9-0.4 1.1-0.1 0.5 0.3 0.6 0.6 0.5 0.9 2.2 0.8 3.6 0.8 5.1-0.1 10.1 0.6 14.8 1.5 0.8 0.1 1.5 0 1.7 0.7 0 0.7-0.8 0.6-1.5 0.8-3.9 1.2-7.4-0.2-11.1-0.2-2 0-4.3-1.5-6 0.5-0.3 0.4-1.4 0.1-2.2-0.1-4.5-0.8-9.1-0.5-13.8-1.5-2.3-0.5-5.6 0.1-8.4 0.5-4 0.5-8-0.7-12.1-0.9-3.4-0.2-7.1-0.5-10.5-0.7-7.1-0.3-14.2-1.2-22.3-0.4 4.9 1.1 9.4 1.2 13.8 1.2 9.7 0 19.2 2.3 28.9 1.6 7.3 3.2 15.9 1.5 23.8 2.9 4.9 0.8 10.1 0.8 15.2 1.2 0.5 0 0.8 0.3 1.1 0.9-20-2.1-40.2-1.4-60.8-3 4.9 2.1 10.8-0.3 15.3 2.7-8 1.9-15.8-0.9-23.5-0.1 2.8 1.4 7.1 1.1 9.3 3.3 0.5 0.5 0.2 1.1-1.2 1.3 2.3 1 3.4-2.1 5.7-0.4 0.2-0.6 0.2-1 0.3-1.5 0.8-0.3 2 0.8 1.5 1.5-0.2 0.1 0 0.3 0 0.5 18.7 0.4 37.3 1.7 56.2 3.6-1.7 1.1-2.8 1.2-4.2 1.1-7.1-0.5-14.1-0.9-21.2-1.4-3.1-0.2-6.3-0.4-9.4-0.4-7.6-0.2-15-0.7-22.4-1-9-0.4-17.9-0.1-26.9-0.1-1.2 0-2.9-0.4-3.9 1 14.8 0.3 29.7 0.6 44.4 1.1 14.8 0.6 29.9 1.3 44.2 4.2-4.3 1-8.8 0.9-13 0.5-5.3-0.5-10.5-1.1-15.8-1.2-11.4-0.3-22.9-0.9-34.3-1.2-17.6-0.4-35.4-0.3-53.1-0.4-10.8-0.1-21.7-0.2-32.5 0-17.8 0.4-35.7 0.2-53.5 0.5-13.1 0.3-26.3 0.1-39.4 0.5-11.1 0.3-22.4 0.6-33.6 1-13.1 0.6-26.1 0.2-39.3 0.4-3.9 0.1-7.6 0.2-11.8-0.2 0.9-1.2 2.3-1.3 3.9-1.3 8.4 0.2 16.6-0.4 24.9-0.9 3.9-0.2 7.9-0.4 11.9 0.2 2.5 0.4 5.3-0.3 8-0.4 7.3-0.4 14.7-0.7 22-0.9 11.9-0.5 23.7-1.2 35.6-0.8 7.7 0.2 15.3-0.6 22.9-0.1 2.3 0.2 4.3-0.5 6.5-1h-17.6c-9.6 0-19-0.1-28.6 0-8 0.1-16.1 0.3-24 0.8-2.6 0.2-5.4 0.1-8.2 0.1-10.1 0.3-20.1 0.6-30.2 0.5-5.4 0-10.7-0.1-15.9 0.6-2.3 0.3-4-1.3-6.5-0.6 0.2 0.4 0.5 0.9 0.6 1.5-1.9 0-4 0.4-4.9-0.1-4.2-2.2-9.4-1.5-14.1-2.3-1.7-0.3-3.7-0.1-4.3-1.5-0.5-1.3 1.9-1.5 2.6-2.6-4.2-1.4-4.6-5-8.5-7.2-1.5 0.2-0.9 2.8-4.2 1.3 0.3 2.4 4.5 3.9 2.8 6.4-2.3 0.3-3.2-0.8-4.2-1.7-2.5-4-5.1-8.4-5.1-12.7 0.2-6.8 0.2-13.8 3.6-20.4 0.3-0.5 0.3-1 0.8-1.4 0.9-0.9 1.2-2.4 3.6-2.1 2.2 0.2 2.5 1.5 2.6 2.6 0.2 1.4 1.5 1.8 3.2 2.5 0.9-1.4 0.5-2.9 2.6-3.7 0.2-0.1 0.3-0.4 0.3-0.4-3.1-2.2 1.2-2.2 2.3-3.3-3.1-1.8-4-4.3-3.7-7-1.5-0.3-3.1-0.4-4.5 0-1.7 0.6-2.2-0.5-2.9-1 0.6-0.5 0.8-1.1 2.2-1.3 7.6-0.9 15.2-1.7 22.9-2 20-0.7 39.9-0.9 59.9-1 11.9-0.1 23.8 0.4 35.6 1.1 3.6 0.2 7.1-0.9 10.7-0.5 7.9 0.9 15.8 0.3 23.8 0.5 7.3 0.1 14.4-0.6 21.7-0.1 12.2 0.9 24.4 0.3 36.7 0.6 9.4 0.3 18.9 0.4 28.2 1 11.9 0.7 23.8 1.3 35.6 2 11.1 0.6 22.4 0.5 33.3 2 7.1 1 14.4 1.1 21.3 2.4 4 0.7 8.2 1.6 12.4 1.9 2.2 0.2 0.9 1 1.5 1.5-4-0.8-8-0.8-12.1-1.4-4.3-0.7-8.5-1-12.8 0.4-2.9 1-6.3 0.2-9.3-0.1-10.2-1.1-20.6-1.6-30.8-2.4-12.1-0.9-24.3-1.4-36.4-2.1-9.9-0.6-20-0.5-29.9-1-11.4-0.6-22.7 0-34.2-0.5-6.3-0.3-12.3-0.3-18.5-0.4-4.2-0.1-8.4 1.3-12.8 0.3 0.6 0.2 1.2 0.7 1.9 0.7 10.5 0 20.9 1.9 31.6 1.7 6.5-0.1 13.1 0.2 19.8 0.8 3.2 0.3 6.3-0.4 9.7-0.1 7.6 0.7 15.5 0.5 23 0.8 12.4 0.5 24.7 0.4 37.1 1.1 13.3 0.7 26.8 2.1 39.9 4.1 6.2 0.9 12.7 1.5 19.2 1.7 0.6 0 1.1 0.1 1.5 0.5-4.6 0.1-9.3 0-13.9-0.5-0.6 1.1 1.4 0.9 1.5 1.9-9.7 1.6-19.6-1.4-29.4-0.1 2.2 1.4 5.1 1 7.4 1 7.3 0.1 14.1 1.3 21.2 1.9 2.8 0.3 5.9 0 8.5 0.8 1.5 0.5 4.6-1.1 4.9 1.3 4-0.7 7.3 1.5 11.1 1.2 4-0.3 7.7 0.6 11.6 1.1 0.8 0.1 2.2 0.3 2.3 1.1 0.2 1-1.1 1.2-2 1.5-3.4 1-6.7-0.4-10.1-0.4-0.9 0-2-0.2-2.9-0.2-9.4 0.1-18.8-1.3-28.3-1.8-6-0.4-12.1-0.9-18.1-1.3 0 0.2 0 0.4-0.2 0.6 6.1 0.5 12.1 1.4 18.3 0.7z"></path>
                            </svg>
                        </span>
                    </span>
                </div>
                <div className="row">
                    <div className="col-12 col-md-2"></div>
                    <div className="col-12 col-md-8">
                        <p>Welcome to <b>Paperleaf</b>, your one-stop destination for a stunning range of ethnic wear. Our apparel brand is a handcrafted clothing brand level that specializes in creating premium clothing for women of all ages. We use only the finest materials and craftmanship to create our garments. Which are designed to be stylist and functional. We also offer a range of accessories such as statement pieces of jewelry to compliment our clothing.</p>
                        <p>Our journey began with a vision to make it easier for people to find and buy ethnic wear online. We understand the importance of preserving and celebrating our rich cultural heritage through traditional attire. Our aim is to provide our customers with high-quality and authentic ethnic wear that reflects the beauty and diversity of India's culture.</p>
                        <p>At <b>Paperleaf</b>, we are committed to providing our customers with the best shopping experience. Our collection is curated by a team of experts who are passionate about Indian fashion and are constantly on the lookout for new and trending styles. From fabrics, dress, dress material, dupattas, to accessories such as jewelry, we have it all.</p>
                        <p>Our website offers a user-friendly interface that makes it easy for customers to browse through our extensive collection and find what they're looking for. We also offer a range of payment options and fast, reliable shipping to ensure that your shopping experience is hassle-free.</p>
                        <p>We take pride in our commitment to customer satisfaction. We believe in building long-term relationships with our customers and strive to ensure that every shopping experience with us is a memorable one.</p>
                        <p>Thank you for choosing <a href="paperleaf.co.in" className="text-decoration-none">paperleaf.co.in</a>. We hope that our collection of ethnic wear helps you embrace the beauty and richness of Indian culture. Happy shopping!</p>
                    </div>
                    <div className="col-12 col-md-2"></div>
                </div>
            </div>
        </>
    )
}

export default About;