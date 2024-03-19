// import React from "react";
// import {
//   Page,
//   Text,
//   View,
//   Document,
//   StyleSheet,
//   Svg,
//   Line,
// } from "@react-pdf/renderer";
// import Cookies from "js-cookie";
// const details = localStorage.getItem("userIn");
// const user = JSON.parse(details);
// const orderId = Cookies.get("order");
// const mobil = Cookies.get("mobil");
// const startDate = Cookies.get("startDate");
// const endDate = Cookies.get("endDate");
// const lamaSewa = Cookies.get("lamaHari");
// const harga = "Rp" + new Intl.NumberFormat("id").format(Cookies.get("harga"));
// // Create styles
// const styles = StyleSheet.create({
//   page: { backgroundColor: "#f1f3ff" },
//   section: { textAlign: "center", margin: 30 },
//   judul: { textAlign: "center", marginBottom: 30 },
//   informasi: {
//     marginLeft: 30,
//     marginTop: 30,
//     marginRight: 20,
//   },
//   infoWrapper: { flexDirection: "row" },
//   image: { width: "200" },
//   title: {
//     fontSize: 43,
//     textAlign: "center",
//     fontWeight: "700",
//     marginBottom: 10,
//   },
//   address: {
//     fontSize: 13,
//     marginBottom: 10,
//   },
//   subtitle: {
//     fontSize: 26,
//     textAlign: "center",
//     fontWeight: "700",
//     marginBottom: 10,
//   },
//   order: {
//     fontSize: 14,
//     textAlign: "center",
//   },
//   info: {
//     fontSize: 16,
//     // marginLeft: 20,
//     marginTop: 15,
//   },
//   judulTotal: {
//     fontSize: 16,
//     marginRight: 25,
//     marginLeft: "auto",
//     marginTop: 130,
//   },
//   total: {
//     fontSize: 25,
//     marginRight: 25,
//     marginLeft: "auto",
//     marginTop: 15,
//   },
// });

// // Create Document Component
// const PdfDoc = () => {

//   // function handleLoad() {
//   //   if (!window.location.hash) {
//   //     window.location = window.location + "#success";
//   //     window.location.reload();
//   //   }
//   // }

//   return (
//     <Document >
//       <Page size="A4" style={styles.page}>
//         <View style={styles.section}>
//           {/* <Image style={styles.image} src={InvoiceImg} /> */}
//           <Text style={styles.title}>BINAR CAR RENTAL</Text>
//           <Text style={styles.address}>
//             Jalan Suroyo No. 161 Mayangan Kota Probolinggo, 67213
//           </Text>
//           <Text style={styles.address}>081-233-334-808</Text>
//           <Svg height="5" width="550">
//             <Line
//               x1="10"
//               y1="0"
//               x2="520"
//               y2="0"
//               strokeWidth={5}
//               stroke="black"
//             />
//           </Svg>
//           <Text></Text>
//         </View>
//         <View style={styles.judul}>
//           <Text style={styles.subtitle}>Invoice Sewa Mobil</Text>
//           <Text style={styles.order}>Order ID: {orderId}</Text>
//         </View>
//         <View style={styles.infoWrapper}>
//           <View style={styles.informasi}>
//             <Text style={styles.info}>Penyewa : {user.role}</Text>
//             <Text style={styles.info}>Email Penyewa : {user.email}</Text>
//             <Text style={styles.info}>Nama Mobil : {mobil}</Text>
//           </View>
//           <View style={styles.informasi}>
//             <Text style={styles.info}>Tanggal Sewa : {startDate}</Text>
//             <Text style={styles.info}>Tanggal Kembali : {endDate}</Text>
//             <Text style={styles.info}>Lama Sewa : {lamaSewa} hari</Text>
//           </View>
//         </View>
//         <View style={styles.total}>
//           <Text style={styles.judulTotal}>Total Pembayaran</Text>
//           <Text style={styles.total}>{harga}</Text>
//         </View>
//       </Page>
//     </Document>
//   );
// };

// export default PdfDoc;
