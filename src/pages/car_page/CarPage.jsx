import { every, isEmpty, map } from 'lodash'
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useOutletContext, useSearchParams } from 'react-router-dom'
import {
  Button,
  Card,
  FormControl,
  FormGroup,
  FormSelect,
} from '../../components/bootstrapComponent'
import carList from '../../constants/carList'
import { localePriceFormat } from '../../utilities/handleLocale'
import SectionHero from '../landing_page/hero/Hero'
import './Styled.css'
import { hargaOptions, kategoriOptions, sorting, statusOptions } from './help'

const CarPage = (props) => {
  const [filteredCarList, setFilteredCarList] = useState('')
  const [searchParams] = useSearchParams()
  const { isLoggin, navigate } = useOutletContext()

  useEffect(() => {
    if (!isLoggin) {
      navigate('/login', { replace: true })
    }
  }, [])

  useEffect(() => {
    const params = {}
    searchParams.forEach((value, key) => {
      Object.assign(params, { [key]: value })
    })

    const isDataEmpty = every(Object.values(params), (x) => isEmpty(x))
    if (!isDataEmpty) {
      const prices = params.price && [
        Number(params.price.split(',')[0]),
        Number(params.price.split(',')[1]),
      ]
      const isAvailable =
        params.isAvailable && params.isAvailable.toLowerCase() === 'true'
      const filteredCar = carList.filter(
        (data) =>
          data.name.toLowerCase() === params.name.toLowerCase() ||
          data.category === params.category ||
          data.isAvailable === isAvailable ||
          (prices && data.price >= prices[0] && data.price <= prices[1])
      )
      setFilteredCarList(filteredCar)
    }
  }, [])
  const newCarList = filteredCarList !== '' ? filteredCarList : carList

  return (
    <div>
      <SectionHero {...props} />
      <Form className='cari-content'>
        <FormGroup
          controlId='formNama'
          className='mt-3'
          label='Nama Mobil'
        >
          <FormControl
            type='text'
            placeholder='Ketik Nama/Tipe Mobil'
            autoComplete='off'
            name='name'
          />
        </FormGroup>
        <FormGroup
          controlId='formKategori'
          className='mt-3'
          label='Kategori'
        >
          <FormSelect
            name='category'
            title='Masukan Kapasitas Mobil'
            option={kategoriOptions}
          />
        </FormGroup>
        <FormGroup
          controlId='formHarga'
          className='mt-3'
          label='Harga'
        >
          <FormSelect
            title='Masukan Harga Sewa per Hari'
            option={hargaOptions}
            name='price'
            isPrice='true'
          />
        </FormGroup>
        <FormGroup
          controlId='formSewa'
          className='mt-3'
          label='Status'
        >
          <FormSelect
            title='Status Mobil'
            option={statusOptions}
            name='isAvailable'
          />
        </FormGroup>
        <Button
          variant='success'
          type='submit'
          className='mt-4'
          id='searchBtn'
          text='Cari Mobil'
        />
      </Form>
      <div className='mt-5 hasil-card'>
        <div className='d-flex flex-wrap align-items-stretch justify-content-around'>
          {map(sorting(newCarList), (result) => {
            const { id, price, isAvailable } = result
            return (
              <Card
                data={result}
                key={id}
                className={`card-cont ${!isAvailable && `dimmer`}`}
                infoClass='date-picker'
                isHaveImage='true'
                isHaveCategory='true'
              >
                {localePriceFormat(price)}
                <div className='d-grid mt-auto pt-3'>
                  <Button
                    variant='success'
                    text='Pilih Mobil'
                    disabled={!isAvailable}
                    onClick={() => navigate(`/cars/${id}`)}
                  />
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CarPage
