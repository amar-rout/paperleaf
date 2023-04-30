import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

import './Coupons.css';

function Coupon() {

  const initialData = {
    couponName: '',
    status: 'Active',
    discountType: '',
    discountAmount: 0,
    discountPercentage: 0,
    minPurchaseAmount: 0,
    startDate: '',
    endDate: '',
    published: 'true'
  };
  const [couponData, setCouponData] = useState(initialData);
  const [coupons, setCoupons] = useState([]);

  const couponURL = "/api/coupons/";

  let currINR = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  });

  useEffect(() => {
    getCoupon();
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCouponData(prev => ({ ...prev, [name]: value }));
  }
  const handleReset = () => { setCouponData(initialData) }

  const getCoupon = () => {
    axios.get(`${couponURL}/all`)
      .then(response => {
        setCoupons(response.data);
        // console.log(coupons);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemInCoupons = coupons.find((item) => item.couponName === couponData.couponName);
    // console.log(itemInCategories);
    if (itemInCoupons) {
      toast.dismiss();
      toast.error(`Coupon ${couponData.couponName} is already exist.`)
    } else {
      axios.post(couponURL, couponData)
        .then(response => {
          toast.dismiss();
          toast.success(`${couponData.couponName} added successfully.`);
        }).catch(error => {
          if (error.response) {
            toast.dismiss();
            toast.error(error.response.data.message);
          } else if (error.request) {
            // Handle proper error messages
          } else {
            toast.dismiss();
            toast.error(error.message);
          }
        });
    }
  }

  const handleStatus = (id, couponName, status) => {
    let statusVal;
    console.log("status: " + status);
    if (status && status === "Active") {
      statusVal = "Inactive";
    } else {
      statusVal = "Active";
    }
    let statusData = { "couponName": couponName, "status": statusVal };
    console.log(statusData);
    axios.patch(`${couponURL}coupon/${id}`, statusData)
      .then(response => {
        toast.dismiss();
        let message = statusVal === "Active" ? "activated" : "deactivated";
        toast.success(`Coupon ${couponName} ${message}`);
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
  }

  const handlePublished = (id, couponName, published) => {
    let publishVal;
    console.log("Published: " + published);
    if (published && published === true) {
      publishVal = "false";
    } else {
      publishVal = "true";
    }
    let publishedData = { "couponName": couponName, "published": publishVal };
    console.log(publishedData);
    axios.patch(`${couponURL}coupon/${id}`, publishedData)
      .then(response => {
        toast.dismiss();
        let message = publishVal === "true" ? "Published" : "Unpublished";
        toast.success(`Coupon ${couponName} ${message}`);
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
  }

  const handleDelete = (id) => {
    axios.delete(`${couponURL}/${id}`)
      .then(response => {
        const itemInCategories = coupons.find((item) => item._id === id);
        toast.dismiss();
        toast.success(`${itemInCategories.couponName} deleted successfully.`);
      }).catch(error => {
        if (error.response) {
          toast.dismiss();
          toast.error(error.response.data.message);
        } else if (error.request) {
          // Handle proper error messages
        } else {
          toast.dismiss();
          toast.error(error.message);
        }
      })
  }

  return (
    <div className='container p-5'>
      {/* Add Coupon */}
      <div className="card  my-5 mx-auto" >
        <div className="card-header py-1 ">
          <h4 className="fw-bold">Add Coupon</h4>
        </div>
        <div className="card-body bg-light">
          <form onSubmit={handleSubmit} onReset={handleReset} >
            <div className={'row row-cols-lg-auto g-3 align-items-center justify-content-start'}>
              <div className="col-12">
                <label for="couponName" class="form-label">Coupon name<sup className='text-danger'>*</sup></label>
                <input
                  type="text" id='couponName'
                  className="form-control"
                  placeholder="Enter coupon couponName"
                  name="couponName"
                  value={couponData.couponName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12">
                <label for="discountType" class="form-label">Discount type<sup className='text-danger'>*</sup></label>
                <select
                  className="form-select"
                  name="discountType" id='discountType'
                  value={couponData.discountType}
                  // defaultValue=""
                  onChange={handleChange}
                  required
                >
                  <option value="">-- Disc type --</option>
                  <option value="Percentage">Percentage</option>
                  <option value="Amount">Amount</option>
                </select>
              </div>

              {couponData.discountType === 'Percentage' ?
                <div className="col-12">
                  <label for="discountPercentage" class="form-label">Discount %<sup className='text-danger'>*</sup></label>
                  <div class="input-group">
                    <span class="input-group-text">%</span>
                    <input
                      type="number" id='discountPercentage'
                      className="form-control shadow-none"
                      placeholder="%"
                      name="discountPercentage"
                      min={0}
                      max={100}
                      value={couponData.discountPercentage}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                :
                <div className="col-12">
                  <label for="discountAmount" class="form-label">Discount Amount(₹)<sup className='text-danger'>*</sup></label>
                  <div class="input-group">
                    <span class="input-group-text">₹</span>
                    <input
                      type="number" id='discountAmount'
                      className="form-control"
                      placeholder="₹"
                      min={0.00}
                      max={10000.00}
                      step={0.05}
                      name="discountAmount"
                      value={couponData.discountAmount}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              }
              {/* minPurchaseAmount */}
              <div className="col-12">
                <label for="minPurchaseAmount" class="form-label">Min Purchase Amount(₹)<sup className='text-danger'>*</sup></label>
                <div class="input-group">
                  <span class="input-group-text">₹</span>
                  <input
                    type="number" id='minPurchaseAmount'
                    className="form-control"
                    placeholder="₹"
                    min={0.00}
                    max={10000.00}
                    step={0.05}
                    name="minPurchaseAmount"
                    value={couponData.minPurchaseAmount}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-12">
                <label for="startDate" class="form-label">Start Date<sup className='text-danger'>*</sup></label>
                <input
                  type="date" id='startDate'
                  className="form-control shadow-none"
                  placeholder="Coupon start date"
                  name="startDate"
                  min={new Date().toISOString().split("T")[0]}
                  value={couponData.startDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12">
                <label for="endDate" class="form-label">End Date<sup className='text-danger'>*</sup></label>
                <input
                  type="date" id='endDate'
                  className="form-control shadow-none"
                  placeholder="Coupon expiry date"
                  name="endDate"
                  min={couponData.startDate}
                  value={couponData.endDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12">
                <label for="status" class="form-label">Status<sup className='text-danger'>*</sup></label>
                <select
                  className="form-select"
                  name="status" id='status'
                  value={couponData.status}
                  onChange={handleChange}
                  required
                >
                  <option value="">-- Select --</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Deactive</option>
                </select>
              </div>
              <div className="col-12">
                <label for="published" class="form-label">Published</label>
                <select
                  className="form-select"
                  name="published" id='published'
                  value={couponData.published}
                  defaultChecked={true}
                  onChange={handleChange}
                  required
                >
                  <option value="">-- Select --</option>
                  <option value="true">Active</option>
                  <option value="false">Deactive</option>
                </select>
              </div>
              <div className='col-12'>
                <div className='mt-4'>
                  <button type="reset" className="btn btn-secondary me-2 px-4">Clear</button>
                  <button type="submit" className="btn btn-success ms-2">Add Coupon</button>
                </div>
              </div>
            </div>

          </form>
        </div>
      </div>
      {/* All Coupon */}
      <div className="card my-5 mx-auto" >
        <div className="card-header py-1 ">
          <h4 className="fw-bold">All Coupon</h4>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table align-items-center text-center">
              <thead className="thead-light ">
                <tr>
                  {/* <th>Id</th> */}
                  <th>Coupon</th>
                  <th>Status</th>
                  <th>Discount Type</th>
                  <th>Discount Amount(₹)</th>
                  <th>Discount Percentage %</th>
                  <th>Min Purch Amount(₹)</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Published</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {coupons.map((coupon) => {
                  const { _id, couponName, status, discountType, discountAmount, discountPercentage, minPurchaseAmount, startDate, endDate, published } = coupon;

                  return (
                    <tr key={_id}>
                      {/* <th>{_id}</th> */}
                      <td>{couponName}</td>
                      <td>
                        <div className="form-check form-switch d-flex justify-content-center align-items-center">
                          <input
                            className="form-check-input me-1"
                            type="checkbox"
                            role="switch"
                            id="status"
                            
                            defaultChecked={status === "Active"}
                            
                            onChange={() => handleStatus(_id, couponName, status)}
                          // disabled={ adminData.userType !== "super admin" && id <= 4}
                          />
                        </div>
                      </td>
                      <td>{discountType}</td>
                      <td>{currINR.format(discountAmount)}</td>
                      <td>{discountPercentage}</td>
                      <td>{minPurchaseAmount}</td>
                      <td>{new Date(startDate).toLocaleDateString("en-IN")}</td>
                      <td>{new Date(endDate).toLocaleDateString("en-IN")}</td>
                      {/* { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; */}
                      <td>
                        <div className="form-check form-switch d-flex justify-content-center align-items-center">
                          <input
                            className="form-check-input me-1"
                            type="checkbox"
                            role="switch"
                            id="status"
                            defaultChecked={published}
                            // value={published}
                            onChange={() => handlePublished(_id, couponName, published)}
                          />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex justify-content-center align-items-center">
                          <button type="button" className="btn btn-sm btn-light me-1"
                            onClick={() => handleDelete(_id)}>
                            Edit
                          </button>
                          <button type="button" className="btn btn-sm btn-danger ms-1"
                            onClick={() => handleDelete(_id)}>
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Coupon;


/* <div className='col-12 d-block'>
              <span className='d-block mb-2'>Discount type</span>
              <label class="switch d-block">
                <input type="checkbox" name="discountType" onChange={handleChange} id="togBtn" />
                <div class="slider round">
                  <span class="on">Percentage</span>
                  <span class="off">Amount</span>
                </div>
              </label>
            </div> */
            // value={() => {
                            // console.log(status);
                            // status === "Active" ? 'true' : 'false';  
                            // }}
            /* <label
                            className="form-check-label text-dark ms-1"
                            htmlFor="status"
                          >
                            {status ? <small>Activated</small> : <small>Dectivated</small>}
                          </label> */

                          /* <select
                            className="form-select"
                            couponName="status"
                            value={status}
                            onChange={() => handleStatus({ _id, status })}
                          >
                            <option value="" selected>-- Select Status --</option>
                            <option value="true">Active</option>
                            <option value="false">Deactive</option>
                          </select> */
/* <label
// defaultChecked={status}
                            //  coupon.status === "Active" ? true : false }
                            className="form-check-label text-dark ms-1"
                            htmlFor="status"
                          >
                            {status ? <small>Activated</small> : <small>Dectivated</small>}
                          </label> */