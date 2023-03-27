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
            <div className="container my-5 text-start">
                <h4 className="mb-5">About</h4>
                <p>Welcome to <b>Paperleaf</b>, your one-stop destination for a stunning range of ethnic wear. Our apparel brand is a handcrafted clothing brand level that specializes in creating premium clothing for women of all ages. We use only the finest materials and craftmanship to create our garments. Which are designed to be stylist and functional. We also offer a range of accessories such as statement pieces of jewelry to compliment our clothing.</p>
                <p>Our journey began with a vision to make it easier for people to find and buy ethnic wear online. We understand the importance of preserving and celebrating our rich cultural heritage through traditional attire. Our aim is to provide our customers with high-quality and authentic ethnic wear that reflects the beauty and diversity of India's culture.</p>
                <p>At <b>Paperleaf</b>, we are committed to providing our customers with the best shopping experience. Our collection is curated by a team of experts who are passionate about Indian fashion and are constantly on the lookout for new and trending styles. From fabrics, dress, dress material, dupattas, to accessories such as jewelry, we have it all.</p>
                <p>Our website offers a user-friendly interface that makes it easy for customers to browse through our extensive collection and find what they're looking for. We also offer a range of payment options and fast, reliable shipping to ensure that your shopping experience is hassle-free.</p>
                <p>We take pride in our commitment to customer satisfaction. We believe in building long-term relationships with our customers and strive to ensure that every shopping experience with us is a memorable one.</p>
                <p>Thank you for choosing <a href="paperleaf.co.in" className="text-decoration-none">paperleaf.co.in</a>. We hope that our collection of ethnic wear helps you embrace the beauty and richness of Indian culture. Happy shopping!</p>
            </div>
        </>
    )
}

export default About;