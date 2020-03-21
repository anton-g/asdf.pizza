import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/Seo'

import pizzadean from '../images/pizzadean.gif'

const IndexPage = () => (
  <Layout>
    <SEO title="👋" />
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
      }}
    >
      <img src={pizzadean} alt="man with pizza hands"></img>
    </div>
  </Layout>
)

export default IndexPage
