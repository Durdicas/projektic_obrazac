import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Popconfirm, Space, Table } from 'antd';
import { useProvider } from '../../context/Provider';

const Tablica = () => {

    const {handleDelete, formData, setFormData} = useProvider();

   

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
        <Table dataSource={[...formData]} columns={columns} />
    )

}

export default Tablica;