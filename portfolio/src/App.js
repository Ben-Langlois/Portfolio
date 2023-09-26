// #region imports
import * as React from "react"
import { useState, useEffect } from 'react';
import $ from 'jquery'
import Chart from 'chart.js/auto'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/styles.scss'
// #endregion 

// #region images
// import portrait from './images/portrait2.jpg'
import portfolio from './images/projects/portfolio.png'
import labtimer from './images/projects/labtimer.png'
import noteapp from './images/projects/noteapp.png'

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
var linkedin = 'M13.83,41.668H5.401V13.571h8.429V41.668z M44.737,41.668h-8.429V26.66c0-3.912-1.394-5.857-4.154-5.857 c-2.189,0-3.577,1.086-4.274,3.273c0,3.545,0,17.592,0,17.592h-8.431c0,0,0.115-25.288,0-28.097h6.656l0.514,5.619h0.175 c1.729-2.81,4.489-4.713,8.275-4.713c2.881,0,5.207,0.801,6.985,2.815c1.794,2.014,2.684,4.713,2.684,8.514V41.668z M9.615,2.333 c2.404,0,4.357,1.888,4.357,4.214c0,2.33-1.953,4.214-4.357,4.214c-2.403,0-4.351-1.885-4.351-4.214 C5.264,4.22,7.212,2.333,9.615,2.333z';


/*


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
    diff: 3,
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
    desc: 'Made with React, this timer tracks time and speed at intervals and generates a pace table. Used in a PhD Students thesis research for 6+ months.',
    url: 'https://codepen.io/ben-langlois/details/wvqKwRL',
    img: labtimer,
    alt: 'Labtimer Homepage',
    diff: 4,
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
    url: '',
    img: labtimer,
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
          <li><a className="link" href="#project-section">Projects</a></li>
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
    <div id="landing-container">
      <Header />
      <div id="about" className="content"> {/**/}
        <div>
          <h1>
            {/* Not in love with the font */}
            Hi! I'm <u>Ben Langlois</u>
          </h1>
          <h2>
            A GTA/Toronto based web developer, seeking a role 
            in front-end development
          </h2>
          <h3>
            I attended Durham College for 2 years in
            Oshawa, Ontario for computer programming.
            Since graduating I've been learning what I
            didnt experience in college.
            I work mostly in React, JS, SCSS, MySQL,
            and C++ while expirementing with Python,
            C# and Arduino.
          </h3>
        </div>  
      </div>
      <div id='projects'>
        <Project/>
      </div>   
      <Contact />                                                                                
    </div>
  )
}

/*Projects
  - Contains projects, filterable through a slide bar type thing (divided by languages)

  TODO
    - finish styling card
    - finish styling hover
    - add filtering to array
*/
const Project = () => {
  // initial
  const [cards, setCards] = useState([...projectsObj].sort((a, b) => (a.date < b.date) ? 1 : (a.date > b.date) ? -1 : 0));
  // const [toggle, setToggle] = useState(false);

  const onFilterClick = (e) => {
    let type = e.target.textContent.toLowerCase();

    if(type == 'difficulty'){   // if difficulty was clicked
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
          <h5 id='recent' class='link enabled' onClick={onFilterClick}>Recent</h5>
          <h5 id='difficulty' class='link' onClick={onFilterClick}>Difficulty</h5>
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

/*Contact
  - has contact info, form, links to github linkedIn etc
*/
const Contact = () => { 
  return(
    <div id='contact'>
      <div id='links'>
        <h2>My Links</h2>
        <a href='https://www.linkedin.com/in/benjaminlanglois/'><h4 class='link'>LinkedIn</h4></a><br/>
        <a href='https://github.com/Ben-Langlois'><h4 class='link'>Github</h4></a><br/>
        <a href='https://codepen.io/your-work/'><h4 class='link'>Codepen</h4><br/></a>
        <a href='https://docs.google.com/document/d/1bAq0VLqmZs8bxvqMgSMDWUI_VaFw25q8-ZHP8PEewIg/edit#heading=h.y7d3xdxnr44m'><h4 class='link'>My Resume</h4></a><br/>
        <h4 class='link'>Email</h4>
      </div>
      <div id='form'>
        <h2>Email Me</h2>
        <form>
          <input type="text" id="name" name="name" placeholder="Your Name" required/>
          <input type="email" id="email" name="email" placeholder="Your Email" required/>
          <textarea type="text" id="message" name="fname" placeholder="Your message" rows="7" required></textarea>
          <input type="button" id='submit' name='submit' value="Send Email"/>
        </form>
      </div>
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