import React, { createContext, useState } from 'react';
import { Form } from 'antd';
import { Input } from 'antd';
import { v4 as uuidv4 } from "uuid";

const Context = createContext(/*'undefined'*/)

export const Provider = ({children}) => {
    const [formData, setFormData] = useState([]);
    const [form] = Form.useForm();


    const handleCancel = () => {
        form.resetFields();
        //console.log(x);
      };


      const handleDelete = (key) => {
        const dataSource = [...formData];
        setFormData(dataSource.filter(item => item.key !== key));
        //const newData = formData.filter(item => item.key !== key);
        //setFormData(newData);
      };

      const handleAddDataToTable = (newData) => {
        setFormData(prevFormData => [...prevFormData, newData]);
      }


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
        const data = {...values, date:formattedDate, key: /*'1'*/ uuidv4(), }
        //setFormData([data])
        handleAddDataToTable(data);
        form.resetFields();
      };

      

      const onChange = (date, dateString) => {
        console.log(date, dateString);
      };

      const expandable = {
        expandedRowRender: (record) => (
          <p
            style={{
              margin: 0,
            }}
          >
            <Input defaultValue={record.date} onChange={(e) => { const newDescription = e.target.value;}}>
            </Input>
          </p>
        ),
        rowExpandable: (record) => true
      }


      return (
        <Context.Provider value={{handleCancel, handleDelete, formData, setFormData, onFinish, form, expandable}}>{children}</Context.Provider>

      );

}

export const useProvider=()=>{
    const context = React.useContext(Context);
    return context;
};
