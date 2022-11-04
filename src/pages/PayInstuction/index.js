import React, { useState } from "react";
import "./index.css";
import Uploader from "../../components/MediaHandling/Uploader";
import ImageViewer from "../../components/MediaHandling/ImageViewer";

import { Button, Card, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCopy } from "@fortawesome/free-solid-svg-icons";
import Countdown from "react-countdown";
const PayInstruction = () => {
  const [isClicked, setIsClicked] = useState(false);
  const orderId = localStorage.getItem("order");
  const bankName = localStorage.getItem("bank");
  let harga =
    "Rp" + new Intl.NumberFormat("id").format(localStorage.getItem("harga"));

  var nextDate = new Date();
  nextDate.setDate(nextDate.getDate() + 1);

  let tgl = nextDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  let hari = nextDate.toLocaleDateString("id", { weekday: "long" });
  let jam = nextDate.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  let today = hari + ", " + tgl + " jam " + jam;

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    );
  };

  // const handleOnClick = (e) => {

  // }

  return (
    <div>
      <div className="hero-dv">
        <div style={{ display: "flex", paddingRight: "15rem" }}>
          <FontAwesomeIcon icon={faArrowLeft} size="2x" />
          <div>
            <strong className="ps-4 fs-5">{bankName}</strong>
            <p className="ps-4 fs-7">Order ID: {orderId}</p>
          </div>
        </div>
        <div className="d-flex pb-4">
          <div className="progres1">
            <p style={{ backgroundColor: "#0D28A6", color: "white" }}>1</p>
            <p>Pilih Metode - </p>
          </div>
          <div className="progres2">
            <p style={{ backgroundColor: "#0D28A6", color: "white" }}>2</p>
            <p>Bayar - </p>
          </div>
          <div className="progres3">
            <p>3</p>
            <p>Tiket</p>
          </div>
        </div>
      </div>
      <div className="ins-container">
        <div>
          <Card className="ins-item">
            <Card.Body className="d-flex flex-column">
              <Card.Title className="fw-bold fs-6">
                Selesaikan Pembayaran Sebelum
              </Card.Title>
              <div className="d-flex justify-content-between">
                <Card.Text>{today}</Card.Text>
                <Card.Text>
                  <Countdown date={Date.now() + 86400000} renderer={renderer} />
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
          <Card className="ins-item">
            <Card.Body className="d-flex flex-column">
              <Card.Title className="fw-bold fs-6 ms-3">
                Lakukan Transfer Ke
              </Card.Title>
              <div className="d-flex">
                <div className="tmbl">
                  {bankName.substring(0, bankName.indexOf(" "))}
                </div>
                <div className="d-flex flex-column pt-4">
                  <div>{bankName}</div>
                  <div>a.n Binar Car Rental</div>
                </div>
              </div>
              <div>
                <Card.Text className="fs-6 mt-4 ms-3 mb-1">
                  Nomor Rekening
                </Card.Text>
                <div
                  style={{
                    border: "1px solid black",
                    margin: "0 1rem",
                    padding: "0.3rem",
                  }}
                >
                  <input
                    style={{ border: "none", width: "500px" }}
                    value="54104257877"
                    disabled
                  />
                  <a
                    onClick={() => navigator.clipboard.writeText("54104257877")}
                  >
                    <FontAwesomeIcon icon={faCopy} />
                  </a>
                </div>
              </div>
              <div>
                <Card.Text className="fs-6 mt-4 ms-3 mb-1">
                  Total Bayar
                </Card.Text>
                <div
                  style={{
                    border: "1px solid black",
                    margin: "0 1rem",
                    padding: "0.3rem",
                  }}
                >
                  <input
                    style={{ border: "none", width: "500px" }}
                    value={harga}
                    disabled
                  />
                  <a onClick={() => navigator.clipboard.writeText(`${harga}`)}>
                    <FontAwesomeIcon icon={faCopy} />
                  </a>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="ins-item">
            <Card.Body className="d-flex flex-column">
              <Card.Title className="fw-bold fs-6 ms-3 mb-3">
                Instruksi Pembayaran
              </Card.Title>
              <Nav variant="tabs">
                <Nav.Item>
                  <Nav.Link eventKey="link-1">
                    ATM {bankName.substring(0, bankName.indexOf(" "))}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">
                    M-{bankName.substring(0, bankName.indexOf(" "))}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-3">Internet Banking</Nav.Link>
                </Nav.Item>
              </Nav>
              <ul
                className="text-wrap mt-4 text-muted"
                style={{ width: "550px" }}
              >
                <li>Masukkan kartu ATM, lalu PIN</li>
                <li>
                  Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek BCA
                  Virtual Account”
                </li>
                <li>
                  <div>
                    Masukkan nomor BCA Virtual Account: 70020 + Order ID.
                  </div>
                  Contoh:
                  <div>
                    No. Order ID: {orderId}, maka ditulis 70020{orderId}
                  </div>
                </li>
                <li>
                  Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk
                  menyelesaikan transaksi
                </li>
                <li>Ambil dan simpanlah bukti transaksi tersebut</li>
              </ul>
            </Card.Body>
          </Card>
        </div>
        {isClicked ? (
          <Card className="ins-item cobi">
            <Card.Body className="d-flex flex-column">
              <div className="d-flex justify-content-between">
                <Card.Title className="fw-bold fs-6">
                  Konfirmasi Pembayaran
                </Card.Title>
                <Card.Text>
                  <Countdown date={Date.now() + 600000} renderer={renderer} />
                </Card.Text>
              </div>
              <Card.Text className="fs-6 mt-4">
                Terima kasih teslah melakukan konfirmasi pembayaran.
                Pembayaranmu akan segera kami cek tunggu kurang lebih 10 menit
                untuk mendapatkan konfirmasi.
              </Card.Text>
              <Card.Title className="fs-6 mt-2">
                Upload Bukti Pembayaran
              </Card.Title>
              <Card.Text className="fs-6">
                Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa
                upload bukti bayarmu
              </Card.Text>
              <Uploader />
              <ImageViewer />
            </Card.Body>
          </Card>
        ) : (
          <Card className="ins-item coba">
            <Card.Body className="d-flex flex-column">
              <Card.Text className="fs-6">
                Klik konfirmasi pembayaran untuk mempercepat proses pengecekan
              </Card.Text>
              <div className="d-grid mt-auto">
                <Button variant="success" onClick={(e) => setIsClicked(true)}>
                  Konfirmasi Pembayaran
                </Button>
              </div>
            </Card.Body>
          </Card>
        )}
      </div>
    </div>
  );
};

export default PayInstruction;
