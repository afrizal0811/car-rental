import React from "react";
import {
  Image,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Svg,
  Line,
} from "@react-pdf/renderer";
import InvoiceImg from "../../assets/image/img_car.png";
import Cookies from "js-cookie";
// Create styles
const styles = StyleSheet.create({
  page: { backgroundColor: "#f1f3ff" },
  section: { textAlign: "center", margin: 30 },
  judul: { textAlign: "center" },
  informasi: { margin: 30 },
  image: { width: "200" },
  title: {
    fontSize: 43,
    textAlign: "center",
    fontWeight: "700",
    marginBottom: "10",
  },
  address: {
    fontSize: 13,
    marginBottom: "10",
  },
  subtitle: {
    fontSize: 26,
    textAlign: "center",
    fontWeight: "700",
    marginBottom: "10",
  },
  order: {
    fontSize: 14,
    textAlign: "center",
  },
  info: {
    fontSize: 20,
    marginLeft: 20,
    marginTop:10
  },
});
const orderId = Cookies.get("order");
const mobil = Cookies.get("mobil");
const startDate = Cookies.get("startDate");
const endDate = Cookies.get("endDate");
const lamaSewa = Cookies.get("lama");
let harga = "Rp" + new Intl.NumberFormat("id").format(Cookies.get("harga"));
// Create Document Component
const PdfDoc = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        {/* <Image style={styles.image} src={InvoiceImg} /> */}
        <Text style={styles.title}>BINAR CAR RENTAL</Text>
        <Text style={styles.address}>
          Jalan Suroyo No. 161 Mayangan Kota Probolinggo, 67213
        </Text>
        <Text style={styles.address}>081-233-334-808</Text>
        <Svg height="5" width="550">
          <Line x1="10" y1="0" x2="520" y2="0" strokeWidth={5} stroke="black" />
        </Svg>
        <Text>
          <hr />
        </Text>
      </View>
      <View style={styles.judul}>
        <Text style={styles.subtitle}>Invoice Sewa Mobil</Text>
        <Text style={styles.order}>Order ID: {orderId}</Text>
      </View>
      <View style={styles.informasi}>
        <Text style={styles.info}>Nama Mobil : {mobil}</Text>
        <Text style={styles.info}>Tanggal Sewa : {startDate}</Text>
        <Text style={styles.info}>Tanggal Kembali : {endDate}</Text>
        <Text style={styles.info}>Lama Sewa : {lamaSewa} hari</Text>
        <Text style={styles.info}>Harga Sewa : {harga}</Text>
      </View>
    </Page>
  </Document>
);

export default PdfDoc;
