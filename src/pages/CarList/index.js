import React from 'react'
import { Form } from 'react-bootstrap'
import BsButton from '../../components/bootstrapComponent/button/BsButton'
import BsCardImage from '../../components/bootstrapComponent/card/BsCardImage'
import BsFormControl from '../../components/bootstrapComponent/FormControl/BsFormControl'
import BsFormGroup from '../../components/bootstrapComponent/formGroup/BsFormGroup'
import BsFormSelect from '../../components/bootstrapComponent/formSelects/BsFormSelect'
import CurrencyComp from '../../components/currencyComp/CurrencyComp'
import SectionHero from '../../components/SectionHero'
import carList from '../../constants/carList'
import { hargaOptions, kategoriOptions, statusOptions } from './help'
import './index.css'

const CariMobil = () => {
  return (
    <div>
      <SectionHero />
      <Form className='cari-content'>
        <BsFormGroup
          controlId='formNama'
          className='mt-3'
          label='Nama Mobil'
        >
          <BsFormControl
            type='text'
            placeholder='Ketik Nama/Tipe Mobil'
            autoComplete='off'
          />
        </BsFormGroup>
        <BsFormGroup
          controlId='formKategori'
          className='mt-3'
          label='Kategori'
        >
          <BsFormSelect
            title='Masukan Kapasitas Mobil'
            option={kategoriOptions}
          />
        </BsFormGroup>
        <BsFormGroup
          controlId='formHarga'
          className='mt-3'
          label='Harga'
        >
          <BsFormSelect
            title='Masukan Harga Sewa per Hari'
            option={hargaOptions}
          />
        </BsFormGroup>
        <BsFormGroup
          controlId='formSewa'
          className='mt-3'
          label='Status'
        >
          <BsFormSelect
            title='Status Mobil'
            option={statusOptions}
          />
        </BsFormGroup>
        <BsButton
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
              <BsCardImage
                result={result}
                key={result.id}
              >
                <CurrencyComp value={result.price} />
                <div className='d-grid mt-auto pt-3'>
                  <BsButton
                    variant='success'
                    text='Pilih Mobil'
                  />
                </div>
              </BsCardImage>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CariMobil
