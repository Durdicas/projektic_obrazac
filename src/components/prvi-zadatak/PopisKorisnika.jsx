import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Pagination, InputNumber } from 'antd';
import { Form, Input, Button, Popconfirm, DatePicker, message } from 'antd';
//import { Select, Col, Row } from 'antd';
import Lay from './Lay';
import Kartica from './Kartica';
import axios from "axios";
import moment from 'moment';

const totalCards = 30; // ukupan broj kartica
const cardsPerPage = 12; // broj kartica po stranici

const PopisKorisnika = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // 3. Postavljanje u funkciju dohvata podataka (USERS) i pozivanje te funkcije u useEffectu (u returnu se vraća popis korisnika)
  const [korisnici, setKorisnici] = useState([]);

  const [form] = Form.useForm();

  const dohvatiProizvode = () => {
    axios
      .get("https://dummyjson.com/users")
      .then((response) => {
        setKorisnici(response.data.users.slice(0, totalCards)); // (API vraća više od 30 korisnika);
        console.log(setKorisnici);
        //console.log(response.data);
      })
      .catch((error) => {
        //console.error("Došlo je do pogreške pri dohvaćanju podataka!", error);
        message.error("Došlo je do pogreške pri dohvaćanju podataka!");
        console.error(error);
      });
  };

  const x = useEffect(() => {
    dohvatiProizvode();
  }, []);
  console.log(x);


  const onFinish = (values) => {
    setKorisnici(prevUsers => [ ...prevUsers, { ...values, id: prevUsers.length + 1 }]);
    form.resetFields();
    message.success('Korisnik je uspješno dodan!');
  };

  const onReset = () => {
    form.resetFields();
  };
  

  const cardsToShow = korisnici.slice (
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage);



  const onPaginationChange = page => {
    setCurrentPage(page);
  };

  return (
    <>
    <Lay>
    <Kartica title='PROBNO POPIS KORISNIKA' >
      <Row gutter={16}>
        {cardsToShow.map((user, index) => ( /* {users.map((user, index) => (dalje isto)} */ 
          <Col key={index} span={8}> {/* možemo tu staviti i svoj key, ili to može biti i: users.id*/} 
            <Card /*key={user.id}*/ title={`${user.firstName} ${user.lastName}`} bordered={true} > 
              <p>Godine: {user.age}</p>
              <p>Datum rođenja: {moment(user.birthDate).format('DD/MM/YYYY')}</p>
              <p>Telefon: {user.phone}</p>
              <p>Email: {user.email}</p>
            </Card>
          </Col>
        ))}
      </Row>
  
      <Pagination
        current={currentPage}
        onChange={onPaginationChange}
        pageSize={cardsPerPage}
        total={totalCards}
      />
      </Kartica>
      <Kartica title="UNOS NOVOG KORISNIKA">
      {/*<Row>*/}
        {/*<Col span={24}>*/}
          <Form form={form} layout="vertical" onFinish={onFinish}>
          <Row gutter={24}>
            <Col span={12}>
            <Form.Item name="firstName" label="Ime" rules={[{ required: true, message: 'Molimo da unesete ime!'}, {type: 'string', min: 1, message: 'Ime mora biti tekst!' }]}>
              <Input />
            </Form.Item>
            </Col>
            <Col span={12}>
            <Form.Item name="lastName" label="Prezime" rules={[{ required: true, message: 'Molimo da unesete prezime!'}, {type: 'string', min: 1, message: 'Ime mora biti tekst!' }]}>
              <Input />
            </Form.Item>
            </Col>
        </Row>
        <Row gutter={24}>
            <Col span={12}>
            <Form.Item name="age" label="Godine" rules={[{ required: true, message: 'Molimo unesite godine!'},  {type: 'number', min: 0, max: 120, message: 'Molimo unesite ispravne godine!' }]}>
              <InputNumber style={{width: '100%'}} />
            </Form.Item>
            </Col>
            <Col span={12}>
            <Form.Item name="birthDate" label="Datum rođenja" rules={[{ required: true,  message: 'Molimo odaberite datum rođenja!' }]}>
              <DatePicker /*defaultPickerValue={moment()} format="DD/MM/YYYY"*/ style={{width: '100%'}} placeholder="Odaberite datum" />
            </Form.Item>
            </Col>
        </Row>
        <Row gutter={24}>
            <Col span={12}>
            <Form.Item name="phone" label="Telefon" rules={[{ required: true, message: 'Molimo unesite broj telefona!'}, {pattern: /^\+?[0-9]+$/, message: 'Telefon mora sadržavati samo brojeve i može početi sa +!'  }]}>
              <Input />
            </Form.Item>
            </Col>
            <Col span={12}>
            <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Molimo unesite email!'}, {type: 'email', message: 'Molimo unesite ispravnu email adresu!' }]}>
              <Input />
            </Form.Item>
            </Col>
        </Row>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Spremi
              </Button>
              <Popconfirm
                title="Jeste li sigurni da želite odustati od unosa?"
                onConfirm={onReset}
                okText="Da"
                cancelText="Ne"
              >
                <Button style={{ marginLeft: 8 }}>Odustani</Button>
              </Popconfirm>
            </Form.Item>
          </Form>
        {/*</Col>*/}
      {/*</Row>*/}
      </Kartica>
      </Lay>
    </>
  );
};

export default PopisKorisnika;