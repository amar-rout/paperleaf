import React, { useEffect, useState } from 'react';
import DataTable from './DataTable';
import axios from 'axios';
import { toast } from 'react-toastify';

import './User.css';

const Users = () => {
  const columns = [
    {
      Header: 'Name',
      accessor: 'name',
      Filter: ColumnFilter, // Custom filter component if needed
    },
    {
      Header: 'Email',
      accessor: 'email',
      Filter: ColumnFilter, // Custom filter component if needed
    },
    {
      Header: 'Phone',
      accessor: 'phone',
      Filter: ColumnFilter, // Custom filter component if needed
    },
    {
      Header: 'Gender',
      accessor: 'gender',
      Filter: ColumnFilter, // Custom filter component if needed
    },
    {
      Header: 'Admin',
      accessor: 'isAdmin',
      Filter: ColumnFilter, // Custom filter component if needed
    },
    // {
    //   Header: 'Address',
    //   accessor: 'address',
    //   Filter: ColumnFilter, // Custom filter component if needed
    // },
    // Add more columns as needed
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
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
          setData(response.data);
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
  })

  return (
    <div className='container-fluid my-5 py-5'>
      <div className='card'>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;

  return (
    <input
      type="text"
      value={filterValue || ''}
      onChange={e => setFilter(e.target.value)}
      placeholder="Filter..."
    />
  );
};

export default Users;
