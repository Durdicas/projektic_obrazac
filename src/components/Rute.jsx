import { Route, Routes} from "react-router-dom";
import { Provider } from "../context/Provider";
import FormaUnosa from "./prvi-zadatak/FormaUnosa";
import Tablica from "./prvi-zadatak/Tablica";
//import { v4 as uuidv4 } from "uuid";
import Home from './prvi-zadatak/Home';
import CijeliObrazac from './prvi-zadatak/CijeliObrazac';


const Rute = (
  <Routes>

    <Route key={'uuidv4()'} path="/" element={<Home/>}/>
    <Route key={'uuidv4()'} path="/cijeliobrazac" element={<CijeliObrazac />}/>
    {/*<Route key={'uuidv4()'} path="/" element={<Provider><FormaUnosa /><Tablica/></Provider>}/>*/}
    {/*<Route key={'uuidv4()'} path="/" element={<><Layoutic><FormaUnosa /><Tablica/></Layoutic></>}/>*/}
    {/*<Route key={'uuidv4()'} path="/unos" element={<Layoutic></Layoutic>}/>*/}


    {/*<Route key={uuidv4()} path="/druga-komponenta" element={<Tablica />}/>*/}

  </Routes>
);

export default Rute;