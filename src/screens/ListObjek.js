import React, {useState, useEffect} from "react";
import Axios from 'axios';
import { API_URL } from "config/config";
import Footer from "components/Footer.js";
// import Sidebar from "screens/Sidebar";
// import HeaderStats from "screens/HeaderStats";
// import FooterAdmin from "components/FooterAdmin.js";



export default function ListObjek() {

  const [dataList1, setdataList1] = useState([]);

  useEffect(() => {
    handleList1();
  }, []);

  const handleList1 = async () => {
    // https://satudata.banjarnegarakab.go.id/satudata_backoffice/api/list/cv_data?cmd=search&t=cv_data&z_objek_id=%3D&x_objek_id=13
    const resList1 = await Axios.get(`${API_URL}/api/list/cv_objek`).then(res => res.data.cv_objek);
    setdataList1(resList1)
    // const res = await Axios.get(`${API_URL}/api/list/cv_data/?cmd=search&psearch=${keywords}`).then(res => res.data.cv_data);
    // setData(res);
  } 

    return (
      <>

    {/* <Sidebar /> */}
       
        <main className="">

        

          <section className="pb-20 bg-blueGray-500">
          
            <div className="container mx-auto px-4">
            
              <div className="flex flex-wrap items-stretch">
                {dataList1.map((item, key) => 
                    <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                      <a href="ListData/${item.objek_id}" className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500 overflow-hidden">
                        <div className="bg-white">
                          <img
                            alt="..."
                            src={item.gambar}
                            className="w-full align-middle rounded-t-lg mt-2 pl-4 pr-4 mb-2"
                          />
                        </div>
                        <blockquote className="relative p-4 mb-4">
                          <svg
                            preserveAspectRatio="none"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 583 95"
                            className="absolute left-0 w-full block h-95-px -top-94-px"
                          >
                            <polygon
                              points="-30,95 583,95 583,65"
                              className="text-lightBlue-500 fill-current"
                            ></polygon>
                          </svg>
                          <h4 className="font-bold text-base text-white text-center">
                          {item.nama}
                          </h4>
                          <h4 className="font-bold text-lg text-white text-center">
                          ({item.nama_singkat})
                          </h4>
                        </blockquote>
                      </a>
                    </div>
                  )}
              </div>


            </div>




          </section>



        </main>

        <Footer />

        {  /* <FooterAdmin /> */}

        
      </>

      


    );
  }

