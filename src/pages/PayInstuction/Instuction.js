import React, { useState } from 'react'
import { Nav } from 'react-bootstrap'

const Instuction = (props) => {
  const [index, setIndex] = useState(0)

  return (
    <div className='instruct-cont'>
      <div className='instruct-nav'>
        <Nav
          justify
          variant='tabs'
        >
          <Nav.Item>
            <Nav.Link
              className={`${index === 0 && `active`}`}
              onClick={() => setIndex(0)}
            >
              ATM {props.bank.substring(0, props.bank.indexOf(' '))}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className={` ${index === 1 && `active`}`}
              onClick={() => setIndex(1)}
            >
              E-Banking
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <div className='tabs-content'>
          <div
            className='ins-content'
            hidden={index !== 0}
          >
            <ul>
              <li>Masukkan kartu ATM, lalu PIN</li>
              <li>
                Pilih menu &quot;Transaksi Lainnya&quot; – &quot;Transfer&quot;
                – “Ke Rek {props.bank.substring(0, props.bank.indexOf(' '))}{' '}
                Virtual Account”
              </li>
              <li>
                Masukkan nomor{' '}
                {props.bank.substring(0, props.bank.indexOf(' '))} Virtual
                Account: 70020+Order ID <br />
                Contoh:
                <br /> No. Peserta: 12345678, maka ditulis 7002012345678{' '}
              </li>
              <li>
                Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk
                menyelesaikan transaksi
              </li>
              <li>Ambil dan simpanlah bukti transaksi tersebut</li>
            </ul>
          </div>
          <div
            className='ins-content'
            hidden={index !== 1}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            officia ipsam fuga quidem incidunt, illum fugit sit, at tenetur aut
            atque, dolor maxime iure voluptates? Omnis delectus ratione quasi
            incidunt.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Instuction
