import React from 'react';
import './AboutMe.css'

const norbertcsipak = {
  imageSrc: 'https://media-exp1.licdn.com/dms/image/D4E03AQHy4wr0rCX0Bw/profile-displayphoto-shrink_800_800/0/1670427705119?e=1675900800&v=beta&t=mpYBhcRbKKpQmyaDxOrfBS7sueGzeiCF5O0oUKOysRk',
  name: 'Norbert Csipak',
  address: 'Old Kent Road',
  city: 'London',
  postcode: 'SE1 5UT',
  skills: ['React.js', 'JavaScript', 'HTML', 'CSS', 'OOP', 'BootStrap', 'Tailwind', 'Figma', 'Ruby', 'Ruby on Rails', 'Stimulus', 'PostgreSQL']
}

class AboutMe extends React.Component {
  render() {
    return(
      <div className='background-me'>
        <div className='my-skills'>
          <h1>Full Stack Developer</h1>
          <p>Hi, I'm Norbs and here you can find what languages and technologies I learnt for the past year.</p>
        </div>
        <div className='skills-list'>
        {norbertcsipak.skills.map((skill) => {
            // eslint-disable-next-line default-case
            switch (skill) {
            case 'React.js':
              return <img src='https://img.icons8.com/bubbles/2x/react.png' alt='react'/>
            case 'JavaScript':
              return <img src='https://img.icons8.com/color/512/javascript.png' alt='react'/>
            case 'HTML':
              return <img src='https://img.icons8.com/fluency/512/html-5.png' alt='react'/>
            case 'CSS':
              return <img src='https://img.icons8.com/dusk/512/css3.png' alt='react'/>
            case 'Tailwind':
              return <img src='https://img.icons8.com/color/512/tailwindcss.png' alt='react'/>
            case 'PostgreSQL':
              return  <img src='https://img.icons8.com/ios/512/postgreesql.png' alt='react'/>
            case 'Figma':
              return <img src='https://img.icons8.com/color/512/figma.png' alt='react'/>
            case 'Ruby':
              return <img src='https://img.icons8.com/clouds/512/ruby-programming-language.png' alt='react'/>
            case 'Ruby on Rails':
              return <img src='https://img.icons8.com/external-tal-revivo-color-tal-revivo/512/external-rails-a-server-side-web-application-framework-written-in-ruby-logo-color-tal-revivo.png' alt='react'/>
            }
          })}
        </div>
      </div>
    )
  }
}

export default AboutMe;
