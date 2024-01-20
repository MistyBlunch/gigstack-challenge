import React, { useState } from 'react'
import {
  FileTextOutlined,
  HomeOutlined,
  ShopOutlined,
} from '@ant-design/icons'

import type { MenuProps } from 'antd'
import { Image, Layout, Menu } from 'antd'

import { useNavigate } from 'react-router-dom'

const { Sider } = Layout

type MenuItem = Required<MenuProps>['items'][number]
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem
}

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [current, setCurrent] = useState('')
  const navigate = useNavigate()

  const items: MenuItem[] = [
    getItem('Home', '', <HomeOutlined />),
    getItem('All Payments', 'all-payments', <FileTextOutlined />),
    getItem('Ecommerce 1 ', 'sub1', <ShopOutlined />, [
      getItem('Invoices MXN', 'e1-invoices-mxn'),
      getItem('Invoices USD', 'e1-invoices-usd'),
    ]),
    getItem('Ecommerce 2', 'sub2', <ShopOutlined />, [
      getItem('Invoices MXN', 'e2-invoices-mxn'),
      getItem('Invoices USD', 'e2-invoices-usd'),
    ]),
  ]

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key)
    navigate('/' + e.key)
  }

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      theme="light"
    >
      <div
        style={{
          textAlign: 'center',
          padding: '1rem',
          marginBottom: '1rem',
        }}
      >
        <Image
          src="https://gigstack.pro/images/gigstack-pro.png"
          preview={false}
        ></Image>
      </div>
      <Menu
        onClick={onClick}
        theme="light"
        mode="inline"
        items={items}
      />
    </Sider>
  )
}
