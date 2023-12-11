// #region imports
import * as React from "react"
import { useState, useEffect, useRef } from 'react';
import $ from 'jquery'
import emailjs from '@emailjs/browser'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/styles.scss'
import {Helmet} from "react-helmet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'
import resume from './resume.pdf'
import { projectsObj } from "./projects";
// #endregion 

// #region images
import portrait from './images/portrait.jpg'
import anotherPortrait from './images/IMG_4212.jpg'
import icon from './images/favicon.ico'

// socials
// import codepen from './images/socials/codepen-square-svgrepo-com.svg'
import github from './images/socials/iconmonstr-github-3.svg'
import linkedin from './images/socials/iconmonstr-linkedin-3.svg'
import figma from './images/socials/figma-svgrepo-com.svg'
// #endregion

/* #region Resources
  https://docs.google.com/document/d/1blbXL01EGNG-vNqbsa8cLGL3hwbVAnuaSLXAhNWucXA/edit 
*/// #endregion

// #region Variables
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//#endregion

$(window).scroll(function() {
  if ($(window).scrollTop() > 1){
    $('header').addClass('sticky');
    // $('#landing-container').css('grid-template-rows', '15vh 50vh auto');
    $('#about').css(
      'padding-top', '10vh' 
    );
    $('#landing').css(
      'height', '75vh'
    );
  }
  else{
    $('header').removeClass('sticky');
    // $('#landing-container').css('grid-template-rows', '15vh 70vh auto');
    $('#about').css(
      'padding-top', '15vh' 
    );
    $('#landing').css(
      'height', '100vh'
    );
  }
});

// components
/*Header
  - Contains logo, nav links
*/
const Header = () => {
  const toggleMenu = () => {
    document.getElementById("menu-container").classList.toggle("change");
    document.getElementById("dropdown-menu").classList.toggle("show");    
  }
  return (
    <header>      
      <a href='#top'><h1>Ben Langlois</h1></a>
      <div id='nav-links'>
        <a className="link" href="#about"><h4>About</h4></a>
        <a className="link" href="#projects"><h4>Projects</h4></a>
        <a className="link" href="#contact"><h4>Contact</h4></a>
      </div>
      <div id='socials'>
        <a href='https://www.linkedin.com/in/benjaminlanglois/'><img src={linkedin} alt='linkedin logo'/></a>
        <a href='https://github.com/Ben-Langlois'><img src={github} alt='github logo'/></a>
      </div>
      <div id="menu-container" class="menu-container" onClick={toggleMenu}>
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
          <div id='dropdown-menu'class="dropdown-content" onClick={toggleMenu}> {/* why must it be on the parent AND the children */}
            <a onClick={toggleMenu} href="#about">About</a>
            <a onClick={toggleMenu} href="#projects">Projects</a>
            <a onClick={toggleMenu} href="#contact">Contact</a>
          </div>
        </div>
    </header>
  ) 
}

/*Landing section
  - Top of the page
  - Contains initial content, "Hi my name...", some links, picture
*/  // eslint-disable-next-line
const Landing = () => {
  return (
    <div id="landing">
      <img id='portrait' src={portrait} alt='pic of Ben'/>
      <div id='about-text'>
        <h1>
          Hi I'm<br/>Ben Langlois
        </h1>
        <h2>
          I'm a Toronto based Front-end developer, currently 
          seeking a junior role at your company
        </h2>
        <h2 id='cta'><a href='#contact' className="link">Let's get in touch</a></h2>
      </div>  
    </div>
  )
}

/*About section
*/
const About = () => {
  return (
    <div id='about'>
      <div id='bio'>
        <h3>Programming and I</h3>
        <p>
          I attended <a href='https://durhamcollege.ca/programs/computer-programming-two-year' className="link">
          Durham College</a> in 2018 studying OOP languages, database development, and web dev technologies like Javascript and CSS. 
          Since graduating in 2020 I've dialled in on web development, teaching myself front-end technologies and
          building my <a href='#projects' className="link">portfolio and other projects</a>. If I've learned 
          anything the past 3 years learning these tools, it's that I can learn how to use any tool.
        </p>
        <h3>A Bit About Me</h3>
        <p>
          I'm a 23-year-old self-taught developer from Stouffville, 
          ON looking to start a career in web development. 
          I'm really interested in most things involving technology as well as 
          anything travelling, hiking, reading, or fitness related.
        </p>
        <div class='skills'>
          <h5 class='main'>React</h5>
          <h5 class='main'>JavaScript</h5>
          <h5 class='main'>SASS</h5>
          <h5 class='main'>JQuery</h5>
          <h5 class='main'>Git</h5>
          <h5 class='main'>Tailwind</h5>
          <h5>C++</h5>
          <h5>Arduino</h5>
        </div>
      </div>
      <img src={anotherPortrait} alt='another picture of Ben'/>
    </div>
  )
}

/*Projects
  - Contains projects, filterable through a slide bar type thing (divided by languages)
*/
const Project = () => {
  // initial
  const [cards, setCards] = useState([...projectsObj].sort((a, b) => (a.date < b.date) ? 1 : (a.date > b.date) ? -1 : 0));
  // const [toggle, setToggle] = useState(false);

  const onFilterClick = (e) => {
    let type = e.target.textContent.toLowerCase();

    if(type === 'difficulty'){   // if difficulty was clicked
      setCards([...cards].sort((a, b) => (a.diff < b.diff) ? 1 : (a.diff > b.diff) ? -1 : 0));
      $('#difficulty').addClass('enabled');         // give active filter the ::before underline
      $('#recent').removeClass('enabled');          // remove underline from other filter
    } else if(type === 'recent'){   // if recently was clicked
      setCards([...cards].sort((a, b) => (a.date < b.date) ? 1 : (a.date > b.date) ? -1 : 0));
      $('#recent').addClass('enabled');             
      $('#difficulty').removeClass('enabled');      
    }
  };

  return (
    <div id='projects'>
      <div class="section-header" id='project-header'>
        <h1><b>Some of my Projects</b></h1>
        <div id='filters'>
          <h4 id='recent' class='link enabled' onClick={onFilterClick}>Recent</h4>
          <h4 id='difficulty' class='link' onClick={onFilterClick}>Difficulty</h4>
        </div>
      </div>  
      <div id='card-container'>
      {
        cards.map((curr) => {
          return (
            <a href={curr.url}>
              <div class='card'>
                <img
                  src={curr.img} 
                  alt={curr.alt}/>
                <div id='title'>
                  <h1>{curr.name}</h1>
                  <h5>{months[curr.date.getMonth()]} {curr.date.getFullYear()}</h5>
                </div>
                <p>{curr.desc}</p>
                <div class='skills'>
                {
                  curr.tags.map((e) => {
                    return(                   
                      <h5 class='main'>{e}</h5>
                    )
                  })                
                }
                </div>                
                <div id='links'>
                  {
                    curr.links.map((e) => {
                      return(
                        <a href={e.url}><img src={e.img} alt='Icon'/></a>
                      )
                    })
                  }
                </div>
              </div>
            </a>
          )
        })
      }
      </div>
    </div>
  )
}

/*Contact
  - has contact info, form, links to github linkedIn etc
*/
const Contact = () => { 
  return(
    <div id='contact'>
      <div id='link-container'>
        <h2>My Links</h2>
        <div id="links">
          <a href='https://www.linkedin.com/in/benjaminlanglois/'><FontAwesomeIcon icon={faArrowTrendUp} /><h4 class='link'>LinkedIn</h4></a>
          <a href='https://github.com/Ben-Langlois'><FontAwesomeIcon icon={faArrowTrendUp} /><h4 class='link'>Github</h4></a>
          <a href='https://codepen.io/ben-langlois'><FontAwesomeIcon icon={faArrowTrendUp} /><h4 class='link'>Codepen</h4></a>
          <a href={resume}><FontAwesomeIcon icon={faArrowTrendUp} /><h4 class='link'>My Resume</h4></a>
          {/* <a href='#'><h4 class='link'>Email</h4></a> */}
        </div>
      </div>
      <ContactForm />
    </div>     
  )
}
const ContactForm = () => {
  const form = useRef();
  const serviceID = 'service_qde5d59';
  const templateID = 'template_ecglaf9';
  const publicKey = 'v-FaY4XFFb4hfxHIi';

  const sendEmail = (e) => {
    e.preventDefault();
    let valid = true;
    $('input#name, input#email, textarea#message').css('border-color', 'rgb(118, 118, 118)');         // upon input after unsuccessfull submit, this will resest style

    // Input validation
    // seperate if statements so they can all be checked
    if(!$('input#name').val()){ // if input is empty
      $('input#name').css('border', '1px solid red');       // 'highlight' input
      valid = false;                                        // flag as invalid
    } 
    if(!$('input#email').val()){
      $('input#email').css('border', '1px solid red');
      valid = false;
    }
    if(!$('textarea#message').val()){
      $('textarea#message').css('border', '1px solid red');
      valid = false;
    }

    // if form is valid
    if(valid){
      $('input#name, input#email, textarea#message').css('border-color', 'rgb(118, 118, 118)');    // reset borders of input

      // sending email
      emailjs.sendForm(serviceID, templateID, form.current, publicKey)
        .then((result) => {                         // if successful
          console.log(result.text);
          console.log('message sent');

          $('#status').text('Message Sent')         // display success message
          .css({      
            'color': 'green',
            'visibility': '1'                       // for when I make it fadeOut
          });
          $('#submit').prop('disabled', true);      // disable submit button
        }, (error) => {                             // if not   
          console.log(error.text);

          $('#status').text('Something went wrong') // display error message
          .css({      
            'color': 'red',
            'visibility': '1'                       // for when I make it fadeOut
          });
      });      
    } else { // if not valid
      $('#status').text('Please fill out fields').css('color', 'red'); // display error message
    }
  };
  
  return (
    <div id='form-area'>
      <h2>Email Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" id="name" name="user_name" placeholder="Your Name" required/>
        <input type="email" id="email" name="user_email" placeholder="Your Email" required/>
        <textarea type="text" id="message" name="message" placeholder="Your message" rows="7" required></textarea>
        <div id='submit-area'>
          <input type='button' id='submit' name='submit' value="Send Email" onClick={sendEmail} />
          <p id='status'></p>
        </div>
      </form>
    </div>
  )
}

// markup
class Portfolio extends React.Component {
  render(){
    return(
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name='viewport' content='width= device-width, initial-scale=1.0'/>
          <title>Ben langlois - Portfolio</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <link rel="icon" type="image/x-icon" href={icon} />
        </Helmet>
        <div id="landing-container">
          <Header />
          <Landing />
          <About />
          <Project/>
          <Contact />                                                                                
        </div>
      </>
    )
  }
}

export default Portfolio