import React, {useState} from 'react';
//import '../../../src/index.css';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;
const items = [
  {
    label: (<a href="/">Početna</a>),
    key: '/',
    disabled: false,
  },
  {
    label: (<a href="/cijeliobrazac"> Obrazac</a>),
    key: '/cijeliobrazac',
    disabled: false,
  },
  /*{
    label: (<a href="/apikorisnici"> Api korisnici</a>),
    key: '/apikorisnici',
    disabled: false,
  },
  {
    label: (<a href="/probno"> Probno</a>),
    key: '/probno',
    disabled: false,
  },
  {
    label: (<a href="/probnodva"> ProbnoDva</a>),
    key: '/probnodva',
    disabled: false,
  },
  {
    label: (<a href="/probnotri"> ProbnoTri</a>),
    key: '/probnotri',
    disabled: false,
  },
  {
    label: (<a href="/probnocetiri"> ProbnoCetiri</a>),
    key: '/probnocetiri',
    disabled: false,
  },*/
  {
    label: (<a href="/popiskorisnika"> PopisKorisnika</a>),
    key: '/popiskorisnika',
    disabled: false,
  },
]

const Lay = (props) => {

  const [current, setCurrent] = useState('');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{minHeight: '100vh', width: '100%'}}>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['/']}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }} onClick={onClick} selectedKeys={[current]}
        />
      </Header>
      <Content
        style={{
          padding: '0 48px',
        }}
      >
        {/*<Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>*/}
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          {props.children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default Lay;