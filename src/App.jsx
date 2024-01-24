import React from "react";
/*import FormaUnosa from "./components/prvi-zadatak/FormaUnosa";
import Tablica from "./components/prvi-zadatak/Tablica";*/
import { BrowserRouter } from "react-router-dom";
import routes from "./components/Rute";



const App = () => {
  return( 
  
  <div>
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  </div>

  )
};

export default App;
