import React, { useState, useEffect } from 'react'
import { IoHome, IoHomeOutline, IoPerson, IoPersonOutline, IoTerminal, IoTerminalOutline, IoMail, IoMailOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';

function Header(props) {
    const [active, setActive] = useState(props.active);

    useEffect(() => {
        let currentView = window.location.hash.slice(1) || props.active;
        setActive(currentView);
        document.getElementById(currentView).scrollIntoView();
    }, [props.active])

    return (
        <header>
            <motion.nav
                initial={{scaleY: 0}}
                animate={{scaleY: 1, transition: {duration: .8}}}
            >
                <ul>
                    <motion.li
                        initial={{scaleX: 0, opacity: 0}}
                        animate={{scaleX: 1, opacity: 1, transition: {duration: .5, delay: .3}}}
                    >
                        <a data-label="home" aria-label="Scroll down to home section" href="#home" className={active === 'home' ? 'nav-active' : ''} onClick={() => setActive('home')}>
                            {active === 'home' ? <IoHome size={"1.25vmax"} /> : <IoHomeOutline size={"1.25vmax"} />}
                        </a>
                    </motion.li>
                    <motion.li
                        initial={{scaleX: 0, opacity: 0}}
                        animate={{scaleX: 1, opacity: 1, transition: {duration: .5, delay: .4}}}
                    >
                        <a data-label="about" aria-label="Scroll down to about me section" href="#about" className={active === 'about' ? 'nav-active' : ''} onClick={() => setActive('about')}>
                            {active === 'about' ? <IoPerson size={"1.25vmax"} /> : <IoPersonOutline size={"1.25vmax"} />}
                        </a>
                    </motion.li>
                    <motion.li
                        initial={{scaleX: 0, opacity: 0}}
                        animate={{scaleX: 1, opacity: 1, transition: {duration: .5, delay: .5}}}
                    >
                        <a data-label="portfolio" aria-label="Scroll down to portfolio" href="#portfolio" className={active === 'portfolio' ? 'nav-active' : ''} onClick={() => setActive('portfolio')}>
                            {active === 'portfolio' ? <IoTerminal size={"1.25vmax"} /> : <IoTerminalOutline size={"1.25vmax"} />}
                        </a>
                    </motion.li>
                    <motion.li
                        initial={{scaleX: 0, opacity: 0}}
                        animate={{scaleX: 1, opacity: 1, transition: {duration: .5, delay: .6}}}
                    >
                        <a data-label="contact" aria-label="Scroll down to contact form" href="#contact" className={active === 'contact' ? 'nav-active' : ''} onClick={() => setActive('contact')}>
                            {active === 'contact' ? <IoMail size={"1.25vmax"} /> : <IoMailOutline size={"1.25vmax"} />}
                        </a>
                    </motion.li>
                </ul>
            </motion.nav>
        </header>
    )
}

export default Header
