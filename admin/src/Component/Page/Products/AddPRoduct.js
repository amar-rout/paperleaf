import React, { useState } from "react"
import axios from "axios"
// import { useNavigate } from "react-router-dom";

import './Products.css'

const AddProduct = () => {

  // const navigate = useNavigate()

  const [imageInputShow, setImageInputShow] = useState(true);

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  let [product, setProduct] = useState({
    name: "",
    image: "",
    price: "",
    salePrice: "",
    category: "",
    brand: "PAPERLEAF",
    description: "",
    countInStock: 0,
  })

  const addNewProductURL = 'http://localhost:5010/api/products';
  const imageUploadURL = 'http://localhost:5010/api/upload';
  let file = null;
  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'image') {
      file = e.target.files[0];
    }
    setProduct({
      ...product,
      [name]: value
    })
  }
  

  // const handleChangeImage = (e) => {
    
    // uploadFile(url, file);
    // if (product.image) {
    //   uploadFile(url, file);
    // } else {
    //   let removeImageURL = `url/${product.image}`;
    //   removeFile(removeImageURL);
    //   uploadFile(url, file);
    // }
  // };

  // const uploadFile = (url, file) => {

  // };

  // const removeFile = (removeImageURL, file) => {
  //   let formData = new FormData();
  //   formData.append("image", file);
  //   axios.delete(removeImageURL)
  //     .then((response) => {
  //       setProduct({
  //         ...product,
  //         image: ""
  //       });
  //       console.log(product.image);
  //     }).catch((error) => {
  //       setErrorMessage(error.response.data.message)
  //       setSuccessMessage("")
  //     });
  // };
  let imagePath = "";
  const createNewProduct = () => {
    if (product.name && product.price && product.category &&
      product.brand && product.description && product.countInStock) {
      let formData = new FormData();
      formData.append("image", file);
      axios.post(imageUploadURL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((response) => {
          imagePath = response.data;
          setImageInputShow(false);
          console.log(imagePath);
          
        }).catch((error) => {
          setErrorMessage(error.response.data.message)
          setSuccessMessage("")
        });

        setProduct({image: imagePath});
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
    <div className="container p-5">
      <h4 className="my-2" style={{ letterSpacing: 1 }}>Add new product</h4>
      <hr />
      <div className="row row-cols-2">

        {/* <h5 className="my-2">Login</h5> */}
        <input className="my-2 py-2 rounded border border-1 border-dark" type="text" name="name" id="name" value={product.name} onChange={handleChange} placeholder="Enter product name" required />

        <input className="my-2 py-2 rounded border border-1 border-dark" type="text" name="description" id="description" value={product.description} onChange={handleChange} placeholder="Enter product description" required />

        <input className="my-2 py-2 rounded border border-1 border-dark" type="text" name="category" id="category" value={product.category} onChange={handleChange} placeholder="Enter product category" required />

        <input className="my-2 py-2 rounded border border-1 border-dark" type="text" name="brand" id="brand" value={product.brand} onChange={handleChange} placeholder="Enter product brand" disabled required />

        <input className="my-2 py-2 rounded border border-1 border-dark" type="text" name="price" id="price" value={product.price} onChange={handleChange} placeholder="Enter product price" required />

        <input className="my-2 py-2 rounded border border-1 border-dark" type="text" name="salePrice" id="salePrice" value={product.salePrice} onChange={handleChange} placeholder="Enter product sale price" required />

        <input className="my-2 py-2 rounded border border-1 border-dark" min="0" max="100" type="number" name="countInStock" id="countInStock" value={product.countInStock} onChange={handleChange} placeholder="Numbers of stock" required />

        <div></div>

        {imageInputShow ?
          <input className="my-2 py-2 rounded border border-1 border-dark" type="file" name="image" id="image" onChange={handleChange} placeholder="Choose product image" required />
          :
          <img src={`http://localhost:5010${product.image}`} alt="product" style={{ width: '100px', height: '100px' }} />
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

      <button className="btn btn-md btn-primary my-2" type="button" onClick={createNewProduct}>Add Product</button>
      <span className="text-success">
        {successMessage}
      </span>
    </div>
  )
}

export default AddProduct;