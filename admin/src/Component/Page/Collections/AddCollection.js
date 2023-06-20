import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Multiselect } from 'multiselect-react-dropdown';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddCollection = () => {
  const navigate = useNavigate();
  const initialCollection = {
    name: "",
    products: [],
    coupon: "",
    status: true,
    published: true
  };
  const [collection, setColletion] = useState(initialCollection);
  const [products, setProducts] = useState([]);
  const [coupons, setCoupons] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedCoupon, setSelectedCoupon] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setColletion({
      ...collection,
      [name]: value
    });
  }

  const getProducts = () => {
    axios.get('/api/products/all')
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
  };

  const getCoupons = () => {
    axios.get('/api/coupons/all')
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
      })
  };


  useEffect(() => {
    getProducts();
    getCoupons();
  }, [getProducts, getCoupons]);

  
  const handleAddCollection = () => {
    console.log(selectedProducts);
    console.log(selectedCoupon);
    const user = JSON.parse(localStorage.getItem("admin_user"));
    axios.post('api/collection/', collection, {
      "headers" : {
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
      <div className="card">
        <div className="card-header bg-info">
          <p className='p-0 m-0 fs-4'>Add Collection</p>
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
                className="form-control"
                placeholder="Collection name"
                name="name"
                onChange={handleChange}
                required
              />
            </div>
            <div className='col-12 col-md-6 mb-3'>
              <label className="form-label">Coupon <sup className='text-danger'>*</sup></label>
              <Multiselect
                options={coupons} // Options to display in the dropdown
                // selectedValues = {} // Preselected value to persist in dropdown
                singleSelect={true}
                onSelect={(selectedList, selectedItem) => {
                  // selectedProducts.push(selectedItem.name);
                  // setSelectedProducts((products) => [...products, selectedList]);
                  setSelectedCoupon(selectedItem.couponName);
                  setColletion({
                    ...collection,
                    coupon: selectedItem.couponName
                  });
                  // console.log(selectedCoupon);
                }} // Function will trigger on select event
                onRemove={(selectedList, removedItem) => {
                  // setSelectedProducts((products) => [...products, selectedList]);
                  setSelectedCoupon(removedItem.couponName);
                  setColletion({
                    ...collection,
                    coupon: removedItem.couponName
                  });
                  // console.log(selectedCoupon);
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
                // selectedValues = {} // Preselected value to persist in dropdown
                onSelect={(selectedList, selectedItem) => {
                  // selectedProducts.push(selectedItem.name);
                  // setSelectedProducts((products) => [...products, selectedList]);
                  setSelectedProducts(selectedList);
                  setColletion({
                    ...collection,
                    products: selectedList
                  });
                  // console.log(selectedProducts);
                }} // Function will trigger on select event
                onRemove={(selectedList, removedItem) => {
                  // setSelectedProducts((products) => [...products, selectedList]);
                  setSelectedProducts(selectedList);
                  setColletion({
                    ...collection,
                    products: selectedList
                  });
                  // console.log(selectedProducts);
                }} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
              />
            </div>
          </div>

        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-end align-items-end gap-2">
            <button className='btn btn-danger btn-lg btn-md fs-6 small' onClick={() => navigate("/collections")}>Cancel</button>
            <button className='btn btn-success btn-lg btn-md fs-6 small' onClick={handleAddCollection}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddCollection;
