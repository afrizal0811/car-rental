import React, { useState, useEffect } from "react";
import "./index.css";
import Status from "../../components/Status";
import LoadingSkeleton from "../../components/LoadingSkeleton/SkePay.js";
import { Accordion, Button, Alert, Card, Form } from "react-bootstrap";
import { IntlProvider, FormattedNumber } from "react-intl";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faUserGroup,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Cookies from "js-cookie";
import { confirmAlert } from "react-confirm-alert";
import { Tooltip, styled } from "@mui/material";

const PaymentCar = () => {
  const [car, setCar] = useState("");
  const [loading, setLoading] = useState(true);
  const [catchVisible, setCatchVisible] = useState(false);
  const [isCheck1, setIsCheck1] = useState(false);
  const [isCheck2, setIsCheck2] = useState(false);
  const [isCheck3, setIsCheck3] = useState(false);
  const [bankName, setBankName] = useState("");
  let navigate = useNavigate();
  const { id } = useParams();
  const SEARCH_URL = `https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`;
  const startDate = Cookies.get("startDate");
  const endDate = Cookies.get("endDate");
  const lamaHari = Cookies.get("lamaHari");

  useEffect(() => {
    axios
      .get(SEARCH_URL)
      .then((response) => {
        setCar(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setCatchVisible(true);
      });
  }, []);

  const handleClickBank = (e, param) => {
    if (param === "BCA") {
      setIsCheck1(!isCheck1);
      setBankName("BCA Transfer");
      if (isCheck1) {
        setBankName("");
      }
      if (isCheck2 === true) {
        setIsCheck2(!isCheck2);
      } else if (isCheck3 === true) {
        setIsCheck3(!isCheck3);
      }
    } else if (param === "BNI") {
      setIsCheck2(!isCheck2);
      setBankName("BNI Transfer");
      if (isCheck2) {
        setBankName("");
      }
      if (isCheck1 === true) {
        setIsCheck1(!isCheck1);
      } else if (isCheck3 === true) {
        setIsCheck3(!isCheck3);
      }
    } else if (param === "Mandiri") {
      setIsCheck3(!isCheck3);
      setBankName("Mandiri Transfer");
      if (isCheck3) {
        setBankName("");
      }
      if (isCheck1 === true) {
        setIsCheck1(!isCheck1);
      } else if (isCheck2 === true) {
        setIsCheck2(!isCheck2);
      }
    }
  };

  function handleBayar(id) {
    const orderId = Math.floor(Math.random() * 90000000);
    Cookies.set("mobil", `${car.name}`, { expires: 1 / 3 });
    Cookies.set("mobilId", `${car.id}`, { expires: 1 / 3 });
    Cookies.set("order", `${orderId}`, { expires: 1 / 3 });
    Cookies.set("bank", `${bankName}`, { expires: 1 / 3 });
    Cookies.set("harga", `${car.price * lamaHari}`, { expires: 1 / 3 });
    confirmAlert({
      title: "Yakin?",
      message: "Periksa kembali detail pesanan.",
      buttons: [
        {
          label: "Lanjutkan Pesanan",
          onClick: () => navigate(`/payments/${orderId}`),
        },
        {
          label: "Periksa Kembali",
        },
      ],
    });
  }
  const StyledTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))`
    & .MuiTooltip-tooltip {
      background: navy;
      font-size: 14px;
    }
    .MuiTooltip-arrow {
      color: navy;
    }
  `;
  return (
    <div>
      <div key={car.id}>
        <div className="hero-pay-div">
          <div className="pay-back">
            <StyledTooltip title="Kembali ke halaman sebelumnya">
              <button
                onClick={(e) => navigate(`/cars/${id}`)}
                style={{ cursor: "pointer" }}
                id="backBtn"
              >
                <FontAwesomeIcon icon={faArrowLeft} size="2x" />
              </button>
            </StyledTooltip>
            <strong className="ps-4 fs-5">Pembayaran</strong>
          </div>
          <div className="d-flex">
            <Status current={["current", "num", "num"]} />
          </div>
        </div>
        {catchVisible && (
          <Alert variant="danger">
            Sambungan terputus. Periksa koneksi Internet.
          </Alert>
        )}
        {loading ? (
          <LoadingSkeleton />
        ) : (
          <div>
            <Form className="form-pesan">
              <h1 className="fw-bold fs-6 mb-3">Detail Pesananmu</h1>
              <div className="title-pesan">
                <Form.Group controlId="namaMobil" className="isi-pesan ">
                  <Form.Label>Nama Mobil</Form.Label>
                  <Form.Label className="text-capitalize text-black-50">
                    {car.name}
                  </Form.Label>
                </Form.Group>
                <Form.Group controlId="kategoriMobil" className="isi-pesan">
                  <Form.Label>Kategori</Form.Label>
                  <Form.Label className="text-capitalize text-black-50">
                    {car.category}
                  </Form.Label>
                </Form.Group>
                <Form.Group controlId="mulaiSewa" className="isi-pesan">
                  <Form.Label>Tanggal Mulai Sewa</Form.Label>
                  <Form.Label className="text-black-50">{startDate}</Form.Label>
                </Form.Group>
                <Form.Group controlId="akhirSewa" className="isi-pesan">
                  <Form.Label>Tanggal Akhir Sewa</Form.Label>
                  <Form.Label className="text-black-50">{endDate}</Form.Label>
                </Form.Group>
              </div>
            </Form>
            <div className="select-bank">
              <Card className="card-bank-detail">
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold mb-4">
                    Pilih Bank Transfer
                  </Card.Title>
                  <Card.Text>
                    Kamu bisa membayar dengan transfer melalui ATM, Internet
                    Banking, atau Mobile Banking
                  </Card.Text>
                  <a
                    className="btn-bank"
                    onClick={(e) => handleClickBank(e, "BCA")}
                  >
                    <div className="tmbl">BCA</div>
                    <div className="tmbl-text">BCA Transfer</div>
                    {isCheck1 && (
                      <FontAwesomeIcon icon={faCheck} className="ico" />
                    )}
                  </a>
                  <a
                    className="btn-bank"
                    onClick={(e) => handleClickBank(e, "BNI")}
                  >
                    <div className="tmbl">BNI</div>
                    <div className="tmbl-text">BNI Transfer</div>
                    {isCheck2 && (
                      <FontAwesomeIcon icon={faCheck} className="ico" />
                    )}
                  </a>
                  <a
                    className="btn-bank"
                    onClick={(e) => handleClickBank(e, "Mandiri")}
                  >
                    <div className="tmbl">Mandiri</div>
                    <div className="tmbl-text">Mandiri Transfer</div>
                    {isCheck3 && (
                      <FontAwesomeIcon icon={faCheck} className="ico" />
                    )}
                  </a>
                </Card.Body>
              </Card>
              <Card className="card-total-pay">
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="detail-title">{car.name}</Card.Title>
                  <div className="d-flex category">
                    <FontAwesomeIcon
                      icon={faUserGroup}
                      className="category-icon"
                    />
                    <Card.Text>{car.category}</Card.Text>
                  </div>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        Total
                        <div className="kanan">
                          <IntlProvider locale="id">
                            <FormattedNumber
                              value={car.price * lamaHari}
                              style="currency"
                              currency="IDR"
                            />
                          </IntlProvider>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="py-1">
                          <strong>Harga</strong>
                          <ul className="total-pay">
                            <li>
                              Sewa Mobil{" "}
                              <IntlProvider locale="id">
                                <FormattedNumber
                                  value={car.price}
                                  style="currency"
                                  currency="IDR"
                                />
                              </IntlProvider>{" "}
                              x {lamaHari} hari
                            </li>
                            <IntlProvider locale="id">
                              <FormattedNumber
                                value={car.price * lamaHari}
                                style="currency"
                                currency="IDR"
                              />
                            </IntlProvider>
                          </ul>
                        </div>
                        <div className="py-1">
                          <strong>Biaya Lainnya</strong>
                          <ul className="total-pay">
                            <div>
                              <li>Pajak</li>
                              <li>Biaya makan sopir</li>
                            </div>
                            <div>
                              <p style={{ margin: 0, color: "#5CB85F" }}>
                                Termasuk
                              </p>
                              <p style={{ margin: 0, color: "#5CB85F" }}>
                                Termasuk
                              </p>
                            </div>
                          </ul>
                        </div>
                        <div className="py-1">
                          <strong>Belum Termasuk</strong>
                          <ul className="total-pay">
                            <div>
                              <li>Bensin</li>
                              <li>Tol dan parkir</li>
                            </div>
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <hr />
                  <div className="all-total">
                    <strong>Total</strong>
                    <strong>
                      <IntlProvider locale="id">
                        <FormattedNumber
                          value={car.price * lamaHari}
                          style="currency"
                          currency="IDR"
                        />
                      </IntlProvider>
                    </strong>
                  </div>
                  <div className="d-grid mt-auto">
                    <Button
                      variant="success"
                      disabled={!bankName}
                      onClick={() => handleBayar(`${id}`)}
                    >
                      Bayar
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentCar;
