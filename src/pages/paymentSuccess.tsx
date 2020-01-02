// Node Modules
import React from 'react'
import { Link } from 'gatsby'

// Components
import Layout from 'components/Layout'

const PaymentSuccessPage = () => (
    <Layout>
        Thanks for shopping!
        <br />
        <Link to={'/'}>Go home</Link>
    </Layout>
)

export default PaymentSuccessPage