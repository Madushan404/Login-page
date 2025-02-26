import'../index.css'
import React from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox,  Form, Input,Space,Typography } from 'antd';
import { Link } from 'react-router-dom';
import { LockOutlined, UserOutlined } from "@ant-design/icons"
import googleIcon from "../assets/icons8-google.svg"
import Header from '../component/Header';

type FieldType = {
  username?: string;
  password?: string;
  remember?: boolean; 
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const Login: React.FC = () => {
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
            <Space style={{fontSize:30,fontFamily:'Poppins Medium',}}>Welcome Back</Space><br />
            <Space style={{color:'gray'}}>Login to your account </Space>
        </Form.Item>

        <Form.Item<FieldType>
          name="username"          
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder='User Name'  style={{borderRadius: 20 }} prefix={<UserOutlined />}/>
        </Form.Item>

        <Form.Item<FieldType>
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password  placeholder='Password' style={{borderRadius: 20 }} prefix={<LockOutlined />}/>
        </Form.Item>

       
        <Form.Item<FieldType> name="remember" valuePropName="checked"  >
           <Space style={{textAlign:'left'}}>
          <Checkbox>Remember Me</Checkbox>
          </Space> 
          <Space >
          <Link to="/froget" style={{marginLeft:60}}>Froget Password ?</Link>
          </Space>
        </Form.Item>

        <Form.Item className='buttonset' style={{textAlign:'center'}}>
          <Button type="primary" htmlType="submit" style={{borderRadius:20}}>
            Log In
          </Button>
          <Space >
          <Typography.Text style={{padding:10}}>
            <Space style={{padding:10}}>
            OR
            </Space>
            </Typography.Text>
            </Space>
            <Button  style={{borderRadius:20,padding:10}}>
                            <img
                                src={googleIcon}
                                alt="google icon"
                                style={{ maxWidth: 20, width: "100%" }}
                            />
                            Sign In With Google
                        </Button>
          <Space style={{paddingTop:10}}>
          <Typography.Text >
            <Space>Don’t have an account? 
            <Link to="/signup">
             Sign up </Link></Space>
            </Typography.Text>
            </Space>
        </Form.Item>
      </Form>
      
      </div>
    </div>
  );
};

export default Login;
