import "../index.css";
import React from "react";
import { useDispatch,useSelector } from "react-redux";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input, Space, Typography, message } from "antd";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import googleIcon from "../assets/icons8-google.svg";
import Header from "../component/Header";
import { Link,useNavigate } from "react-router-dom";
import { signup } from "../authSlice";
import { RootState } from "../store";

type FieldType = {
  username?: string;
  password?: string;
  remember?: boolean;
  email?: string;
};

const Signup: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const authState = useSelector((state: RootState) => state.auth);

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    dispatch(signup({ email: values.email!, password: values.password! }));
    message.success("Signup successful! You can now login.");
   
   

  };


  

  return (
    <div className="signup-container">
      <div className="form-box">
        <div style={{ scale: "0.5", textAlign: "center", margin: 15 }}>
          <Header />
        </div>

        <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish} autoComplete="off">
          <Form.Item style={{ textAlign: "center" }}>
            <Space style={{ fontSize: 30, fontFamily: "Poppins Medium" }}>Sign Up</Space><br />
            <Space style={{ color: "gray" }}>Create your account</Space>
          </Form.Item>

          {authState.errorMessage && <p style={{ color: "red", textAlign: "center" }}>{authState.errorMessage}</p>}

          <Form.Item<FieldType> name="username" rules={[{ required: true, message: "Please input your username!" }]}>
            <Input placeholder="User Name" className="input-name" prefix={<UserOutlined />} />
          </Form.Item>

          <Form.Item<FieldType> name="email" rules={[{ required: true, type: "email", message: "Please enter a valid email!" }]}>
            <Input placeholder="E-mail Address" prefix={<MailOutlined />} />
          </Form.Item>

          <Form.Item<FieldType> name="password" rules={[{ required: true, message: "Please input your password!" }]}>
            <Input.Password placeholder="Password" prefix={<LockOutlined />} />
          </Form.Item>

          <Form.Item<FieldType> name="remember" valuePropName="checked">
            <Checkbox>Remember Me</Checkbox>
          </Form.Item>

          <Form.Item className="buttonset" style={{ textAlign: "center" }}>
            <Button type="primary" htmlType="submit" style={{ borderRadius: 20, width: 310 }}>
              Sign Up
            </Button>
            <Space style={{ padding: 10 }}>
              <Typography.Text>OR</Typography.Text>
            </Space>
            <Button style={{ borderRadius: 20, padding: 10 }}>
              <img src={googleIcon} alt="google icon" style={{ maxWidth: 20, width: "100%" }} />
              Sign In With Google
            </Button>
          </Form.Item>

          <Form.Item>
            <Space>Already have an account? <Link to="/login">Login</Link></Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
