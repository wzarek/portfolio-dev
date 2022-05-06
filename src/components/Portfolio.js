import React, { useState, useEffect } from 'react'
import PortfolioProject from './PortfolioProject'
import { db } from '../firebase/Firebase';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';

const projectsRef = collection(db, 'project');

function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const q = query(projectsRef, orderBy('created', 'desc'));
    onSnapshot(q, (snap) => {
      setProjects(snap.docs.map((doc) => ({
        id: doc.id,
        data: doc.data()
      })));
    })
  }, []);

  return (
    <section id="portfolio">
        <h2>
            portfolio
        </h2>
        <section className='portfolio-container'>
          {projects.length === 0 ? <div>loading</div> : projects.map((project) => (
            <PortfolioProject key={project.id} name={project.data.name} thumb={project.data.thumbnail} slug={project.data.slug} />
          ))}
        </section>
    </section>
  )
}

export default Portfolio
