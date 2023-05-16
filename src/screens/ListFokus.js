import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Axios from 'axios';
import { API_URL } from "config/config";
import Navbar from "components/Navbar";
import Footer from "components/Footer.js";
import HeaderStats from "components/HeaderStats";

export default function ListFokus() {
  let { aspek_id } = useParams();

  const [dataList1, setdataList1] = useState([]);

  useEffect(() => {
    handleList1();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleList1 = async () => {
    const resList1 = await Axios.get(`${API_URL}/api/list/cv_rpd_fokus?cmd=search&t=cv_rpd_fokus&x_aspek_id=${aspek_id}`)
      .then(res => res.data.cv_rpd_fokus);
    setdataList1(resList1);
  }


  return (
    <>
      <Navbar transparent />
      <HeaderStats />

      <main>
        <section className="pb-20 bg-blueGray-500">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-stretch">
              {dataList1.map((item, key) => (
                <div className="w-full md:w-4/12 px-4 mr-auto ml-auto" key={key}>
                  <Link to={`/Dashboard/ListBidangIndikator/${item.fokus_id}`} className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500 overflow-hidden">
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
                        {item.fokus_id} 
                      </h4>
                      <h4 className="font-bold text-lg text-white text-center">
                        ({item.fokus})
                      </h4>
                    </blockquote>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
