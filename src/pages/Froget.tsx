import React from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input, Space } from 'antd';
import { Link } from 'react-router-dom';
import "../index.css"

type FieldType = {
  username?: string;
  password?: string;
  remember?: boolean;
  email?:string; 
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const Froget: React.FC = () => {
  return (
    <div className="signup-container">
        <div className="form-box">
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          name="email"          
          rules={[{ required: true, message: 'Please input your Email!' }]}
        >
          <Input placeholder='Enter Your E-Mail address' type='email'  style={{borderRadius: 20 }}/>
        </Form.Item>

        <Form.Item className='buttonset' style={{textAlign:'center'}}>
          <Button type="primary" htmlType="submit" style={{borderRadius:20,width:350}}>
            Reset Password
          </Button>
        
          <Space  style={{paddingTop:10}}>   
         <Link to="/login">Return to Login ?</Link>
         </Space>  
        </Form.Item>
      </Form>
      </div>
    </div>
  );
};

export default Froget;
