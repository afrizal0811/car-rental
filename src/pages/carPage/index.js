import React from 'react'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import BsFormControl from '../../components/bootstrapComponent/FormControl/BsFormControl'
import BsButton from '../../components/bootstrapComponent/button/BsButton'
import BsCard from '../../components/bootstrapComponent/card/BsCard'
import BsFormGroup from '../../components/bootstrapComponent/formGroup/BsFormGroup'
import BsFormSelect from '../../components/bootstrapComponent/formSelects/BsFormSelect'
import SectionHero from '../../components/sectionHero'
import carList from '../../constants/carList'
import { localePriceFormat } from '../../utilities/handleLocale'
import { hargaOptions, kategoriOptions, statusOptions } from './help'
import './index.css'

const CariMobil = () => {
  const navigate = useNavigate()
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
              <BsCard
                data={result}
                key={result.id}
                className='card-cont'
                infoClass='date-picker'
                isHaveImage='true'
                isHaveCategory='true'
              >
                {localePriceFormat(result.price)}
                <div className='d-grid mt-auto pt-3'>
                  <BsButton
                    variant='success'
                    text='Pilih Mobil'
                    onClick={() => navigate(`/cars/${result.id}`)}
                  />
                </div>
              </BsCard>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CariMobil
