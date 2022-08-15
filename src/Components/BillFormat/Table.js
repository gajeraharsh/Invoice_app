import React, { useEffect, useState } from "react";
import "./Table.css";
import TableHead from "./TableHead";
import Tablerow from "./Tablerow";
import Tfoot from "./Tfoot";
function Table({ data }) {
  const [demo, setdemo] = useState({ table: [] });
  useEffect(() => {
    console.log(data);
    setdemo(data);
  }, [data]);
  return (
    <div className="Table">
      <table cellSpacing={"0"} className="tablemain">
        <TableHead />
        <tbody>
          {data.table.map((item, index) => {
            return <Tablerow item={item} key={index} />;
          })}
        </tbody>

        <Tfoot />
      </table>
    </div>
  );
}

export default Table;
