import React from 'react';
import {Card, Table, Button,Popconfirm} from 'antd';

const dataSource = [{
    id: 1,
    name: 'bag',
    price: 25
},
{
    id: 2,
    name: 'book',
    price: 15
},{
    id: 3,
    name: 'pen',
    price: 5
}]
function List(props) {
    const columns=[{
        title: 'Order',
        key: 'id',
        width: 80,
        align: 'center',
        render: (txt, record, index) => index+1

    },{
        title: 'Name',
        dataIndex: 'name'
    },{
        title:'Price',
        dataIndex: 'price'
    },{
        title: 'operation',
        render: (txt, record, index) => {
            return <div>
                <Button type="primary" size="small">Modify</Button>
                <Popconfirm title="Are you sure to delete?" onCancel={()=>console.log("User cancel detele")} onConfirm={()=>{console.log("User confirm delete")}}>
            //此处调用api接口进行相关操作
                <Button style={{margin: '0 1rem'}} type="danger" size="small">Delete</Button>
                </Popconfirm>
            </div>
        }
    }]
    return (
        <Card title="Products List" extra={<Button type="primary" size="small" onClick={()=>props.history.push("/admin/products/edit")}>Add</Button>}>
            <Table columns={columns} bordered dataSource={dataSource}/>
        </Card>
    )
}

export default List;
