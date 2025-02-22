import'../index.css'
import React from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox,  Form, Input,Space,Typography } from 'antd';
import { Link } from 'react-router-dom';
import { GoogleOutlined  } from '@ant-design/icons';

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
          <Input placeholder='User Name'  style={{borderRadius: 20 }}/>
        </Form.Item>

        <Form.Item<FieldType>
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password  placeholder='Password' style={{borderRadius: 20 }}/>
        </Form.Item>

       
        <Form.Item<FieldType> name="remember" valuePropName="checked"  >
           <Space style={{textAlign:'left'}}>
          <Checkbox>Remember Me</Checkbox>
          </Space> 
          <Space >
          <Link to="/froget" style={{marginLeft:100}}>Froget Password ?</Link>
          </Space>
        </Form.Item>

        <Form.Item className='buttonset' style={{textAlign:'center'}}>
          <Button type="primary" htmlType="submit" style={{borderRadius:20}}>
            Log In
          </Button>
          <Space >
          <Typography.Text style={{padding:10}}>
                 OR
            </Typography.Text>
            </Space>
          <Button icon={<GoogleOutlined />} style={{borderRadius:20}}>
        
            Sign Up with Google
           
          </Button>
          <Space style={{paddingTop:10}}>
          <Typography.Text >
            <p>Don’t have an account? 
            <Link to="/signup">
             Sign up </Link></p>
            </Typography.Text>
            </Space>
        </Form.Item>
      </Form>
      
      </div>
    </div>
  );
};

export default Login;
