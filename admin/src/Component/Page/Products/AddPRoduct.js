import React, { useEffect, useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import './Products.css'

const AddProduct = () => {

  // const navigate = useNavigate()
  const getCategoryURL = "http://localhost:5010/api/category/";

  const [categories, setCategories] = useState([]);
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

  useEffect(() => {
    getCategory();
  });

  const getCategory = () => {
    axios.get(getCategoryURL)
      .then(response => {
        setCategories(response.data);
      }).catch(error => {
        if (error.response) {
          toast.dismiss()
          toast.error(error.response.data.message)
        } else if (error.request) {
          // Handle proper error messages
        } else {
          toast.dismiss()
          toast.error(error.message)
        }
      })
  }

  const addNewProductURL = 'http://localhost:5010/api/products';
  const imageUploadURL = 'http://localhost:5010/api/upload';
  let file = null;
  // let temp_file = null;
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
    if (file) {
      if (product.image !== "") {
        const imageArr = product.image.split("/");
        deleteImage(imageArr[2]);
      }
      uploadImage();
    } else {
      if (product.image !== "") {
        const imageArr = product.image.split("/");
        deleteImage(imageArr[2]);
      } else {
        toast.dismiss();
        toast.warning("Please select one image.");
      }
    }
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
    if (files.length >= 1) {
      uploadMultipleImage();
    }
  }

  const uploadImage = () => {
    let formData = new FormData();
    formData.append("image", file);
    toast.dismiss();
    toast.info('Uploading product image....');
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
        toast.dismiss();
        toast.success('Produt image uploaded successfully.');
      }).catch((error) => {
        setImageInputShow(false);
        setErrorMessage(error.response.data.message);
        setSuccessMessage("");
        toast.dismiss();
        toast.error('Produt image not uploaded');
      });
  }

  const deleteImage = (imageID) => {
    // const imageArr = imageID.split("/"); 
    const deleteImageURL = `${imageUploadURL}/${imageID}`;
    axios.delete(deleteImageURL)
      .then((response) => {
        setProduct({
          ...product,
          image: ''
        });
        setImageInputShow(false);
      }).catch((error) => {
        setImageInputShow(false);
        setErrorMessage(error.response.data.message);
        setSuccessMessage("");
        toast.dismiss();
        toast.error('');
      });
  }

  const uploadMultipleImage = () => {
    let formDataMulti = new FormData();
    for (const singleImage of multipleImages) {
      formDataMulti.append("image", singleImage);
      console.log(singleImage);
    }
    // formDataMulti.append("image", multipleImages);
    toast.dismiss();
    toast.info('Uploading product images....');
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
        toast.dismiss();
        toast.success('Produt images uploaded successfully.');
      }).catch((error) => {
        setMultiImageInputShow(false);
        setErrorMessage(error.response.data.message)
        setSuccessMessage("");
        toast.dismiss();
        toast.error('Produt image not uploaded');
      });
  }

  const createNewProduct = () => {
    if (product.name && product.price && product.category &&
      product.brand && product.description && product.countInStock) {
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
    <div className="container w-100 p-5">
      <h4 className="my-2" style={{ letterSpacing: 1 }}>Add new product</h4>
      <hr />
      <div className="row">

        <div className="d-inline col-6 mb-3">
          <label htmlFor="name" className="d-block mb-2">Product name</label>
          {/* <input className="my-2 py-2 px-2 w-100 rounded border border-1 border-dark d-block" type="text" name="name" id="name" value={product.name} onChange={handleChange} placeholder="Enter product name" required /> */}
          <input className="form-control" type="text" name="name" id="name" value={product.name} onChange={handleChange} placeholder="Enter product name" required />
        </div>

        <div className="d-inline col-6 mb-3">
          <label htmlFor="description" className="d-block mb-2">Product description</label>
          {/* <input className="my-2 py-2 px-2 w-100 rounded border border-1 border-dark" type="text" name="description" id="description" value={product.description} onChange={handleChange} placeholder="Enter product description" required /> */}
          <input className="form-control" type="text" name="description" id="description" value={product.description} onChange={handleChange} placeholder="Enter product description" required />
        </div>

        <div className="d-inline col-6 mb-3">
          <label htmlFor="category" className="d-block mb-2">Product category</label>
          {/* <input className="my-2 py-2 px-2 w-100 rounded border border-1 border-dark" type="text" name="category" id="category" value={product.category} onChange={handleChange} placeholder="Enter product category" required /> */}
          <select
            className="form-control form-select"
            id="category"
            value={product.category}
            name="category"
            onChange={handleChange}
            required
          >
            <option value="">-- Select Category --</option>
            {categories && categories.map(cat => {
              const { _id, name, status } = cat;
              return status === true ? (<option key={_id} value={name}>{name}</option>) : null;
            })}
          </select>
        </div>

        <div className="d-inline col-6 mb-3">
          <label htmlFor="brand" className="d-block mb-2">Product brand</label>
          {/* <input className="my-2 py-2 px-2 w-100 rounded border border-1 border-dark" type="text" name="brand" id="brand" value={product.brand} onChange={handleChange} placeholder="Enter product brand" disabled required /> */}
          <input className="form-control" type="text" name="brand" id="brand" value={product.brand} onChange={handleChange} placeholder="Enter product brand" disabled required />
        </div>

        <div className="d-inline col-6 mb-3">
          <label htmlFor="price" className="mb-2">Product price</label>
          {/* <input className="my-2 py-2 px-2 w-100 rounded border border-1 border-dark" type="number" name="price" id="price" min="0.00" step="0.01" presicion={2} value={product.price} onChange={handleChange} placeholder="Enter product price" required /> */}
          <input className="form-control" type="number" name="price" id="price" min="0.00" step="0.01" presicion={2} value={product.price} onChange={handleChange} placeholder="Enter product price" required />
        </div>
        <div className="d-inline col-6 mb-3">
          <label htmlFor="salePrice" className="d-block mb-2">Product sale price</label>
          {/* <input className="my-2 py-2 px-2 w-100 rounded border border-1 border-dark" type="number" name="salePrice" id="salePrice" min="0.00" step="0.01" presicion={2} value={product.salePrice} onChange={handleChange} placeholder="Enter product sale price" required /> */}
          <input className="form-control" type="number" name="salePrice" id="salePrice" min="0.00" step="0.01" presicion={2} value={product.salePrice} onChange={handleChange} placeholder="Enter product sale price" required />
        </div>
        <div className="d-inline col-6 mb-3">
          <label htmlFor="countInStock" className="d-block mb-2">Product Stock</label>
          {/* <input className="my-2 py-2 px-2 w-100 rounded border border-1 border-dark" min="0" max="100" type="number" name="countInStock" id="countInStock" value={product.countInStock} onChange={handleChange} placeholder="Numbers of stock" required /> */}
          <input className="form-control" min="0" max="100" type="number" name="countInStock" id="countInStock" value={product.countInStock} onChange={handleChange} placeholder="Numbers of stock" required />
        </div>

        <div></div>
        <div className="d-inline col-6 mb-3">
          <label htmlFor="prodImage" className="mb-2">Product image</label>
          <div className="input-group-md">
            <input className="form-control" type="file" name="prodImage" id="prodImage" onChange={handleImageChange} placeholder="Choose product image" required />
            {/* <button className="btn btn-primary" type="button" onClick={uploadImage}>Upload Image</button> */}
          </div>
        </div>
        <div className="d-inline col-6 mb-3">
          <label htmlFor="prodImage" className="mb-2">Product multiple image</label>
          <div className="input-group-md">
            <input className="form-control" type="file" name="prodImages" id="prodImages" onChange={handleImagesChange} placeholder="Choose product image" multiple />
            {/* <button className="btn btn-primary" type="button" onClick={uploadMultipleImage}>Upload Image</button> */}
          </div>
        </div>
        <div className="col-6 mb-3">
          {imageInputShow && <img src={`http://localhost:5010${product.image}`} alt="product" style={{ width: '100px', height: '100px' }} />}
        </div>

        <div className="col-6 mb-3">
          {multiImageInputShow &&
            images.map((image) => (
              <img src={`http://localhost:5010${image}`} className="mx-2 mb-3" alt="product" style={{ width: '100px', height: '100px' }} />
            ))
          }
        </div>


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
      <div className="my-4">
        <button className="btn btn-md btn-primary w-25 center" type="button" onClick={createNewProduct}>Add Product</button>
      </div>
      <br />
      <span className="text-success">
        {successMessage}
      </span>
    </div>
  )
}

export default AddProduct;