import React from 'react'

function Category() {
  return (
    <div className='container px-5 my-5'>
      <div class="card mb-4" data-select2-id="12">
                <header class="card-header" data-select2-id="11">
                    <h4 class="card-title">Category</h4>
                    <div class="row align-items-center" data-select2-id="10">
                        <div class="col-md-3 col-12 me-auto mb-md-0 mb-3">
                            <div class="custom_select">
                                <select class="form-select select-nice select2-hidden-accessible" data-select2-id="1" tabindex="-1" aria-hidden="true">
                                    <option selected="" data-select2-id="3">All Categories</option>
                                    <option>Women's Clothing</option>
                                    <option>Men's Clothing</option>
                                    <option>Cellphones</option>
                                    <option>Computer &amp; Office</option>
                                    <option>Consumer Electronics</option>
                                    <option>Jewelry &amp; Accessories</option>
                                    <option>Home &amp; Garden</option>
                                    <option>Luggage &amp; Bags</option>
                                    <option>Shoes</option>
                                    <option>Mother &amp; Kids</option>
                                </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="2" style={{ width: '257.712px'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-80ws-container"><span class="select2-selection__rendered" id="select2-80ws-container" role="textbox" aria-readonly="true" title="All Categories">All Categories</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                            </div>
                        </div>
                        <div class="col-md-2 col-6">
                            <input type="date" value="02.05.2022" class="form-control" />
                        </div>
                        <div class="col-md-2 col-6" data-select2-id="9">
                            <div class="custom_select" data-select2-id="8">
                                <select class="form-select select-nice select2-hidden-accessible" data-select2-id="4" tabindex="-1" aria-hidden="true">
                                    <option selected="" data-select2-id="6">Status</option>
                                    <option data-select2-id="16">All</option>
                                    <option data-select2-id="17">Paid</option>
                                    <option data-select2-id="18">Chargeback</option>
                                    <option data-select2-id="19">Refund</option>
                                </select><span class="select2 select2-container select2-container--default select2-container--above select2-container--focus" dir="ltr" data-select2-id="5" style={{width: '163.8px'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-u22l-container"><span class="select2-selection__rendered" id="select2-u22l-container" role="textbox" aria-readonly="true" title="Status">Status</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                            </div>
                        </div>
                    </div>
                </header>
                <div class="card-body">
                    <div class="table-responsive">
                        <div class="table-responsive">
                            <table class="table align-middle table-nowrap mb-0">
                                <thead class="table-light">
                                    <tr>
                                        <th scope="col" class="text-center">
                                            <div class="form-check align-middle">
                                                <input class="form-check-input" type="checkbox" id="transactionCheck01" />
                                                <label class="form-check-label" for="transactionCheck01"></label>
                                            </div>
                                        </th>
                                        <th class="align-middle" scope="col">Order ID</th>
                                        <th class="align-middle" scope="col">Billing Name</th>
                                        <th class="align-middle" scope="col">Date</th>
                                        <th class="align-middle" scope="col">Total</th>
                                        <th class="align-middle" scope="col">Payment Status</th>
                                        <th class="align-middle" scope="col">Payment Method</th>
                                        <th class="align-middle" scope="col">View Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="text-center">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" id="transactionCheck02" />
                                                <label class="form-check-label" for="transactionCheck02"></label>
                                            </div>
                                        </td>
                                        <td><a href="/" class="fw-bold">#SK2540</a> </td>
                                        <td>Neal Matthews</td>
                                        <td>
                                            07 Oct, 2022
                                        </td>
                                        <td>
                                            $400
                                        </td>
                                        <td>
                                            <span class="badge badge-pill badge-soft-success">Paid</span>
                                        </td>
                                        <td>
                                            <i class="material-icons md-payment font-xxl text-muted mr-5"></i> Mastercard
                                        </td>
                                        <td>
                                            <a href="/" class="btn btn-xs"> View details</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" id="transactionCheck03" />
                                                <label class="form-check-label" for="transactionCheck03"></label>
                                            </div>
                                        </td>
                                        <td><a href="/" class="fw-bold">#SK2541</a> </td>
                                        <td>Jamal Burnett</td>
                                        <td>
                                            07 Oct, 2022
                                        </td>
                                        <td>
                                            $380
                                        </td>
                                        <td>
                                            <span class="badge badge-pill badge-soft-danger">Chargeback</span>
                                        </td>
                                        <td>
                                            <i class="material-icons md-payment font-xxl text-muted mr-5"></i> Visa
                                        </td>
                                        <td>
                                            <a href="/" class="btn btn-xs"> View details</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" id="transactionCheck04" />
                                                <label class="form-check-label" for="transactionCheck04"></label>
                                            </div>
                                        </td>
                                        <td><a href="/" class="fw-bold">#SK2542</a> </td>
                                        <td>Juan Mitchell</td>
                                        <td>
                                            06 Oct, 2022
                                        </td>
                                        <td>
                                            $384
                                        </td>
                                        <td>
                                            <span class="badge badge-pill badge-soft-success">Paid</span>
                                        </td>
                                        <td>
                                            <i class="material-icons md-payment font-xxl text-muted mr-5"></i> Paypal
                                        </td>
                                        <td>
                                            <a href="/" class="btn btn-xs"> View details</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" id="transactionCheck05" />
                                                <label class="form-check-label" for="transactionCheck05"></label>
                                            </div>
                                        </td>
                                        <td><a href="/" class="fw-bold">#SK2543</a> </td>
                                        <td>Barry Dick</td>
                                        <td>
                                            05 Oct, 2022
                                        </td>
                                        <td>
                                            $412
                                        </td>
                                        <td>
                                            <span class="badge badge-pill badge-soft-success">Paid</span>
                                        </td>
                                        <td>
                                            <i class="material-icons md-payment font-xxl text-muted mr-5"></i> Mastercard
                                        </td>
                                        <td>
                                            <a href="/" class="btn btn-xs"> View details</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" id="transactionCheck06" />
                                                <label class="form-check-label" for="transactionCheck06"></label>
                                            </div>
                                        </td>
                                        <td><a href="/" class="fw-bold">#SK2544</a> </td>
                                        <td>Ronald Taylor</td>
                                        <td>
                                            04 Oct, 2022
                                        </td>
                                        <td>
                                            $404
                                        </td>
                                        <td>
                                            <span class="badge badge-pill badge-soft-warning">Refund</span>
                                        </td>
                                        <td>
                                            <i class="material-icons md-payment font-xxl text-muted mr-5"></i> Visa
                                        </td>
                                        <td>
                                            <a href="/" class="btn btn-xs"> View details</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" id="transactionCheck07" />
                                                <label class="form-check-label" for="transactionCheck07"></label>
                                            </div>
                                        </td>
                                        <td><a href="/" class="fw-bold">#SK2545</a> </td>
                                        <td>Jacob Hunter</td>
                                        <td>
                                            04 Oct, 2022
                                        </td>
                                        <td>
                                            $392
                                        </td>
                                        <td>
                                            <span class="badge badge-pill badge-soft-success">Paid</span>
                                        </td>
                                        <td>
                                            <i class="material-icons md-payment font-xxl text-muted mr-5"></i> Paypal
                                        </td>
                                        <td>
                                            <a href="/" class="btn btn-xs"> View details</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Category;