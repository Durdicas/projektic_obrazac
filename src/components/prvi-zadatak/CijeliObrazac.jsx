import React from 'react';
import Lay from './Lay';
import FormaUnosa from './FormaUnosa';
import Tablica from './Tablica';
import { Provider } from '../../context/Provider';

const CijeliObrazac = () => {
  return (
    <>
     <Lay>
        <div>Cijeli obrazac
            <Provider>
            <FormaUnosa></FormaUnosa>
            <Tablica></Tablica>
            </Provider>
           
        </div>
        
     </Lay>
    </>

   
  );
};

export default CijeliObrazac;
