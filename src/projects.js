// Images
import portfolio from './images/projects/portfolio.jpg'
import noteapp from './images/projects/noteapp.jpg'
import weatherapp from './images/projects/weatherapp.jpg'
import photography from './images/projects/photography.jpg'
import tempconvert from './images/projects/tempconvert.jpg'
import cube from './images/projects/cube.jpg'

import github from './images/socials/iconmonstr-github-3.svg'
import figma from './images/socials/figma-svgrepo-com.svg'


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
    progress: false,
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
        diff: 3,
        date: new Date('September 30, 2023 00:00:00'),
        progress: true,
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
        name: 'Note App',
        desc: 'A basic React app allowing creation and deletion of notes.',
        url: 'https://codepen.io/ben-langlois/details/JjJrJqK',
        img: noteapp,
        alt: 'Note App Dashboard',
        diff: 1,
        date: new Date('December 15, 2021 00:00:00'),
        progress: false,
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
        progress: false,
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
        desc: 'Photography portfolio for photos I take on trips, hikes, walks etc.',
        url: 'https://ben-langlois.github.io/Photography-Portfolio/',
        img: photography,
        alt: 'Photography Portfolio landing page',
        diff: 2,
        date: new Date('November 2, 2023 00:00:00'),
        progress: false,
        links:[
        {
            type: 'Github Repo',
            url: 'https://github.com/Ben-Langlois/Photography-Portfolio',
            img: github
        },
        {
            url: 'https://www.figma.com/file/74FSyfk17nOk1pf2AJmi6T/Photography-Portfolio?type=design&node-id=0%3A1&mode=design&t=Wx2aUG470hkasW5l-1',
            img: figma
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
      desc: "A Temperature Converter made with React, Tailwind, and JQuery. The goal of this was to write zero CSS, really just an excuse to try out Tailwind.",
      url: 'https://codepen.io/ben-langlois/details/jOdwMRz',
      img: tempconvert,
      alt: 'Temperature Codepen page',
      diff: 2,
      date: new Date('November 15, 2023 00:00:00'),
      progress: false,
      links:[
      ],
      tags: [
      'React',
      'SCSS',
      'Tailwind',
      'JQuery'
      ]
    },
    {
      name: 'A Cube',
      desc: "An interactive sandbox allows rendering and interaction with different 3d shapes the Three.js library.",
      url: 'https://codepen.io/ben-langlois/pen/zYegMzB?editors=0010',
      img: cube,
      alt: 'Cube Codepen page',
      diff: 3.5,
      date: new Date('January 1, 2024 00:00:00'),
      progress: true,
      links:[
      ],
      tags: [
      'React',
      '3.js',
      'SCSS',
      'JQuery'
      ]
    }
]

export {projectsObj};