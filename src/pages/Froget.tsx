import React from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

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
    <div style={{ justifyContent: 'center'}}>
        <div style={{maxWidth:350,}}>
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

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{borderRadius:20, padding:15}}>
            Reset Password
          </Button>
        </Form.Item>

        <Form.Item<FieldType> name="remember" valuePropName="checked">
               
         <Link to="/login" style={{alignContent:'right'}}>Return to Login ?</Link>
        </Form.Item>
      </Form>
      </div>
    </div>
  );
};

export default Froget;
