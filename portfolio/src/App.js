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
import codepen from './images/socials/codepen-square-svgrepo-com.svg'
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
    img: portfolio,
    alt: 'Portfolio Homepage',
    diff: 3,
    date: new Date('September 30, 2023 00:00:00'),
    links: [
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
    img: labtimer,
    alt: 'Labtimer Homepage',
    diff: 4,
    date: new Date('Febreary 11, 2022 00:00:00'),
    links:[
      {
        url: 'https://codepen.io/ben-langlois/pen/wvqKwRL',
        img: codepen
      }
    ] 
  },
  {
    name: 'Note App',
    desc: 'A basic React app allowing creation and deletion of notes.',
    img: noteapp,
    alt: 'Note App Dashboard',
    diff: 1,
    date: new Date('December 15, 2021 00:00:00'),
    links:[
      {
        url: 'https://codepen.io/ben-langlois/pen/JjJrJqK',
        img: codepen
      }
    ] 
  },
  {
    name: 'Weather App',
    desc: 'A React app utilizing bootstrap and APIs to create a weather dashboard. Displays weekly and daily weather for inputted city.',
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
          <li><a className="link" href="#filters">Projects</a></li>
          <li><a className="link" href="#contact-container">Contact</a></li>
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
            Hi! I'm <u>Ben Langlois</u>.<br/>A GTA/Toronto
            based web developer,<br/>looking for an
            entry level position in Front end
            Web Development!            
          </h1>
          <h2>
            I attended Durham College for 2 years in
            Oshawa, Ontario for computer programming.
            Since graduating I've been learning what I
            didnt experience in college.
            I work mostly in React, JS, SCSS, MySQL,
            and C++ while expirementing with Python,
            C# and Arduino.
          </h2>
        </div>  
      </div>
      <div id='projects'>
        <Project/>
      </div>                                                                                              
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

  const [cards, setCards] = useState([...projectsObj]);
  // const [toggle, setToggle] = useState(false);

  const onFilterClick = (e) => {
    let type = e.target.textContent.toLowerCase();
    //if toggle == false
      // set toggle to true
      // sort normal
    // else if toggle == true
      // sort reverse
      //

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
      <div class="section-header project-section" id='project-section'>
        <h1><b>Some of my Projects</b></h1>
        <div id='filters'>
          <h5 id='recent' class='link' onClick={onFilterClick}>Recent</h5>
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
            <div class='card'>
              <img
                id='project'
                src={curr.img} 
                alt={curr.alt}/>
              <div id='title'>
                <h1>{curr.name}</h1>
              </div>

              <div id='desc'>
                <p>{curr.desc}</p>       
                      
                <div id='link-container'>
                  {
                    links.map((e) => {
                      return(                      
                        <a href={e.url}>
                          <img 
                            id='icon'
                            src={e.img}
                            alt={e.url}
                          />                    
                        </a>)
                    })
                  }
                </div>   
              </div>

                   
            </div>
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
class ContactMe extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!

    this.toClipboard = this.toClipboard.bind(this);
  }

  // onHover() {

  // }

  toClipboard() {
    navigator.clipboard.writeText('ben.langlois02@gmail.com');
    
    // var tooltip = document.getElementById("myTooltip");
    // tooltip.innerHTML = "Copied: " + copyText.value;
  }
  
  // outFunc() {
  //   var tooltip = document.getElementById("myTooltip");
  //   tooltip.innerHTML = "Copy to clipboard";
  // }

  render(){
    return(
      <div id='contact-container' class='tag'>
        <div class='section-header'>
          <h1><b>Some of my Links</b></h1>
        </div>
        <div class='socials-container'>
          {/* Could add Instagram one later if i make a photography IG*/}
          <a href='https://www.linkedin.com/in/benjaminlanglois/'>
            <div class='social-link-container--left linkedIn'>
              <span class='social-link'>
                <svg class='icon' xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 50 50">
                  <path d={linkedin} fill="#ffffff"></path>
                </svg>
                LinkedIn
              </span>
            </div>
          </a>
          <a href='https://github.com/Ben-Langlois'>
            <div class='social-link-container github'>
              <span class='social-link'>
                <svg class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                  <path d="M24.999,2.48c-12.75,0-23.087,10.338-23.087,23.09c0,10.199,6.613,18.854,15.791,21.907 c1.154,0.211,1.518-0.474,1.518-1.084c0-0.547,0.011-2.082,0-4.01c-6.422,1.398-7.753-3.038-7.753-3.038 c-1.048-2.671-2.562-3.377-2.562-3.377c-2.095-1.433,0.158-1.407,0.158-1.407c2.317,0.163,3.538,2.383,3.538,2.383 c2.059,3.522,5.403,2.505,6.717,1.916c0.21-1.491,0.808-2.51,1.468-3.087C15.66,35.188,10.27,33.211,10.27,24.361 c0-2.521,0.9-4.581,2.376-6.194c-0.239-0.584-1.031-2.932,0.226-6.112c0,0,1.939-0.62,6.349,2.369 c1.841-0.513,3.817-0.768,5.78-0.777c1.962,0.009,3.938,0.264,5.781,0.777c4.409-2.988,6.346-2.369,6.346-2.369 c1.258,3.18,0.466,5.528,0.229,6.112c1.478,1.613,2.373,3.673,2.373,6.194c0,8.872-5.397,10.823-10.543,11.392 c0.828,0.717,1.582,2.101,1.582,4.255c0,2.887,0,5.632,0,6.392c0,0.617,0.372,1.302,1.544,1.076 c9.167-3.059,15.776-11.708,15.776-21.905C48.089,12.818,37.75,2.48,24.999,2.48z" fill="#ffffff"></path>
                </svg>
                GitHub
              </span>
            </div>
          </a>
          <div class='social-link-container--right email' onClick={this.toClipboard}>
            <span class='social-link'>
              <svg class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" fill="#ffffff"></path>
              </svg>
              Email
            </span>
          </div>
        </div>
      </div>
    );
  }
}

// markup
class Portfolio extends React.Component {
  render(){
    return(
      <>
        <Landing />
        {/* <About />
        <Projects />
        <ContactMe /> */}
      </>
    )
  }
}

export default Portfolio