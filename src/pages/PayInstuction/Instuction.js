import React, { useState } from "react";

const Instuction = (props) => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="instruct-cont">
        <div className="Tabs-cont">
          <div
            className={`tabs ${index === 0 ? `active` : null}`}
            onClick={() => setIndex(0)}
          >
            ATM {props.bank.substring(0, props.bank.indexOf(" "))}
          </div>
          <div
            className={`tabs ${index === 1 ? `active` : null}`}
            onClick={() => setIndex(1)}
          >
            M-{props.bank.substring(0, props.bank.indexOf(" "))}
          </div>
          <div
            className={`tabs ${index === 2 ? `active` : null}`}
            onClick={() => setIndex(2)}
          >
            {props.bank.substring(0, props.bank.indexOf(" "))} Klik
          </div>
          <div
            className={`tabs ${index === 3 ? `active` : null}`}
            onClick={() => setIndex(3)}
          >
            Internet Banking
          </div>
        </div>
        <div className="tabs-content">
          <div className="ins-content" hidden={index !== 0}>
            <ul>
              <li>Masukkan kartu ATM, lalu PIN</li>
              <li>
                {" "}
                Pilih menu “Transaksi Lainnya” – "Transfer” – “Ke Rek{" "}
                {props.bank.substring(0, props.bank.indexOf(" "))} Virtual
                Account”
              </li>
              <li>
                Masukkan nomor{" "}
                {props.bank.substring(0, props.bank.indexOf(" "))} Virtual
                Account: 70020+Order ID <br />
                Contoh:
                <br /> No. Peserta: 12345678, maka ditulis 7002012345678{" "}
              </li>
              <li>
                Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk
                menyelesaikan transaksi
              </li>
              <li>Ambil dan simpanlah bukti transaksi tersebut</li>
            </ul>
          </div>
          <div className="ins-content" hidden={index !== 1}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            ad quo et neque placeat vel, odio perspiciatis laboriosam quis quas?
          </div>
          <div className="ins-content" hidden={index !== 2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit optio
            libero, unde iure placeat expedita eligendi asperiores eius quo
            tempora!
          </div>
          <div className="ins-content" hidden={index !== 3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit optio
            libero, unde iure placeat expedita eligendi asperiores eius quo
            tempora!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instuction;
