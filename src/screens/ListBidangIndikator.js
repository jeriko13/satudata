import React, {useState, useEffect} from "react";
import Axios from 'axios';
// import { ROOT_URL, API_URL } from "config/config";
import { API_URL } from "config/config";
import Navbar from "components/Navbar";
import HeaderStats from "components/HeaderStats";
import Footer from "components/Footer.js";
import { useParams} from "react-router-dom";

// import {useParams} from 'react-router-dom'

// components

// export default function ListData({fokus_id}) {
export default function ListBidangIndikator() {

  let { fokus_id } = useParams();

 
    const [dataList1, setdataList1] = useState([])
 
    useEffect(() => {
      handleList1();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // eslint-disable-next-line no-unused-vars
    const handleList1 = async () => {
      // const resList1 = await Axios.get(`${API_URL}/api/list/cv_rpd_bidang_indikator?cmd=search&t=t_data&z_fokus_id=LIKE&x_fokus_id=${fokus_id}`).then(res => res.data.cv_rpd_bidang_indikator);
      const resList1 = await Axios.get(`${API_URL}/api/list/cv_rpd_bidang_indikator?cmd=search&t=cv_rpd_bidang_indikator&z_fokus_id=%3D&x_fokus_id=${fokus_id}`).then(res => res.data.cv_rpd_bidang_indikator);
      setdataList1(resList1)
      // const res = await Axios.get(`${API_URL}/api/list/cv_rpd_bidang_indikator/?cmd=search&psearch=${keywords}`).then(res => res.data.cv_rpd_bidang_indikator);
      // setData(res);
    } 


  return (
    <>

        {/* menampilkan Navigasi & Header */}
        <Navbar transparent />
        <HeaderStats />

      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 ">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                {/* Dataset {dataNama.objek} */}
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
       
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  LINK  
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Bidang
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Indikator
                </th>
              
               
              </tr>
            </thead>
            <tbody>
                {/* {dataList1.sort((a, b) => parseInt(b.tahun.split('/')[0]) - parseInt(a.tahun.split('/')[0])).map((item, key) =>  */}
                {dataList1.map((item, key) => 
                <tr>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <a href={`/Dashboard/GetIndikator/${item.indikator_id}`} className="bg-indigo-500 text-white p-2 rounded">Lihat Data dan Metadata</a>
                        {/* <a href={`${ROOT_URL}/dashboard/data-bda-dinkes/${item.tahun}`} className="bg-indigo-500 text-white p-2 rounded">Metadata</a> */}
                    </td>

                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                    {item.bidang}
                    </th>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                    {item.indikator}
                    </th>                 
                </tr>
                )}
            </tbody>
          </table>
        </div>
      </div>
<br></br>
<br></br>
      <Footer />
{  /* <FooterAdmin /> */}


    </>
  );
}
