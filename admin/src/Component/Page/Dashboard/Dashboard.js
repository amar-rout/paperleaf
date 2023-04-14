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
      {/* Details */}
      <div className="row my-4">
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
        <div className="col-md-3 mb-4 stretch-card transparent">
          <div className="card card-light-blue">
            <div className="card-body">
              <div className='d-flex align-items-center'>
                <div className='px-4 text-white fs-3'>
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                </div>
                <div>
                  <p className="mb-0">Order Processing</p>
                  <p className="fs-3">345</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4 stretch-card transparent">
          <div className="card card-light-danger">
            <div className="card-body">
              <div className='d-flex align-items-center'>
                <div className='px-4 text-white fs-3'>
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <p className="mb-0">Order Delivered</p>
                  <p className="fs-3">345</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Order Details */}
      <div class="row">
        <div class="col-12">
          <div class="table-responsive">
            <div id="example_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer"><div class="row"><div class="col-sm-12 col-md-6"></div><div class="col-sm-12 col-md-6"></div></div><div class="row"><div class="col-sm-12"><table id="example" class="display expandable-table dataTable no-footer" style={{ width: '100%' }} role="grid">
              <thead>
                <tr role="row">
                  <th class="select-checkbox sorting_disabled" rowspan="1" colspan="1" aria-label="Quote#" style={{ width: '86px' }}>Order#</th>
                  {/* <th class="sorting_asc" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Product: activate to sort column descending" aria-sort="ascending">Name</th> */}
                  {/* style={{ width: '93px' }} */}
                  <th class="sorting me-2" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending">Date</th>
                  {/* style={{ width: '113px' }} */}
                  <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Policy holder: activate to sort column ascending">Order Status</th>
                  {/* style={{ width: '107px' }} */}
                  <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Premium: activate to sort column ascending">Payment</th>
                  <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Premium: activate to sort column ascending">Payment Status</th>
                  {/* style={{ width: '75px' }} */}
                  <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending">Actions</th>
                  {/* style={{ width: '75px' }} */}
                </tr>
              </thead>
              <tbody>
                <tr class="odd">
                  <td class="select-checkbox">
                  <span className='me-5'>140423000201</span>
                  </td>
                  <td>14-04-23</td>
                  <td>
                    <span className='badge rounded-pill bg-success'>Delivered</span>
                  </td>
                  <td>Card</td>
                  <td>
                    <span className='badge rounded-pill bg-success'>Success</span>
                  </td>
                  <td class="details-control">
                    <span>
                      <button className='btn btn-light m-0 p-0 px-2'>Show Details</button>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
            </div>
              <div class="row"><div class="col-sm-12 col-md-5"></div><div class="col-sm-12 col-md-7"></div></div></div>
          </div>
        </div>
      </div>
      {/* Order Details */}
      {/* end */}
    </div >
  )
}

export default Dashboard