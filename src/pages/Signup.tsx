import '../index.css'
  import React from 'react';
  import type { FormProps } from 'antd';
  import { Button, Checkbox, Form, Input, Space,Typography  } from 'antd';
  import { GoogleOutlined  } from '@ant-design/icons';

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
  
  const Signup: React.FC = () => {
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
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input placeholder='User Name' className='input-name' />
              </Form.Item>
    
              <Form.Item<FieldType>
                name="email"
                rules={[
                  { required: true, message: 'Please input your E-mail!' },
                  { type: 'email', message: 'Please Enter a Valid Email Address' }
                ]}
              >
                <Input placeholder='E-mail Address' />
              </Form.Item>
    
              <Form.Item<FieldType>
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password placeholder='Password' />
              </Form.Item>
    
              <Form.Item<FieldType> name="remember" valuePropName="checked">
                <Checkbox>Remember Me</Checkbox>
              </Form.Item>
    
              <Form.Item className='buttonset' style={{textAlign:'center'}}>
                <Button type="primary" htmlType="submit" style={{borderRadius:20}}>
                  Sign Up
                </Button>
                <Space style={{padding:10}}>
                <Typography.Text>OR</Typography.Text>
                </Space>
                <Button icon={<GoogleOutlined />} style={{borderRadius:20}}>
                  Sign Up with Google
                </Button>
              </Form.Item>
    
              <Form.Item>
                <Space>Already have an Account? <Link to='/login'>Login</Link></Space>
              </Form.Item>
            </Form>
          </div>
        </div>
      );
  };
  
  export default Signup;
  