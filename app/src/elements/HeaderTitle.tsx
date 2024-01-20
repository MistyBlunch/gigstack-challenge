import React from 'react'

import { Layout, theme } from 'antd'
import Title from 'antd/es/typography/Title'

const { Header } = Layout

export const HeaderTitle = (props: { title: string }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Header style={{ paddingLeft: '1rem', background: colorBgContainer }}>
      <Title level={3}>{props.title}</Title>
    </Header>
  )
}
