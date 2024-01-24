import { Button, DatePicker, Form, Input, Select } from "antd";
import { useProvider } from "../../context/Provider";



const { Option } = Select;


const FormaUnosa = () => {
    const {handleCancel, onFinish} = useProvider();

    
      

  return (
    <div className="container mx-auto p-8">
      <Form onFinish={onFinish} layout="vertical">
        <Form.Item name="date" label="Datum" rules={[{required: true }]}>
          <DatePicker />
        </Form.Item>
        <Form.Item name="status" label="Status" rules={[{ required: true }]}>
          <Select placeholder="Select a status">
            <Option value="Redovno">Redovno</Option>
            <Option value="Zabrinjavajuće">Zabrinjavajuće</Option>
            <Option value="Kritično">Kritično</Option>
            <Option value="Prazan">Prazan</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="recorded"
          label="Status Evidentirao"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="confirmed"
          label="Status Potvrdio"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Potvrdi
          </Button>
          <Button style={{ marginLeft: 8 }} onClick={handleCancel}>
            Odustani
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormaUnosa;
