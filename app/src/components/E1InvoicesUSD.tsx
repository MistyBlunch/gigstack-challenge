import 'firebase/firestore';
import { Layout, theme } from 'antd'
import { HeaderTitle } from '../elements/HeaderTitle'
import { LayoutInvoiceTable } from '../elements/invoices/LayoutInvoiceTable';

const { Content } = Layout

export const E1InvoicesUSD = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  return (
    <Layout>
      <HeaderTitle title="Ecommerce 1 Invoices USD" />
      <Content style={{ margin: '16px' }}>
        <div
          style={{
            padding: 24,
            minHeight: 360,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <LayoutInvoiceTable />
        </div>
      </Content>
    </Layout>
  )
}