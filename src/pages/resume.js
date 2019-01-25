import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components';

const CompanyName = styled.h2`
  color: #66FCF1 !important;
  font-size 25px;
  font-weight: 500;
  margin-bottom: 5px;
  margin-top: 20px;
`;

const JobTitle = styled.h4`
  color: #FFF5EE;
  font-size 20px;
  font-weight: 400;
  margin-bottom: 5px;
`;

const JobLocation = styled.h5`
  color: #FFF5EE;
  font-size 20px;
  font-weight: 400;
  margin-bottom: 5px;
`;

const JobDate = styled.h6`
  color: #FFF5EE;
  font-size 15px;
  font-weight: 200;
  margin-bottom: 5px;
  
`;

const JobWrapper = styled.div`
color: #FFF5EE;
font-size: 15px;

`;

const Resume = ({data}) => (
  
    <Layout>
      <div>
        {data.allMarkdownRemark.edges.map(post => (
        <div key={ post.node.id}>
            <CompanyName>{post.node.frontmatter.company}</CompanyName>
            <JobTitle>{post.node.frontmatter.title}</JobTitle>
            <JobLocation>{post.node.frontmatter.location}</JobLocation>
            <JobDate>{post.node.frontmatter.date}</JobDate>
            <JobWrapper dangerouslySetInnerHTML={{ __html: post.node.html }}></JobWrapper>
         </div>
        ))} 
       
      </div>
      </Layout>
    )
  
    export const jobsQuery = graphql`
    query JobsIndexQuery {
        
            allMarkdownRemark (sort: { fields: [frontmatter___date], order: ASC }){
              edges{
                node{
                    id
                    html 
                frontmatter {
                  title
                  company
                  location
                  date
                  url
                 
                }
               
              }
              }
              
            }
        

    }
  `

 
export default Resume;