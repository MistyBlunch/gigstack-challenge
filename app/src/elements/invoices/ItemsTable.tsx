import type { TableColumnsType } from 'antd'
import { Layout, Table } from 'antd'
import { Item } from '../../utils/interfaces/Invoice.interface'
import { ItemTable } from '../../utils/interfaces/InvoiceTable.interface'
import { parseItemData } from '../../utils/services/invoices/parseItemData.service'

export const ItemsTable = (props: { items: Item[] }) => {
  const columns: TableColumnsType<ItemTable> = [
    {
      title: 'Name',
      dataIndex: 'unit_name',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
    },
    {
      title: 'Discount',
      dataIndex: 'discount',
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
      title: 'Product Key',
      dataIndex: 'product_key',
    },
    {
      title: 'Price',
      dataIndex: 'price',
    },
    {
      title: 'Unit Key',
      dataIndex: 'unit_key',
    },
    {
      title: 'Tax Included',
      dataIndex: 'tax_included',
    },

    {
      title: 'Taxability',
      dataIndex: 'taxability',
    },
  ]

  const data: ItemTable[] = parseItemData(props.items)

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
