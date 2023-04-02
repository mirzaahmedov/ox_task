import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Button, Drawer, Layout, Menu, Typography } from "antd"
import { HomeOutlined, LogoutOutlined, MenuOutlined, TableOutlined,  } from "@ant-design/icons"

import styles from './main.module.css';
import { useAuth } from "../context/auth";

const menuItems = [
  {
    key: '/home',
    disabled: true,
    icon: <HomeOutlined />,
    label: 'Home',
  },
  {
    key: '',
    disabled: false,
    icon: <TableOutlined />,
    label: 'Products',
  }
]

const Main = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const navigate = useNavigate();

  const { setAuth } = useAuth();

  return (
    <Layout className="main-layout">
      <Drawer 
        open={isMenuVisible} 
        onClose={() => setIsMenuVisible(false)} 
        title="Ox Task" 
        placement="left"
      >
        <Menu 
          onClick={({ key }) => navigate(`/${key}`)} 
          items={menuItems} 
          mode="inline" 
        />
      </Drawer>
      <Layout.Sider className={styles.Sidebar}>
        <Typography.Title level={3} className={styles.Logo}>Ox Task</Typography.Title>
        <Menu 
          onClick={({ key }) => navigate(`/${key}`)} 
          items={menuItems} 
          theme="dark" 
          mode="inline" 
        />
      </Layout.Sider>
      <Layout>
        <Layout.Header className={styles.Header}>
          <Button 
            onClick={() => setIsMenuVisible(true)}
            className={styles.MenuBtn} 
            type="text" 
            icon={<MenuOutlined />}
          ></Button>
          <Button 
            className={styles.Logout} 
            onClick={() => setAuth(null)} 
            type="primary" 
            icon={<LogoutOutlined />}
          >
            Logout
          </Button>
        </Layout.Header>
        <Layout.Content>
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default Main;
