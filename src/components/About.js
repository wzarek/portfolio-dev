import React from 'react'
import { IoLogoJavascript, IoLogoCss3, IoLogoPython, IoLogoReact, IoLogoSass, IoLogoNodejs, IoLogoFirebase, IoLogoHtml5 } from 'react-icons/io5';

function About() {
  return (
    <section id="about">
        <h2>
            about
        </h2>
        <p>
          I'm Maciek, a fullstack developer based in Poland, Wrocław.
        </p>
        <div className='about-technologies'>
          <p>
            Technologies I use:
          </p>
          <div className='about-technologies-frontend about-card-container'>
            <p>frontend</p>
            <IoLogoHtml5 size={'2em'} />
            <IoLogoCss3 size={'2em'} />
            <IoLogoJavascript size={'2em'} />
            <IoLogoReact size={'2em'} />
            <IoLogoSass size={'2em'} />
          </div>
          <div className='about-technologies-backend about-card-container'>
            <p>backend</p>
            <IoLogoPython size={'2em'} />
            <IoLogoNodejs size={'2em'} />
            <IoLogoFirebase size={'2em'} />
          </div>
          <div className='about-technologies-mobile about-card-container'>
            <p>mobile</p>
            <IoLogoReact size={'2em'} />
          </div>
        </div>
        <div className='about-offer'>
          <p>
            My offer:
          </p>
          <div className='about-card-container'>
            <p>web designing</p>
            <p>
              Desiging a website according to your requirements. <br/> From simple onepage websites to even more complex ecommerce sites.
            </p>
          </div>
          <div className='about-card-container'>
            <p>complex web development</p>
            <p>
              Full coding (and designing) from scratch. <br/> This includes onnection with database, authentication, admin page, CMS etc.
            </p>
          </div>
          <div className='about-card-container'>
            <p>mobile app development</p>
            <p>
              Turning your idea into reality. <br/> With React Native/Flutter I can create (for now) simple mobile apps.
            </p>
          </div>
        </div>
    </section>
  )
}

export default About
