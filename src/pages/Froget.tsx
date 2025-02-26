import React from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input, Space } from 'antd';
import { Link } from 'react-router-dom';
import "../index.css"
import Header from '../component/Header';
import {MailOutlined} from "@ant-design/icons"

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
            <div style={{scale:'0.5', textAlign:'center',margin:15}}>
            <Header/></div>
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item style={{textAlign:'center'}}>
        <Space style={{fontSize:25,fontFamily:'Poppins Medium'}}>Froget Your Password ?</Space><br />
        <Space style={{color:'gray'}}>Enter Your E-Mail to Reset it </Space>
        </Form.Item>
        <Form.Item<FieldType>
          name="email"          
          rules={[{ required: true, message: 'Please input your Email!' }]}
        >
          <Input placeholder='Enter Your E-Mail address' type='email' prefix={<MailOutlined />} style={{borderRadius: 20 }}/>
        </Form.Item>

        <Form.Item className='buttonset' style={{textAlign:'center'}}>
          <Button type="primary" htmlType="submit" style={{borderRadius:20,width:300}}>
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
