import { useState } from 'react'
import { Layout, Modal, Table, Tooltip } from 'antd'
import type { TableColumnsType } from 'antd'
import { Invoice, Item } from '../../utils/interfaces/Invoice.interface'
import { parseInvoiceData } from '../../utils/services/invoices/parseInvoiceData.service'
import { InvoiceElement } from '../../utils/interfaces/InvoiceTable.interface'
import { ItemsTable } from './ItemsTable'

export const InvoiceTable = (props: { invoiceData: Invoice }) => {
  const [open, setOpen] = useState(false)
  const [items, setItems] = useState([] as Item[])

  const openItemsModal = (items: Item[]) => {
    setOpen(true)
    setItems(items)
  }

  const columns: TableColumnsType<InvoiceElement> = [
    {
      title: 'Id',
      dataIndex: 'id',
      render: (id) => (
        <div
          style={{
            whiteSpace: 'nowrap',
            width: '80px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          <Tooltip placement="topLeft" title={id}>
            {id}
          </Tooltip>
          {id}
        </div>
      ),
    },
    {
      title: 'Use',
      dataIndex: 'use',
    },
    {
      title: 'Payment Form',
      dataIndex: 'payment_form',
    },
    {
      title: 'Created At',
      dataIndex: 'created_at',
    },
    {
      title: 'Type',
      dataIndex: 'type',
    },
    {
      title: 'Email',
      dataIndex: 'emails',
      render: (emails) => (
        <div
          style={{
            whiteSpace: 'nowrap',
            width: '100px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          <Tooltip placement="topLeft" title={emails}>
            {emails}
          </Tooltip>
          {emails}
        </div>
      ),
    },
    {
      title: 'Total',
      dataIndex: 'total',
    },
    {
      title: 'Verification Url',
      dataIndex: 'verification_url',
      render: (verification_url) => (
        <a href={verification_url} target="_blank" rel="noreferrer">
          url
        </a>
      ),
    },
    {
      title: 'Client Legal Name',
      dataIndex: 'client_legal_name',
    },
    {
      title: 'Client Address',
      dataIndex: 'client_address',
      ellipsis: {
        showTitle: false,
      },
      render: (customer_email) => (
        <Tooltip placement="topLeft" title={customer_email}>
          {customer_email}
        </Tooltip>
      ),
    },
    {
      title: 'Client Tax System',
      dataIndex: 'client_tax_system',
    },
    {
      title: 'Client RFC',
      dataIndex: 'client_rfc',
    },
    {
      title: 'Payment Method',
      dataIndex: 'payment_method',
    },
    {
      title: 'Items',
      dataIndex: 'items',
      render: (items) => (
        <p
          style={{ color: '#1677ff', cursor: 'pointer' }}
          onClick={() => openItemsModal(items)}
        >
          items
        </p>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
  ]

  if (props.invoiceData.collections[0]?.id === 'USD') {
    columns.push({
      title: 'Exchange Rate',
      dataIndex: 'exchange_rate',
    },)
  }

  const data: InvoiceElement[] = parseInvoiceData(props.invoiceData)

  return (
    <Layout>
      <Modal
        title="Items"
        centered
        open={open}
        footer={null}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <ItemsTable items={items} />
      </Modal>
      <Layout style={{ overflowX: 'auto', background: 'white' }}>
        <Table
          columns={columns}
          dataSource={data}
          tableLayout="auto"
          size="small"
        />
      </Layout>
    </Layout>
  )
}
