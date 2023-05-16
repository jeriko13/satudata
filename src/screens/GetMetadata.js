import React, {useState, useEffect} from "react";
// import PropTypes from "prop-types";
import Axios from 'axios'
import {
  // eslint-disable-next-line no-unused-vars
  BrowserRouter as Router,
  // Switch,
  // Route,
  // Link,
  useParams
} from "react-router-dom";
import Footer from "components/Footer.js";
import Navbar from "components/Navbar";
import HeaderStats from "components/HeaderStats";

// import {API_URL} from '../../config/config';
import {API_URL} from 'config/config';

// components

// import TableDropdown from "components/Dropdowns/TableDropdown.js";


export default function MetaData() {
  let { data_id } = useParams();
  const [dataMetadata, setDataMetadata] = useState([])

    useEffect(() => {
      (async () => {
        // const resMetadata = await Axios.get(`${API_URL}/api/list/cv_metadata?cmd=search&t=cv_metadata&z_data_id=LIKE&x_data_id=${data_id}`).then(res => res.data.cv_metadata);
        //const resMetadata = await Axios.get(`${API_URL}/api/list/cv_data/${data_id}`).then(res => res.data.cv_data);
        const resMetadata = await Axios.get(`${API_URL}/api/list/cv_data?cmd=search&t=cv_data&z_data_id=${data_id}&x_data_id=${data_id}`).then(res => res.data.cv_data);
        // http://localhost/satudata_backoffice/api/list/cv_data?cmd=search&t=cv_data&z_data_id=523&x_data_id=523
        delete resMetadata[0].data_id; 
        delete resMetadata[0].objek_id; 
        const mapData = Object.entries(resMetadata[0]);
        setDataMetadata(mapData)
      })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const replaceUnderscore = val => {
      let replaceChar = val.replace('_', ' ').replace('_', ' ').replace('_', ' ').replace('_', ' ').replace('_', ' ')
      return replaceChar.charAt(0).toUpperCase() + replaceChar.slice(1);
    }

    return (
      <>
        {/* menampilkan Navigasi & Header */}
        <Navbar transparent />
        <HeaderStats />

        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center border-b">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 className="font-semibold text-base text-blueGray-700 my-2 mb-4">
                  Metadata
                </h3>
              </div>
            </div>
          </div>
          <div className="block w-full overflow-x-auto">
            {/* Projects table */}
            <table className="items-center w-full bg-transparent border-collapse">
              <tbody>
                  {
                    dataMetadata.map((item, key) => (
                        <tr>
                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-pre-wrap p-4 text-left">
                            {replaceUnderscore(item[0])}
                            </th>
                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-pre-wrap p-4 text-left">
                            {(item[1]) ? item[1] : '-'}
                            </th>
                        </tr>
                    ))
                  }
              </tbody>
            </table>
          </div>
        </div>

        <Footer />
{  /* <FooterAdmin /> */}


      </>
    );
}

