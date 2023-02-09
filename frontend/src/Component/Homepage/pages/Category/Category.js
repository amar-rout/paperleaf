import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import HomeCategory from "../Home/HomeCategory/HomeCategory";
import Meta from "../Meta";
import CategoryItems from "./CategoryItems/CategoryItems";

const Category = () => {

    const urlParams = {
        browseAll: "All products",
        newInStore: "New In Store",
        kurtis: "Kurtis",
        dupattas: "Dupattas",
        dress: "Dress",
        pants: "Pants or Palazzo",
        fabrics: "Fabrics",
        jewellery: "Jewellery",
        others: "Others"
    };

    let title = 'All Category';
    let catLink = '/category';

    let { id } = useParams();
    const idValue = urlParams[id];
    if (idValue !== undefined) {
        title = `Category ${idValue}`;
        catLink = `/category/${id}`;
    }

    return (
        <>
            {
                idValue === undefined || idValue === null ?
                    <>
                        <Meta title="All category" />
                        <Breadcrumb
                            links={[
                                { name: 'Home', link: '/', active: false },
                                { name: 'Category', link: catLink, active: true }
                            ]}
                        />
                        <HomeCategory />
                    </>
                    :
                    <>
                        <Meta title={title} />
                        <Breadcrumb
                            links={[
                                { name: 'Home', link: '/', active: false },
                                { name: 'Category', link: '/category', active: false },
                                { name: idValue, link: catLink, active: true }
                            ]}
                        />
                        <CategoryItems paramsValue={idValue} urlLink={catLink} />
                    </>
            }
        </>
    )
}

export default Category;