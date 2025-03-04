import "../index.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Checkbox, Form, Input, Space, Typography, message } from "antd";
import { Link } from "react-router-dom";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import googleIcon from "../assets/icons8-google.svg";
import Header from "../component/Header";
import { RootState } from "../store";
import { login } from "../authSlice";

type FieldType = {
  email: string;
  password: string;
  remember?: boolean;
};

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state: RootState) => state.auth);
  const [form] = Form.useForm(); 

  
  const onFinish = (values: FieldType) => {
    dispatch(login(values)); 

    if (authState.errorMessage) {
        message.error("Wrong Email or Password!");
    }else{
        message.success("success fully login !")
    }
    
  };

  return (
    <div className="signup-container">
      <div className="form-box">
        <div style={{ scale: "0.5", textAlign: "center", margin: 15 }}>
          <Header />
        </div>

        <Form form={form} name="basic" initialValues={{ remember: true }} onFinish={onFinish} autoComplete="off">
          <Form.Item style={{ textAlign: "center" }}>
            <Space style={{ fontSize: 30, fontFamily: "Poppins Medium" }}>Welcome Back</Space>
            <br />
            <Space style={{ color: "gray" }}>Login to your account</Space>
          </Form.Item>

          {authState.errorMessage && <p style={{ color: "red", textAlign: "center" }}>{authState.errorMessage}</p>}

          <Form.Item<FieldType> name="email" rules={[
                  { required: true, message: 'Please input your E-mail!' },
                  { type: 'email', message: 'Please Enter a Valid Email Address' }
                ]}>
            <Input placeholder="E-mail Address" style={{ borderRadius: 20 }} prefix={<MailOutlined />} />
          </Form.Item>

          <Form.Item<FieldType> name="password"  rules={[{ required: true, min:8, message: 'Please input your password!' }]}>
            <Input.Password placeholder="Password" style={{ borderRadius: 20 }} prefix={<LockOutlined />} />
          </Form.Item>

          

          <Form.Item<FieldType> name="remember" valuePropName="checked">
            <Space style={{ textAlign: "left" }}>
              <Checkbox>Remember Me</Checkbox>
            </Space>
            <Space>
              <Link to="/forgot" style={{ marginLeft: 60 }}>
                Forgot Password?
              </Link>
            </Space>
          </Form.Item>

          <Form.Item className="buttonset" style={{ textAlign: "center" }}>
            <Button type="primary" htmlType="submit" style={{ borderRadius: 20 }}>
              Log In
            </Button>

            <Space>
              <Typography.Text style={{ padding: 10 }}>
                <Space style={{ padding: 10 }}>OR</Space>
              </Typography.Text>
            </Space>

            <Button style={{ borderRadius: 20, padding: 10 }}>
              <img src={googleIcon} alt="google icon" style={{ maxWidth: 20, width: "100%" }} />
              Sign In With Google
            </Button>

            <Space style={{ paddingTop: 10 }}>
              <Typography.Text>
                <Space>
                  Don’t have an account?
                  <Link to="/signup"> Sign up</Link>
                </Space>
              </Typography.Text>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
