import React, { useState, useEffect } from "react";
import "./index.css";
import Status from "../../components/Status";
import Instuction from "./Instuction.js";
import { useParams, useNavigate } from "react-router-dom";
import { Alert, Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCopy,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import Dropzone from "react-dropzone-uploader";
import CountdownTimer from "react-component-countdown-timer";
import Cookies from "js-cookie";

const PayInstruction = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [copied1, setCopied1] = useState(false);
  const [copied2, setCopied2] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  let navigate = useNavigate();
  const { id } = useParams();
  const orderId = Cookies.get("order");
  const bankName = Cookies.get("bank");

  let harga = "Rp" + new Intl.NumberFormat("id").format(Cookies.get("harga"));

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

  const getUploadParams = () => {
    return { url: "https://httpbin.org/post" };
  };

  const handleChangeStatus = ({ meta, remove }, status) => {
    if (status === "preparing") {
      setIsLoading(true);
    } else if (status === "done") {
      setIsLoading(false);
      handleUploaded();
      remove();
    }
  };

  const handleUploaded = () => {
    setUploaded(true);
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 10000);
  };

  const copyTeks = (e, param) => {
    if (param === "rekening") {
      navigator.clipboard.writeText("54104257877");
      setCopied1(true);
    }
    if (param === "uang") {
      navigator.clipboard.writeText(`${localStorage.getItem("harga")}`);
      setCopied2(true);
    }
  };

  function handleUpload(id) {
    navigate(`/ticket/${orderId}`);
  }
  return (
    <div>
      <div className="hero-dv">
        <div className="tf-back">
          <FontAwesomeIcon icon={faArrowLeft} size="2x" />
          <div>
            <strong className="ps-4 fs-5">{bankName}</strong>
            <p className="ps-4 fs-7">Order ID: {orderId}</p>
          </div>
        </div>
        <div className=" pb-4">
          <Status current={["current", "current", "num"]} />
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
                  <CountdownTimer
                    count={86400}
                    hideDay
                    color="white"
                    backgroundColor="red"
                    responsive
                  />
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
                  <a onClick={(e) => copyTeks(e, "rekening")}>
                    <FontAwesomeIcon icon={copied1 ? faCheck : faCopy} />
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
                  <a onClick={(e) => copyTeks(e, "uang")}>
                    <FontAwesomeIcon icon={copied2 ? faCheck : faCopy} />
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
              <Instuction bank={bankName} />
            </Card.Body>
          </Card>
        </div>
        {isClicked ? (
          <Card className="ins-item coba">
            <Card.Body className="d-flex flex-column">
              <div className="d-flex justify-content-between">
                <Card.Title className="fw-bold fs-6">
                  Konfirmasi Pembayaran
                </Card.Title>

                <Card.Text>
                  <CountdownTimer
                    count={600}
                    hideDay
                    color="white"
                    backgroundColor="red"
                    responsive
                  />
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
              {alertVisible && (
                <Alert variant="success" isOpen={alertVisible}>
                  File berhasil di-upload !
                </Alert>
              )}

              {isLoading ? (
                <div className="load-wrapper">
                  <div class="load"></div>
                </div>
              ) : (
                <div>
                  <Dropzone
                    getUploadParams={getUploadParams}
                    onChangeStatus={handleChangeStatus}
                    maxFiles={1}
                    multiple={false}
                    canCancel={false}
                    inputContent="Drop A File"
                    accept="image/*"
                    styles={{
                      dropzone: { marginBottom: 20 },
                    }}
                  />
                </div>
              )}

              <div className="d-grid mt-auto">
                <Button
                  variant="success"
                  disabled={!uploaded}
                  onClick={() => handleUpload(`${id}`)}
                >
                  Upload
                </Button>
              </div>
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
