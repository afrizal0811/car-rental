import React from 'react'
import { Form } from 'react-bootstrap'
import {
  Button,
  Card,
  FormControl,
  FormGroup,
  FormSelect,
} from '../../components/bootstrapComponent'
import SectionHero from '../../components/sectionHero'
import carList from '../../constants/carList'
import { localePriceFormat } from '../../utilities/handleLocale'
import { hargaOptions, kategoriOptions, statusOptions } from './help'
import './index.css'

const carPage = (props) => {
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
          />
        </FormGroup>
        <FormGroup
          controlId='formKategori'
          className='mt-3'
          label='Kategori'
        >
          <FormSelect
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
          {carList.map((result) => {
            return (
              <Card
                data={result}
                key={result.id}
                className='card-cont'
                infoClass='date-picker'
                isHaveImage='true'
                isHaveCategory='true'
              >
                {localePriceFormat(result.price)}
                <div className='d-grid mt-auto pt-3'>
                  <Button
                    variant='success'
                    text='Pilih Mobil'
                    onClick={() => props.navigate(`/cars/${result.id}`)}
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

export default carPage
