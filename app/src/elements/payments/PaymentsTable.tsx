import { useEffect, useState } from 'react'
import { Flex, Layout, Modal, Spin, Table, Tooltip } from 'antd'
import type { TableColumnsType } from 'antd'
import { parsePaymentData } from '../../utils/services/payments/parsePaymentData.service'
import { PaymentTable } from '../../utils/interfaces/PaymentTable.interface'
import {
  LineItem,
  Payment,
} from '../../utils/interfaces/Payment.interface'
import { LineItemsTable } from './LineItemsTable'
import { FIRESTORE_API } from '../../enviroments'
import axios from 'axios'

export const PaymentsTable = () => {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState<Payment[]>([] as Payment[])
  const [lineItems, setLineItems] = useState([] as LineItem[])

  const openLineItemsModal = (lineItems: LineItem[]) => {
    setOpen(true)
    setLineItems(lineItems)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${FIRESTORE_API}/retrievePayments`
        )

        setData(response.data)
      } catch (error: any) {
        console.error(error.message)
      }
    }

    fetchData()
  }, [])

  const columns: TableColumnsType<PaymentTable> = [
    {
      title: 'Account Id',
      dataIndex: 'accountId',
      render: (accountId) => (
        <div
          style={{
            whiteSpace: 'nowrap',
            width: '100px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          <Tooltip placement="topLeft" title={accountId}>
            {accountId}
          </Tooltip>
          {accountId}
        </div>
      ),
    },
    {
      title: 'Customer Name',
      dataIndex: 'customer_name',
    },
    {
      title: 'Customer Email',
      dataIndex: 'customer_email',
      render: (customer_email) => (
        <div
          style={{
            whiteSpace: 'nowrap',
            width: '100px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          <Tooltip placement="topLeft" title={customer_email}>
            {customer_email}
          </Tooltip>
          {customer_email}
        </div>
      ),
    },
    {
      title: 'Items',
      dataIndex: 'line_items',
      render: (line_items) => (
        <p
          style={{ color: '#1677ff', cursor: 'pointer' }}
          onClick={() => openLineItemsModal(line_items)}
        >
          items
        </p>
      ),
    },
    {
      title: 'Currency',
      dataIndex: 'currency',
    },
    {
      title: 'Payment Method',
      dataIndex: 'payment_method',
    },
    {
      title: 'Notes',
      dataIndex: 'notes',
      render: (notes) => (
        <div
          style={{
            whiteSpace: 'nowrap',
            width: '120px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {notes}
        </div>
      ),
    },
    {
      title: 'Created At',
      dataIndex: 'created_at',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
  ]

  const paymentData: PaymentTable[] = parsePaymentData(data)

  return (
    <div>
      {data.length > 0 ? (
        <Layout>
          <Modal
            title="Items"
            centered
            open={open}
            footer={null}
            onCancel={() => setOpen(false)}
            width={1000}
          >
            <LineItemsTable lineItems={lineItems} />
          </Modal>
          <Layout style={{ overflowX: 'auto', background: 'white' }}>
            <Table
              columns={columns}
              dataSource={paymentData}
              tableLayout="auto"
              size="small"
            />
          </Layout>
        </Layout>
      ) : (
        <Flex align="center" gap="middle">
          <Spin size="large" />
        </Flex>
      )}
    </div>
  )
}
