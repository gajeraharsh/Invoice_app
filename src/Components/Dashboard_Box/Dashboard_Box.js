import React, { useState } from "react";
import "./Dashboard_Box.css";
import NewInvoicer from "../../pages/NewInvoicer/NewInvoicer";
import Addtable from "../../pages/Addtable/Addtable";

function Dashboard_Box({ data, setdata }) {
  const [step, setstep] = useState(false);
  return (
    <div className="Dashboard_Box">
      {!step ? (
        <NewInvoicer
          data={data}
          setdata={setdata}
          step={step}
          setstep={setstep}
        />
      ) : (
        <Addtable data={data} setdata={setdata} step={step} setstep={setstep} />
      )}
    </div>
  );
}

export default Dashboard_Box;
