import { Document, Line, Page, Svg, Text, View } from '@react-pdf/renderer'
import React from 'react'
import { styles } from './help'

const PdfComp = (props) => {
  const { data } = props

  return (
    <Document>
      <Page
        size='A4'
        style={styles.page}
      >
        <View style={styles.section}>
          <Text style={styles.title}>BINAR CAR RENTAL</Text>
          <Text style={styles.address}>
            Jalan Suroyo No. 161 Mayangan Kota Probolinggo, 67213
          </Text>
          <Text style={styles.address}>081-233-334-808</Text>
          <Svg
            height='5'
            width='550'
          >
            <Line
              x1='10'
              y1='0'
              x2='520'
              y2='0'
              strokeWidth={5}
              stroke='black'
            />
          </Svg>
        </View>
        <View style={styles.judul}>
          <Text style={styles.subtitle}>Invoice Sewa Mobil</Text>
          <Text style={styles.order}>Order ID: {data.orderId}</Text>
        </View>
        <View style={styles.infoWrapper}>
          <View style={styles.informasi}>
            <Text style={styles.info}>Penyewa : Developer</Text>
            <Text style={styles.info}>Email Penyewa : developer@mail.com</Text>
            <Text style={styles.info}>Nama Mobil : {data.mobil.name}</Text>
          </View>
          <View style={styles.informasi}>
            <Text style={styles.info}>Tanggal Sewa : {data.tanggalAwal}</Text>
            <Text style={styles.info}>
              Tanggal Kembali : {data.tanggalAkhir}
            </Text>
            <Text style={styles.info}>Lama Sewa : {data.lamaHari} hari</Text>
          </View>
        </View>
        <View style={styles.total}>
          <Text style={styles.judulTotal}>Total Pembayaran</Text>
          <Text style={styles.total}>{data.formattedHarga}</Text>
        </View>
      </Page>
    </Document>
  )
}

export default PdfComp
