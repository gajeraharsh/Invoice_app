import React, { useEffect } from "react";
import "./BillFormat.css";
import Header from "./Header";
import Table from "./Table";

function BillFormat({ componentref, data, setdata }) {
  return (
    <>
      <div className="BillFormate_Main">
        <div className="Bill_main" ref={componentref}>
          <Header data={data} setdata={setdata} />
          <Table data={data} setdata={setdata} />
        </div>
      </div>
    </>
  );
}

export default BillFormat;
