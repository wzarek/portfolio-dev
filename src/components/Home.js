import React from 'react'
import { IoChevronDown, IoEllipse, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import image from '../home-image.jpg';
import { motion } from 'framer-motion';

function Home() {
  return (
    <section id="home">
        <div>
            <motion.h1
                initial={{opacity: 0, x: '-10%'}}
                animate={{opacity: 1, x: 0, transition: {duration: .8}}}
            >
                Maciej Krawczyk
            </motion.h1>
            <motion.p
                initial={{opacity: 0, y: '100%'}}
                animate={{opacity: 1, y: 0, transition: {duration: .8, delay: .3}}}
            >
                fullstack developer
            </motion.p>
        </div>
        <motion.figure
            initial={{opacity: 0, x: '50%'}}
            animate={{opacity: 1, x: 0, transition: {duration: .8}}}
        >
            <img src={image} alt='home-image' aria-hidden='true' />
            <div>
                <a href="https://www.github.com/wzarek" target='_blank' rel='noreferrer'>
                    <IoLogoGithub color='white' size={'3vmax'} />
                </a>
                <a href="https://www.instagram.com/wzarek" target='_blank' rel='noreferrer'>
                    <IoLogoInstagram color='white' size={'3vmax'} />
                </a>
                <a href="https://www.linkedin.com/in/wzarek" target='_blank' rel='noreferrer'>
                    <IoLogoLinkedin color='white' size={'3vmax'} />
                </a>
            </div>
        </motion.figure>
        <div className='home-icons'>
            <motion.div
                initial={{opacity: 0, y: '-100%'}}
                animate={{opacity: 1, y: 0, transition: {duration: .8}}}
            >
                <IoEllipse color='#8934eb' size={'.5vmax'} />
            </motion.div>
            <motion.div
                initial={{opacity: 0, y: '-100%'}}
                animate={{opacity: 1, y: 0, transition: {duration: .8, delay: .3}}}
            >
                <IoEllipse color='#8934eb' size={'.5vmax'} />
            </motion.div>
            <motion.div
                initial={{opacity: 0, y: '-100%'}}
                animate={{opacity: 1, y: 0, transition: {duration: .8, delay: .6}}}
            >
                <IoChevronDown color='#8934eb' size={'2vmax'}/>
            </motion.div>
        </div>
    </section>
  )
}

export default Home
