import React, { useState, useEffect, useRef } from "react";
import "./Addtable.css";
import {
  Box,
  Button,
  Divider,
  inputAdornmentClasses,
  TextField,
  Typography,
} from "@mui/material";
import BillFormat from "../../Components/BillFormat/BillFormat";
import ReactToPrint from "react-to-print";
function Addtable({ data, setdata, setstep }) {
  const componentref = useRef();
  const [state, setstate] = useState({
    Sdate: "",
    TankerNo: "",
    lrno: "",
    LoadingFrom: "",
    UnloadTo: "",
    LoadKg: "",
    UnloadKg: "",
    FixedRate: "",
    RatePmt: "",
    BAmount: "",
    Skg: "",
    SRate: "",
    SAmt: "",
    Advance: "",
    DDay: "",
    DCharges: "",
    commission: "",
    TTAmt: "",
  });

  const handlechange = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    setstate({ ...state, [name]: value });
  };
  const handleadd = (e) => {
    if (
      state.Sdate &&
      state.Advance &&
      state.DCharges &&
      state.DDay &&
      state.FixedRate &&
      state.LoadKg &&
      state.LoadingFrom &&
      state.RatePmt &&
      state.SRate &&
      state.Sdate &&
      state.Skg &&
      state.TankerNo &&
      state.UnloadKg &&
      state.UnloadTo &&
      state.commission &&
      state.lrno
    ) {
      setdata({ ...data, table: [...data.table, state] });

      // remoave all values
      setstate({
        Sdate: "",
        TankerNo: "",
        lrno: "",
        LoadingFrom: "",
        UnloadTo: "",
        LoadKg: "",
        UnloadKg: "",
        FixedRate: "",
        RatePmt: "",
        BAmount: "",
        Skg: "",
        SRate: "",
        SAmt: "",
        Advance: "",
        DDay: "",
        DCharges: "",
        commission: "",
        TTAmt: "",
      });
    } else {
      alert("Enter all details");
    }
  };
  const handleprint = (e) => {
    setdata({ ...data, table: [...data.table, state] });
  };
  const handlecancel = (e) => {
    setstep(false);
  };

  return (
    <>
      <div>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": {
              m: 1,
              width: "45ch",
              margin: "1rem 0rem",
            },
          }}
          className="AddtableMainBox"
        >
          <div className="AddtablesubBox">
            <TextField
              required
              type={"date"}
              label={"Date "}
              name="Sdate"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handlechange}
              value={state.Sdate}
            />
            <TextField
              required
              label={"Tanker No. "}
              name="TankerNo"
              onChange={handlechange}
              value={state.TankerNo}
            />
          </div>
          <div className="AddtablesubBox">
            <TextField
              required
              label={"LR No "}
              name="lrno"
              onChange={handlechange}
              value={state.lrno}
              type={"number"}
            />
            <TextField
              required
              label={"Loading From "}
              name="LoadingFrom"
              onChange={handlechange}
              value={state.LoadingFrom}
            />
          </div>

          <div className="AddtablesubBox">
            <TextField
              required
              label={"Load Kg. "}
              type="number"
              name="LoadKg"
              onChange={handlechange}
              value={state.LoadKg}
            />
            <TextField
              required
              label={"Unload To "}
              name="UnloadTo"
              onChange={handlechange}
              value={state.UnloadTo}
            />
          </div>

          <div className="AddtablesubBox">
            <TextField
              required
              label={"Unload Kg. "}
              type="number"
              name="UnloadKg"
              onChange={handlechange}
              value={state.UnloadKg}
            />
            <TextField
              required
              label={"Fixed Rate "}
              type="number"
              name="FixedRate"
              onChange={handlechange}
              value={state.FixedRate}
            />
          </div>
          <div className="AddtablesubBox">
            <TextField
              required
              label={"Rate/PMT "}
              type="number"
              name="RatePmt"
              onChange={handlechange}
              value={state.RatePmt}
            />
            <TextField
              required
              label={"Amount "}
              type="number"
              name="BAmount"
              disabled
              onChange={handlechange}
              value={state.BAmount}
            />
          </div>

          <Divider style={{ marginTop: "2rem" }} />

          <p className="headingText">Shortage</p>

          <div className="AddtablesubBox">
            <TextField
              required
              label={"Kg "}
              type="number"
              name="Skg"
              onChange={handlechange}
              value={state.Skg}
            />
            <TextField
              required
              label={"Rate "}
              type="number"
              name="SRate"
              onChange={handlechange}
              value={state.SRate}
            />
          </div>
          <div className="AddtablesubBox AddtablesubBoxset">
            <TextField
              style={{ marginLeft: "1rem" }}
              required
              label={"Shortage amount "}
              type="number"
              name="SAmt"
              disabled
              onChange={handlechange}
              value={state.SAmt}
            />
          </div>

          <Divider style={{ marginTop: "2rem" }} />
          <p className="headingText">Advance</p>
          <div className="AddtablesubBox AddtablesubBoxset">
            <TextField
              style={{ marginLeft: "2.5rem" }}
              required
              label={"Advance "}
              type="number"
              name="Advance"
              onChange={handlechange}
              value={state.Advance}
            />
          </div>

          <Divider style={{ marginTop: "2rem" }} />
          <p className="headingText">Deduction/Other</p>

          <div className="AddtablesubBox">
            <TextField
              style={{ marginLeft: "1rem" }}
              required
              label={"Day"}
              type="number"
              name="DDay"
              onChange={handlechange}
              value={state.DDay}
            />
            <TextField
              style={{ marginLeft: "1rem" }}
              required
              label={"Charges"}
              type="number"
              name="DCharges"
              onChange={handlechange}
              value={state.DCharges}
            />
          </div>
          <Divider style={{ marginTop: "2rem" }} />
          <p className="headingText">commission</p>
          <div className="AddtablesubBox AddtablesubBoxset">
            <TextField
              style={{ marginLeft: "2.5rem" }}
              required
              label={"commission"}
              type="number"
              name="commission"
              onChange={handlechange}
              value={state.commission}
            />
          </div>
          <Divider style={{ marginTop: "2rem" }} />
          <div className="AddtablesubBox AddtablesubBoxset ">
            <TextField
              style={{ marginLeft: "2.5rem" }}
              required
              label={"Amount Rs."}
              type="number"
              name="TTAmt"
              disabled
              onChange={handlechange}
              value={state.TTAmt}
            />
          </div>
          <div className="ButtonGroup">
            <Button
              variant="contained"
              disableElevation
              style={{ margin: "2rem 0rem 2rem 2.5rem" }}
              onClick={handlecancel}
            >
              Back
            </Button>
            <Button
              variant="contained"
              disableElevation
              style={{ margin: "2rem 0rem 2rem 2.5rem" }}
              onClick={handleadd}
            >
              Save and Add Another
            </Button>
            <Button
              variant="contained"
              disableElevation
              style={{ margin: "2rem 0rem 2rem 2.5rem" }}
              onClick={handleprint}
            >
              Save
            </Button>

            <ReactToPrint
              trigger={() => (
                <Button
                  variant="contained"
                  disableElevation
                  style={{ margin: "2rem 0rem 2rem 2.5rem" }}
                >
                  Download/Print
                </Button>
              )}
              content={() => componentref.current}
            />
          </div>
        </Box>
      </div>
      <div className="BillFormate_wrapper">
        <BillFormat componentref={componentref} data={data} />
      </div>
    </>
  );
}

export default Addtable;
