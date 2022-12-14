import './dataTable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColums, userRows } from '../../dataTableSource';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const DataTable = () => {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColum = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='cellAction'>
            <Link to='/users/test' style={{ textDecoration: 'none' }}>
              <div className='viewButton'>View</div>
            </Link>
            <div
              className='deleteButton'
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className='dataTable'>
      <div className='dataTableTitle'>
        Add New User
        <Link
          to='/users/new'
          style={{ textDecoration: 'none' }}
          className='link'
        >
          New User
        </Link>
      </div>
      <DataGrid
        className='dataGrid'
        rows={data}
        columns={userColums.concat(actionColum)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
