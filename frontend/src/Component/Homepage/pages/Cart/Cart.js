import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Meta from "../Meta";

const Cart = () => {
    return (
        <>
            <Meta title="Cart" />
            <Breadcrumb
                links={[
                    { name: 'Home', link: '/', active: false },
                    { name: 'Carts', link: '/carts', active: true },
                    // { name: match.params.cat, link: '/category/' + match.params.cat, active: true },
                ]}
            />
            {/* <section className="album py-3">
                <div className="container">
                    <h4 className="pb-5 text-center">
                        <span className="border-bottom border-2">Carts</span>
                    </h4>
                </div>
            </section> */}
            <div className="container my-5 text-center">
                <h4>Cart</h4>
            </div>
        </>
    )
}

export default Cart;