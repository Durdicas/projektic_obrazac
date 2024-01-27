import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Popconfirm, Space, Table } from 'antd';
import { useProvider } from '../../context/Provider';
import { Tag } from 'antd';
import { Input } from 'antd';

const Tablica = () => {

    const {handleDelete, formData, setFormData, expandable} = useProvider();
    const columns = [
        {
          title: 'Datum',
          dataIndex: 'date',
          key: 'date',
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
          render: (_, record) => (
            <>
              {[record.status].map((tag) => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                
                if (tag === 'Redovno') {
                  color = 'green';
                }
                else if (tag === 'Zabrinjavajuće') {
                  color = 'yellow';
                }
                else if (tag === 'Kritično') {
                  color = 'red';
                }
                else if (tag === 'Prazan') {
                  color = 'gray';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                </Tag>
                );
              })}
              </>
            ),
          },

        {
          title: 'Evidentirao',
          dataIndex: 'recorded',
          key: 'recorded',
        },
        {
          title: 'Potvrdio',
          dataIndex: 'confirmed',
          key: 'confirmed',
        },
        {
          title: 'Akcije',
          key: 'actions',
          render: (_, record) => (
            <Space size="middle">
              <EditOutlined />
              <Popconfirm
                title="Are you sure to delete this entry?"
                onConfirm={() => handleDelete(record.key)}
                okText="Yes"
                cancelText="No"
              >
                <DeleteOutlined />
              </Popconfirm>
            </Space>
          ),
        },
      ];


      
    

    return (
        <Table dataSource={[...formData]} columns={columns} expandable={expandable}/>
    )

}

export default Tablica;