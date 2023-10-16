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

// socials
// import codepen from './images/socials/codepen-square-svgrepo-com.svg'
import github from './images/socials/iconmonstr-github-3.svg'
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
    links: [  // whatever links i wanna include next to title
      {
        url: ‘www.website.com’,
        img: github.svg’
      },
      ...
    ] 
  }
*/
const projectsObj = [
  {
    name: 'Portfolio',
    desc: 'The page you are looking at right now. Made with React, SASS, and a tad of bootstrap. Constantly developing',
    url: 'https://ben-langlois.github.io/',
    img: portfolio,
    alt: 'Portfolio Homepage',
    diff: 4,
    date: new Date('September 30, 2023 00:00:00'),
    links:[
      {
        url: 'https://github.com/Ben-Langlois/Portfolio',
        img: github
      }
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
    ] 
  },
  {
    name: 'Note App',
    desc: 'A basic React app allowing creation and deletion of notes.',
    url: 'https://codepen.io/ben-langlois/details/JjJrJqK',
    img: noteapp,
    alt: 'Note App Dashboard',
    diff: 1,
    date: new Date('December 15, 2021 00:00:00'),
    links:[

    ] 
  },
  {
    name: 'Weather App',
    desc: 'A React app utilizing bootstrap and APIs to create a weather dashboard. Displays weekly and daily weather for inputted city.',
    url: '#',
    img: weatherapp,
    alt: 'Weather App Dashboard',
    diff: 5,
    date: new Date('March 1, 2023 00:00:00'),
    links:[
      {
        url: 'https://github.com/Ben-Langlois/Weather-App',
        img: github
      }
    ] 
  }
]
//#endregion

$(window).scroll(function() {
  if($(window).innerWidth >= 768){}     // will flesh out afte media queries work
  if ($(window).scrollTop() > 1){
    $('#header').addClass('sticky');
    $('#landing-container').css('grid-template-rows', '15vh 50vh auto');
  }
  else{
    $('#header').removeClass('sticky');
    $('#landing-container').css('grid-template-rows', '15vh 70vh auto');
  }
});

// components
/*Header
  - Contains logo, nav links

  TODO
    - re-css to account for responsiveness
*/
const Header = () => {
  return (
    <header id='header'>
      <div className="nav-links">
        <ul>            
          <li><a className="link" href="#top">About</a></li>
          <li><a className="link" href="#projects">Projects</a></li>
          <li><a className="link" href="#contact">Contact</a></li>
        </ul>
      </div>    
    </header> 
  ) 
}

/*Landing section
  - Contains initial content, "Hi my name...", scroll prompt 
*/  // eslint-disable-next-line
const Landing = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name='viewport' content='width= device-width, initial-scale=1.0'/>
        <title>Ben langlois - Portfolio</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div id="landing-container">
        <Header />
        <div id="about"> {/**/}
          <div>
            <h1>
              {/* Not in love with the font */}
              Hi! I'm <a href='https://www.linkedin.com/in/benjaminlanglois/'>Ben Langlois</a>
            </h1>
            <h2>
              I'm a Toronto/GTA based web developer, seeking a role 
              in front-end development
            </h2>
            <h3>
              I attended Durham College for 2 years in
              Oshawa, Ontario for computer programming.
              Since graduating I've been teaching myself
              front-end technologies like React, JS, HTML,
              SCSS, JQuery as well as any APIs I find useful
              in my projects
            </h3>
            <h3>
              Comments? Concerns? Suggestions? <a href='#contact'>Send me an email!</a>
            </h3>
          </div>  
        </div>
        <div id='projects'>
          <Project/>
        </div>   
        <Contact />                                                                                
      </div>
    </>
  )
}

/*Projects
  - Contains projects, filterable through a slide bar type thing (divided by languages)

  TODO
    - add filtering to array
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
    <>
      <div class="section-header" id='project-section'>
        <h1><b>Some of my Projects</b></h1>
        <div id='filters'>
          <h4 id='recent' class='link enabled' onClick={onFilterClick}>Recent</h4>
          <h4 id='difficulty' class='link' onClick={onFilterClick}>Difficulty</h4>
          {/* <h5 class='link' onClick={() => setFilter(2)}>A-Z</h5> */}
        </div>
      </div>  
      <div id='card-container'>

      {
        cards.map((curr) => {
          let links = [...curr.links];
          console.log(links);
          
          return (
            <a href={curr.url}>
              <div class='card'>
                <img
                  id='project'
                  src={curr.img} 
                  alt={curr.alt}/>
                <div id='title'>
                  <h1>{curr.name}</h1>
                  {
                    links.map((e) => {
                      return(                   
                        <a href={e.url}>
                          <img 
                            id='icon'
                            src={e.img}
                            alt={e.url}
                          />                     
                        </a> 
                      )
                    })                
                  }
                </div>
                  <p>{curr.desc}</p>
              </div>
            </a>
          )
        })
      }
      </div>
    </>
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

          $('#submit::after').css({
            'content': 'Sent!',
            'color': 'green'
          })
      }, (error) => {         // if not   
          console.log(error.text);
      });
  };
  
  return (
    <div id='form'>
      <h2>Email Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" id="name" name="user_name" placeholder="Your Name" required/>
        <input type="email" id="email" name="user_email" placeholder="Your Email" required/>
        <textarea type="text" id="message" name="message" placeholder="Your message" rows="7" required></textarea>
        <input type="submit" id='submit' name='submit' value="Send Email"/>
      </form>
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
          <a href='#'><h4 class='link'>Email</h4></a>
        </div>

      </div>
      <ContactForm />
    </div>     
  )
}

// markup
class Portfolio extends React.Component {
  render(){
    return(
      <>
        <Landing />
      </>
    )
  }
}

export default Portfolio