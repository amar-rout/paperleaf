import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const UserDetails = () => {
  const [loadingAPI, setLoadingAPI] = useState(false);
  const [users, setUsers] = useState([]);
  const [usersTable, setUsersTable] = useState([]);

  const [expand, setExpand] = useState("false");
  const [pageSize, setPageSize] = useState(5);
  const [pages, setPages] = useState(0);
  const [page, setPage] = useState(0);
  const [id, setId] = useState("");
  const [lowerLimit, setLowerLimit] = useState(0);
  const [upperLimit, setUpperLimit] = useState(pageSize);

  const navigate = useNavigate();

  useEffect(() => {
    setLoadingAPI(true);
    const adminUser = JSON.parse(localStorage.getItem("admin_user"));
    const config = {
      "headers": {
        "authorization": `Bearer ${adminUser.token}`,
      }
    }
    axios.get('api/users/all', config)
      .then(response => {
        toast.dismiss();
        if (response.data) {
          setUsers(response.data);
          setPages(Math.ceil(response.data.length / pageSize));
          let coll = response.data;
          setUsersTable(coll.slice(lowerLimit, upperLimit));
        }
        setLoadingAPI(false);
      }).catch(error => {
        setLoadingAPI(false);
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
  }, []);

  return (
    <div className='container-fluid pt-5'>
      <div className="card my-5 mx-auto shadow" >
        <div className="card-header bg-light py-2 d-flex justify-content-between align-items-center">
          <h4 className="fw-bold w-50 fs-5 fs-md-4">Users overview</h4>
        </div>
        <div className="card-body">
          {loadingAPI ?
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
            :
            <>
              {users.length > 0 ?
                <div>
                  <div className='row'>
                    <div className='col-6 col-md-3 mb-2 position-relative'>
                      <span className="input-group">
                        <span className="input-group-text p-0 m-0 border-0 bg-body text-dark me-2" id="basic-addon1">
                          Show
                        </span>
                        <select className="border-secondary px-1 py-2 m-0 rounded" style={{ width: '20px !important' }} aria-label="Default select example"
                          defaultValue={5}
                          onChange={(event) => {
                            setPageSize(event.target.value);
                            setPages(Math.ceil(users.length / event.target.value));
                            setUpperLimit(users.length > event.target.value ? event.target.value : users.length);
                            let col = users;
                            setUsersTable(col.slice(lowerLimit, users.length > event.target.value ? event.target.value : users.length));
                          }}
                        >
                          <option value="5">05</option>
                          <option value="10">10</option>
                          <option value="20">20</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                        </select>
                        <span className="input-group-text p-0 m-0 border-0 bg-body text-dark ms-2" id="basic-addon1">
                          entries
                        </span>
                      </span>
                    </div>
                    <div className='col-12 col-md-6 position-relative mb-2 d-none d-sm-inline'></div>
                    <div className='col-6 col-md-3 position-relative mb-2'>
                      <div className='d-flex justify-content-end'>
                        <input type="text" className="form-control d-inline shadow-none border-dark py-2" id="searchInput" placeholder="Search text ..." />
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-bordered border-dark table-hover align-items-center text-center align-middle">
                      <thead className="thead-light">
                        <tr>
                          <th>#</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Gender</th>
                          <th>Admin</th>
                          <th>Address</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody className="table-body">
                        {usersTable.map((user, index) => {
                          const { _id, name, email, phone, isAdmin, gender, address } = user;

                          return (
                            <>
                              <tr key={_id}>
                                <th style={{ width: '48px' }}>{index + 1}.</th>
                                <th className='text-start'>{name}</th>
                                <td className='ls-1'>{email}</td>
                                <td className='ls-1'>{phone}</td>
                                <td className='ls-1'>{gender}</td>
                                <td className='ls-1'><span className={isAdmin ? `badge bg-info fs-6 text-dark` : 'badge bg-light text-dark fs-6'}>{isAdmin ? 'True' : 'False' }</span></td>
                                <td className='table-active tr-down' data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Click here to see the products">
                                  <span onClick={() => setExpand(!expand)} className='d-flex flex-row justify-content-between align-items-center' data-bs-toggle="collapse" href={`#demo-${index}`} aria-expanded="false" aria-controls={`demo-${index}`} >
                                    <span className=''>
                                      {address.length} Addresses
                                    </span>
                                  </span>
                                </td>
                                <td style={{ width: '64px' }}>
                                  <div className="d-flex justify-content-between align-items-center gap-2">
                                    <button
                                      type="button"
                                      className="btn btn-secondary p-2 d-flex justify-content-between align-items-center"
                                      onClick={() => navigate(`/users/${_id}/edit`)}
                                    >
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                      </svg>
                                      <span className='p-0 m-0 ms-2'>Edit</span>
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-danger ms-1 p-2 d-flex justify-content-between align-items-center"
                                      data-bs-toggle="modal"
                                      data-bs-target="#staticBackdrop"
                                      onClick={() => {
                                        setId(_id);
                                      }}
                                    >
                                      <svg className='p-0 m-0' width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 3H9C9 2.44772 8.55228 2 8 2C7.44772 2 7 2.44772 7 3ZM6 3C6 1.89543 6.89543 1 8 1C9.10457 1 10 1.89543 10 3H14C14.2761 3 14.5 3.22386 14.5 3.5C14.5 3.77614 14.2761 4 14 4H13.4364L12.2313 12.8378C12.0624 14.0765 11.0044 15 9.75422 15H6.24578C4.99561 15 3.93762 14.0765 3.76871 12.8378L2.56355 4H2C1.72386 4 1.5 3.77614 1.5 3.5C1.5 3.22386 1.72386 3 2 3H6ZM7 6.5C7 6.22386 6.77614 6 6.5 6C6.22386 6 6 6.22386 6 6.5V11.5C6 11.7761 6.22386 12 6.5 12C6.77614 12 7 11.7761 7 11.5V6.5ZM9.5 6C9.77614 6 10 6.22386 10 6.5V11.5C10 11.7761 9.77614 12 9.5 12C9.22386 12 9 11.7761 9 11.5V6.5C9 6.22386 9.22386 6 9.5 6ZM4.75954 12.7027C4.86089 13.4459 5.49568 14 6.24578 14H9.75422C10.5043 14 11.1391 13.4459 11.2405 12.7027L12.4272 4H3.57281L4.75954 12.7027Z" fill="#fff" />
                                      </svg>
                                      <span className='p-0 m-0 ms-2'>Delete</span>
                                    </button>
                                  </div>
                                </td>
                              </tr>
                              <tr className='collapse text-start table-active' id={`demo-${index}`}>
                                <td colSpan="8">
                                  <h5 className='ms-1 text-uppercase text-decoration-underline fs-6 fw-bold'>Addresses : </h5>
                                  {
                                    address.map((addr, index) => {
                                      return (
                                        <span key={addr._id} className='ms-2'>
                                          <span className="badge bg-dark text-light mb-2 fs-6 fw-normal">
                                            {addr.addrType}
                                          </span>
                                        </span>
                                      )
                                    })
                                  }
                                </td>
                              </tr>
                            </>
                          );
                        })}
                      </tbody>
                    </table>
                    {/* Modal Start */}
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <div className="modal-body text-center">
                            <svg width="28" height="28" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7 3H9C9 2.44772 8.55228 2 8 2C7.44772 2 7 2.44772 7 3ZM6 3C6 1.89543 6.89543 1 8 1C9.10457 1 10 1.89543 10 3H14C14.2761 3 14.5 3.22386 14.5 3.5C14.5 3.77614 14.2761 4 14 4H13.4364L12.2313 12.8378C12.0624 14.0765 11.0044 15 9.75422 15H6.24578C4.99561 15 3.93762 14.0765 3.76871 12.8378L2.56355 4H2C1.72386 4 1.5 3.77614 1.5 3.5C1.5 3.22386 1.72386 3 2 3H6ZM7 6.5C7 6.22386 6.77614 6 6.5 6C6.22386 6 6 6.22386 6 6.5V11.5C6 11.7761 6.22386 12 6.5 12C6.77614 12 7 11.7761 7 11.5V6.5ZM9.5 6C9.77614 6 10 6.22386 10 6.5V11.5C10 11.7761 9.77614 12 9.5 12C9.22386 12 9 11.7761 9 11.5V6.5C9 6.22386 9.22386 6 9.5 6ZM4.75954 12.7027C4.86089 13.4459 5.49568 14 6.24578 14H9.75422C10.5043 14 11.1391 13.4459 11.2405 12.7027L12.4272 4H3.57281L4.75954 12.7027Z" fill="red" />
                            </svg>
                            <h5 className='mt-4'>Are You Sure! Want to delete selected user?</h5>
                            <p>Do you really want to delete this records?<br />You can't view this in your list anymore if you delete! {id}</p>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-light px-3 py-2" data-bs-dismiss="modal"
                              onClick={() => {
                                setId('');
                              }}>No, Keep It</button>
                            <button type="button" className="btn btn-success px-3 py-2"
                              data-bs-dismiss="modal"
                            >
                              Yes, Delete It
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Modal End */}
                  </div>
                  <div className='row align-items-center'>
                    <div className='col-12 col-md-3 mb-3 d-flex justify-content-center justify-content-md-start'>
                      Showing {lowerLimit + 1} to {upperLimit} of {users.length} records
                    </div>
                    <div className='col-12 col-md-3'></div>
                    <div className='col-12 col-md-6'>
                      <nav aria-label="Page navigation example d-flex">
                        <ul className="pagination justify-content-center justify-content-md-end">
                          <li className="page-item disabled">
                            <span className="page-link py-2 px-3">Previous</span>
                          </li>
                          {
                            Array.from({ length: pages }, (elem, index) => {
                              return (
                                <li key={index} className="page-item">
                                  <button className={`page-link py-2 px-3 ${page === index && 'active'}`}
                                    onClick={() => {
                                      setPage(index);
                                      setLowerLimit((index * pageSize));
                                      console.log(upperLimit);
                                      setUpperLimit(users.length > (upperLimit + pageSize) ? (upperLimit + pageSize) : users.length);
                                      console.log(pageSize);
                                      console.log(lowerLimit);
                                      console.log(upperLimit);
                                      let coll = users;
                                      setUsersTable(coll.slice((index * pageSize), upperLimit));
                                      console.log(usersTable);
                                    }}
                                  >
                                    {index + 1}
                                  </button>
                                </li>
                              )
                            })
                          }
                          <li className="page-item">
                            <a className="page-link py-2 px-3" href="#">Next</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
          :
          <div className="alert alert-danger" role="alert">
            No collection found
          </div>
              }
        </>
          }
      </div>
    </div>
    </div >
  );
};

export default UserDetails;
