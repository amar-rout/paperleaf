import React from 'react'

function Orders() {
  return (
    <>
      <div className="container my-4 px-5">
        {/* <div className="row">
          <div className="col-12 my-4">
            <div className="page-title-box d-flex align-items-center justify-content-between"><h4 className="mb-0">Orders</h4>
              <div className="page-title-right">
                <nav className="" aria-label="breadcrumb">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item"><a href="/ecommerce-orders">Ecommerce</a></li>
                    <li className="active breadcrumb-item" aria-current="page">Orders</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div> */}
        <div className="row"><div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="mb-0">Orders</h4>
            </div>
            <div className="card-body">
              <div className="mb-2 row">
                <div className="col-sm-4">
                  <div className="search-box me-2 mb-2 d-inline-block">
                    <div className="position-relative">
                      <label htmlFor="search-bar-0" className="search-label">
                        <span id="search-bar-0-label" className="sr-only">Search this table</span>
                        <input id="search-bar-0" type="text" aria-labelledby="search-bar-0-label" className="form-control " placeholder="Search" value="" />
                      </label>
                      <i className="bx bx-search-alt search-icon"></i>
                    </div>
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="text-sm-end">
                    <button type="button" className="rounded-pill mb-2 me-2 btn btn-success">
                      <i className="mdi mdi-plus me-1"></i> Add New Order</button>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <div className="react-bootstrap-table">
                  <table className="table table align-middle table-nowrap table-check">
                    <thead className="table-light"><tr>
                      <th className="selection-cell-header" data-row-selection="true">
                        <input type="checkbox" className="selection-input-4" />
                      </th>
                      <th tabIndex="0" aria-label="Order ID sort desc" className="sortable">Order ID<span className="caret-4-desc"></span></th>
                      <th tabIndex="0" aria-label="Date sortable" className="sortable">Date<span className="order-4"></span>
                      </th>
                      <th tabIndex="0" aria-label="Billing Name sortable" className="sortable">Billing Name<span className="order-4"></span></th>
                      <th tabIndex="0" aria-label="Total sortable" className="sortable">Total<span className="order-4"></span></th>
                      <th tabIndex="0" aria-label="Payment Status sortable" className="sortable">Payment Status<span className="order-4"></span></th>
                      <th tabIndex="0">Invoice</th><th tabIndex="0">Action</th></tr></thead>
                    <tbody><tr><td className="selection-cell">
                      <input type="checkbox" className="selection-input-4" /></td>
                      <td><a className="text-body fw-bold" href="/ecommerce-orders">#NZ1572</a></td>
                      <td>04 Apr, 2020</td>
                      <td>Lasse C. Overgaard</td>
                      <td>₹172</td>
                      <td><span className="badge bg-success rounded-pill">Paid</span></td>
                      <td><button className="btn btn-light rounded-pill">Invoice <i class="bi bi-download"></i></button></td>
                      <td><a className="me-3 text-primary" href="/ecommerce-orders"><i className="mdi mdi-pencil font-size-18"></i></a>
                        <a className="text-danger" href="/ecommerce-orders">
                          <i className="mdi mdi-trash-can font-size-18">
                          </i>
                        </a>
                      </td>
                    </tr>
                      <tr><td className="selection-cell">
                        <input type="checkbox" className="selection-input-4" /></td>
                        <td>
                          <a className="text-body fw-bold" href="/ecommerce-orders">#NZ1571</a></td><td>03 Apr, 2020</td>
                        <td>Johan E. Knudsen</td><td>₹165</td>
                        <td><span className="badge bg-warning rounded-pill">unpaid</span></td>
                        <td><button className="btn btn-light rounded-pill">Invoice <i class="bi bi-download"></i></button></td>
                        <td><a className="me-3 text-primary" href="/ecommerce-orders">
                          <i className="mdi mdi-pencil font-size-18"></i></a>
                          <a className="text-danger" href="/ecommerce-orders">
                            <i className="mdi mdi-trash-can font-size-18"></i></a></td></tr>
                      <tr><td className="selection-cell">
                        <input type="checkbox" className="selection-input-4" /></td>
                        <td><a className="text-body fw-bold" href="/ecommerce-orders">#NZ1570</a></td><td>03 Apr, 2020</td>
                        <td>Lasse C. Overgaard</td><td>₹146</td>
                        <td><span className=" badge bg-success rounded-pill">Paid</span></td>
                        <td><button className="btn btn-light rounded-pill">Invoice <i class="bi bi-download"></i></button></td>
                        <td><a className="me-3 text-primary" href="/ecommerce-orders">
                          <i className="mdi mdi-pencil font-size-18"></i></a>
                          <a className="text-danger" href="/ecommerce-orders">
                            <i className="mdi mdi-trash-can font-size-18"></i></a></td></tr>
                      <tr><td className="selection-cell">
                        <input type="checkbox" className="selection-input-4" /></td>
                        <td><a className="text-body fw-bold" href="/ecommerce-orders">#NZ1569</a></td>
                        <td>02 Apr, 2020</td><td>Nikolaj S. Henriksen</td><td>₹183</td>
                        <td><span className=" badge bg-success rounded-pill">Paid</span></td>
                        <td><button className="btn btn-light rounded-pill">Invoice <i class="bi bi-download"></i></button></td>
                        <td><a className="me-3 text-primary" href="/ecommerce-orders"><i className="mdi mdi-pencil font-size-18"></i></a>
                          <a className="text-danger" href="/ecommerce-orders"><i className="mdi mdi-trash-can font-size-18"></i></a></td></tr>
                      <tr><td className="selection-cell">
                        <input type="checkbox" className="selection-input-4" /></td>
                        <td><a className="text-body fw-bold" href="/ecommerce-orders">#NZ1568</a></td>
                        <td>01 Apr, 2020</td>
                        <td>Nikolaj S. Henriksen</td><td>₹160</td>
                        <td><span className="font-size-12 bg-soft-danger badge bg-danger rounded-pill">Chargeback</span></td><td><button className="btn btn-light rounded-pill">Invoice <i class="bi bi-download"></i></button></td>
                        <td><a className="me-3 text-primary" href="/ecommerce-orders"><i className="mdi mdi-pencil font-size-18"></i></a>
                          <a className="text-danger" href="/ecommerce-orders"><i className="mdi mdi-trash-can font-size-18"></i></a></td></tr>
                      <tr><td className="selection-cell">
                        <input type="checkbox" className="selection-input-4" /></td>
                        <td><a className="text-body fw-bold" href="/ecommerce-orders">#NZ1567</a></td>
                        <td>31 Mar, 2020</td><td>Herbert C. Patton</td><td>₹105</td>
                        <td><span className="font-size-12 bg-soft-warning badge bg-warning rounded-pill">unpaid</span></td>
                        <td><button className="btn btn-light rounded-pill">Invoice <i class="bi bi-download"></i></button></td>
                        <td><a className="me-3 text-primary" href="/ecommerce-orders"><i className="mdi mdi-pencil font-size-18"></i></a>
                          <a className="text-danger" href="/ecommerce-orders"><i className="mdi mdi-trash-can font-size-18"></i></a></td></tr>
                      <tr><td className="selection-cell">
                        <input type="checkbox" className="selection-input-4" /></td>
                        <td><a className="text-body fw-bold" href="/ecommerce-orders">#NZ1566</a></td>
                        <td>30 Mar, 2020</td>
                        <td>Nikolaj S. Henriksen</td>
                        <td>₹112</td>
                        <td><span className=" badge bg-success rounded-pill">Paid</span></td>
                        <td><button className="btn btn-light rounded-pill">Invoice <i class="bi bi-download"></i></button></td>
                        <td><a className="me-3 text-primary" href="/ecommerce-orders"><i className="mdi mdi-pencil font-size-18"></i></a>
                          <a className="text-danger" href="/ecommerce-orders"><i className="mdi mdi-trash-can font-size-18"></i></a></td></tr>
                      <tr><td className="selection-cell">
                        <input type="checkbox" className="selection-input-4" /></td>
                        <td>
                          <a className="text-body fw-bold" href="/ecommerce-orders">#NZ1565</a></td>
                        <td>29 Mar, 2020</td><td>Mathias N. Klausen</td><td>₹123</td>
                        <td><span className=" badge bg-success rounded-pill">Paid</span></td>
                        <td><button className="btn btn-light rounded-pill">Invoice <i class="bi bi-download"></i></button></td>
                        <td><a className="me-3 text-primary" href="/ecommerce-orders"><i className="mdi mdi-pencil font-size-18"></i></a>
                          <a className="text-danger" href="/ecommerce-orders">
                            <i className="mdi mdi-trash-can font-size-18">
                            </i></a></td></tr><tr><td className="selection-cell">
                              <input type="checkbox" className="selection-input-4" />
                            </td>
                        <td>
                          <a className="text-body fw-bold" href="/ecommerce-orders">#NZ1563</a></td>
                        <td>28 Mar, 2020</td>
                        <td>Herbert C. Patton</td>
                        <td>₹141</td>
                        <td><span className=" badge bg-success rounded-pill">Paid</span></td>
                        <td>
                          <button className="btn btn-light rounded-pill">Invoice <i class="bi bi-download"></i></button></td>
                        <td>
                          <a className="me-3 text-primary" href="/ecommerce-orders"><i className="mdi mdi-pencil font-size-18"></i></a>
                          <a className="text-danger" href="/ecommerce-orders">
                            <i className="mdi mdi-trash-can font-size-18">
                            </i></a></td></tr>
                      <tr><td className="selection-cell">
                        <input type="checkbox" className="selection-input-4" /></td>
                        <td>
                          <a className="text-body fw-bold" href="/ecommerce-orders">#NZ1562</a></td>
                        <td>28 Mar, 2020</td>
                        <td>Lasse C. Overgaard</td>
                        <td>₹164</td>
                        <td><span className="font-size-12 bg-soft-warning badge bg-warning rounded-pill">unpaid</span></td>
                        <td>
                          <button className="btn btn-light rounded-pill">Invoice <i class="bi bi-download"></i></button></td>
                        <td><a className="me-3 text-primary" href="/ecommerce-orders">
                          <i className="mdi mdi-pencil font-size-18"></i></a>
                          <a className="text-danger" href="/ecommerce-orders">
                            <i className="mdi mdi-trash-can font-size-18"></i></a></td></tr></tbody></table></div></div>
              <div className="pagination pagination-rounded justify-content-end mb-2">
                <ul className="pagination react-bootstrap-table-page-btns-ul">
                  <li className="active page-item" title="1">
                    <a href="/" className="page-link">1</a></li>
                  <li className="page-item" title="2">
                    <a href="/" className="page-link">2</a></li>
                  <li className="page-item" title="next page">
                    <a href="/" className="page-link">&gt;</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Orders