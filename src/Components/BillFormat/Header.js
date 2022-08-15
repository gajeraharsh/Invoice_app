import React from "react";
import "./BillFormat.css";
import image from "../../images/image1.jpeg";
function Header({ data, setdata }) {
  return (
    <div className="Header">
      <div className="Header_subdiv">
        <div className="header_Wrapper">
          <div className="header_text_div">
            <p className="Headertext_bold">INVOICE (Original for Receipient)</p>
          </div>
          <div className="Header_sfs">
            <div className="Header_Sfirst">
              <p className="Sfirst_tf">Billed To :</p>
              <div className="Sfirst_aligndiv">
                <p>M/s. </p>
                <div className="Sfirst_subdiv">
                  <p className="Sfirst_h">{data.companyname}</p>
                  <p className="Sfirst_address">{data.companyaddres}</p>
                  <p className="Sfirst_city">{data.companycity}</p>
                </div>
              </div>
              <p className="Sfirst_state">STATE : {data.companystate}</p>
            </div>
            <div className="Header_Ssecond">
              <ul className="Hslist1">
                <li className="light_bold">Invoice No.</li>
                <li className="light_bold">Date</li>
                <li className="light_bold">Payment Date By</li>
                <li className="light_bold">Payment Mode :</li>
              </ul>
              <ul className="Hslist2">
                <li className="bold">: 167/2022-2023</li>
                <li className="light_bold">: {data.date}</li>
                <li className="light_bold">: {data.paymentdb}</li>
                <li className="light_bold">: {data.paymentmode}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="Header_Sthird">
          <img src={image} className="image_second" alt="" />
          <p className="hstheading">SHREE RAM BULK CARRIERS</p>
          <p className="Hstsmall_text">
            511, SHIVAM ARCADE, NR. HANSPURA RESIDENCY, NARODA-DEHGAM ROAD,
            NARODA AHMEDABAD 382330 GUJARAT
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
