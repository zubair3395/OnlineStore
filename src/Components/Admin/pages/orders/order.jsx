import "./order.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
// import { productRows } from "../../dummyData";
import { Link, NavLink } from "react-router-dom";
import { useState,useEffect } from "react";


export default function Order() {
  const [data, setData] = useState([]);
  const [response,setResponse]= useState(false)
  
    useEffect(() => {
      fetch(`http://localhost:3004/orders`)
        .then((response) => response.json())
        .then((json) => {
          setData(json);
        });
    }, [response]);
  
    function deleteUser(dataID) {
          DeleteMethod(dataID);
  
      }
  
    function DeleteMethod(dataID) {
      fetch(`http://localhost:3004/orders/${dataID}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.status === 200) {
          setResponse(true);
        }
      });
    }



  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Purchaser",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            {params.row.name}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "totalPrice",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 190,
      renderCell: (data) => {
        return (
          <>
          <NavLink to={`/admin/invoice/${data.row.id}`}>
              <button className="productListEdit">Invoice</button>
            </NavLink>
            <NavLink to={`/admin/orders/${data.row.id}`}>
              <button className="productListEdit">Edit</button>
            </NavLink>
            <DeleteOutline
              className="productListDelete"
              onClick={() => deleteUser(data.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
