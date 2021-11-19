import * as React from "react"
//import { render } from "react-dom"
import '../styles/style.css'

import portrait from '../images/portrait.jpg'

// CDNs
//<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin referrerpolicy="no-referrer" />
  <script crossOrigin src="https://cdn.jsdelivr.net/npm/britecharts@2/dist/bundled/britecharts.min.js"/>


/* TODO
  - figure out scss
  - scroll prompt in landing
  - intro text animation
  - figure out media queries (to work with scss)
  - (maybe) have header scroll with user, always have access to links 
  - figure out fa icons
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
          <li><a className="link" href="#contact">Contact</a></li>
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
            <h1>
              {/* Not in love with the font */}
              Ben<br/>Langlois
            </h1><br/>
          </div>
          <div id='intro-sub'>
            {/*Not sure what to call these*/}
            <p className="intro-snippets">
              {/* Web Dev <i class="far fa-circle"></i> Design <i class="far fa-circle"></i> Photography */}
              <span className="intro-snippet">Web Dev</span>
              <span className="intro-snippet">Photography</span>
              <span className="intro-snippet">Design</span>
            </p>
          </div>
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
              <b>I'm Ben, a GTA/Toronto based web<br/>developer/designer withan interest<br/>in photography and building random<br/>things.</b>
            </p>
            <p style={{margin: "3vh 0 0 0", font: "2.2vh/4vh roboto"}}> {/*figure out letter-spacing*/}
              <b>I attended Durham College in Oshawa,<br/>
              Ontario for 2 years for computer<br/>
              programming.<br/>
              <br/>
              I work mostly in React/Gatsby, JS,<br/>
              SCSS, MySQL, C++ and I'm currently<br/>
              expirementing with Python, C# and Arduino<br/>
              <br/>
              When I'm not working or creating you'll<br/> 
              find me in the gym, in nature, or playing<br/> 
              video games.<br/></b>
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
      <div id="project-header">
        <h1 id='project-header-text'><b>Projects</b></h1>
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
    <div>
      
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