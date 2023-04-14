import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="container px-5 mx-auto">
      <h4 className="fw-bold text-muted my-4">Dashboard Overview</h4>
      <div className="row">
        <div className='col-12 col-md-4'>
          <div className="rounded bg-primary d-flex justify-content-center align-items-center text-center">
            <div className="p-4 w-full p-6 rounded-lg text-white dark:text-green-100 bg-teal-500">
              <div className="text-center inline-block fs-4 text-white dark:text-green-100 bg-teal-500">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 5l-8-4-8 4 8 4 8-4zM8 2.328l5.345 2.672-5.345 2.672-5.345-2.672 5.345-2.672zM14.398 7.199l1.602 0.801-8 4-8-4 1.602-0.801 6.398 3.199zM14.398 10.199l1.602 0.801-8 4-8-4 1.602-0.801 6.398 3.199z"></path></svg>
              </div>
              <div>
                <p className="mb-3 text-base font-medium text-gray-50 dark:text-gray-100">Today Order</p>
                {/* <p className="text-3xl font-bold leading-none text-gray-50 dark:text-gray-50">₹0</p> */}
                <h4 className="text-3xl font-bold leading-none text-gray-50 dark:text-gray-50">₹0</h4>
              </div>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-4'>
          <div className="rounded bg-success d-flex justify-content-center align-items-center text-center">
            <div className="p-4 w-full p-6 rounded-lg text-white dark:text-green-100 bg-blue">
              <div className="text-center inline-block fs-4 text-white dark:text-green-100 bg-blue-500">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
              </div>
              <div>
                <p className="mb-3 text-base font-medium text-gray-50 dark:text-gray-100">This Month</p>
                {/* <p className="text-3xl font-bold leading-none text-gray-50 dark:text-gray-50">₹3297.00</p> */}
                <h4 className="text-3xl font-bold leading-none text-gray-50 dark:text-gray-50">₹0</h4>
              </div>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-4'>
          <div className="rounded d-flex justify-content-center align-items-center text-center" style={{ 'backgroundColor': '#0694a2' }}>
            <div className="p-4 w-full p-6 rounded-lg text-white dark:text-green-100 bg-green-500">
              <div className="text-center inline-block fs-4 text-white dark:text-green-100 bg-green-500">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2h-13c-0.825 0-1.5 0.675-1.5 1.5v9c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-9c0-0.825-0.675-1.5-1.5-1.5zM1.5 3h13c0.271 0 0.5 0.229 0.5 0.5v1.5h-14v-1.5c0-0.271 0.229-0.5 0.5-0.5zM14.5 13h-13c-0.271 0-0.5-0.229-0.5-0.5v-4.5h14v4.5c0 0.271-0.229 0.5-0.5 0.5zM2 10h1v2h-1zM4 10h1v2h-1zM6 10h1v2h-1z"></path></svg>
              </div>
              <div>
                <p className="mb-3 text-base font-medium text-gray-50 dark:text-gray-100">Total Order</p>
                <h4 className="text-3xl font-bold leading-none text-gray-50 dark:text-gray-50">₹46240.35</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Second row */}
      <div className="row my-4">
        <div className='col-12 col-md-3'>
          <div className="rounded overflow-hidden bg-white text-center">
            <div className="p-4 d-flex flex-1 align-items-center shadow w-100 rounded">
              <div className="d-flex align-items-center justify-content-center p-3 h-12 w-12 text-center text-danger fs-4">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
              </div>
              <div>
                <p className="mb-1 fs-6 small fw-medium text-muted">
                  <span>Total Order</span>
                </p>
                <p className="fs-2 fw-bold text-muted">347</p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-3'>
          <div className="min-w-0 rounded-lg ring-1 ring-black ring-opacity-4 overflow-hidden bg-white dark:bg-gray-800 flex h-full">
            <div className="p-4 flex items-center border border-gray-200 dark:border-gray-800 w-full rounded-lg">
              <div className="d-flex align-items-center justify-content-center rounded-circle h-12 w-12 text-center text-primary fs-4">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
              </div>
              <div>
                <p className="mb-1 text-sm font-medium text-gray-600 dark:text-gray-400">
                  <span>Order Pending</span>
                  <span className="text-red-400 text-sm font-semibold">(10778.90)</span>
                </p>
                <p className="text-2xl font-bold leading-none text-gray-600 dark:text-gray-200">75</p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-3'>
          <div className="min-w-0 rounded-lg ring-1 ring-black ring-opacity-4 overflow-hidden bg-white dark:bg-gray-800 flex h-full">
            <div className="p-4 flex items-center border border-gray-200 dark:border-gray-800 w-full rounded-lg">
              <div className="flex items-center justify-center p-3 rounded-full h-12 w-12 text-center mr-4 text-lg text-teal-600 dark:text-teal-100 bg-teal-100 dark:bg-teal-500">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
              </div>
              <div>
                <p className="mb-1 text-sm font-medium text-gray-600 dark:text-gray-400">
                  <span>Order Processing</span>
                </p>
                <p className="text-2xl font-bold leading-none text-gray-600 dark:text-gray-200">45</p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-3'>
          <div className="min-w-0 rounded-lg ring-1 ring-black ring-opacity-4 overflow-hidden bg-white dark:bg-gray-800 flex h-full">
            <div className="p-4 flex items-center border border-gray-200 dark:border-gray-800 w-full rounded-lg">
              <div className="flex items-center justify-center p-3 rounded-full h-12 w-12 text-center mr-4 text-lg text-green-600 dark:text-green-100 bg-green-100 dark:bg-green-500">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div>
                <p className="mb-1 text-sm font-medium text-gray-600 dark:text-gray-400">
                  <span>Order Delivered</span>
                </p>
                <p className="text-2xl font-bold leading-none text-gray-600 dark:text-gray-200">226</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Third Row */}
      {/* <div className="row"> */}
      {/* <div className="col-md-6 h-100 grid-margin stretch-card">
              <div className="card tale-bg">
                <div className="card-people mt-auto">
                  <img src="../../images/dashboard/people.svg" alt="people" />
                  <div className="weather-info">
                    <div className="d-flex">
                      <div>
                        <h2 className="mb-0 font-weight-normal"><i className="icon-sun me-2"></i>31<sup>C</sup></h2>
                      </div>
                      <div className="ms-2">
                        <h4 className="location font-weight-normal">Chicago</h4>
                        <h6 className="font-weight-normal">Illinois</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>e
            </div> */}
      {/* <div className="col-md-6 grid-margin transparent">
              <div className="row"> */}
      <div className="row">
        <div className="col-md-3 mb-4 stretch-card transparent">
          <div className="card card-tale">
            <div className="card-body">
              <div className='d-flex align-items-center'>
                <div className='px-4 text-white fs-3'>
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                </div>
                <div>
                  <p className="mb-0">Total Order</p>
                  <p className="fs-3">345</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4 stretch-card transparent">
          <div className="card card-dark-blue">
            <div className="card-body">
            <div className='d-flex align-items-center'>
                <div className='px-4 text-white fs-3'>
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
                </div>
                <div>
                  <p className="mb-0">Order Pending</p>
                  <p className="fs-3">75</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4 mb-lg-0 stretch-card transparent">
          <div className="card card-light-blue">
            <div className="card-body">
              <p className="mb-2">Order Processing</p>
              <p className="fs-3">40</p>
              {/* <p>2.00% (30 days)</p> */}
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4 mb-lg-0 stretch-card transparent">
          <div className="card card-light-blue">
            <div className="card-body">
              <p className="mb-2">Order Delivered</p>
              <p className="fs-3">44</p>
              {/* <p>2.00% (30 days)</p> */}
              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
            </div>
          </div>
        </div>
        {/* <div className="col-md-3 stretch-card transparent">
          <div className="card card-light-danger">
            <div className="card-body">
              <p className="mb-4">Number of Clients</p>
              <p className="fs-3 mb-2">47033</p>
              <p>0.22% (30 days)</p>
            </div>
          </div>
        </div> */}
        {/* </div>
            </div> */}
      </div>
      {/* end */}
    </div>
  )
}

export default Dashboard