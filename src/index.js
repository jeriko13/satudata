import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

// import Admin from "layouts/Admin.js";

// import Auth from "layouts/Auth.js";

// screens without layouts

// import Promosi from "screens/Promosi.js";
// import Informasi from "screens/Informasi.js";
// import Peta1 from "screens/Peta1.js";
// import Peta from "screens/Peta.js";

// import Landing from "screens/Landing.js";
// import Landing2 from "screens/Landing2.js";
// import Landing3 from "screens/Landing3.js";
// import Profile from "screens/Profile.js";
// import Dashboard from "screens/Dashboard.js";
import Beranda from "screens/Beranda.js";
import ListFokus from "screens/ListFokus";
import ListAspek from "screens/ListAspek";
import ListBidangIndikator from "screens/ListBidangIndikator";
import ListUrusan from "screens/ListUrusan";
import ListObjek from "screens/ListObjek";
import ListData from "screens/ListData";
import ListDssd from "screens/ListDssd";
import SubUrusan from "screens/SubUrusan";
// import Data from "screens/Data";

import GetData from "screens/GetData";
import GetDssd from "screens/GetDssd";
import GetMetadata from "screens/GetMetadata";
import GetIndikator from "screens/GetIndikator";
// import Index from "screens/Index.js";
//import HalamanUtama from "screens/bda/HalamanUtama";

// import KinerjaOpd from "screens/grafik/KinerjaOpd";
// import Dashboard from "screens/admin/Dashboard";
import Pencarian from "screens/Pencarian";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/" exact component={Beranda} />
      <Route path="/Dashboard/ListObjek" component={ListObjek} />
      <Route path="/Dashboard/ListUrusan" component={ListUrusan} />
      <Route path="/Dashboard/ListAspek" component={ListAspek} />
      {/* <Route path="/Dashboard/Dashboard" component={Dashboard} /> */}
      <Route path="/Dashboard/ListBidangIndikator/:fokus_id" exact component={ListBidangIndikator} />
      <Route path="/Dashboard/ListData/:objek_id" exact component={ListData} />
      <Route path="/Dashboard/ListDssd/:urusan_id" exact component={ListDssd} />
      <Route path="/Dashboard/SubUrusan/:urusan_id" exact component={SubUrusan} />
      <Route path="/Dashboard/ListFokus/:aspek_id" exact component={ListFokus} />
      <Route path="/Dashboard/GetIndikator/:indikator_id" exact component={GetIndikator} />
      <Route path="/Dashboard/GetData/:data_id" exact component={GetData} />
      <Route path="/Dashboard/GetDssd/:data_id" exact component={GetDssd} />
      <Route path="/Dashboard/GetMetadata/:data_id" exact component={GetMetadata} />
      <Route path="/pencarian/:keys" component={Pencarian} />

      {/* <Route path="/auth" component={Auth} /> */}

      {/* <Route path="/dashboard/data/:objek_id" exact component={Data} />       */}


      {/* <Route path="/dashboard/meta-data/:data_id" exact component={MetaData} /> */}


      {/* <Route path="/promosi/:id" component={Promosi} /> */}
      {/* <Route path="/informasi/:id" component={Informasi} /> */}
      {/* <Route path="/dashboard" component={Admin} /> */}
      {/* <Route path="/dashboard" component={Dashboard} />    */}

      {/* <Route path="/peta1/:id" component={Peta1} /> */}
      {/* <Route path="/peta" component={Peta} /> */}

      {/* add routes without layouts */}
      {/* <Route path="/landing" exact component={Landing} />
      <Route path="/landing2" exact component={Landing2} />
      <Route path="/landing3" exact component={Landing3} /> */}
      {/* <Route path="/profile" exact component={Profile} /> */}
      {/* <Route path="/grafik/kinerja-opd" component={KinerjaOpd} /> */}
     
      {/* add redirect for first page */}

      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
