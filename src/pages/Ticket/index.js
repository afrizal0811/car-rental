import React from "react";
import "./index.css";
import Status from "../../components/Status";
import PdfView from "../../components/MediaHandling/PdfView.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCircleCheck,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Card } from "react-bootstrap";
import Cookies from "js-cookie";
const Ticket = () => {
  const orderId = Cookies.get("order");
  return (
    <div>
      <div className="hero-dv">
        <div style={{ display: "flex", paddingRight: "15rem" }}>
          <FontAwesomeIcon icon={faArrowLeft} size="2x" />
          <div>
            <strong className="ps-4 fs-5">Ticket</strong>
            <p className="ps-4 fs-7">Order ID: {orderId}</p>
          </div>
        </div>
        <div className=" pb-4">
          <Status current={["current", "current", "current"]} />
        </div>
      </div>
      <div className="success">
        <FontAwesomeIcon icon={faCircleCheck} size="5x" className="ceklis" />
        <div className="text-center">
          <strong>Pembayaran Berhasil!</strong>
          <p className="text-muted mt-3">
            Tunjukkan invoice ini ke petugas BCR di titik temu.
          </p>
        </div>
      </div>
      <Card className="ticket-card">
        <Card.Body className="d-flex flex-column">
          <div className="d-flex justify-content-between m-2 mb-4">
            <Card.Title className="fw-bold fs-6">Invoice</Card.Title>
            <Button className="downloadBtn">
              <FontAwesomeIcon icon={faRightToBracket} rotation={90} style={{marginRight:"0.5rem"}}/>
              Unduh
            </Button>
          </div>
          {/* <PdfView /> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Ticket;
