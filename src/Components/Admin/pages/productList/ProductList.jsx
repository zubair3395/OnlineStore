import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
// import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

export default function ProductList() {
  const [data, setData] = useState([]);
  const [response,setResponse]= useState(false)
  
    useEffect(() => {
      fetch(`http://localhost:3004/Collection`)
        .then((response) => response.json())
        .then((json) => {
          setData(json);
        });
    }, [response]);
  
    function deleteUser(dataID) {
          DeleteMethod(dataID);
  
      }
  
    function DeleteMethod(dataID) {
      fetch(`http://localhost:3004/Collection/${dataID}`, {
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
      field: "title",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.image} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "category",
      headerName: "category",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/admin/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => deleteUser(params.row.id)}
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
