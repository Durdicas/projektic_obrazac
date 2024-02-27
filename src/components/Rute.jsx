import { Route, Routes} from "react-router-dom";
import { Provider } from "../context/Provider";
import FormaUnosa from "./prvi-zadatak/FormaUnosa";
import Tablica from "./prvi-zadatak/Tablica";
import { v4 as uuidv4 } from "uuid";
import Home from './prvi-zadatak/Home';
import CijeliObrazac from './prvi-zadatak/CijeliObrazac';
import PopisKorisnika from "./prvi-zadatak/PopisKorisnika";



const Rute = (
  <Routes>

    <Route key={'uuidv4()' /*'/'*/} path="/" element={<Home/>}/>
    <Route key={'uuidv4()' /*'/cijeliobrazac'*/} path="/cijeliobrazac" element={<CijeliObrazac />}/>
    <Route key={'uuidv4()' /*'/'*/} path="/popiskorisnika" element={<PopisKorisnika/>}></Route>

  </Routes>
);

export default Rute;