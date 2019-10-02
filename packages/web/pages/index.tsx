import * as React from 'react'
import Layout from '../components/Layout'
import { NextPage } from 'next'
import { withApollo } from '../lib/apollo'
import { useQuery } from '@apollo/react-hooks'
import { Button } from 'antd'
import gql from 'graphql-tag'

const PRODUCTS = gql`
  query Products {
    products {
      id
      title
      description
    }
  }
`

const IndexPage: NextPage = () => {
  const { data, loading, error } = useQuery(PRODUCTS)
  // console.log({ data, loading, error })
  if (loading) {
    return <div>loading...</div>
  }
  if (error || !data) {
    return null
  }

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      {data.products.map((p: any) => (
        <div key={p.id}>{p.title}</div>
      ))}
      <Button type="primary">Boton de prueba</Button>
    </Layout>
  )
}

export default withApollo(IndexPage)
