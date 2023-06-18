import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { userDelete, userFetch } from '../../Redux/UserSlice';
import { useNavigate } from 'react-router-dom';

export default function UsersList() {
  const { list } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(userFetch());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(userDelete(id));
    
  };

  const handleEdit = (id) => {
    navigate(`/admin/products/update-product/${id}`);
  };
  const rows = list.map((user) => ({
    id: user._id,
    uName: user.name,
    uEmail: user.email,
    isAdmin: user.isAdmin === true ? 'Admin' : 'Customer',
  }));

  const columns = [
    { field: 'id', headerName: 'ID', width: 250 },
    { field: 'uName', headerName: 'Name', width: 150 },
    { field: 'uEmail', headerName: 'Email', sortable: false, width: 300 },
    {
      field: 'isAdmin',
      headerName: 'Role',
      width: 300,


    },
    {
      field: 'actions',
      headerName: 'Actions',
      sortable: false,
      width: '400',
      renderCell: (params) => (
        <div>
          <button
            onClick={() => handleDelete(params.row.id)}
            className="mx-4 rounded-2xl px-6 h-11 font-medium bg-red-700 text-white"
          >
            Delete
          </button>
          <button
            onClick={() => handleEdit(params.row.id)}
            className="mx-4 rounded-2xl px-6 h-11 font-medium bg-green-700 text-white"
          >
            Edit
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="h-screen w-full p-10">
      <DataGrid
        rows={rows}
        columns={columns}
        disableRowSelectionOnClick
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
