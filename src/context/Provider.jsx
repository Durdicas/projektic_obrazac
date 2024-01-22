import React, { createContext, useState } from 'react';
const Context = createContext(undefined)

export const Provider = ({children}) => {
    const [formData, setFormData] = useState([]);


    const handleCancel = (x) => {
        //form.resetFields();
        console.log(x);
      };


      const handleDelete = (key) => {
        const dataSource = [...formData];
        setFormData(dataSource.filter(item => item.key !== key));
      };


      const onFinish = (values) => {
        console.log(values)
        const jsDate = new Date(
      values.date.year(),
      values.date.month(),
      values.date.date(),
      values.date.hour(),
      values.date.minute(),
      values.date.second(),
      values.date.millisecond()
    );
    const formattedDate = jsDate.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
        const data = {...values, date:formattedDate, key:'1'}
        setFormData([data])
      }

      const onChange = (date, dateString) => {
        console.log(date, dateString);
      };

      return (
        <Context.Provider value={{handleCancel, handleDelete, formData, setFormData, onFinish}}>{children}</Context.Provider>

      );

}

export const useProvider=()=>{
    const context = React.useContext(Context);
    return context;
};
