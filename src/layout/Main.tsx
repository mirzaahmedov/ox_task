import { Outlet, useNavigate } from "react-router-dom";
import { Layout, Menu, Button } from "antd"
import { HomeOutlined, TableOutlined, LogoutOutlined } from "@ant-design/icons"

import { useAuth } from "../context/auth";

const menuItems = [
  {
    key: '',
    icon: <TableOutlined />,
    label: 'Products',
  }
]

const Main = () => {
  const navigate = useNavigate();

  const { setAuth } = useAuth();

  return (
    <Layout className="main-layout">
      <Layout.Sider>
        <Menu onClick={({ key }) => navigate(`/${key}`)} items={menuItems} theme="dark" mode="inline" />
      </Layout.Sider>
      <Layout>
        <Layout.Header>
          <Button onClick={() => setAuth(null)} type="primary" icon={<LogoutOutlined />}>Logout</Button>
        </Layout.Header>
        <Layout.Content>
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default Main;
