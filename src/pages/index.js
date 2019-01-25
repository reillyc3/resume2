import React from 'react'
import { Link } from 'gatsby'
import Headshot from '../images/headshot.jpg'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'

const Jumbo = styled.div`
text-align: center,
margin: 0px,
padding: 0px,
`
const Image = styled.img`
border-radius: 0px;
height: 500px;
position: relative;
top -55px;
left: 0px;
opacity: 0.75;
filter: grayscale(100%);
`
const Skills = styled.div` 
textAlign: center,
margin: 0px,
padding: 0px,
`




const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['Connor', 'Reilly', 'Resume']} />
   <Jumbo className="jumbotron">
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
        <div style={{ paddingTop: '0px', maxWidth: '400px', maxHeight: '400px', display: 'inline-block'}}>
    <Image src={Headshot}></Image>
        </div>
      </div>
      <div className='col-md-6'>
        <h1 style={{textAlign: 'center', color: '#66FCF1'}}>
          <span>Web Developer, </span>
          <span>Salesforce Admin, </span>
          <span>Traveler, </span>
          <span>Entrepreneur</span>
        </h1>
        <p style={{textAlign: 'center', color: '#FFF5EE'}}>I love building things for the web and tinkering with Salesforce.com. 
          I've recently completed my Masters in Information
          Technology & Management from Illinois Institute of Technology. </p>
          <br></br>
          <br></br>
          <Skills style={{textAlign: 'center', color: '#FFF5EE'}}>
          <h3>Skills</h3>
          <p>Salesforce Admin | Javascript | HTML | CSS | React | Linux</p>


          </Skills>
      </div>
      
    </div>
    </div>
    </Jumbo>

  </Layout>

)

export default IndexPage


