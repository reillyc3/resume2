import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Menu from './menu';

const Header = ({ siteTitle }) => ( 

  <div
    style={{
      background: '#1F2833',
      marginBottom: '0',
      marginTop: '0',

     

    
    }}
  >
    <div class="row">
    <div class="col-md"
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        
      }}
    >

      <h1 style={{ marginLeft: '40px' }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      
        
      </h1>
      </div>
      <div class='col-md' style={{
        marginTop: '40px'
      }}>
        <Menu/>
      </div>
      
    </div>
   
  </div>
  
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
