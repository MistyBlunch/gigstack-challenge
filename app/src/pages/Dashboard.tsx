import React from 'react'

import { Layout } from 'antd'
import { Sidebar } from '../elements/Sidebar'
import { Home } from '../components/Home'
import { Route, Routes } from 'react-router-dom'
import { AllPayments } from '../components/AllPayments'
import { E1InvoicesMXN } from '../components/E1InvoicesMXN'
import { E1InvoicesUSD } from '../components/E1InvoicesUSD'
import { E2InvoicesMXN } from '../components/E2InvoicesMXN'
import { E2InvoicesUSD } from '../components/E2InvoicesUSD'

const { Footer } = Layout

export const Dashboard = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="all-payments" element={<AllPayments />} />
          <Route path="e1-invoices-mxn" element={<E1InvoicesMXN />} />
          <Route path="e1-invoices-usd" element={<E1InvoicesUSD />} />
          <Route path="e2-invoices-mxn" element={<E2InvoicesMXN />} />
          <Route path="e2-invoices-usd" element={<E2InvoicesUSD />} />
        </Routes>
        <Footer style={{ textAlign: 'center' }}>
          gigstack pro {new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  )
}
