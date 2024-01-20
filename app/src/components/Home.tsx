import { Flex, Layout, theme } from 'antd'
import { HeaderTitle } from '../elements/HeaderTitle'
import { CheckOutlined } from '@ant-design/icons'

const { Content } = Layout

export const Home = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  return (
    <Layout>
      <HeaderTitle title="Home" />
      <Content style={{ margin: '16px' }}>
        <div
          style={{
            padding: 24,
            minHeight: 360,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Flex gap={'middle'} style={{ marginBottom: '1rem' }}>
            <CheckOutlined />
            <p style={{ margin: 0, fontSize: '16px' }}>
              Con gigstack pro ahora puedes listar todos los pagos
              hechos en tu negocio en una plataforma intuitiva, rápida
              y ordenada.
            </p>
          </Flex>
          <Flex gap={'middle'} style={{ marginBottom: '1rem' }}>
            <CheckOutlined />
            <p style={{ margin: 0, fontSize: '16px' }}>
              Generaremos global invoices de todos tus e-commerce el
              último día del mes a las 23:59 de todas las compras en
              las que no te hayan pedido factura.
            </p>
          </Flex>
          <Flex gap={'middle'} style={{ marginBottom: '1rem' }}>
            <CheckOutlined />
            <p style={{ margin: 0, fontSize: '16px' }}>
              Agruparemos los global invoices por el tipo de moneda y
              podrás ver el tipo de cambio.
            </p>
          </Flex>
          <Flex gap={'middle'} style={{ marginBottom: '1rem' }}>
            <CheckOutlined />
            <p style={{ margin: 0, fontSize: '16px' }}>
              Recuerda que cada global invoice no contendrá más de 750
              items.
            </p>
          </Flex>
        </div>
      </Content>
    </Layout>
  )
}
