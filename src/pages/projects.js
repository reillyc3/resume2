import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components';
import pic1 from '../images/dog-breed.jpg'
import pic2 from '../images/resume.png'
import pic3 from '../images/resumev2.png'

const Project = styled.div`
padding: 20px;
background-color: #C5C6C7;
transition: transform .2s;
width: 200px;
height: 200px;
margin: 0 auto;
border-radius: 25px;
:hover {
  -ms-transform: scale(1.2); /* IE 9 */
  -webkit-transform: scale(1.2); /* Safari 3-8 */
  transform: scale(1.2); 
}
 
`;

const Image = styled.img`
width: 175px;
height: 125px;
margin-bottom: 0;
`




const Projects = () => (
  <Layout>
    <div>
      <h1 style={{textAlign: 'center', color: '#FFF5EE'}}>Projects</h1> 
      <p style={{textAlign: 'center', color: '#FFF5EE'}}>Here are a few of the web development projects I've completed. View each project's <a href='https://github.com/reillyc3' style={{textColor: 'black'}}>Github</a> repo by clicking on it.</p>
    <div class="container">
      <div class="row">
       <div class="col-md">
       <a href="https://github.com/illinoistech-itm/creilly1/tree/master/itmd-565/Creilly1_lab7/dogimage ">
         <Project className="proj1">
         <Image src={pic1}></Image>
         <p>Dog Breed Image Generator</p>
         </Project> 
         </a>
          </div>
      <div class="col-md">
      <a href="https://github.com/reillyc3/resume-v1">
        <Project>
        <Image src={pic2}></Image> 
         <p>Resume v1.0</p>
         </Project>
         </a>
       </div>
      <div class="col-md">
      <a href="https://github.com/reillyc3/resume-v1">
        <Project>
        <Image src={pic3}></Image> 
         <p>Resume v2.0</p>
         </Project>
         </a>
      </div>
  </div>
  <br></br>
  <br></br>
  <div class="row">
       <div class="col-sm-4">
         <Project>
         <p>Coming Soon!</p>
         </Project> 
          </div>
      <div class="col-sm-4">
        <Project>
        <p>Coming Soon!</p>
         </Project>
       </div>
      <div class="col-sm-4">
        <Project>
        <p>Coming Soon!</p>
        </Project>
      </div>
  </div>
</div>
    </div>
    </Layout>
  )

export default Projects;