import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Menu from '../components/menu'
import './layout.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './footer';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}

   
    render={data => (
      <>
      
        <Header siteTitle={data.site.siteMetadata.title} />
        
        <div
          style={{
            margin: '0 auto',
            marginBottom: '100px',
            paddingRight: '100px',
            paddingLeft: '100px',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
       
        <Footer />
      </>
       
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
