import * as React from "react"
//import { render } from "react-dom"
import '../styles/style.css'

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
        <a className="logo-link" href="#landing" >   
          BL
        </a>
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
    padding: "25vh 0 0 0",
    justifyContent: "center",
    display: "flex"
  };

  // styling to make the landing section cover the whole screen
  const cover = {
    margin: "0",
    padding: "0",
    height: "100vh",
    width: "100%",
    backgroundColor: "#222629", 
    color: "#F7F4F3",
    // -webkit-background-size: "cover";
    // -moz-background-size: cover;
    // -o-background-size: cover;
    backgroundSize: "cover",
    position: "relative",
  };

  return (
      <div id="landing-container" style={cover}>
        <Header />
        <div  id="landing" className="content"> {/**/}
          <div style={intro}>
            <h1 /*className="center-horizontal"*/ style={{margin: "0 auto", textAlign: "center", display: "inline-block"  /*for centerposition: "absolute", left: "50%"*/}}>
              Hi! I'm<br/>Ben Langlois
            </h1><br/>
          </div>
          <div style={{display: "flex", alignContent: "center"}}>
            <p className="intro" style={{font: "25px/50px karla", alignSelf: "center", justifyContent: "center", /*margin: "0 auto", textAlign: "center"*/}}>
              {/* <strong>A Junior Web Dev/Designer with a passion for creating things. <br/>From <a className="link" href="#" style={{margin: "0", display: "inline"}}> product pages </a>  
              to <a className="link" href="#" style={{margin: "0", display: "inline"}}> photography portfolios</a>, I'm excited to help!</strong> */}
              Web Dev <i class="far fa-circle"></i> Design <i class="far fa-circle"></i> Photography
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
    padding: "0 15vw 0 15vw",
    color: "rgb(42, 45, 52)",
    height: "auto",
    width: "100%",
    backgroundColor: "#FFFFFF", 
    // -webkit-background-size: "cover";        // these will work when added to actual css class
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
        padding: "2vh 2vh 3vh 2vh ", 
        //borderBottom: "2px solid rgb(42, 45, 52)",
        display: "inline-flex",
        fontStretch: "expanded"
      };
    const innerContainer = {
      margin: "0",
      padding: "0",
      height: "100%",
      width: "100%",

      // testing grid
      // should be in media query, when res is low it messes w
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      //gridTemplateColumns: "repeat(auto-fill, minmax(1fr, 1fr))",
      //gridTemplateRows: "1fr 1fr"
    };
      const infoBox = {
        // height: "50%",
        // minHeight: "200px",
        // width: "50%",
        //minWidth: "400px"
        //border: "solid 2px black",
        margin: "1vh",
        height: "40vh",

        backgroundColor: "#F5F5F5", 
        //height: "100%", 
        borderRadius: "20px"
      };
        const infoBoxHeadCont = {
          textAlign: "center",
        };
          const infoBoxHead = {
            margin: "1vh auto 1vh", 
            display: "inline-flex", 
            //borderBottom: "2px groove rgb(42, 45, 52)"
          };
        const infoBoxContent = {
          fontFamily: "roboto",
          padding: "5vh auto",
          //height: "100%",
          //justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          //display: "inline",
        };
          const point = {
            margin: "0 auto",
            padding: "3vh 6vw 0"
          };
  //#endregion

  return (
    <div id="about-container" style={aboutContainer}>
      <div id="about-header" style={aboutHeader}>
        <h1 style={aboutHeaderText}><b>About Me</b></h1>
      </div>      
      <div id="about" style={{/*backgroundColor: "#F5F5F5", height: "100%", borderRadius: "20px",*/ display: "inline", width: "100%"}}> 
        <div id="about-inner-container" style={innerContainer}>
          <div id="info-box" style={infoBox}>
            <div id="info-box-header-cont" style={infoBoxHeadCont}>
              <h1 style={infoBoxHead}>Who Am I</h1>
            </div>
            <div class="info-box-content" style={infoBoxContent}>
              <h2 class="point" style={point}>
                <b>My name is Benjamin Langlois (most people just call me Ben)</b>
              </h2>
              <h2 class="point" style={point}>
                <b>Based in Stouffville, Ontario located just north of Toronto</b>
              </h2>
              <h2 class="point" style={point}>
                <b>I've grown up with computers and video games, pulling me towards the world of software/web development </b>
              </h2>
            </div>
          </div>
          <div style={infoBox}>
            <div id="info-box-header" style={{textAlign: "center"}}>
              <h1 style={infoBoxHead}>What I do</h1>
            </div>
            <div class="info-box-content" style={infoBoxContent}>
              <h2 class="point" style={point}>
                <b>Build web solutions for small businesses and portfolios</b>
              </h2>
              <h2 class="point" style={point}>
                <b>Create programs in C++ and C#</b>
              </h2>
              <h2 class="point" style={point}>
                <b>Photograph nature and urban settings</b>
              </h2>
            </div>
          </div>
          <div style={infoBox}>
            <div id="info-box-header" style={{textAlign: "center"}}>
              <h1 style={infoBoxHead}>Where I study</h1>
            </div>
            <div class="info-box-content" style={infoBoxContent}>
              <h2 class="point" style={point}>
                <b>Durham College<br/>Computer Programming (2019-2020)</b>
              </h2>
              <h2 class="point" style={point}>
                <b>Self-Taught through projects <br/>and freelance work</b>
              </h2>
              <h2 class="point" style={point}>
                <b>Continually learning in all aspects of development</b>
              </h2>
            </div>
          </div>
          <div style={infoBox}>
            <div id="info-box-header" style={{textAlign: "center"}}>
              <h1 style={infoBoxHead}>What I know</h1>
            </div>
            <div class="info-box-content" style={infoBoxContent}>
              {/* Skill graph goes here https://css-tricks.com/making-charts-with-css/ */}
              <dl>
                <dd class="percentage">
                  <span class="text">
                    HTML/CSS
                  </span>
                </dd>
                <dd class="percentage">
                  <span class="text">
                    JS/React
                  </span>
                </dd>
                <dd class="percentage">
                  <span class="text">
                    
                  </span>
                </dd>
              </dl>
            </div>

          </div>
        </div>        
      </div>
    </div>
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
    padding: "13vh 20vw",
    height: "100vh",
    width: "100%",
    backgroundColor: "#f5f5f5", 
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
      fontStretch: "expanded"
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
    padding: "5vh 20vw 0 20vw",
    height: "100vh",
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
      padding: "0 2vh 3vh 2vh ", 
      //borderBottom: "2px solid rgb(42, 45, 52)",
      display: "inline-flex",
      fontStretch: "expanded"
    };

  const formContainer = {
    padding: "0 10vw 10vh 10vw"
  };

  const label = {

  };
  const field = {
    width: "100%",
    marginBottom: "30px",
    height: "40px",
    resize: "none",
    backgroundColor: "#F5F5F5",
    borderRadius: "7px"
  };

  return(
    <div id="contact-container" style={fullscreen}>
      <div id="contact" style={contactMe}>
        <div id="about-header" style={aboutHeader}>
          <h1 style={aboutHeaderText}><b>Contact Me</b></h1>
        </div>  
        <div id="form-container" style={formContainer}>
          <form>
            <label for="name">Your Name</label><br/><br/>
            <input style={field} type="text" id="" name="name" /><br/>
            <label for="email">Your Email</label><br/><br/>
            <input style={field} type="text" id="" name="email" /><br/>
            <label for="subject">Subject (Optional)</label><br/><br/>
            <input style={field} type="text" id="" name="subject" /><br/>
            <label for="message">Message</label><br/><br/>
            <textarea style={field} type="text" id="" name="message" col="40" rows="5"/><br/>
          </form>
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