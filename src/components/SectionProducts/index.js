import React from 'react'
import { Row } from 'react-bootstrap'
import imagePath from '../../constants/imagePath'
import CardComponent from './CardComponent'
import './index.css'

const Products = () => {
  const data = [
    {
      produk: 'Mobil Lengkap',
      text: 'Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat',
      icon: imagePath.iconComplete,
    },
    {
      produk: 'Harga Murah',
      text: 'Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain',
      icon: imagePath.iconPrice,
    },
    {
      produk: 'Layanan 24 Jam',
      text: 'Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu',
      icon: imagePath.iconTime,
    },
    {
      produk: 'Sopir Profesional',
      text: 'Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu',
      icon: imagePath.iconProfessional,
    },
  ]
  return (
    <div>
      <section
        id='products'
        className='product-section'
      >
        <div className='product-title'>
          <h1>Why Us?</h1>
          <p>Mengapa harus pilih Binar Car Rental?</p>
        </div>
        <div className='product-card-container'>
          <Row>
            {data.map((item, index) => {
              return (
                <CardComponent
                  key={index}
                  produk={item.produk}
                  text={item.text}
                  icon={item.icon}
                />
              )
            })}
          </Row>
        </div>
      </section>
    </div>
  )
}

export default Products
