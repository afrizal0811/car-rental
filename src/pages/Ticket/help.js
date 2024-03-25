import { StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: { backgroundColor: '#f1f3ff' },
  section: { textAlign: 'center', margin: 30 },
  judul: { textAlign: 'center', marginBottom: 30 },
  informasi: {
    marginLeft: 30,
    marginTop: 30,
    marginRight: 20,
  },
  infoWrapper: { flexDirection: 'row' },
  image: { width: '200' },
  title: {
    fontSize: 43,
    textAlign: 'center',
    fontWeight: '700',
    marginBottom: 10,
  },
  address: {
    fontSize: 13,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 26,
    textAlign: 'center',
    fontWeight: '700',
    marginBottom: 10,
  },
  order: {
    fontSize: 14,
    textAlign: 'center',
  },
  info: {
    fontSize: 16,
    marginTop: 15,
  },
  judulTotal: {
    fontSize: 16,
    marginRight: 25,
    marginLeft: 'auto',
    marginTop: 130,
  },
  total: {
    fontSize: 25,
    marginRight: 25,
    marginLeft: 'auto',
    marginTop: 15,
  },
})

export default styles
