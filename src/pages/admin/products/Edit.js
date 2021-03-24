import React from 'react';
import {Form, Card, Input, Button} from 'antd'
function Edit(props) {
        const onFinish = (values) => {
            console.log('Success', values);
        }

        const onFinishFailed = (errorInfo) => {
            console.log('Failed', errorInfo);
        }

        return (
        <Card title="product edit">
             <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
                <Form.Item label="name" rules={[
                    {required:true, message:'Please enter the name of the item'}
                    ]}>
                   <Input placeholder="Please enter the name of the item"/></Form.Item>
               <Form.Item><Button htmlType="submit" type="primary">Save</Button></Form.Item>
            </Form>
        </Card>
        )
}

export default Edit;
