import React, { useState } from 'react'
import { Nav } from 'react-bootstrap'

const Instuction = () => {
  const [index, setIndex] = useState(0)

  return (
    <div className='w-100'>
      <Nav variant='tabs'>
        <Nav.Item>
          <Nav.Link
            className={`${index === 0 && `active`}`}
            onClick={() => setIndex(0)}
          >
            ATM
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
      <div className='w-100'>
        <div
          className='my-3 mx-1'
          hidden={index !== 0}
        >
          <ul>
            <li>Masukkan kartu ATM, lalu PIN</li>
            <li>
              Pilih menu &quot;Transaksi Lainnya&quot; – &quot;Transfer&quot; –
              “Ke Rekening Virtual Account”
            </li>
            <li>
              Masukkan nomor rekening Virtual Account: 70020+Order ID <br />
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
          className='my-3 mx-1'
          hidden={index !== 1}
        >

            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id natus
            laudantium, asperiores libero animi commodi quaerat qui accusantium
            nostrum, dolor quod vel molestiae. Ex, iste explicabo magnam quis
            dignissimos placeat.

        </div>
      </div>
    </div>
  )
}

export default Instuction
