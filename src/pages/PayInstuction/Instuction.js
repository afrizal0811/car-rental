import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
const Instuction = (props) => {
  const [index, setIndex] = useState(0);
  const data = [
    {
      bank: `ATM ${props.bank.substring(0, props.bank.indexOf(" "))}`,
      isi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ullam fugiat enim et molestias nobis commodi recusandae vero, fugit sint voluptas, temporibus quo ipsa. Fugit velit perferendis nobis explicabo earum.",
    },
    {
      bank: `M-${props.bank.substring(0, props.bank.indexOf(" "))}`,
      isi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium alias sint officia maxime officiis cumque tempora dolore et fugiat, itaque est maiores aliquam, perspiciatis obcaecati vel veniam nisi? Incidunt, quam!",
    },
    {
      bank: `${props.bank.substring(0, props.bank.indexOf(" "))} Klik`,
      isi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem quis, repellendus odit nobis consequuntur nemo magnam amet quibusdam, ipsa ipsum, temporibus aut nisi voluptas libero non ipsam quos perferendis.",
    },
    {
      bank: "Internet Banking",
      isi: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, molestias harum vero aliquam architecto, explicabo a ipsa nihil quas obcaecati, fugiat numquam aut veniam doloremque fugit quidem vitae eos! Aliquid!",
    },
  ];
  return (
    <div>
      <div className="instruct-cont">
        <Accordion className="instruct-accord">
          {data.map((item, index) => {
            return (
              <Accordion.Item key={index}>
                <Accordion.Header>{item.bank}</Accordion.Header>
                <Accordion.Body>{item.isi}</Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
        <div className="instruct-nav">
          <Nav justify variant="tabs">
            <Nav.Item>
              <Nav.Link
                className={`${index === 0 && `active`}`}
                onClick={() => setIndex(0)}
              >
                ATM {props.bank.substring(0, props.bank.indexOf(" "))}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={` ${index === 1 && `active`}`}
                onClick={() => setIndex(1)}
              >
                M-{props.bank.substring(0, props.bank.indexOf(" "))}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={` ${index === 2 && `active`}`}
                onClick={() => setIndex(2)}
              >
                {props.bank.substring(0, props.bank.indexOf(" "))} Klik
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={` ${index === 3 && `active`}`}
                onClick={() => setIndex(3)}
              >
                E-Banking
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <div className="tabs-content">
            <div className="ins-content" hidden={index !== 0}>
              <ul>
                <li>Masukkan kartu ATM, lalu PIN</li>
                <li>
                  Pilih menu &quot;Transaksi Lainnya&quot; –
                  &quot;Transfer&quot; – “Ke Rek{" "}
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
              ad quo et neque placeat vel, odio perspiciatis laboriosam quis
              quas?
            </div>
            <div className="ins-content" hidden={index !== 2}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit optio
              libero, unde iure placeat expedita eligendi asperiores eius quo
              tempora!
            </div>
            <div className="ins-content" hidden={index !== 3}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              officia ipsam fuga quidem incidunt, illum fugit sit, at tenetur
              aut atque, dolor maxime iure voluptates? Omnis delectus ratione
              quasi incidunt.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instuction;
