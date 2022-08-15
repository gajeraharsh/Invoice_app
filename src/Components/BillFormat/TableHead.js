import React from "react";

function TableHead() {
  return (
    <thead>
      <tr className="border_style">
        <td>Date</td>
        <td>Tanker No.</td>
        <td>LR No</td>
        <td>Loading From</td>
        <td>Unload To</td>
        <td>Load Kg.</td>
        <td>Unload Kg.</td>
        <td>Fixed Rate</td>
        <td>Rate/ PMT</td>
        <td>Amount</td>
        <td
          colSpan={"3"}
          style={{
            width: "150px",
            display: "flex",
            flexDirection: "column",
            padding: "0",
            borderLeft: "0",
            borderBottom: "0",
            borderRight: "0",
            borderTop: "0",
          }}
        >
          <p style={{ padding: "0.5rem", borderBottom: "1px solid #ddd" }}>
            Shortage
          </p>
          <div style={{ display: "flex", width: "100%" }}>
            <p
              style={{
                width: "30%",
                borderRight: "1px solid #ddd",
                padding: "0.3rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Kg.
            </p>
            <p
              style={{
                width: "30%",
                borderRight: "1px solid #ddd",
                padding: "0.3rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Rate.
            </p>
            <p
              style={{
                width: "40%",
                display: "flex",
                justifyContent: "center",
                padding: "0.5rem",
              }}
            >
              Amt
            </p>
          </div>
        </td>

        <td>Advance</td>
        <td
          colSpan={"2"}
          style={{
            width: "150px",
            display: "flex",
            flexDirection: "column",
            padding: "0",
            borderLeft: "0",
            borderRight: "0",
            borderBottom: "0",
            borderTop: "0",
          }}
        >
          <p style={{ padding: "0.5rem", borderBottom: "1px solid #ddd" }}>
            SDeduction/Other
          </p>
          <div style={{ display: "flex", width: "100%" }}>
            <div
              style={{
                width: "30%",
                borderRight: "1px solid #ddd",
                padding: "0.3rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Day
            </div>
            <div
              style={{
                width: "70%",
                display: "flex",
                justifyContent: "center",
                padding: "0.5rem",
              }}
            >
              Charges
            </div>
          </div>
        </td>

        <td>Commision</td>
        <td>Amount rS.</td>
      </tr>
    </thead>
  );
}

export default TableHead;
