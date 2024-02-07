import { Button, DatePicker, Form, Input, Select } from "antd";
import { useProvider } from "../../context/Provider";
import { Popconfirm } from "antd";
import { Tag } from 'antd';
import { Col, Row, Divider } from 'antd';

const { Option } = Select;


const FormaUnosa = () => {
    const {handleCancel, onFinish, form} = useProvider();
  return (
    <div className="container mx-auto p-8">
      <Form onFinish={onFinish} layout="vertical" form={form} /*component={false}*/>
        <Row gutter={24}>
          <Col span={12}>
        <Form.Item name="date" label="Odaberite datum:" rules={[{required: true, message: 'Odabir datuma je obvezan unos!' }]}
         >
          <DatePicker style={{width: '100%'}} placeholder="Odaberite datum"/>
        </Form.Item>
          </Col>
          <Col span={12}>
        <Form.Item name="status" label=" Odaberite status:" rules={[{ required: true, message: 'Odabir statusa je obvezan unos!' }]}>
          <Select placeholder="Odaberite status">
            <Option value="Redovno">Redovno</Option>
            <Option value="Zabrinjavajuće">Zabrinjavajuće</Option>
            <Option value="Kritično">Kritično</Option>
            <Option value="Prazan">Prazan</Option>
          </Select>
        </Form.Item>
        </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12}>
        <Form.Item
          name="recorded"
          label="Status Evidentirao:"
          rules={[{ required: true, message: 'Obvezan podatak!' }]}
        >
          <Input />
        </Form.Item>
        </Col>
        <Col span={12}>
        <Form.Item
          name="confirmed"
          label="Status Potvrdio:"
          rules={[{ required: true, message: 'Obvezan podatak!' }]}
        >
          <Input />
        </Form.Item>
        </Col>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Potvrdi
          </Button>
          <Popconfirm
          title="Želite li odustati od unosa?"
          onConfirm={handleCancel}
          okText="Da"
          cancelText="Ne"
          >
          <Button style={{ marginLeft: 8 }} /*onClick={handleCancel}*/>
            Odustani
          </Button>
          </Popconfirm>
        </Form.Item>
      </Form>
    </div>
  );
};
export default FormaUnosa;
