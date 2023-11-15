// #region imports
import * as React from "react"
import { useState, useEffect, useRef } from 'react';
import $ from 'jquery'
import emailjs from '@emailjs/browser'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/styles.scss'
import {Helmet} from "react-helmet";
// #endregion 

// #region images
// import portrait from './images/portrait2.jpg'
import portfolio from './images/projects/portfolio.png'
import labtimer from './images/projects/labtimer.png'
import noteapp from './images/projects/noteapp.png'
import weatherapp from './images/projects/weatherapp.png'
import photography from './images/projects/photography.png'
import tempconvert from './images/projects/tempconvert.png'

import portrait from './images/portrait.jpg'
import anotherPortrait from './images/IMG_4212.jpg'
import icon from './images/favicon.ico'

// socials
// import codepen from './images/socials/codepen-square-svgrepo-com.svg'
import github from './images/socials/iconmonstr-github-3.svg'
import linkedin from './images/socials/iconmonstr-linkedin-3.svg'
// #endregion

// #region CDNs
//<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin referrerpolicy="no-referrer" />
  // <script crossOrigin src="https://cdn.jsdelivr.net/npm/britecharts@2/dist/bundled/britecharts.min.js"/>
  // <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
// #endregion

/* #region Resources
  https://docs.google.com/document/d/1blbXL01EGNG-vNqbsa8cLGL3hwbVAnuaSLXAhNWucXA/edit 
*/// #endregion

// #region Variables
/*
  Example of project object
  {
    name: 'Portfolio',
    desc: 'The page you are looking at right now. Made with React, SASS, and a tad of bootstrap. Constantly developing',
    url: 'https://ben-langlois.github.io/',
    img: portfolio,
    alt: 'Portfolio Homepage',
    diff: 3,
    date: new Date('September 30, 2023 00:00:00'),
    links:[
      {
        type: 'Github',
        url: 'https://github.com/Ben-Langlois/Weather-App',
        img: github
      },
      ...
    ],
    tags:[
      'React',
      'SCSS',
      'Git'
      ...
    ] 
  }
*/
const projectsObj = [
  {
    name: 'Portfolio',
    desc: 'The page you are looking at right now. Made with React, SASS, and a tad of bootstrap. Constantly developing',
    url: 'https://ben-langlois.github.io/Portfolio',
    img: portfolio,
    alt: 'Portfolio Homepage',
    diff: 4,
    date: new Date('September 30, 2023 00:00:00'),
    links:[
      {
        type: 'Github Repo',
        url: 'https://github.com/Ben-Langlois/Portfolio',
        img: github
      }
    ],
    tags:[
      'React',
      'SCSS',
      'Git'
    ] 
  },
  {
    name: 'Lab Timer',
    desc: 'Made with React, this timer tracks time and speed at intervals and generates a pace table. Used in a PhD Students thesis.',
    url: 'https://codepen.io/ben-langlois/details/wvqKwRL',
    img: labtimer,
    alt: 'Labtimer Homepage',
    diff: 3,
    date: new Date('Febreary 11, 2022 00:00:00'),
    links:[
    ],
    tags:[
      'React',
      'SCSS'
    ]  
  },
  {
    name: 'Note App',
    desc: 'A basic React app allowing creation and deletion of notes.',
    url: 'https://codepen.io/ben-langlois/details/JjJrJqK',
    img: noteapp,
    alt: 'Note App Dashboard',
    diff: 3,
    date: new Date('December 15, 2021 00:00:00'),
    links:[
    ],
    tags:[
      'React',
      'SCSS'
    ] 
  },
  {
    name: 'Weather App',
    desc: 'A React app utilizing bootstrap and APIs to create a weather dashboard. Displays weekly and daily weather for inputted city.',
    url: 'https://bens-weatherapp.live/',
    img: weatherapp,
    alt: 'Weather App Dashboard',
    diff: 5,
    date: new Date('March 1, 2023 00:00:00'),
    links:[
      {
        type: 'Github Repo',
        url: 'https://github.com/Ben-Langlois/Weather-App',
        img: github
      }
    ],
    tags:[
      'React',
      'SCSS',
      'Git'
    ]  
  },
  {
    name: 'Photography Portfolio',
    desc: 'A simple react app that I wrote in 3 days to act as a portfolio for photos I take on trips, hikes, walks etc.',
    url: 'https://ben-langlois.github.io/Photography-Portfolio/',
    img: photography,
    alt: 'Photography Portfolio landing page',
    diff: 2,
    date: new Date('November 2, 2023 00:00:00'),
    links:[
      {
        type: 'Github Repo',
        url: 'https://github.com/Ben-Langlois/Photography-Portfolio',
        img: github
      }
    ],
    tags: [
      'React',
      'SCSS',
      'Git'
    ]
  },
  {
    name: 'Temp Converter',
    desc: "A simple Temperature Converter made with React, Tailwind, and JQuery. The goal of this was to write zero CSS, only using Tailwind considering it's the main reason I made this. ",
    url: 'https://codepen.io/ben-langlois/details/jOdwMRz',
    img: tempconvert,
    alt: 'Temperature Codepen page',
    diff: 2,
    date: new Date('November 15, 2023 00:00:00'),
    links:[
    ],
    tags: [
      'React',
      'SCSS',
      'Tailwind',
      'JQuery'
    ]
  }
]
//#endregion

$(window).scroll(function() {
  if ($(window).scrollTop() > 1){
    $('#header').addClass('sticky');
    // $('#landing-container').css('grid-template-rows', '15vh 50vh auto');
    $('#about').css(
      'padding-top', '10vh' 
    );
  }
  else{
    $('#header').removeClass('sticky');
    // $('#landing-container').css('grid-template-rows', '15vh 70vh auto');
    $('#about').css(
      'padding-top', '15vh' 
    );
  }
});

// components
/*Header
  - Contains logo, nav links
*/
const Header = () => {
  let menu = $('.menu-container');

  const toggleMenu = () => {
    document.getElementById("menu-container").classList.toggle("change");
    document.getElementById("dropdown-menu").classList.toggle("show");    
  }
  return (
    <header id='header'>
      <div className="nav-links">
        <a id='name' href='#top'><h1>
          Ben Langlois
        </h1></a>
        <ul id='links'>            
          <li><a className="link" href="#about">About</a></li>
          <li><a className="link" href="#projects">Projects</a></li>
          <li><a className="link" href="#contact">Contact</a></li>
        </ul>
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
    <div id="landing"> {/**/}
      <div id='portrait-container'>
        <img id='portrait' src={portrait} alt='pic of Ben'/>
      </div>
      <div id='about-text'>
        <h1>
          {/* Not in love with the font */}
          Hi I'm Ben Langlois
        </h1>
        <h2>
          I'm a Toronto/GTA based web developer, seeking a role 
          in front-end development
        </h2>
        {/* <h3>
          I attended Durham College for 2 years in
          Oshawa, Ontario for computer programming.
          Since graduating I've been teaching myself
          front-end technologies like React, JS, HTML,
          SCSS, JQuery as well as any APIs I find useful
          in my projects
        </h3> */}
        <h3>
          Comments? Questions? Suggestions? <a href='#contact' className="link">Send me an email</a>
        </h3>
        <div id='links'>
          <a href='https://www.linkedin.com/in/benjaminlanglois/'>
            <img src={linkedin} alt='linkedin logo'/><h4 className="link">LinkedIn</h4>
          </a>
          <a href='https://github.com/Ben-Langlois'>
            <img src={github} alt='github logo'/><h4 className="link">Github</h4>
          </a>
        </div>
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
        <h3>A bit about me</h3>
        <p>
          I'm a 23-year-old self-taught developer from Stouffville, 
          ON looking to start a career in web development. Since I was 
          about 10 I've surrounded myself with video games, film and music. 
          Besides being a hermit, I've found happiness in travel, hiking, 
          fitness, reading, and music.
        </p>
        <h3>Programming</h3>
        <p>
          My first brush with programming was in grade 10 when I took a 
          computer science course. Before I had any idea what I was doing, 
          I found its complications fascinating. I dove head-first down the 
          rabbit hole attending <a href='https://durhamcollege.ca/programs/computer-programming-two-year' className="link">
          Durham College</a> in 2018. Since graduating in 2020 I've dialled 
          in on web development, teaching myself front-end technologies and
          building my <a href='#projects' className="link">portfolio and other projects</a>. If I've learned 
          anything by teaching myself these tools, it's that I can learn 
          how to use any tool.
        </p>
        <div class='skills'>
          <h5 class='main'>React</h5>
          <h5 class='main'>JavaScript</h5>
          <h5 class='main'>SASS</h5>
          <h5 class='main'>JQuery</h5>
          <h5 class='main'>Git</h5>
          <h5>C++</h5>
          <h5>Arduino</h5>
        </div>
      </div>
      <div id='pic-container'>
        <img src={anotherPortrait} alt='another picture of Ben'/>
      </div>
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
          let links = [...curr.links];

          return (
            <a href={curr.url}>
              <div class='card'>
                <div id='img-container'>
                  <img
                    src={curr.img} 
                    alt={curr.alt}/>
                </div>
                <div id='title'>
                  <h1>{curr.name}</h1>
                  <div class='skills'>
                  {
                    curr.tags.map((e) => {
                      return(                   
                          <h5 class='main'>{e}</h5>
                      )
                    })                
                  }
                  </div>
                </div>
                <p>{curr.desc}</p>
                <div id='links'>
                  {
                    curr.links.map((e) => {
                      return(
                        <div>
                          <img src={e.img} alt='Icon'/>
                          <a href={e.url} class='link'><h4>{e.type}</h4></a> 
                        </div>                        
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
          <a href='https://www.linkedin.com/in/benjaminlanglois/'><h4 class='link'>LinkedIn</h4></a>
          <a href='https://github.com/Ben-Langlois'><h4 class='link'>Github</h4></a>
          <a href='https://codepen.io/ben-langlois'><h4 class='link'>Codepen</h4></a>
          <a href='https://docs.google.com/document/d/1bAq0VLqmZs8bxvqMgSMDWUI_VaFw25q8-ZHP8PEewIg/edit#heading=h.y7d3xdxnr44m'><h4 class='link'>My Resume</h4></a>
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

    // input var
    // const name = $('#name');
    // const email = $('#email');
    // const message = $('#message');

    // sending emails
    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {     // if successful
          console.log(result.text);
          console.log('message sent');

          $('#status').text('Message Sent')// display success message
          .css({      
            'color': 'green',
            'visibility': '1'              // for when I make it fadeOut
          });
      }, (error) => {         // if not   
          console.log(error.text);

          $('#status').text('Something went wrong')// display error message
          .css({      
            'color': 'red',
            'visibility': '1'              // for when I make it fadeOut
          });
      });
  };
  
  return (
    <div id='form-area'>
      <h2>Email Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" id="name" name="user_name" placeholder="Your Name" required/>
        <input type="email" id="email" name="user_email" placeholder="Your Email" required/>
        <textarea type="text" id="message" name="message" placeholder="Your message" rows="7" required></textarea>
        <div id='submit-area'>
          <input type="submit" id='submit' name='submit' value="Send Email"/>
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