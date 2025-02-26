import '../index.css'
  import React from 'react';
  import type { FormProps } from 'antd';
  import { Button, Checkbox, Form, Input, Space,Typography  } from 'antd';
  import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons"
  import googleIcon from "../assets/icons8-google.svg"
  import Header from '../component/Header';

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
          <div style={{scale:'0.5', textAlign:'center',margin:15}}>
          <Header/></div>
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
                <Form.Item style={{textAlign:'center'}}>
                        <Space style={{fontSize:30,fontFamily:'Poppins Medium',}}>Sign Up</Space><br />
                        <Space style={{color:'gray'}}>Create your account </Space>
                        </Form.Item>

              <Form.Item<FieldType>
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input placeholder='User Name' className='input-name' prefix={<UserOutlined />} />
              </Form.Item>
    
              <Form.Item<FieldType>
                name="email"
                rules={[
                  { required: true, message: 'Please input your E-mail!' },
                  { type: 'email', message: 'Please Enter a Valid Email Address' }
                ]}
              >
                <Input placeholder='E-mail Address' prefix={<MailOutlined />}/>
              </Form.Item>
    
              <Form.Item<FieldType>
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password placeholder='Password' prefix={<LockOutlined />}/>
              </Form.Item>
    
              <Form.Item<FieldType> name="remember" valuePropName="checked" >
                <Checkbox>Remember Me</Checkbox>
              </Form.Item>
    
              <Form.Item className='buttonset' style={{textAlign:'center'}}>
                <Button type="primary" htmlType="submit" style={{borderRadius:20, width:310}}>
                  Sign Up
                </Button>
                <Space style={{padding:10}}>
                <Typography.Text>OR</Typography.Text>
                </Space>
                <Button  style={{borderRadius:20,padding:10}}>
                            <img
                                src={googleIcon}
                                alt="google icon"
                                style={{ maxWidth: 20, width: "100%" }}
                            />
                            Sign In With Google
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
  