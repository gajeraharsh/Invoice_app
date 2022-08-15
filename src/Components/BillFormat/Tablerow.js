import React from "react";

function Tablerow({ item }) {
  return (
    <tr>
      <td>{item.Sdate}</td>
      <td>{item.TankerNo}</td>
      <td>{item.lrno}</td>
      <td>{item.LoadingFrom}</td>
      <td>{item.UnloadTo}</td>
      <td>{item.LoadKg}</td>
      <td>{item.UnloadKg}</td>
      <td>{item.FixedRate}</td>
      <td>{item.RatePmt}</td>
      <td>{item.BAmount}</td>

      <td
        colSpan={"3"}
        style={{
          width: "150px",
          display: "flex",
          flexDirection: "column",
          padding: "0",
          borderLeft: "0",
          borderTop: "0",
        }}
      >
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
            {item.Skg}
          </div>
          <div
            style={{
              width: "30%",
              borderRight: "1px solid #ddd",
              padding: "0.3rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {item.SRate}
          </div>
          <div
            style={{
              width: "40%",
              display: "flex",
              justifyContent: "center",
              padding: "0.5rem",
            }}
          >
            {item.SAmt}
          </div>
        </div>
      </td>

      <td>{item.Advance}</td>

      <td
        colSpan={"2"}
        style={{
          width: "150px",
          display: "flex",
          flexDirection: "column",
          padding: "0",
          borderLeft: "0",
          marginBottom: "0",
        }}
      >
        <div style={{ display: "flex", width: "100%" }}>
          <div
            style={{
              width: "30%",
              borderRight: "1px solid #ddd",
              padding: "0.3rem",
              display: "flex",
              justifyContent: "center",

              borderBottom: "0",
            }}
          >
            {item.DDay}
          </div>
          <div
            style={{
              width: "70%",
              padding: "0.5rem",
              display: "flex",
              justifyContent: "center",
              borderBottom: "0",
              borderRight: "0",
            }}
          >
            {item.DCharges}
          </div>
        </div>
      </td>
      <td>{item.commission}</td>
      <td>{item.TTAmt}</td>
    </tr>
  );
}

export default Tablerow;
