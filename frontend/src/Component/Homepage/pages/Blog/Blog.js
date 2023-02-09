import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Meta from "../Meta";

const Blog = () => {
    return (
        <>
            <Meta title="Blog" />
            <Breadcrumb
                links={[
                    { name: 'Home', link: '/', active: false },
                    { name: 'Blog', link: '/blog', active: true }
                ]}
            />
            <div className="container my-5 text-center">
                <h4>Blog</h4>
            </div>
        </>
    )
}

export default Blog;