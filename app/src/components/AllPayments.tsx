import { Layout, theme } from 'antd'
import { HeaderTitle } from '../elements/HeaderTitle'
import { PaymentsTable } from '../elements/payments/PaymentsTable'

const { Content } = Layout

export const AllPayments = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  return (
    <Layout>
      <HeaderTitle title="All Payments" />
      <Content style={{ margin: '16px' }}>
        <div
          style={{
            padding: 24,
            minHeight: 360,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <PaymentsTable />
        </div>
      </Content>
    </Layout>
  )
}
