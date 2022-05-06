import '../css/projects.css';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { db, storage } from '../firebase/Firebase';
import { collection, query, onSnapshot, where } from 'firebase/firestore';
import { IoClose, IoLogoGithub, IoGlobe, IoChevronDown, IoChevronUp } from "react-icons/io5";
import { listAll, ref, getDownloadURL } from 'firebase/storage';
import { motion } from 'framer-motion';

const projectsRef = collection(db, 'project');


function ProjectRoute() {
    const [project, setProject] = useState([]);
    const [images, setImages] = useState([]);
    const [isLoading, setLoading] = useState(true);
    let { slug } = useParams();
    const listRef = ref(storage, `images/${slug}`);

    const hideElement = (el) => {
      const chevDown = document.querySelector('.project-scroll');
      const chevUp = document.querySelector('#project-bottom');
      if (el === 'down') {
        chevDown.style.visibility = 'hidden';
        chevUp.style.visibility = 'visible';
      } else if (el === 'up') {
        chevDown.style.visibility = 'visible';
        chevUp.style.visibility = 'hidden';
      }
    }

    useEffect(() => {
      const q = query(projectsRef, where("slug", "==", slug));
      onSnapshot(q, (snap) => {
        setProject(snap.docs.map((doc) => ({
          id: doc.id,
          data: doc.data()
        })));
      });
    }, [slug]);

    useEffect(() => {
        if(images.length === 0){
            listAll(listRef)
            .then((res) => {
                res.items.forEach((itemRef) => {
                    getDownloadURL(itemRef).then((url) => {
                        setImages((images) => [...images, url]);
                    });
                });
            })
            .catch((e) => console.error(e));
        }else{
            setLoading(false);
        }
    }, [images]);
    
  return (
    <motion.section 
        className='project-main'
        id='project-top'
        initial={{scaleX: 0, originX: '100%'}}
        animate={{scaleX: 1, transition: {duration: 0.5}}}
        exit={{scaleX: 0, transition: {duration: 0.5}}}
    >
    <Link to="/#portfolio"><IoClose size={"2.5vmax"}/></Link>
      {
          project.length === 0 ? <h2 className='project-not-found'>not found</h2> :
          project.map((p) => (
            <>
                <section className='project-about'>
                    <h2>{p.data.name}</h2>
                    <p className='project-desc'>{p.data.desc}</p>
                    <p className='project-status'>status: <span className={p.data.status === 'done' ? 'project-status-done' : 'project-status-inprogress'}>{p.data.status}</span></p>
                    <div className='project-links'>
                        {p.data.webLink ? <a href={p.data.webLink} target="_blank" rel="noreferrer"><IoGlobe color='white' size={'1.5vmax'}/></a> : ''}
                        {p.data.githubLink ? <a href={p.data.githubLink} target="_blank" rel="noreferrer"><IoLogoGithub color='white' size={'1.5vmax'}/></a> : ''}
                    </div>
                    {p.data?.technologies?.length > 0 ?
                    <div className='project-technologies'>
                      <p>technologies used</p>
                      <ul>
                        {p.data.technologies.map((t) => (
                          <li>{t}</li>
                        ))}
                      </ul>
                    </div>
                    : <></>
                    }
                </section>
            </>
          ))
      }
      {
        project.length !== 0 ? (isLoading ? <h2 className='project-loading'>loading images...</h2> :
        <section className='project-images'>
            {images.map((img) => (
                <img src={img} alt={slug} />
            ))}
        </section>
        ) : <></>}
      {
        images.length >= 3 ? 
        <><div className='project-scroll'>
        <a href='#project-bottom' onClick={() => hideElement('down')}><IoChevronDown size={'1.5vmax'}/></a>
        </div><div id='project-bottom' onClick={() => hideElement('up')}><a href='#project-top'><IoChevronUp size={'1.5vmax'}/></a></div></> 
        : <></>
      }
    </motion.section>
  )
}

export default ProjectRoute
