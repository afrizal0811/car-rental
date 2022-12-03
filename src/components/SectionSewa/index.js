import React from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
const Sewa = () => {
  const navigate = useNavigate();
  function handleSearch() {
    const token = localStorage.getItem("userIn");
    if (token) {
      navigate(`/cars`);
    } else window.location.href = `/login?redirectFrom=/cars`;
    return;
  }
  return (
    <div>
      <section className="sewa-section">
        <div className="sewa-container">
          <h1>Sewa Mobil di Jawa Timur Sekarang</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet odio
            blanditiis voluptatem libero sit quam nisi deserunt quas,
            exercitationem, rem porro quia atque aspernatur cum, ipsum nemo
            nihil vel sed.
          </p>
          <Button variant="success" onClick={handleSearch}>
              Mulai Sewa Mobil
            </Button>
        </div>
      </section>
    </div>
  );
};

export default Sewa;
