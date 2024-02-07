import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Popconfirm, Space, Table } from "antd";
import { useProvider } from "../../context/Provider";
import { Tag } from "antd";
import { Input } from "antd";

import React, { useState } from "react";
import { Form, InputNumber, Typography } from "antd";
import "./Tablica.css";

// nije potrebno
const originData = [];
/*originData.push({
  key: key,
  date: date,
  status: status,
  recorded: recorded,
  confirmed: confirmed,
})*/

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = /*inputType === "number" ? <InputNumber /> :*/ <Input />;
  //const [inputValue, setInputValue] = useState(record[dataIndex]);

  /*const onInputChange = (e) => {
    setInputValue(e.target.value);
  };*/

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Unesite ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
        ) : (
        children
      )}
    </td>
  );
};

const Tablica = () => {
  const { handleDelete, formData, setFormData, expandable/*, form*/ } = useProvider();
  const [form] = Form.useForm(); // novo dodano
  //const [data, setData] = useState(/*originData*/ ''); //(formData, setFormData)

  const [editingKey, setEditingKey] = useState("");
  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({ ...record });
    /*form.setFieldsValue({
      date: "",
      status: "",
      recorded: "",
      confirmed: "",
      ...record,
    });*/
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newDataa = [...formData];
      //const newData = [...data];
      const index = newDataa.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newDataa[index];
        newDataa.splice(index, 1, { ...item, ...row });
        setFormData(newDataa);
        //setData(newDataa);
        setEditingKey("");
      } else {
        newDataa.push(row);
        setFormData(newDataa);
        //setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };


  const columns = [
    {
      title: "Datum",
      dataIndex: "date",
      key: "date",
      width: "25%", // novo
      editable: true,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_, record) => (
        <>
          {[record.status].map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";

            if (tag === "Redovno") {
              color = "green";
            } else if (tag === "Zabrinjavajuće") {
              color = "yellow";
            } else if (tag === "Kritično") {
              color = "red";
            } else if (tag === "Prazan") {
              color = "gray";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
      //width: "40%", // novo
      editable: true,
    },

    {
      title: "Evidentirao",
      dataIndex: "recorded",
      key: "recorded",
      width: "15%", // novo
      editable: true,
    },
    {
      title: "Potvrdio",
      dataIndex: "confirmed",
      key: "confirmed",
      width: "15%", // novo
      editable: true,
    },
    {
      title: "Akcije",
      key: "actions",
      //dataIndex: "akcije", // dodano
      render: (_, record) => {
        const editable = isEditing(record);

        return (
          <>
            <Space size="middle">
              {editable ? (
                <span>
                  <Typography.Link
                    onClick={() => save(record.key)}
                    style={{ marginRight: 8 }}
                  >
                    {/*<SaveOutlined />*/} Spremi
                  </Typography.Link>
                  <Popconfirm title="Želite li odustati?" onConfirm={cancel}>
                    <a>Odustani</a>
                  </Popconfirm>
                </span>
              ) : (
                <Typography.Link
                  disabled={editingKey !== ""}
                  onClick={() => edit(record)}
                >
                  <EditOutlined></EditOutlined>
                </Typography.Link>
              )}

              <Popconfirm
                title="Jeste li sigurni da želite obrisati ovaj unos?"
                onConfirm={() => handleDelete(record.key)}
                okText="Da"
                cancelText="Ne"
              >
                <DeleteOutlined />
              </Popconfirm>
            </Space>
          </>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === /*'age' ? 'number' :*/ "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <>
      <Form form={form}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        //dataSource={[...formData]}
        dataSource={formData}
        //columns={columns} 
        columns={mergedColumns}
        expandable={expandable}
        rowClassName="editable-row"
        /*pagination={{
        onChange: cancel,
      }}*/
        pagination={false}
      />
      </Form>
    </>
  );
};

export default Tablica;
