import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from 'axios';
import { API_URL } from "config/config";
import Navbar from "components/Navbar";
import Footer from "components/Footer.js";
import HeaderStats from "components/HeaderStats";

export default function GetMetaIndikator() {
  let { indikator_id } = useParams();
  const [dataMetadata, setDataMetadata] = useState([]);

  useEffect(() => {
    fetchMetadata();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [indikator_id]);

  const fetchMetadata = async () => {
    try {
      const response = await Axios.get(`${API_URL}/api/list/cv_rpd_bidang_indikator?cmd=search&t=cv_rpd_bidang_indikator&x_indikator_id=${indikator_id}`);
      const metadata = response.data.cv_rpd_bidang_indikator;
      setDataMetadata(metadata);
    } catch (error) {
      console.log(error);
    }
  };

  // eslint-disable-next-line no-unused-vars
  const replaceUnderscore = (val) => {
    if (typeof val === 'string') {
      let replaceChar = val.replace(/_/g, ' ');
      return replaceChar.charAt(0).toUpperCase() + replaceChar.slice(1);
    }
    return '';
  };

  return (
    <>
      <Navbar transparent />
      <HeaderStats />

      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center border-b">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700 my-2 mb-4">
                {dataMetadata.length > 0 ? dataMetadata[0].bidang : ''}
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Indikator
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Kinerja 2023
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Kinerja 2024
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Kinerja 2025
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Kinerja 2026
                  </th>
                
                  </tr>
                  </thead>
                  <tbody>
                  {dataMetadata.map((item, key) => (
                  <tr key={key}>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-pre-wrap p-4 text-left">
                  {item.indikator}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-pre-wrap p-4 text-left">
                  {item.kinerja_2023}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-pre-wrap p-4 text-left">
                  {item.kinerja_2024}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-pre-wrap p-4 text-left">
                  {item.kinerja_2025}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-pre-wrap p-4 text-left">
                  {item.kinerja_2026}
                  </td>
                 
                  </tr>
                  ))}
                  </tbody>
                  </table>
                  </div>
                  </div>

                  {Array.from({ length: 12 }, (_, index) => (
                        <br key={index} />
                  ))}

                  <Footer />
                  </>
                  );
                  }