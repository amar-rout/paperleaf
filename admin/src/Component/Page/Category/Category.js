import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'

function Category() {
  const [categoryData, setCategoryData] = useState({ name: '', status: '' });
  const [categories, setCategories] = useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCategoryData(prev => ({ ...prev, [name]: value }))
  }
  const addCategoryURL = "http://localhost:5010/api/category/";
  const getCategoryURL = "http://localhost:5010/api/category/";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemInCategories = categories.find((item) => item.name === categoryData.name);
    console.log(itemInCategories);
    if (itemInCategories) {
      toast.dismiss();
      toast.error(`Category ${categoryData.name} is already exist.`)
    } else {
      axios.post(addCategoryURL, categoryData)
        .then(response => {
          toast.dismiss();
          toast.success(`${categoryData.name} added successfully.`);
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
  
  const handleStatus = (id, name, status) => {
    let statusData = {"name": name, "status": !status};
    console.log(statusData);
    axios.patch(`${getCategoryURL}/${id}`, statusData)
      .then(response => {
        toast.dismiss();
        let message = !status ? "activated" : "deactivated";
        toast.success(`${name} ${message}`);
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
    axios.delete(`${getCategoryURL}/${id}`)
      .then(response => {
        const itemInCategories = categories.find((item) => item._id === id);
        toast.dismiss();
        toast.success(`${itemInCategories.name} deleted successfully.`);
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
      {/* Add Category */}
      <div className="card  my-5 mx-auto" >
        <div className="card-header py-1 ">
          <h4 className="fw-bold">Add Category</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit} className={'row row-cols-lg-auto g-3 align-items-center justify-content-start'}>
            <div className="col-12">
              <input
                type="text"
                className="form-control"
                placeholder="Enter category name"
                name="name"
                value={categoryData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-12">
              <select
                className="form-select"
                name="status"
                value={categoryData.status}
                // defaultValue=""
                onChange={handleChange}
                required
              >
                <option value="">-- Select Status --</option>
                <option value="true">Active</option>
                <option value="false">Deactive</option>
              </select>
            </div>
            <div className='col-12'>
              <button
                type="submit"
                className="btn btn-success"
              >
                Add Category
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* All Category */}
      <div className="card my-5 mx-auto" >
        <div className="card-header py-1 ">
          <h4 className="fw-bold">All Category</h4>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table align-items-center text-center">
              <thead className="thead-light ">
                <tr>
                  {/* <th>Id</th> */}
                  <th>Category</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((cat) => {
                  const { _id, name, status } = cat;

                  return (
                    <tr key={_id}>
                      {/* <th>{_id}</th> */}
                      <td>{name}</td>
                      <td>
                        <div className="form-check form-switch d-flex justify-content-center align-items-center">
                          <input
                            className="form-check-input me-1"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckDefault"
                            defaultChecked={status}
                            onChange={() => handleStatus(_id, name, status)}
                          // disabled={ adminData.userType !== "super admin" && id <= 4}
                          />
                          <label
                            className="form-check-label ms-1"
                            htmlFor="flexSwitchCheckDefault"
                          >
                            {status}
                          </label>

                          {/* <select
                            className="form-select"
                            name="status"
                            value={status}
                            onChange={() => handleStatus({ _id, status })}
                          >
                            <option value="" selected>-- Select Status --</option>
                            <option value="true">Active</option>
                            <option value="false">Deactive</option>
                          </select> */}

                        </div>
                      </td>
                      <td>
                        <div className="d-flex justify-content-center">
                          <button
                            type="button"
                            className="btn btn-sm btn-danger ms-1"
                            onClick={() => handleDelete(_id)}
                          // disabled={ adminData.userType !== "super admin" && id <= 4}
                          >
                            delete
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

export default Category;