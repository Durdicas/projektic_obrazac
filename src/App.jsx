import React from "react";
/*import FormaUnosa from "./components/prvi-zadatak/FormaUnosa";
import Tablica from "./components/prvi-zadatak/Tablica";*/
import { BrowserRouter } from "react-router-dom";
import routes from "./components/Rute";
//import Lay from "./components/prvi-zadatak/Lay";



const App = () => {
  return( 
  
  <div>
    {/*<Lay>*/}
    <BrowserRouter>
      {routes}
    </BrowserRouter>
    {/*</Lay>*/}
  </div>

  )
};

export default App;
