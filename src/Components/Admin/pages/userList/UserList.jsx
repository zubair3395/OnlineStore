import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

export default function UserList() {
  const [data, setData] = useState([]);
  const [response,setResponse]= useState(false)

  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, [response]);

  function deleteUser(dataID) {
        DeleteMethod(dataID);

    }

  function DeleteMethod(dataID) {
    fetch(`http://localhost:5000/users/${dataID}`, {
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
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
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
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => deleteUser(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
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
