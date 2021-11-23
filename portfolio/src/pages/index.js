import * as React from "react"
//import { render } from "react-dom"
import '../styles/style.css'

import portrait from '../images/portrait.jpg'

// CDNs
//<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin referrerpolicy="no-referrer" />
  <script crossOrigin src="https://cdn.jsdelivr.net/npm/britecharts@2/dist/bundled/britecharts.min.js"/>


/* TODO
   Important
  - intro text animation
    - maybe have other sections have an animation on scroll over
  - find icons for socials (linkedin, email, github, codepen)
    - put icons as links under landing #intro-main
    - put icons in the contact section
  - figure out skill chart
  - figure out layout of projects
    - have it so there are equal rows (when applicable) of projects

   Not so important
  - figure out scss
    - figure out media queries (to work with scss)  
*/

// components
/*Header
  - Contains logo, nav links
*/
const  Header = () => {  
  // *TODO* need to change <a> to <link>
  return (
    <header>
      <div className="logo">
        {/* <a className="logo-link" href="#landing" >   
          BL
        </a> */}
      </div>
      <div className="nav-links">
        <ul>            
          <li><a className="link" href="#about-container">About</a></li>
          <li><a className="link" href="#project-container">Projects</a></li>
          <li><a className="link" href="#contact-container">Contact</a></li>
        </ul>
      </div>    
    </header> 
  )
}

/*Landing section
  - Contains initial content, "Hi my name...", scroll prompt 
*/
const Landing = () => {
  return (
      <div id="landing-container">
        <Header />
        <div  id="landing" className="content"> {/**/}
          <div id='intro-main'>
            <h1 id='intro-main'>
              {/* Not in love with the font */}
              Hi! I'm<br/>Ben<br/>Langlois
            </h1><br/>
          </div>
          {/* <div id='intro-sub'>
            <p className="intro-snippets">
              <span className="intro-snippet">Web Dev</span>
              <span className="intro-snippet">Photography</span>
              <span className="intro-snippet">Design</span>
            </p> 
          </div> */}
        </div>
      </div>
  )
}

/*About
  - Contains bio sections, education, skills, soft-skills, yadayada
*/
const About = () => {
  return (
    <>
      <div id="about-container">
        <div id="portrait-container">
            <img id="portrait" src={portrait} alt=" "></img>
        </div>
        <div id="bio-container">
          <div id="bio-text">
            <p style={{font: "2.3vh/4.3vh libre-italic"}}>
              <b>A Hamilton/Toronto based web<br/>
              developer/designer with an interest in<br/>
              photography and building random things.</b>
            </p>
            <p style={{margin: "3vh 0 0 0", font: "2.2vh/4vh roboto"}}> {/*figure out letter-spacing*/}
              <b>I attended Durham College for 2 years<br/>
              in Oshawa, Ontario for computer<br/>
              programming.<br/>
              <br/>
              I work mostly in React, JS, SCSS, MySQL,<br/>
              and C++. I'm also currently expirementing<br/>
              with Python, C# and Arduino.<br/>
              <br/>
              Besides programming, I'm really interested in<br/> 
              reading, going to the gym, being in nature, and<br/>
              video games.</b>
            </p>
          </div>
        </div>
      </div>  {/* Skill chart goes here*/}
      <div id="skill-chart-container">
        <div id="skill-chart">
          <div class='bar' style={{width: "100%"}}></div>
          <div class='bar' style={{width: "80%"}}></div>
          <div class='bar' style={{width: "40%"}}></div>
          <div class='bar' style={{width: "60%"}}></div>
        </div>
      </div>
    </>
  )
}

/*Projects
  - Contains projects, filterable through a slide bar type thing (divided by languages)

  TODO
  - change margins/padding to account for smaller section
  - add projects duh yuh get me
*/
const Projects = () => {
  return (
    <div id="project-container">
      <div class="section-header">
        <h1 class='section-header-text'><b>Projects</b></h1>
      </div>  
      <div id='bubble-container'>   
        <div class="bubble">
          <h1 class='bubble-text'>Adding Projects as they come</h1>
        </div>
        <div class="bubble">
          <h1 class='bubble-text'>Adding Projects as they come</h1>
        </div>
        <div class="bubble">
          <h1 class='bubble-text'>Adding Projects as they come</h1>
        </div>
      </div> 
    </div>
  )
}

/*Contact
*Gonna redo this section*
  - has contact info, form, links to github linkedIn etc
*/
const ContactMe = () => {
  return(
    <div id='contact-container'>
      <div class='section-header'>
        <h1 class='section-header-text'><b>Interested? Cool! Lets talk!</b></h1>
      </div>
    </div>
  );
}

// markup
const IndexPage = () => {
  return (
    <>
      <Landing />
      <About />
      <Projects />
      <ContactMe />
    </>
  )
}

export default IndexPage