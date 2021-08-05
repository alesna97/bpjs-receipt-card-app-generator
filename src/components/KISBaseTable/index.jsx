/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react'
import '../../App.css'

import BPJSLOGO from '@assets/logo-bpjs.png'

const KISBaseTable = ({
  year = new Date().getFullYear(),
  branchOffice,
  dati,
  district,
  village,
  participantTotal,
  data,
  step = 1,
  pbiType = 'APBN',
  id,
}) => (
  <table id={id}>
    <thead>
      {/* HEADER 1 */}
      <tr>
        <td rowSpan={2}>
          <img src={BPJSLOGO} alt="bpjs-logo" height={26} />
        </td>
        <td colSpan={11} className="center table-title">
          TANDA TERIMA KARTU INDONESIA SEHAT (KIS) PBI {pbiType}
        </td>
      </tr>
      <tr>
        <td className="center table-title" colSpan={11}>TAHAP {step} TAHUN {year}</td>
      </tr>
      {/* HEADER 2 */}
      <tr />
      <tr>
        <td>Kantor Cabang :</td>
        <td colSpan={11}>{branchOffice}</td>
      </tr>
      <tr>
        <td>DATI II :</td>
        <td colSpan={11}>{dati}</td>
      </tr>
      <tr>
        <td>KECAMATAN :</td>
        <td colSpan={11}>{district}</td>
      </tr>
      <tr>
        <td>KELURAHAN / DESA :</td>
        <td colSpan={11}>{village}</td>
      </tr>
      <tr>
        <td>JUMLAH PESERTA :</td>
        <td colSpan={11}>{participantTotal}</td>
      </tr>
      <tr />
    </thead>

    {/* HEADER 3 */}

    <tbody>
      <tr>
        <td rowSpan="2" className="center table-body">NO</td>
        <td rowSpan="2" className="center table-body">NO KARTU</td>
        <td rowSpan="2" className="center table-body">NAMA</td>
        <td rowSpan="2" className="center table-body">PISA</td>
        <td rowSpan="2" className="center table-body">ALAMAT</td>
        <td rowSpan="2" className="center table-body">NAMA PENERIMA</td>
        <td rowSpan="2" className="center table-body">TANDA TANGAN</td>
        <td colSpan="4" className="center table-body">KETERANGAN KARTU TIDAK DITERIMA*</td>
        <td rowSpan="2" className="center table-body">kETERANGAN</td>
      </tr>
      <tr>
        <td className="center table-body">MENINGGAL</td>
        <td className="center table-body">ALAMAT TDK DITEMUKAN</td>
        <td className="center table-body">GANDA</td>
        <td className="center table-body">MAMPU</td>
      </tr>
      {/* MAPPING DATA */}
      {
        data?.map((item, idx) => (
          <tr key={idx} className="table-body">
            <td className="table-body center">{idx + 1}</td>
            <td className="table-body">{item?.PSNOKA}</td>
            <td className="table-body">{item?.NAMA}</td>
            <td className="table-body">{item?.KDHUBKEL}</td>
            <td className="table-body">{item?.ALAMAT}</td>
            <td className="table-body" />
            <td className="table-body" />
            <td className="table-body" />
            <td className="table-body" />
            <td className="table-body" />
            <td className="table-body" />
            <td className="table-body" />
          </tr>
        ))
      }
      <tr>
        <td colSpan={12} />
      </tr>
      <tr>
        <td colSpan={12} />
      </tr>
      <tr>
        <td>Keterangan :</td>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>

      <tr>
        <td>Meninggal :</td>
        <td>Sudah jelas (dilengkapi dengan Surat Keterangan Meninggal)</td>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td colSpan={2} className="center">Petugas TKSK (Pihak Ke 3)</td>
        <td />
        <td />
      </tr>

      <tr>
        <td>Alamat tdk ditemukan :</td>
        <td>Pindah Alamat / Domisili</td>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td colSpan={2} />
        <td />
        <td />
      </tr>

      <tr>
        <td>Ganda :</td>
        <td>dobel data / kartu</td>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td colSpan={2} />
        <td />
        <td />
      </tr>

      <tr>
        <td>Mampu :</td>
        <td>Berubah Status / Sudah Bekerja</td>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td colSpan={2} className="center">__________________________</td>
        <td />
        <td />
      </tr>

    </tbody>
  </table>
)

export default KISBaseTable
