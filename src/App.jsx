/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable consistent-return */
/* eslint-disable no-bitwise */
/* eslint-disable no-plusplus */
/* eslint-disable react/button-has-type */
import KISBaseTable from '@components/KISBaseTable'
import React, { useState, Fragment } from 'react'
import XLSX from 'xlsx'
import './App.css'
import _ from 'lodash'

function App() {
  const [data, setData] = useState()
  const [filename, setFilename] = useState('')
  const [fieldValues, setFieldValues] = useState({
    branch_office: 'Sukabumi',
    dati: 'KAB. SUKABUMI',
  })

  const Styles = localStorage.getItem('styles')

  const onInputChange = (e) => {
    const { value, name } = e.target
    setFieldValues({ ...fieldValues, [name]: value })
  }

  const onChangeFileInput = (e) => {
    const { files } = e.target

    const reader = new FileReader()
    reader.onload = (evt) => {
      try {
        const sheetData = new Uint8Array(evt.target.result)
        const wb = XLSX.read(sheetData, { type: 'array' })
        const ws = wb.Sheets[wb.SheetNames]
        const jsonWs = XLSX.utils.sheet_to_json(ws)
        setFilename(jsonWs[0].NMKEC)
        const groupData = _.groupBy(jsonWs, 'NMDESA')

        setData(groupData)
      } catch (error) {
        // eslint-disable-next-line no-alert
        return alert('Kolom file tidak sesuai!, pastikan file yang akan di import sesuai format')
      }
    }

    reader.readAsArrayBuffer(files[0])
  }

  const onExportToExcel = () => {
    const arrayWs = []
    const wb = XLSX.utils.book_new()
    const sheets = []

    _.map(data, (item, key) => {
      const ws = XLSX.utils.table_to_sheet(document.getElementById(`table-${key}`))
      sheets.push(key)
      arrayWs.push(ws)
    })

    _.map(arrayWs, ((item, index) => {
      XLSX.utils.book_append_sheet(wb, item, sheets[index])
    }))

    const jsonStyle = JSON.parse(Styles)
    const newWb = { ...wb, Styles: jsonStyle }

    XLSX.writeFile(newWb, `${filename}_T.xlsx`, { bookType: 'xlsx', bookSST: true, type: 'binary' })
  }

  return (
    <div className="container">
      <h1>KIS GENERATOR By <a href="https://alesna.id" target="_blank">ALESNA</a></h1>
      <p>this app made with love to help my honey bunny sweety finish her task easily at her office.</p>
      <div className="col">
        <form>
          <input type="file" name="file" onChange={onChangeFileInput} className="custom-file-input" />
          <input className="input-style" type="text" onChange={onInputChange} name="branch_office" placeholder="Masukan Kantor Cabang" />
          <input className="input-style" type="text" onChange={onInputChange} name="dati" placeholder="Masukan DATI" />
          <input className="input-style" type="number" onChange={onInputChange} name="year" placeholder="Masukan Tahun" />
          <input className="input-style" type="number" onChange={onInputChange} name="step" placeholder="Masukan Tahap" />
          <select
            name="pbi_type"
            placeholder="Pilih PBI"
            onChange={onInputChange}
            className="input-style"
          >
            <option value="APBN">APBN</option>
            <option value="APBD">APBD</option>
          </select>
          <button type="reset">Reset</button>
        </form>
      </div>
      <div className="col" />
      {
        data && (
          <Fragment>
            <div className="col" />
            <div className="col">
              <button type="button" className="input-style" onClick={onExportToExcel}>Download Excel</button>
              <button type="button" className="input-style">Print</button>
            </div>
          </Fragment>
        )
      }
      <div className="wrapper-paper">
        <div className="paper">
          {
        _.map(data, (item, key) => (
          <Fragment key={key}>
            <h3>{key}</h3>
            <div className="table-render " id="table-render">
              <KISBaseTable
                id={`table-${key}`}
                year={fieldValues?.year}
                step={fieldValues?.step}
                pbiType={fieldValues?.pbi_type}
                data={item}
                branchOffice={fieldValues.branch_office}
                dati={fieldValues.dati}
                district={item[0]?.NMKEC}
                village={key}
                participantTotal={item?.length}
              />
            </div>
          </Fragment>
        ))
      }
        </div>
      </div>
    </div>
  )
}

export default App
