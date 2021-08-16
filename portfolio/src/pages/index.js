import * as React from "react"
//import { render } from "react-dom"
import '../styles/style.css'

import portrait from '../images/portrait.jpg'

// CDNs
//<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin referrerpolicy="no-referrer" />
  <script crossOrigin src="https://cdn.jsdelivr.net/npm/britecharts@2/dist/bundled/britecharts.min.js"/>


/* TODO
  - add all style variables to own classes
    - change names to comply w naming conventions
    - change ids to class
  - figure out scss
  - scroll prompt in landing
  - landing background animation
    - (maybe) have an array of color objects (with a gradient of each color), have it change the background 
    colors each time site is reloaded.visted
  - intro text animation
  - figure out media queries
  - (maybe) have header scroll with user, always have access to links 
  - figure out fa icons
  Design Ideas
  - next to bio and projects have buttons to scroll up/down, and github etc
*/

// components
/*Header
  - Contains logo, nav links
*/
const  Header = () => {
  // to remove block prop from parent div
  // *TODO* try to put into a css class 
  const div = {
    margin: "0 10vw 0",
    paddingTop: "5vh", 
    // color: "#2A2D34",
    color: "#F7F4F3 !important",
    display: "flex"
  };
  
  // *TODO* need to change <a> to <link>
  return (
    <header style={div}>
      <div className="logo">
        {/* <a className="logo-link" href="#landing" >   
          BL
        </a> */}
      </div>
      <div className="nav-links">
        <ul>            
          <li><a className="link" href="#about-container">About</a></li>
          <li><a className="link" href="#project-container">Projects</a></li>
          <li><a className="link" href="#contact" style={{margin: "0 0 0 2vw"}}>Contact</a></li>
        </ul>
      </div>    
    </header> 
  )
}

/*Landing section
  - Contains initial content, "Hi my name...", scroll prompt 
*/
const Landing = () => {
  // TODO Create its own class
  const intro = {
    color: "#F7F4F3",  
    fontSize: "2.5em",

    // might change this font
    font: "2.8em/2em libre-italic",

    padding: "25vh 0 0 0",
    justifyContent: "center",
    display: "flex"
  };

  // styling to make the landing section cover the whole screen
  const cover = {
    margin: "0",
    padding: "0",
    height: "100vh",
    width: "100vw",
    color: "#F7F4F3",
    // -webkit-background-size: "cover";
    // -moz-background-size: cover;
    // -o-background-size: cover;
    backgroundSize: "cover",
    backgroundColor: "#111111",
    position: "relative",
  };

  const introSnippet = {
    margin: "0 1em"
  };

  return (
      <div id="landing-container" style={cover}>
        <Header />
        <div  id="landing" className="content"> {/**/}
          <div style={intro}>
            <h1 /*className="center-horizontal"*/ style={{margin: "0 auto", textAlign: "left", display: "inline-block", letterSpacing: ".2em"  /*for centerposition: "absolute", left: "50%"*/}}>
              {/* Not in love with the font */}
              Ben<br/>Langlois
            </h1><br/>
          </div>
          <div style={{display: "flex", alignContent: "center"}}>
            {/*Not sure what to call these*/}
            <p className="intro" style={{font: "25px/50px karla", alignSelf: "center", justifyContent: "center", /*margin: "0 auto", textAlign: "center"*/}}>
              {/* Web Dev <i class="far fa-circle"></i> Design <i class="far fa-circle"></i> Photography */}
              <span class="intro-snippet" style={introSnippet}>Web Dev</span>
              <span class="intro-snippet" style={introSnippet}>Photography</span>
              <span class="intro-snippet" style={introSnippet}>Design</span>
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
  //#region
  const aboutContainer = {
    margin: "0 0 0 0",
    //padding: "10vh 15vw",
    //padding: "0 15vw 0 25vw",
    color: "rgb(42, 45, 52)",
    height: "auto",
    width: "100%",
    //backgroundColor: "#FFFFFF", 
    // -webkit-background-size: "cover";        // these will work when added to actual css class
    // -moz-background-size: cover;
    // -o-background-size: cover;
    backgroundSize: "cover",
    position: "relative",
    display: "inline-flex"
  };
  //#endregion

  return (
    <>
      <div id="about-container" style={aboutContainer}>
        <div id="portrait-container" style={{width: "50vw", height: "70vh"}}>
            <img id="portrait" src={portrait} alt=" " style={{minWidth: "500px", width:"60%", height: "85%", float: "right", margin: "10vh 0 0 0"}}></img>
        </div>
        <div id="bio-container" style={{ width: "50vw"}}>
          <div id="bio-text" style={{height: "70vh", margin: "8vh 0 0 2vw", paddingBottom: "5vh"}}>
            <p style={{font: "2.3vh/4.3vh libre-italic"}}>
              <b>I'm Ben, a GTA/Toronto based web<br/>developer/designer withan interest<br/>in photography and building random<br/>things.</b>
            </p>
            <p style={{margin: "3vh 0 0 0", font: "2.2vh/4vh roboto"}}> {/*figure out letter-spacing*/}
              I attended Durham College in Oshawa,<br/>
              Ontario for 2 years for computer<br/>
              programming.<br/>
              <br/>
              I work mostly in React/Gatsby, JS,<br/>
              SCSS, MySQL, C++ and I'm currently<br/>
              expirementing with Python, C# and Arduino<br/>
              <br/>
              When I'm not working or creating you'll<br/> 
              find me in the gym, in nature, or playing<br/> 
              video games.<br/>
            </p>
          </div>
        </div>
      </div>  {/* Skill chart goes here*/}
      <div>

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
  
  const fullscreen = {
    margin: "0",
    padding: "13vh 20vw 0 20vw",
    height: "90vh",
    width: "100%",
    // -webkit-background-size: "cover";
    // -moz-background-size: cover;
    // -o-background-size: cover;
    backgroundSize: "cover",
    position: "relative"
  };

  const aboutHeader = {
    textAlign: "center"
  };
    const aboutHeaderText = {
      textAlign: "center", 
      margin: "0 auto", 
      padding: "0 2vh 3vh 2vh ", 
      //borderBottom: "2px solid rgb(42, 45, 52)",
      display: "inline-flex",
      fontStretch: "expanded",
      font: "2.4em/2em libre-italic",
    };

  return (
    <div id="project-container" style={fullscreen}>
      <div id="about-header" style={aboutHeader}>
        <h1 style={aboutHeaderText}><b>Projects</b></h1>
      </div>  
      <div id="projects" style={{backgroundColor: "#F5F5F5", height: "60vh", borderRadius: "20px", justifyContent: "center", display:"flex", alignItems:"center" }}>
        <h1 style={{display:"inline", margin: "auto 0"}}>Adding Projects as they come</h1>
      </div>
    </div>
  )
}

/*Contact
  - has contact info, form, links to github linkedIn etc
*/
const ContactMe = () => {
  const fullscreen = {
    margin: "0",
    padding: "0 auto 10vh",
    // height: "100vh",
    width: "100%",
    //backgroundColor: "#fdfcfc", 
    // -webkit-background-size: "cover";
    // -moz-background-size: cover;
    // -o-background-size: cover;
    backgroundSize: "cover",
    position: "relative"
  };

  const contactMe = {
    margin: "0"
  };

  const aboutHeader = {
    textAlign: "center"
  };
    const aboutHeaderText = {
      textAlign: "center", 
      margin: "0 auto", 
      padding: "0 auto ", 
      //borderBottom: "2px solid rgb(42, 45, 52)",
      display: "inline-flex",
      fontStretch: "expanded",
      font: "2.4em/2em libre-italic",
    };

  const linkContainer = {
    padding: "0 auto 10vh",
    alignContent: "center"
  };
    const linkBox = {
      margin: "3vh auto",
      padding: "0 auto",
      height: "5vh",
      width: "15vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    };

  return(
    <div id="contact-container" style={fullscreen}>
      <div id="contact" style={contactMe}>
        <div id="about-header" style={aboutHeader}>
          <h1 style={aboutHeaderText}><b>Contact Me</b></h1>
        </div>  
        <div id="link-container" style={linkContainer}>
          <div class="btn" id="link-box" style={linkBox}>LinkedIn</div>
          <div class="btn" id="link-box" style={linkBox}>Github</div>
          <div class="btn" id="link-box" style={linkBox}>Instagram</div>
          <div class="btn" id="link-box" style={linkBox}>Email</div>
        </div>
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