import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/Seo'

import us from '../images/bollhav.gif'
import pizzadean from '../images/pizzadean.gif'

const IndexPage = () => (
  <Layout>
    <SEO title="asdf" />
    <div
      style={{
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'center',
        height: '100%',
        marginTop: '30vh',
      }}
    >
      <img src={us} alt="therese and anton in a ball pit"></img>
      <div
        style={{
          padding: '0 16px',
          fontSize: 130,
        }}
      >
        .
      </div>
      <img src={pizzadean} alt="man with pizza hands"></img>
    </div>
  </Layout>
)

export default IndexPage
