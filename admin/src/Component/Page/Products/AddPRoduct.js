import React, { useState } from "react"
import axios from "axios"
// import { useNavigate } from "react-router-dom";

import './Products.css'

const AddProduct = () => {

  // const navigate = useNavigate()

  const [imageInputShow, setImageInputShow] = useState(false);
  const [multiImageInputShow, setMultiImageInputShow] = useState(false);

  const [images, setImages] = useState([]);

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [product, setProduct] = useState({
    name: "",
    prodImage: "",
    prodImages: "",
    image: "",
    images: "",
    price: "",
    salePrice: "",
    category: "",
    brand: "PAPERLEAF",
    description: "",
    countInStock: 0,
  });

  const addNewProductURL = 'http://localhost:5010/api/products';
  const imageUploadURL = 'http://localhost:5010/api/upload';
  let file = null;
  let files = null;

  let multipleImages = [];

  const handleChange = e => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value
    })
  }
  const handleImageChange = e => {
    file = e.target.files[0];
    console.log(file);
    // handleChange(e);
  }

  const handleImagesChange = e => {
    files = e.target.files;
    multipleImages = [];
    if (files.length !== 0) {
      let i = 0;
      for (const single_file of files) {
        multipleImages[i] = single_file;
        i++;
      }
    }
  }

  const uploadImage = () => {
    let formData = new FormData();
    formData.append("image", file);
    axios.post(imageUploadURL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        setProduct({
          ...product,
          image: response.data
        });
        setImageInputShow(true);
      }).catch((error) => {
        setImageInputShow(false);
        setErrorMessage(error.response.data.message)
        setSuccessMessage("")
      });
  }

  const uploadMultipleImage = () => {
    let formDataMulti = new FormData();
    for (const singleImage of multipleImages) {
      formDataMulti.append("image", singleImage);
      console.log(singleImage);
    }
    // formDataMulti.append("image", multipleImages);
    axios.post(imageUploadURL + "/multi", formDataMulti, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        setProduct({
          ...product,
          images: response.data
        });
        setImages(response.data);
        setMultiImageInputShow(true);
      }).catch((error) => {
        setMultiImageInputShow(false);
        setErrorMessage(error.response.data.message)
        setSuccessMessage("")
      });
  }

  const createNewProduct = () => {
    if (product.name && product.price && product.category &&
      product.brand && product.description && product.countInStock) {
      console.log(product);
      console.log("Image : " + product.image);
      console.log("Images : " + product.images);
      axios.post(addNewProductURL, product)
        .then(response => {
          setSuccessMessage(`Product ${product.name} added Successfully`);
          setErrorMessage("");
        }).catch(error => {
          if (error.response) {
            console.error("Product");
            console.error(error.response.data.message);
            setErrorMessage(error.response.data.message)
            setSuccessMessage("")
          } else if (error.request) {
            // Handle proper error messages
          } else {
            setErrorMessage("Error" + error.message)
            setSuccessMessage("")
          }
        })
    } else {
      setSuccessMessage("");
      setErrorMessage("Please provide valid inputs");
    }
  }

  return (
    <div className="container px-5">
      <h4 className="my-2" style={{ letterSpacing: 1 }}>Add new product</h4>
      <hr />
      <div className="row">

        <div className="d-inline col-6">
          <label htmlFor="name" className="d-block">Product name</label>
          <input className="my-2 py-2 px-2 w-100 rounded border border-1 border-dark d-block" type="text" name="name" id="name" value={product.name} onChange={handleChange} placeholder="Enter product name" required />
        </div>

        <div className="d-inline col-6">
          <label htmlFor="description" className="d-block">Product description</label>
          <input className="my-2 py-2 px-2 w-100 rounded border border-1 border-dark" type="text" name="description" id="description" value={product.description} onChange={handleChange} placeholder="Enter product description" required />
        </div>

        <div className="d-inline col-6">
          <label htmlFor="category" className="d-block">Product category</label>
          <input className="my-2 py-2 px-2 w-100 rounded border border-1 border-dark" type="text" name="category" id="category" value={product.category} onChange={handleChange} placeholder="Enter product category" required />
        </div>

        <div className="d-inline col-6">
          <label htmlFor="brand" className="d-block">Product brand</label>
          <input className="my-2 py-2 px-2 w-100 rounded border border-1 border-dark" type="text" name="brand" id="brand" value={product.brand} onChange={handleChange} placeholder="Enter product brand" disabled required />
        </div>

        <div className="d-inline col-6">
          <label htmlFor="price" className="d-block">Product price</label>
          <input className="my-2 py-2 px-2 w-100 rounded border border-1 border-dark" type="number" name="price" id="price" min="0.00" step="0.01" presicion={2} value={product.price} onChange={handleChange} placeholder="Enter product price" required />
        </div>
        <div className="d-inline col-6">
          <label htmlFor="salePrice" className="d-block">Product sale price</label>
          <input className="my-2 py-2 px-2 w-100 rounded border border-1 border-dark" type="number" name="salePrice" id="salePrice" min="0.00" step="0.01" presicion={2} value={product.salePrice} onChange={handleChange} placeholder="Enter product sale price" required />
        </div>
        <div className="d-inline col-6">
          <label htmlFor="countInStock" className="d-block">Product sale price</label>
          <input className="my-2 py-2 px-2 w-100 rounded border border-1 border-dark" min="0" max="100" type="number" name="countInStock" id="countInStock" value={product.countInStock} onChange={handleChange} placeholder="Numbers of stock" required />
        </div>

        <div></div>
        <div className="d-inline col-6">
          <label htmlFor="prodImage" className="d-block">Product image</label>
          <input className="my-2 py-2 px-2 w-100 rounded border border-1 border-dark" type="file" name="prodImage" id="prodImage" onChange={handleImageChange} placeholder="Choose product image" required />
        </div>
        <div>
          <button className="btn btn-md btn-primary my-2 py-2" type="button" onClick={uploadImage}>Upload Image</button>
        </div>
        {imageInputShow && <img src={`http://localhost:5010${product.image}`} alt="product" style={{ width: '100px', height: '100px' }} />}
        <div></div>
        <div className="d-inline col-6">
          <label htmlFor="prodImage" className="d-block">Product multiple image</label>
          <input className="my-2 py-2 px-2 w-100 rounded border border-1 border-dark" type="file" name="prodImages" id="prodImages" onChange={handleImagesChange} placeholder="Choose product image" multiple />
        </div>
        <div>
          <button className="btn btn-md btn-primary my-2 py-2" type="button" onClick={uploadMultipleImage}>Upload Image</button>
        </div>
        {multiImageInputShow &&
          images.map((image) => (
            <img src={`http://localhost:5010${image}`} alt="product" style={{ width: '100px', height: '100px' }} />
          ))
        }


        {/* <div className="text-end m-0 p-0 my-2">
                    <div className="text-decoration-none text-dark" type="button" onClick={forgotPassword}>Forgot Password</div>
                </div> */}
        {/* <div className="text-start start-0 m-0 mt-3 p-0">
                    Don't have an account
                    <a href="./register" className="px-1" type="button" onClick={() => navigate("/register")}>register</a>
                    here.
                </div> */}
      </div>
      <span className="text-danger">
        {errorMessage}
      </span>
      <br />
      <button className="btn btn-md btn-primary my-2 w-25" type="button" onClick={createNewProduct}>Add Product</button>
      <br />
      <span className="text-success">
        {successMessage}
      </span>
    </div>
  )
}

export default AddProduct;