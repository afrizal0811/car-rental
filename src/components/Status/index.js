import React from "react";
import "./index.css";

const Status = (props) => {
  const current = props.current;

  return (
    <div>
      <div className="d-flex">
        <p className={current[0]}>1</p>
        <span className="me-2">Pilih Metode</span>
        <hr className="garis" />
        {/* <p className="line">______</p> */}
        <p className={current[1]}>2</p>
        <span className="me-2">Bayar</span>
        <hr className="garis" />
        {/* <p className="line">______</p> */}
        <p className={current[2]}>3</p>
        <span className="me-2">Tiket</span>
      </div>
    </div>
  );
};

export default Status;
