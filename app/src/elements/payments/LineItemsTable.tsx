import type { TableColumnsType } from 'antd'
import { Layout, Table } from 'antd'
import { LineItemTable } from '../../utils/interfaces/PaymentTable.interface'
import { LineItem } from '../../utils/interfaces/Payment.interface'
import { parseLineItemData } from '../../utils/services/payments/parseLineItemData.service'

export const LineItemsTable = (props: { lineItems: LineItem[] }) => {
  const columns: TableColumnsType<LineItemTable> = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      render: (description) => (
        <div
          style={{
            whiteSpace: 'nowrap',
            width: '120px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {description}
        </div>
      ),
    },
    {
      title: 'Price',
      dataIndex: 'price',
    },
    {
      title: 'Quantity',
      dataIndex: 'qty',
    },
    {
      title: 'Tax Rate',
      dataIndex: 'taxe_rate',
    },
    {
      title: 'Tax Type',
      dataIndex: 'tax_type',
    },
    {
      title: 'Category',
      dataIndex: 'category',
    },

    {
      title: 'SKU',
      dataIndex: 'sku',
    },
    {
      title: 'Product Key',
      dataIndex: 'product_key',
    },
    {
      title: 'Unit Code',
      dataIndex: 'unit_code',
    },
    {
      title: 'Unit Key',
      dataIndex: 'unit_key',
    },
    {
      title: 'unit Name',
      dataIndex: 'unit_name',
    },
  ]

  const data: LineItemTable[] = parseLineItemData(props.lineItems)

  return (
    <Layout style={{ overflowX: 'auto', background: 'white' }}>
      <Table
        columns={columns}
        dataSource={data}
        tableLayout="auto"
        size="small"
      />
    </Layout>
  )
}
