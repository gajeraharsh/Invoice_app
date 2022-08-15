import React, { useState } from "react";
import "./Dashboard.css";
import { Divider, ListItem, ListItemButton, Typography } from "@mui/material";
import Dashboard_Box from "../../Components/Dashboard_Box/Dashboard_Box";
import { Link } from "react-router-dom";
function Dashboard() {
  const [data, setdata] = useState({
    companyname: "",
    companycity: "",
    companyaddres: "",
    companystate: "",
    invoicenumber: "",
    paymentdb: "",
    date: "",
    paymentmode: "",
    table: [],
  });
  return (
    <div className="Dashboard">
      <div className="nav">
        <Divider style={{ marginTop: "3.5rem" }} />

        <ListItem style={{ width: "100%", padding: "0px" }}>
          <ListItemButton style={{ justifyContent: "center" }}>
            <Typography> Create Invoice </Typography>
          </ListItemButton>
        </ListItem>

        <ListItem style={{ width: "100%", padding: "0px" }}>
          <ListItemButton style={{ justifyContent: "center" }}>
            <Typography> Logout </Typography>
          </ListItemButton>
        </ListItem>
      </div>

      <Dashboard_Box data={data} setdata={setdata} />
    </div>
  );
}

export default Dashboard;
