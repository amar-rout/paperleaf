import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Multiselect } from 'multiselect-react-dropdown';
import axios from 'axios';
import { toast } from 'react-toastify';

const EditCollection = () => {
  const navigate = useNavigate();

  const [collections, setCollections] = useState([]);
  const { id } = useParams();
  const initialCollection = {
    name: "",
    products: [],
    coupon: "",
    status: true,
    published: true
  };
  const [collection, setColletion] = useState(initialCollection);
  const [products, setProducts] = useState([]);
  const [finalProducts, setFinalProducts] = useState([]);
  const [coupons, setCoupons] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedCoupon, setSelectedCoupon] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setColletion({
      ...collection,
      [name]: value
    });
  };
  const server_url = process.env.REACT_APP_SERVER_URL;

  // const getCoupons = () => {
  //   axios.get('/api/coupons/all')
  //     .then(response => {
  //       setCoupons(response.data);
  //     })
  //     .catch(error => {
  //       if (error.response) {
  //         console.error(error.response.data.message)
  //       } else if (error.request) {
  //       } else {
  //         console.error(error.message)
  //       }
  //     })
  // };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("admin_user"));
    const config = {
      "headers": {
        "authorization": `Bearer ${user.token}`,
      }
    }
    axios.get(`${server_url}/api/collection/`, config)
      .then(response => {
        toast.dismiss();
        if (response.data) {
          setCollections(response.data);
        }
      }).catch(error => {
        if (error.response) {
          toast.dismiss();
          toast.error(error.response.data.message);
        } else if (error.request) {
          toast.dismiss();
          toast.error(error.request);
        } else {
          toast.dismiss();
          toast.error(error.message);
        }
      })

    axios.get(`${server_url}/api/collection/${id}`, config)
      .then(response => {
        toast.dismiss();
        if (response.data) {
          setColletion(response.data);
          let coupon = [];
          coupon.push({"couponName" : response.data.coupon});
          setSelectedCoupon(coupon);
        }
      }).catch(error => {
        if (error.response) {
          toast.dismiss();
          toast.error(error.response.data.message);
        } else if (error.request) {
          toast.dismiss();
          toast.error(error.request);
        } else {
          toast.dismiss();
          toast.error(error.message);
        }
      })

    axios.get(`${server_url}/api/products/all`)
      .then(response => {
        setProducts(response.data);
      }).catch(error => {
        if (error.response) {
          console.error(error.response.data.message)
        } else if (error.request) {
        } else {
          console.error(error.message)
        }
      });

    axios.get(`${server_url}/api/coupons/all`)
      .then(response => {
        setCoupons(response.data);
      })
      .catch(error => {
        if (error.response) {
          console.error(error.response.data.message)
        } else if (error.request) {
        } else {
          console.error(error.message)
        }
      });

    // const filterProducts = () => {
    // products.forEach((product) => {
    //   console.log("Product name : " + product.name);
    //   for (let i = 0; i < collections.length; i++) {
    //     console.log("Collection name : " + product.name);
    //     const filtered = collections[i].products.filter((prod) => {
    //       return prod.name !== product.name;
    //     });
    //     setFinalProducts([...products, filtered]);
    //   }
    // });

    // }
    // console.log(products);


  }, [collections, id, products, server_url]);

  useEffect(() => {
    // let i = 0;
    // collections.forEach(collection => {
    //   collection.products.forEach(prod => {
    //     products.forEach((product) => {
    //       if (product.name === prod.name) {
    //         products.splice(i, 1);
    //         setFinalProducts(products);
    //       }
    //       i++;
    //     });
    //   });
    // });

    products.sort((a, b) => {
      let aname = a.name.toLowerCase();
      let bname = b.name.toLowerCase();
      if (aname < bname) {
        return -1;
      }
      else if (aname > bname) {
        return 1;
      }
      else {
        return 0;
      }
    });
    let temp_prod = products;
    for (let i_c = 0; i_c < collections.length; i_c++) {
      for (let i_pc = 0; i_pc < collections[i_c].products.length; i_pc++) {
        const prod = collections[i_c].products[i_pc];
        for (let index = 0; index < temp_prod.length; index++) {
          const element = temp_prod[index];
          if (element.name === prod.name) {
            temp_prod.splice(index, 1);
          }
        }
      }
    }
    // setFinalProducts(temp_prod);
  }, [collections, products])


  const handleUpdateCollection = () => {
    const user = JSON.parse(localStorage.getItem("admin_user"));
    axios.patch(`${server_url}/api/collection/`, collection, {
      "headers": {
        "authorization": `Bearer ${user.token}`,
      }
    })
      .then(response => {
        toast.dismiss();
        if (response.data) {
          toast.success(response.data);
          navigate("/collections");
        }
      }).catch(error => {
        if (error.response) {
          toast.dismiss();
          toast.error(error.response.data.message);
        } else if (error.request) {
          toast.dismiss();
          toast.error(error.request);
        } else {
          toast.dismiss();
          toast.error(error.message);
        }
      })
  };

  return (
    <div className='container-fluid pt-5 mt-5'>
      <div className="card shadow">
        <div className="card-header bg-info">
          <p className='p-0 m-0 fs-4'>Update Collection</p>
        </div>
        <div className="card-body">
          {/* <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a> */}
          <div className='row'>
            <div className='col-12 col-md-6 mb-3'>
              <label htmlFor="name" className="form-label">Collection name<sup className='text-danger'>*</sup></label>
              <input
                type="text" id='name'
                className="form-control py-2"
                placeholder="Collection name"
                name="name"
                defaultValue={collection.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className='col-12 col-md-6 mb-3'>
              <label className="form-label">Coupon <sup className='text-danger'>*</sup></label>
              <Multiselect
                options={coupons} // Options to display in the dropdown
                selectedValues={selectedCoupon} // Preselected value to persist in dropdown
                singleSelect={true}
                onSelect={(selectedList, selectedItem) => {
                  // selectedProducts.push(selectedItem.name);
                  // setSelectedProducts((products) => [...products, selectedList]);
                  setSelectedCoupon(selectedList);
                  setColletion({
                    ...collection,
                    coupon: selectedItem.couponName
                  });
                  console.log(selectedCoupon);
                }} // Function will trigger on select event
                onRemove={(selectedList, removedItem) => {
                  // setSelectedProducts((products) => [...products, selectedList]);
                  setSelectedCoupon(selectedList);
                  setColletion({
                    ...collection,
                    coupon: removedItem.couponName
                  });
                  console.log(selectedCoupon);
                }} // Function will trigger on remove event
                displayValue="couponName" // Property name to display in the dropdown options
              />
            </div>
            {/* <div className='col-12 mb-3'>
              {
                selectedProducts.map((product) => {
                  return (
                    <span>{product.name} ,&nbsp;</span>
                  );
                })
              }
            </div> */}
            <div className='col-12 mb-3'>
              <label className="form-label">Products <sup className='text-danger'>*</sup></label>
              <Multiselect
                options={products} // Options to display in the dropdown
                selectedValues={collection.products} // Preselected value to persist in dropdown
                onSelect={(selectedList, selectedItem) => {
                  // selectedProducts.push(selectedItem.name);
                  setSelectedProducts(selectedList);
                  // setSelectedProducts(selectedList);
                  setColletion({
                    ...collection,
                    products: selectedList
                  });
                  // console.log(selectedProducts);
                }} // Function will trigger on select event
                onRemove={(selectedList, removedItem) => {
                  // setSelectedProducts((products) => [...products, selectedList]);
                  setSelectedProducts(selectedList);
                  // setSelectedProducts(selectedList);
                  setColletion({
                    ...collection,
                    products: selectedList
                  });
                  // console.log(selectedProducts);
                }} // Function will trigger on remove event
                showArrow = {true}
                displayValue="name" // Property name to display in the dropdown options
              />
            </div>
          </div>
        </div>
        {/* <div>
          {
            finalProducts.map((product, index) => {
              return (
                <p className='badge bg-dark text-light py-2 fw-normal fs-6 my-1 ms-2'>{index += 1}. {product.name} <br /></p>
              );
            })
          }
        </div> */}
        <div className="card-footer">
          <div className="d-flex justify-content-end align-items-end gap-2">
            <button className='btn btn-outline-danger btn-lg btn-md fs-6 small' onClick={() => navigate("/collections")}>Cancel</button>
            <button className='btn btn-success btn-lg btn-md fs-6 small' onClick={handleUpdateCollection}>Update</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditCollection;
