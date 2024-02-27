import React from 'react';
import { Card } from 'antd';
const Kartica = (props) => (
  <Card
    title={props.title}
    bordered={true}
    style={{
      width: 1100,
    }}
    pagination='true'
  >
    <div>{props.children}</div>
    {/*<p>Card content</p>
    <p>Card content</p>*/}
  </Card>
);
export default Kartica;