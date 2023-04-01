import { Alert, Button, Checkbox, Form, Input } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom";
import { useMutation } from '@tanstack/react-query';

import { useAuth } from "../context/auth";
import { mutateLogin } from "../services/auth";

type FormType = {
  username: string;
  password: string;
  remember: boolean;
}

const LoginForm = () => {
  const navigate = useNavigate();

  const { setAuth } = useAuth();

  const mutation = useMutation({
    mutationFn: mutateLogin,
    onSuccess: (result: Awaited<ReturnType<typeof mutateLogin>>, variables: any) => {
      if (variables.remember) {
        localStorage.setItem('auth', JSON.stringify(result));
      }

      setAuth(result);

      setTimeout(() => {
        navigate('/');
      }, 500);
    }
  });

  const handleSubmit = (values: FormType) => {
    const { username, password, remember } = values;
    mutation.mutate({ username, password, remember });
  };

  return (
    <Form
      onFinish={handleSubmit}
    >
      {
        mutation.isError && (
          <Form.Item>
            <Alert message={(mutation.error as Error)?.message} type="error" showIcon />
          </Form.Item>
        )
      }
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' },{ min: 6 }, { max: 20 }]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm
