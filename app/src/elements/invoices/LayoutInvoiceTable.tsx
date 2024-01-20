import { useEffect, useState } from 'react'
import { E1_ID, E2_ID, FIRESTORE_API } from '../../enviroments'
import { Flex, Spin } from 'antd'
import { Invoice } from '../../utils/interfaces/Invoice.interface'
import { useLocation } from 'react-router-dom'
import { InvoiceTable } from './InvoiceTable'
import axios from 'axios'

export const LayoutInvoiceTable = () => {
  const [data, setData] = useState<Invoice>()

  const location = useLocation()
  const currency =
    location.pathname.search('mxn') !== -1 ? 'mxn' : 'usd'
  const eCommerce =
    location.pathname.search('e1') !== 1 ? E2_ID : E1_ID

  useEffect(() => {
    const queryParams = {
      id: eCommerce,
      currency: currency.toUpperCase(),
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${FIRESTORE_API}/retrieveGlobalInvoices`,
          {
            params: queryParams,
          }
        )

        setData(response.data)
      } catch (error: any) {
        console.error(error.message)
      }
    }

    fetchData()
  }, [currency, eCommerce])

  return (
    <div>
      {data ? (
        <div>
          <div style={{ marginBottom: '1rem' }}>
            <div>
              <span style={{ fontWeight: 'bold' }}>
                Ecommerce ID:{' '}
              </span>
              <span>{data.id}</span>
            </div>
            <div>
              <span style={{ fontWeight: 'bold' }}>Currency: </span>
              <span>{currency.toUpperCase()}</span>
            </div>
          </div>
          <InvoiceTable invoiceData={data} />
        </div>
      ) : (
        <Flex align="center" gap="middle">
          <Spin size="large" />
        </Flex>
      )}
    </div>
  )
}
