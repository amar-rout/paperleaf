import React from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';

const Products = () => {
    return (
        <>
            <Breadcrumb
                links={[
                    { name: 'Home', link: '/', active: false },
                    { name: 'Products', link: '/Products', active: true }
                ]}
            />
            <section className="album py-3">
                <div className="container">
                    <h4 className="pb-5 text-center">
                        <span className="border-bottom border-2">Products</span>
                    </h4>
                    <h6>Search results here</h6>
                </div>
            </section>
        </>
    )
}

export default Products;