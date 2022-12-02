import React, { useState, useEffect } from "react";
import "./index.css";
import { useParams, useNavigate } from "react-router-dom";
import { Alert, Button, Card } from "react-bootstrap";
import axios from "axios";
import { IntlProvider, FormattedNumber } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import Accordion from "react-bootstrap/Accordion";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import Cookies from "js-cookie";
import LoadingSkeleton from "../../components/LoadingSkeleton/SkeDetailCars.js";
import { Tooltip, styled } from "@mui/material";

const DetailCar = () => {
  const [car, setCar] = useState("");
  const [catchVisible, setCatchVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [tanggal, setTanggal] = useState("");
  const { id } = useParams();
  let navigate = useNavigate();
  const SEARCH_URL = `https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`;
  var internetCheck = false;

  useEffect(() => {
    axios
      .get(SEARCH_URL)
      .then((response) => {
        setCar(response.data);
        setLoading(false);
      })
      .catch(() => {
        setCatchVisible(true);
        setLoading(false);
        internetCheck = true;
      });
  }, []);

  function handleViewDetail(id) {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const lamaHari = Math.round(Math.abs((tanggal[0] - tanggal[1]) / oneDay));
    const tanggalAwal = tanggal[0].toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    const tanggalAkhir = tanggal[1].toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    Cookies.set("startDate", `${tanggalAwal}`, { expires: 1 / 3 });
    Cookies.set("endDate", `${tanggalAkhir}`, { expires: 1 / 3 });
    Cookies.set("lamaHari", `${lamaHari}`, { expires: 1 / 3 });
    const token = localStorage.getItem("userIn");
    if (token) {
      navigate(`/payment/${id}`);
    } else window.location.href = `/login?redirectFrom=/payment/${id}`;

    return;
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
        <div className="hero-div"></div>
        {catchVisible && (
          <Alert variant="danger">
            Koneksi terputus. Periksa kembali koneksi internet dan tunggu
            beberapa saat.
          </Alert>
        )}
        {loading ? (
          <LoadingSkeleton />
        ) : (
          internetCheck && (
            <div className="detail-section">
              <Card className="card-detail">
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="detail-title">
                    Tentang Paket
                  </Card.Title>
                  <Card.Title className="detail-title">Include</Card.Title>
                  <ul className="detail-list">
                    <li>
                      Apa saja yang termasuk dalam paket misal durasi max 12 jam
                    </li>
                    <li>Sudah termasuk bensin selama 12 jam</li>
                    <li>Sudah termasuk Tiket Wisata</li>
                    <li>Sudah termasuk pajak</li>
                  </ul>
                  <Card.Title className="detail-title">Exclude</Card.Title>
                  <ul className="detail-list">
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>
                      Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                      20.000/jam
                    </li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                  </ul>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        Refund, Reschedule, Overtime
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul className="detail-list">
                          <li>
                            Tidak termasuk biaya makan sopir Rp 75.000/hari
                          </li>
                          <li>
                            Jika overtime lebih dari 12 jam akan ada tambahan
                            biaya Rp 20.000/jam
                          </li>
                          <li>Tidak termasuk akomodasi penginapan</li>
                          <li>
                            Tidak termasuk biaya makan sopir Rp 75.000/hari
                          </li>
                          <li>
                            Jika overtime lebih dari 12 jam akan ada tambahan
                            biaya Rp 20.000/jam
                          </li>
                          <li>Tidak termasuk akomodasi penginapan</li>
                          <li>
                            Tidak termasuk biaya makan sopir Rp 75.000/hari
                          </li>
                          <li>
                            Jika overtime lebih dari 12 jam akan ada tambahan
                            biaya Rp 20.000/jam
                          </li>
                          <li>Tidak termasuk akomodasi penginapan</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Card.Body>
              </Card>
              <Card className="card-detail-total">
                <Card.Img
                  variant="top"
                  src={
                    car.image
                      ? car.image
                      : "https://img.freepik.com/premium-vector/car-cartoon-vehicle-transportation-isolated_138676-2473.jpg?w=740"
                  }
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="detail-title">{car.name}</Card.Title>
                  <div className="d-flex category">
                    <FontAwesomeIcon
                      icon={faUserGroup}
                      className="category-icon"
                    />
                    <Card.Text>{car.category}</Card.Text>
                  </div>
                  <StyledTooltip title="Pilih tanggal sewa" placement="bottom">
                    <div className="date-picker">
                      <Card.Text>
                        Tentukan lama sewa mobil (max. 7 hari)
                      </Card.Text>
                      <DateRangePicker
                        onChange={setTanggal}
                        value={tanggal}
                        format="dd-MM-y"
                        minDate={new Date()}
                        // maxDate={maksDate}
                        rangeDivider={" to "}
                        className="tggl"
                      />
                    </div>
                  </StyledTooltip>
                  <strong className="d-flex justify-content-between mt-5 mb-5">
                    <Card.Text>Total</Card.Text>
                    <IntlProvider locale="id">
                      <FormattedNumber
                        value={car.price}
                        style="currency"
                        currency="IDR"
                      />
                    </IntlProvider>
                  </strong>
                  <div className="d-grid mt-auto">
                    <Button
                      variant="success"
                      disabled={!tanggal}
                      onClick={() => handleViewDetail(`${id}`)}
                    >
                      Lanjutkan Pembayaran
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default DetailCar;
