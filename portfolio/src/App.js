// #region imports
import * as React from "react"
// import $ from 'jquery'
import Chart from 'chart.js/auto'
import 'bootstrap/dist/css/bootstrap.css'
//import { render } from "react-dom"
import './styles/styles.scss'
// import * as chartJS from 'https://cdn.jsdelivr.net/npm/chart.js'
// #endregion 

// #region images
import portrait from './images/portrait2.jpg'
import portfolio from './images/projects/portfolio.png'
import labtimer from './images/projects/labtimer.png'
import noteapp from './images/projects/noteapp.png'
// #endregion

// #region CDNs
//<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin referrerpolicy="no-referrer" />
  // <script crossOrigin src="https://cdn.jsdelivr.net/npm/britecharts@2/dist/bundled/britecharts.min.js"/>
  // <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
// #endregion

// #region Variables
var linkedin = 'M13.83,41.668H5.401V13.571h8.429V41.668z M44.737,41.668h-8.429V26.66c0-3.912-1.394-5.857-4.154-5.857 c-2.189,0-3.577,1.086-4.274,3.273c0,3.545,0,17.592,0,17.592h-8.431c0,0,0.115-25.288,0-28.097h6.656l0.514,5.619h0.175 c1.729-2.81,4.489-4.713,8.275-4.713c2.881,0,5.207,0.801,6.985,2.815c1.794,2.014,2.684,4.713,2.684,8.514V41.668z M9.615,2.333 c2.404,0,4.357,1.888,4.357,4.214c0,2.33-1.953,4.214-4.357,4.214c-2.403,0-4.351-1.885-4.351-4.214 C5.264,4.22,7.212,2.333,9.615,2.333z';
//#endregion

/* TODO
   Important
  - Mobile media query
    - Bio
      - bio needs to be centered under portrait
  - Get photos for projects
  - Rethink scroll animation
  
  - have email button copy email to clipboard (ALMOST)
    - make it tell user it copied
  - figure out skill chart(ALMOST)
  - have links use some animation on hover & click (ALMOST)

   Not so important
  - rethink font (esp the libreville italics one, feel like subheaders could be cleaner)
  - add BL or something to header
*/

// components
/*Header
  - Contains logo, nav links
*/
class Header extends React.Component {
  render() {
    return (
      <header id='header'>
        <div className="nav-links">
          <ul>            
            <li><a className="link" href="#top">About</a></li>
            <li><a className="link" href="#project-section">Projects</a></li>
            <li><a className="link" href="#contact-container">Contact</a></li>
          </ul>
        </div>    
      </header> 
    )
  }
}

/*Landing section
  - Contains initial content, "Hi my name...", scroll prompt 
*/  // eslint-disable-next-line
class Landing extends React.Component {
  render(){
    return (
      <div id="landing-container">
        <Header />
        <div id="about" className="content"> {/**/}
          <div id='intro-main'>
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
        <Projects />      
      </div>
    )
  }
}

/*About
  - Contains bio sections, education, skills, soft-skills, yadayada
*/
class About extends React.Component {

  componentDidMount(){
    // config for chart
    const config = {
      type: 'bar',
      data: {
        labels: [
          'HTML5',
          'CSS/SASS',
          'Javacript',
          'React',
          'C++',
          'Arduino'
        ],
        datasets: [{
          data: [4, 3, 3, 2, 2, 1],
          backgroundColor: [
            'rgba(227, 79, 38, 1)',
            'rgba(204, 102, 153, 1)',
            'rgba(240, 219, 79, 1)',
            '#61DBFB',
            'rgba(4, 79, 136, 1)',
            'rgba(0, 151, 156, 1)'
          ]
        }]
      },
      options: {
        indexAxis: 'y',
        plugins: {
          tooltip: {
            // enabled: false
          },
          legend: {    
            display: false,
            labels: {
              fontColor: '#FFF'
            }
          }
        },
        scales: {
          x: {
            ticks: {
              callback: function(value){
                // names for levels are still up for debate
                // throws 'expected '===' it dont matter c'est la vie
                // eslint-disable-next-line
                if(this.getLabelForValue(value) == 1){
                  return 'Beginner';
                  // eslint-disable-next-line
                } else if (this.getLabelForValue(value) == 2){
                  return 'Amateur';
                  // eslint-disable-next-line
                } else if (this.getLabelForValue(value) == 3){
                  return 'Pro';
                  // eslint-disable-next-line
                } else if (this.getLabelForValue(value) == 4){
                  return 'Expert';
                }
              },
              font: {
                weight: 'bold'
              },
                fontSize: '5vw'
            }
          },
          y: {
            // display: false,
            ticks: {
              font: {
                weight: 'bold'
              },
                fontSize: '5vw'
            }
          }
        }
      }
    };

    // will throw no-used-vars mais c'est la vie thats why technology exists
    // eslint-disable-next-line
    const myChart = new Chart(
      // $('.skillChart'),
      document.getElementById("skill-chart").getContext('2d'),
      config
    );
  }
  
  render() {
    return (
      <>
        <Header />
        {/* Make it one container and center */}
        <div id="about-container">
          <div id='about'>
            <div id="portrait-container">
                <img id="portrait" src={portrait} alt=" "></img>
            </div>
            <div id="bio-container">
              <div id="bio-text">
                <p id='bio-main'>
                  Hi! I'm <u>Ben Langlois</u>. A GTA/Toronto
                  based web developer looking for an
                  entry level position in Front end
                  Web Development!
                </p>
                <p  id='bio-secondary'>
                  I attended Durham College for 2 years in
                  Oshawa, Ontario for computer programming.
                  Since graduating I've been learning what I
                  didnt experience in college.
                </p>
                <p id='bio-secondary'>
                  I work mostly in React, JS, SCSS, MySQL,
                  and C++. While expirementing with Python,
                  C# and Arduino.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="skill-chart-container" class='tag'>
          <canvas id='skill-chart'></canvas>
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
      // Kinda wanna redesign the project boxes
      // maybe turn it into styled components
      <div id="project-container" class='tag'>
        <div class="section-header project-section" id='project-section'>
          <h1><b>Some of my Projects</b></h1>
        </div>  
        <div id='card-container'>

          <a id="card-link" href="#portfolio-card">
            <div class="card portfolio">
              <img class="card-img-top" src={portfolio} alt="Portfolio Homepage"></img>
              <div class="card-body">
                <h5 class="card-title"><b>My Portfolio</b></h5>
                <p class="card-text">The portfolio you're looking at right now. Made with React, Sass, and a bit of Bootstrap. Constantly in development.</p>
                <a id="portfolio-link" href="https://github.com/Ben-Langlois/Portfolio" class="btn btn-primary github">
                  <svg class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" height="5vh">
                    <path d="M24.999,2.48c-12.75,0-23.087,10.338-23.087,23.09c0,10.199,6.613,18.854,15.791,21.907 c1.154,0.211,1.518-0.474,1.518-1.084c0-0.547,0.011-2.082,0-4.01c-6.422,1.398-7.753-3.038-7.753-3.038 c-1.048-2.671-2.562-3.377-2.562-3.377c-2.095-1.433,0.158-1.407,0.158-1.407c2.317,0.163,3.538,2.383,3.538,2.383 c2.059,3.522,5.403,2.505,6.717,1.916c0.21-1.491,0.808-2.51,1.468-3.087C15.66,35.188,10.27,33.211,10.27,24.361 c0-2.521,0.9-4.581,2.376-6.194c-0.239-0.584-1.031-2.932,0.226-6.112c0,0,1.939-0.62,6.349,2.369 c1.841-0.513,3.817-0.768,5.78-0.777c1.962,0.009,3.938,0.264,5.781,0.777c4.409-2.988,6.346-2.369,6.346-2.369 c1.258,3.18,0.466,5.528,0.229,6.112c1.478,1.613,2.373,3.673,2.373,6.194c0,8.872-5.397,10.823-10.543,11.392 c0.828,0.717,1.582,2.101,1.582,4.255c0,2.887,0,5.632,0,6.392c0,0.617,0.372,1.302,1.544,1.076 c9.167-3.059,15.776-11.708,15.776-21.905C48.089,12.818,37.75,2.48,24.999,2.48z" fill="#ffffff"></path>
                  </svg>
                </a>
              </div>
            </div>
          </a>

          <a id="card-link" href="https://codepen.io/ben-langlois/pen/wvqKwRL?editors=0011">
            <div class="card portfolio">
              <img class="card-img-top" src={labtimer} alt="Lab Timer SS"></img>
              <div class="card-body">
                <h5 class="card-title"><b>Lab Timer</b></h5>
                <p class="card-text">Made with React, this timer tracks time and speed at intervals and generates a pace table. Used in a PhD Students thesis research for 6+ months.</p>
                <a id="portfolio-link" href="#portfolio" class="btn btn-primary github codepen">
                  <svg class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" height="5vh">
                    <path d="M24.999,2.48c-12.75,0-23.087,10.338-23.087,23.09c0,10.199,6.613,18.854,15.791,21.907 c1.154,0.211,1.518-0.474,1.518-1.084c0-0.547,0.011-2.082,0-4.01c-6.422,1.398-7.753-3.038-7.753-3.038 c-1.048-2.671-2.562-3.377-2.562-3.377c-2.095-1.433,0.158-1.407,0.158-1.407c2.317,0.163,3.538,2.383,3.538,2.383 c2.059,3.522,5.403,2.505,6.717,1.916c0.21-1.491,0.808-2.51,1.468-3.087C15.66,35.188,10.27,33.211,10.27,24.361 c0-2.521,0.9-4.581,2.376-6.194c-0.239-0.584-1.031-2.932,0.226-6.112c0,0,1.939-0.62,6.349,2.369 c1.841-0.513,3.817-0.768,5.78-0.777c1.962,0.009,3.938,0.264,5.781,0.777c4.409-2.988,6.346-2.369,6.346-2.369 c1.258,3.18,0.466,5.528,0.229,6.112c1.478,1.613,2.373,3.673,2.373,6.194c0,8.872-5.397,10.823-10.543,11.392 c0.828,0.717,1.582,2.101,1.582,4.255c0,2.887,0,5.632,0,6.392c0,0.617,0.372,1.302,1.544,1.076 c9.167-3.059,15.776-11.708,15.776-21.905C48.089,12.818,37.75,2.48,24.999,2.48z" fill="#ffffff"></path>
                  </svg>
                </a>
              </div>
            </div>
          </a>

          <a id="card-link" href="https://codepen.io/ben-langlois/pen/JjJrJqK?editors=0110">
            <div class="card portfolio">
              <img class="card-img-top" src={noteapp} alt="Note App SS"></img>
              <div class="card-body">
                <h5 class="card-title"><b>Note App</b></h5>
                <p class="card-text">(Not Final)<br/>A basic React app allowing creation and deletion of notes.</p>
                <a id="portfolio-link" href="#portfolio" class="btn btn-primary github codepen">
                  <svg class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" height="5vh">
                    <path d="M24.999,2.48c-12.75,0-23.087,10.338-23.087,23.09c0,10.199,6.613,18.854,15.791,21.907 c1.154,0.211,1.518-0.474,1.518-1.084c0-0.547,0.011-2.082,0-4.01c-6.422,1.398-7.753-3.038-7.753-3.038 c-1.048-2.671-2.562-3.377-2.562-3.377c-2.095-1.433,0.158-1.407,0.158-1.407c2.317,0.163,3.538,2.383,3.538,2.383 c2.059,3.522,5.403,2.505,6.717,1.916c0.21-1.491,0.808-2.51,1.468-3.087C15.66,35.188,10.27,33.211,10.27,24.361 c0-2.521,0.9-4.581,2.376-6.194c-0.239-0.584-1.031-2.932,0.226-6.112c0,0,1.939-0.62,6.349,2.369 c1.841-0.513,3.817-0.768,5.78-0.777c1.962,0.009,3.938,0.264,5.781,0.777c4.409-2.988,6.346-2.369,6.346-2.369 c1.258,3.18,0.466,5.528,0.229,6.112c1.478,1.613,2.373,3.673,2.373,6.194c0,8.872-5.397,10.823-10.543,11.392 c0.828,0.717,1.582,2.101,1.582,4.255c0,2.887,0,5.632,0,6.392c0,0.617,0.372,1.302,1.544,1.076 c9.167-3.059,15.776-11.708,15.776-21.905C48.089,12.818,37.75,2.48,24.999,2.48z" fill="#ffffff"></path>
                  </svg>
                </a>
              </div>
            </div>
          </a>

          <a id="card-link" href="https://codepen.io/ben-langlois/pen/wvqKwRL?editors=0011">
            <div class="card portfolio">
              <img class="card-img-top" src={labtimer} alt="Weather App SS"></img>
              <div class="card-body">
                <h5 class="card-title"><b>Weather App</b></h5>
                <p class="card-text">(In Progress)<br/>A React app utilizing bootstrap and APIs to create a weather dashboard. Displays weekly and daily weather for inputted city.</p>
                <a id="portfolio-link" href="https://github.com/Ben-Langlois/Weather-App" class="btn btn-primary github">
                  <svg class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" height="5vh">
                    <path d="M24.999,2.48c-12.75,0-23.087,10.338-23.087,23.09c0,10.199,6.613,18.854,15.791,21.907 c1.154,0.211,1.518-0.474,1.518-1.084c0-0.547,0.011-2.082,0-4.01c-6.422,1.398-7.753-3.038-7.753-3.038 c-1.048-2.671-2.562-3.377-2.562-3.377c-2.095-1.433,0.158-1.407,0.158-1.407c2.317,0.163,3.538,2.383,3.538,2.383 c2.059,3.522,5.403,2.505,6.717,1.916c0.21-1.491,0.808-2.51,1.468-3.087C15.66,35.188,10.27,33.211,10.27,24.361 c0-2.521,0.9-4.581,2.376-6.194c-0.239-0.584-1.031-2.932,0.226-6.112c0,0,1.939-0.62,6.349,2.369 c1.841-0.513,3.817-0.768,5.78-0.777c1.962,0.009,3.938,0.264,5.781,0.777c4.409-2.988,6.346-2.369,6.346-2.369 c1.258,3.18,0.466,5.528,0.229,6.112c1.478,1.613,2.373,3.673,2.373,6.194c0,8.872-5.397,10.823-10.543,11.392 c0.828,0.717,1.582,2.101,1.582,4.255c0,2.887,0,5.632,0,6.392c0,0.617,0.372,1.302,1.544,1.076 c9.167-3.059,15.776-11.708,15.776-21.905C48.089,12.818,37.75,2.48,24.999,2.48z" fill="#ffffff"></path>
                  </svg>
                </a>
              </div>
            </div>
          </a>

        </div>
      </div>
    )
  }
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