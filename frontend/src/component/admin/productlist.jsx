import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { productsDelete } from '../../Redux/Productslice';
import { useNavigate } from 'react-router-dom';



export default function Productlist() {
  const { items } = useSelector((state) => state.products)
  const dispach = useDispatch()
  const navigate = useNavigate();
  const rows = items && items.map(item => {
    return {
      id: item?._id,
      img: "http://localhost:5000/" + item?.img?.path
      ,
      pName: item?.name,
      pdic: item?.dic,
      price: item?.price.toLocaleString(),
      color: item?.color
    }
  })


  const columns = [
    { field: 'id', headerName: 'ID', width: 250 },
    { field: 'pName', headerName: 'Name', width: 150 },
    {
      field: 'img',
      headerName: 'Image',
      width: 100,
      renderCell: (params) => (
        <div className="w-20 h-20 p-4">
          <img src={params.row.img} alt="img" />
        </div>
      ),
    },
    {
      field: 'price',
      headerName: 'Price',
      sortable: false,
      width: 100,
    },
    {
      field: 'color',
      headerName: 'Color',
      sortable: false,
      width: 100,
    },
    {
      field: 'pdic',
      headerName: 'Description',
      type: 'number',
      width: '1000',
      sortable: false,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      sortable: false,
      width: '400',
      renderCell: (params) => (
        <div>
          <button
            onClick={() => handleDelete(params?.row?.id)}
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

  const handleDelete = (id) => {
    dispach(productsDelete(id));
  };

  const handleEdit = (id) => {
    navigate(`/admin/products/update-product/${id}`);
  };

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

