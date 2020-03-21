import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/Seo'

import pizzadean from '../images/pizzadean.gif'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 😞" />
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
      }}
    >
      <Link to="/">
        <img src={pizzadean} alt="man with pizza hands"></img>
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage
