import React from 'react'
import { IoLogoJavascript, IoLogoCss3, IoLogoPython, IoLogoReact, IoLogoSass, IoLogoNodejs, IoLogoFirebase, IoLogoHtml5 } from 'react-icons/io5';
import { useTranslation } from "react-i18next";

function About() {
  const [t, i18n] = useTranslation('common');

  return (
    <section id="about">
        <h2>
          {t('app.header.about')}
        </h2>
        <p>
          {t('app.sections.about.description')}
        </p>
        <div className='about-technologies'>
          <p>
            {t('app.sections.about.technologies.maintext')}
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
            {t('app.sections.about.offer.maintext')}
          </p>
          <div className='about-card-container'>
            <p>{t('app.sections.about.offer.webdesign.title')}</p>
            <p>
              {t('app.sections.about.offer.webdesign.description')}  
            </p>
          </div>
          <div className='about-card-container'>
            <p>{t('app.sections.about.offer.webdevelopment.title')}</p>
            <p>
              {t('app.sections.about.offer.webdevelopment.description')}
            </p>
          </div>
          <div className='about-card-container'>
            <p>{t('app.sections.about.offer.mobile.title')}</p>
            <p>
              {t('app.sections.about.offer.mobile.description')}
            </p>
          </div>
        </div>
    </section>
  )
}

export default About
