// #region imports
import * as React from "react"
import $ from 'jquery'
//import { render } from "react-dom"
import './styles/styles.scss'
// #endregion 

// #region images
import portrait from './images/portrait2.jpg'
import email from './images/socials/iconmonstr-email-2.svg'
import github from './images/socials/iconmonstr-github-3.svg'
import linkedIn from './images/socials/iconmonstr-linkedin-3.svg'
import codePen from './images/socials/1298732_codepen_icon.png'
// #endregion

// #region CDNs
//<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin referrerpolicy="no-referrer" />
  <script crossOrigin src="https://cdn.jsdelivr.net/npm/britecharts@2/dist/bundled/britecharts.min.js"/>
// #endregion

/* TODO
   Important
  - intro text animation(DONE)
    - maybe have other sections have an animation on scroll over 9(DONE but could be better)
  - find icons for socials (linkedin, email, github, codepen) (DONE)
    - put icons as links under landing #intro-main (uhhhhh maybe/maybe not)
    - put icons in the contact section(DONE)
    - have email button copy email to clipboard
    - have links use some animation on hover & click
  - figure out skill chart
  - figure out layout of projects
    - have it so there are equal rows (when applicable) of projects

   Not so important

*/

// components
/*Header
  - Contains logo, nav links
*/
class Header extends React.Component {
  render() {
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
}


/*Landing section
  - Contains initial content, "Hi my name...", scroll prompt 
*/
class Landing extends React.Component {
  render(){
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
}

/*About
  - Contains bio sections, education, skills, soft-skills, yadayada
*/
class About extends React.Component {
  render() {
    return (
      <>
      <div id="about-container" class='tag'>
        <div id="portrait-container" class='tag'>
            <img id="portrait" src={portrait} alt=" "></img>
        </div>
        <div id="bio-container" class='tag'>
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
      </div>
      <div id="skill-chart-container" class='tag'>
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
}


/*Projects
  - Contains projects, filterable through a slide bar type thing (divided by languages)

  TODO
  - change margins/padding to account for smaller section
  - add projects duh yuh get me
*/
class Projects extends React.Component {
  render(){
    return (
      <div id="project-container" class='tag'>
        <div class="section-header">
          <h1 class='section-header'><b>Some of my Projects</b></h1>
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
        <div class='socials-container'>
          <a href='https://github.com/Ben-Langlois'><img class='social-icon--left' src={github} alt='Github'/></a>
          <a href='https://codepen.io/ben-langlois'><img class='social-icon--right' src={codePen} alt='CodePen'/></a>
        </div>
      </div>
    )
  }
}

/*Contact
  - has contact info, form, links to github linkedIn etc
*/
class ContactMe extends React.Component {
  render(){
    return(
      <div id='contact-container' class='tag'>
        <div class='section-header'>
          <h1 class='section-header'><b>Interested? Cool! Let's talk!</b></h1>
        </div>
        <div class='socials-container'>
          <img class='social-icon--left' src={email} alt='Email' style={{height: '20vh !important'}}/>
          <img class='social-icon--right' src={linkedIn} alt='LinkedIn'/>
        </div>
      </div>
    );
  }
}

// markup
class Portfolio extends React.Component {
  // trying to add 'fade in as you scroll animation'
  // jquery doesent wanna work
  componentDidMount(){
    $(document).on("scroll", function() {
      var pageTop = $(document).scrollTop();
      var pageBottom = pageTop + $(window).height();
      var tags = $(".tag");
    
      for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];
    
        if ($(tag).position().top < pageBottom) {
          $(tag).addClass("visible");
        } 
        // else { // so it only appears once
        //   $(tag).removeClass("visible");
        // }
      }
    });
  }

  render(){
    return(
      <>
        <Landing />
        <About />
        <Projects />
        <ContactMe />
      </>
    )
  }
}

export default Portfolio