import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import JoditEditor from 'jodit-react';
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import $ from 'jquery';

import './Products.css'

const AddProduct = () => {

  // const navigate = useNavigate()

  const editor = useRef(null);
  const [content, setContent] = useState('');

  // const config = useMemo(
  //   {
  //     readonly: false, // all options from https://xdsoft.net/jodit/docs/,
  //     placeholder: 'Start typings...'
  //   }
  // );
  // const config = {
  //     // all options from https://xdsoft.net/jodit/docs/,
  //     placeholder: 'Start typings...'
  //   };


  const serverURL = process.env.REACT_APP_SERVER_URL;
  const getCategoryURL = `${serverURL}/api/category/`;

  const navigate = useNavigate();

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
    price: 0.0,
    salePrice: 0.0,
    featured: false,
    category: "",
    brand: "PAPERLEAF",
    description: "",
    countInStock: 0,
  });

  useEffect(() => {
    // getCategory();
    axios.get('/api/category/')
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
  }, [categories]);

  // const getCategory = () => {
    // axios.get(getCategoryURL)
    //   .then(response => {
    //     setCategories(response.data);
    //     console.log(categories);
    //   }).catch(error => {
    //     if (error.response) {
    //       toast.dismiss()
    //       toast.error(error.response.data.message)
    //     } else if (error.request) {
    //       // Handle proper error messages
    //     } else {
    //       toast.dismiss()
    //       toast.error(error.message)
    //     }
    //   })
  // }

  const addNewProductURL = `/api/products`;
  const imageUploadURL = `https://www.paperleaf.co.in/api/upload`;
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
  // const handleFeatured = (status) => {
  //   setProduct({
  //     ...product,
  //     featured : !status
  //   })
  // }

  // const handleImageChangeNew = e => {
  //   if (e.target.files && e.target.files[0]) {
  //     console.log('target: ' + e.target);
  //     var reader = new FileReader();
  //     reader.onload = function (e) {
  //       console.log('reader: ' + e.target);
  //       $('.file-upload-image').attr('src', e.target.result);
  //       $('.file-upload-content').show();
  //     };
  //     reader.readAsDataURL(e.target.files[0]);
  //   } else {
  //     removeUpload();
  //   }
  // }

  // const removeUpload = () => {
  //   // $('.file-upload-input').replaceWith(
  //   //   $('.file-upload-input').clone()
  //   // );
  //   $('.file-upload-input').val(null);
  //   $('.file-upload-content').hide();
  // }

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
        toast.error('Product image not uploaded');
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

  const deleteImages = (index) => {
    const imageVal = images[index];
    const imageArr = imageVal.split("/");
    const imageID = imageArr[2];
    const deleteImageURL = `${imageUploadURL}/${imageID}`;
    axios.delete(deleteImageURL)
      .then((response) => {
        setImages(images.filter((image => image !== imageVal)));
        toast.success("Image deleted from folder");
      }).catch((error) => {
        setErrorMessage(error.response.data.message);
        setSuccessMessage("");
        toast.dismiss();
        toast.error('');
      });
  }

  // const removeProductImages = (imageID) => {
  //   const deleteImageURL = `${imageUploadURL}/${imageID}`;
  //   axios.delete(deleteImageURL)
  //     .then((response) => {
  //       setProduct({
  //         ...product,
  //         image: ''
  //       });
  //       setImageInputShow(false);
  //     }).catch((error) => {
  //       setImageInputShow(false);
  //       setErrorMessage(error.response.data.message);
  //       setSuccessMessage("");
  //       toast.dismiss();
  //       toast.error('');
  //     });
  // }

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
        toast.error('Product images not uploaded');
      });
  }

  const createNewProduct = () => {
    if (product.name && product.price && product.category &&
      product.brand && content && product.countInStock) {
        if (content) {
          setProduct({...product, description: content});
        }
        console.log("Content : " + content);
        console.log("Description : " + product.description);
      axios.post(addNewProductURL, product)
        .then(response => {
          setSuccessMessage(`Product ${product.name} added Successfully`);
          setErrorMessage("");
          toast.dismiss();
          toast.success(successMessage);
          navigate("/products");
        }).catch(error => {
          if (error.response) {
            console.error("Product");
            console.error(error.response.data.message);
            setErrorMessage(error.response.data.message)
            setSuccessMessage("")
            toast.dismiss();
            toast.error(errorMessage);
          } else if (error.request) {
            // Handle proper error messages
          } else {
            setErrorMessage("Error" + error.message)
            setSuccessMessage("")
            toast.dismiss();
            toast.error(errorMessage);
          }
        })
    } else {
      setSuccessMessage("");
      setErrorMessage("Please provide valid inputs");
      toast.dismiss();
      toast.error(errorMessage);
    }
  }

  return (
    <div className="container-fluid my-5 pt-5 mt-5">
      <div className="card">
        <div className="card-header">
          <div className="d-flex justify-content-start align-items-center">
            <button className='btn btn-default btn-md fw-bold' onClick={() => navigate(-1)}><i class="bi bi-chevron-left"></i></button>
            <h4 className="my-2 ms-2" style={{ letterSpacing: 1 }}>Add Product</h4>
          </div>
        </div>
        <div className="card-body">
          <div className="row">

            <div className="d-inline col-12 col-md-4 mb-3">
              <label htmlFor="name" className="d-block mb-2">Product name</label>
              {/* <input className="my-2 py-2 px-2 w-100 rounded border border-1 border-dark d-block" type="text" name="name" id="name" value={product.name} onChange={handleChange} placeholder="Enter product name" required /> */}
              <input className="form-control py-3 py-md-2" type="text" name="name" id="name" value={product.name} onChange={handleChange} placeholder="Enter product name" required />
            </div>
            <div className="d-inline col-12 col-md-4 mb-3">
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
                  return status === true ? <option key={_id} value={name}>{name}</option> : null;
                })}
              </select>
            </div>
            <div className="d-inline col-12 col-md-4 mb-3">
              <label htmlFor="brand" className="d-block mb-2">Product brand</label>
              {/* <input className="my-2 py-2 px-2 w-100 rounded border border-1 border-dark" type="text" name="brand" id="brand" value={product.brand} onChange={handleChange} placeholder="Enter product brand" disabled required /> */}
              <input className="form-control py-3 py-md-2" type="text" name="brand" id="brand" value={product.brand} onChange={handleChange} placeholder="Enter product brand" disabled required />
            </div>
            <div className="d-inline col-12 col-md-4 mb-3">
              <label htmlFor="salePrice" className="d-block mb-2">MRP (₹)</label>
              {/* <input className="my-2 py-2 px-2 w-100 rounded border border-1 border-dark" type="number" name="salePrice" id="salePrice" min="0.00" step="0.01" presicion={2} value={product.salePrice} onChange={handleChange} placeholder="Enter MRP" required /> */}
              <input className="form-control py-3 py-md-2" type="number" name="salePrice" id="salePrice" min="0.00" step="0.01" presicion={2} value={product.salePrice} onChange={handleChange} placeholder="Enter MRP" required />
            </div>
            <div className="d-inline col-12 col-md-4 mb-3">
              <label htmlFor="price" className="mb-2">Sale Price (₹)</label>
              {/* <input className="my-2 py-2 px-2 w-100 rounded border border-1 border-dark" type="number" name="price" id="price" min="0.00" step="0.01" presicion={2} value={product.price} onChange={handleChange} placeholder="Enter product price" required /> */}
              <input className="form-control py-3 py-md-2" type="number" name="price" id="price" min="0.00" step="0.01" presicion={2} value={product.price} onChange={handleChange} placeholder="Enter product price" required />
            </div>
            <div className="d-inline col-12 col-md-4 mb-3">
              <label htmlFor="countInStock" className="d-block mb-2">Product Stock</label>
              {/* <input className="my-2 py-2 px-2 w-100 rounded border border-1 border-dark" min="0" max="100" type="number" name="countInStock" id="countInStock" value={product.countInStock} onChange={handleChange} placeholder="Numbers of stock" required /> */}
              <input className="form-control py-3 py-md-2" min="0" max="100" type="number" name="countInStock" id="countInStock" value={product.countInStock} onChange={handleChange} placeholder="Numbers of stock" required />
            </div>
            <div className="d-inline col-12 col-md-4 mb-3">
              <label className="d-block mb-2">Product Featured</label>
              <div className="form-check form-switch">
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  defaultChecked={product.featured}
                  onChange={() => {
                    setProduct({
                      ...product,
                      "featured": !(product.featured)
                    });
                  }}
                />
                <label
                  className="form-check-label ms-1"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Featured
                </label>
              </div>
            </div>
            <div className="d-inline col-12 col-md-12 mb-3">
              <label htmlFor="description" className="d-block mb-2">Product description</label>
              {/* <input className="my-2 py-2 px-2 w-100 rounded border border-1 border-dark" type="text" name="description" id="description" value={product.description} onChange={handleChange} placeholder="Enter product description" required /> */}
              {/* <input className="form-control" type="text" name="description" id="description" value={product.description} onChange={handleChange} placeholder="Enter product description" required /> */}
              {/* <textarea class="form-control" name="description" id="description" value={product.description} onChange={handleChange} placeholder="Leave a comment here" style={{ height: '100px' }} required></textarea> */}
              <JoditEditor
                ref={editor}
                value={content}
                // config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => { 
                  setProduct({...product, description: newContent});
                }}
              />
            </div>
            <div className="d-inline col-12 col-md-4 mb-3">
              <label htmlFor="prodImage" className="mb-2">Product image</label>
              <div className="input-group-md">
                <input className="form-control file-upload-input" type="file" name="prodImage" id="prodImage" onChange={handleImageChange} placeholder="Choose product image" required />
              </div>
            </div>
            <div className="d-inline col-12 col-md-8 mb-3">
              <label htmlFor="prodImage" className="mb-2">Product multiple image</label>
              <div className="input-group-md">
                <input className="form-control" type="file" name="prodImages" id="prodImages" onChange={handleImagesChange} placeholder="Choose product image" multiple />
              </div>
            </div>
            <div className="col-12 col-md-4 mb-3">
              {imageInputShow && <img src={`${serverURL}${product.image}`} alt="product" style={{ width: '100px', height: '100px' }} />}
            </div>
            <div className="col-12 col-md-8 mb-3">
              {multiImageInputShow &&
                images.map((image, index) => (
                  <div className="d-flex flex-columns justify-cotent-center align-items-center w-100">
                    <img key={image} src={`${serverURL}${image}`} className="mx-2 mb-3" alt="product" style={{ width: '100px', height: '100px' }} />
                    <button className="btn btn-default bg-danger text-white fw-normal d-block"
                      onClick={() => deleteImages(index)}>
                      <i class="bi bi-x-lg"></i>
                    </button>
                  </div>
                ))
              }
            </div>
            {/* <div className="col-6 mb-3">
              <input class="file-upload-input form-control" type='file' onChange={handleImageChangeNew} />
            </div>
            <div className="col-6 mb-3"></div>
            <div className="col-6 mb-3">
              <div className="file-upload-content position-relative w-25">
                <img class="file-upload-image position-relative" src="#" alt="product" style={{ width: '100px', height: '100px' }} />
                <button type="button" onClick={removeUpload} class="remove-image position-absolute start-100 top-0 align-middle">Remove</button>
              </div>
            </div> */}
          </div>
          <div className="mt-2">
            <button className="btn btn-primary" type="button" onClick={createNewProduct}>Add Product</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProduct;

/*
<br />
<span className="text-success">
{successMessage}
</span> 
<span className="text-danger">
{errorMessage}
</span>
<br /> 
<button className="btn btn-primary" type="button" onClick={uploadImage}>Upload Image</button>
<button className="btn btn-primary" type="button" onClick={uploadMultipleImage}>Upload Image</button>

<div className="d-inline col-6 mb-3">
          <label className="d-block mb-2">Product Featured</label>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" role="switch" name="featured" id="featured" value={product.featured} onChange={handleChange} />
            <label className="form-check-label" htmlFor="featured">
              Featured
            </label>
          </div>
        </div>

*/