import React from "react";
import Lay from "./Lay";
import FormaUnosa from "./FormaUnosa";
import Tablica from "./Tablica";
import { Provider } from "../../context/Provider";
import Kartica from "./Kartica";

const CijeliObrazac = () => {
  return (
    <>
     <Lay>
      <Provider>
        <Kartica title='FORMA UNOSA'>
          <FormaUnosa></FormaUnosa>
          </Kartica>
          <Kartica title='TABLIČNI PRIKAZ PODATAKA'>
            <Tablica></Tablica>
            </Kartica>
            </Provider>
      </Lay>
    </>

   
  );
};

export default CijeliObrazac;

