import React, { useEffect, useState } from "react";
import "./NewInvoicer.css";
import {
  Box,
  Button,
  inputAdornmentClasses,
  TextField,
  Typography,
} from "@mui/material";

function NewInvoicer({ data, setdata, step, setstep }) {
  const handlechange = (e) => {
    var name = e.target.name;
    var value = e.target.value;

    setdata({ ...data, [name]: value });
  };
  const handledata = (e) => {
    // view next page
    if (
      data.companyname &&
      data.companyaddres &&
      data.companycity &&
      data.companystate &&
      data.date &&
      data.paymentdb &&
      data.paymentmode
    ) {
      setstep(true);
    } else {
      alert("Please Enter all details");
    }
  };

  return (
    <>
      <div className="NewInvoicer">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": {
              m: 1,
              width: "45ch",
              margin: "1rem 0rem",
            },
          }}
          className="NewInvoicerMain"
        >
          <p className="Text_New">Bill To (Details)</p>
          <div className="NewInvoicerMainsub">
            <TextField
              required
              label={"company name "}
              name="companyname"
              onChange={handlechange}
              value={data.companyname}
            />
            <TextField
              required
              label={"company Address "}
              name="companyaddres"
              onChange={handlechange}
              value={data.companyaddres}
            />
          </div>
          <div className="NewInvoicerMainsub">
            <TextField
              required
              label={"company city "}
              name="companycity"
              onChange={handlechange}
              value={data.companycity}
            />
            <TextField
              required
              label={"company State "}
              name="companystate"
              onChange={handlechange}
              value={data.companystate}
            />
          </div>

          <p className="Text_New">Other Details</p>

          <div className="NewInvoicerMainsub">
            <TextField
              required
              label={"Date"}
              type="date"
              name="date"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handlechange}
              value={data.date}
            />
            <TextField
              required
              label={"Payment Mode "}
              name="paymentmode"
              onChange={handlechange}
              value={data.paymentmode}
            />
          </div>
          <div className="NewInvoicerMainsub NewInvoicerMainsubsat">
            <TextField
              required
              label={"Payment Date By "}
              name="paymentdb"
              type="date"
              style={{ marginLeft: "1rem" }}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handlechange}
              value={data.paymentdb}
            />
          </div>

          <Button
            variant="contained"
            disableElevation
            style={{ margin: "2rem 1rem 2rem 2rem" }}
            onClick={handledata}
          >
            Save and Add Table
          </Button>
        </Box>
      </div>
    </>
  );
}

export default NewInvoicer;
