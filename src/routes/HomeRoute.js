import '../css/home.css';
import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import { motion } from 'framer-motion';

function HomeRoute() {
    return (
        <motion.div
            className='div-home'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{originX: 0, scaleX: 0, transition: {duration: 0.5}}}
        >
            <Header active='home' />
            <main>
                <Home />
                <About />
                <Portfolio />
                <Contact />
            </main>
            <Footer />
        </motion.div>
    )
}

export default HomeRoute
