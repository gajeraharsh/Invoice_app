import React from "react";

export default function Tfoot() {
  return (
    <tfoot>
      <tr>
        <th colSpan="7" style={{}}>
          <div
            style={{
              display: "flex",
              justfiyContent: "left",
            }}
          >
            {" "}
            Amount in words : Rupees Sixteen thousand only.{" "}
          </div>
        </th>
        <th colSpan="4">
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <p>Our Bank : INDUSIND BANK</p>
            <p>Branch : Naroda, Ahmedabad</p>
            <p>A/c. No. : 201001067201, IFSC : INDB0000752</p>
          </div>
        </th>
        <th colSpan="3">
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              flexDirection: "column",
            }}
          >
            <p>Total Amount :</p>
            <p>Round Off :</p>
            <p>INVOICE TOTAL :</p>
          </div>
        </th>
        <th>
          <p>16000.00</p>
          <p>00.00</p>
          <p>16,000.00</p>
        </th>
      </tr>
    </tfoot>
  );
}
