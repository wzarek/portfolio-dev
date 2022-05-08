import React, { useState, useEffect } from 'react'
import { app, db } from '../../firebase/Firebase';
import { getAuth, signOut } from 'firebase/auth';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import { IoTrashOutline, IoPencilOutline, IoCheckmarkOutline } from 'react-icons/io5';

function Admin() {
  const [projects, setProjects] = useState([]);
  const [messages, setMessages] = useState([]);
  const projectsRef = collection(db, 'project');
  const messagesRef = collection(db, 'messages');
  const auth = getAuth(app);

  const handleLogout = () => {
    signOut(auth)
    .catch((e) => console.log(e)); 
  };

  useEffect(() => {
    const qProj = query(projectsRef, orderBy('created', 'desc'));
    onSnapshot(qProj, (snap) => {
      setProjects(snap.docs.map((doc) => ({
        id: doc.id,
        data: doc.data()
      })));
    });
    const qMess = query(messagesRef, orderBy('sent', 'desc'));
    onSnapshot(qMess, (snap) => {
      setMessages(snap.docs.map((doc) => ({
        id: doc.id,
        data: doc.data()
      })));
    })
  }, [projectsRef, messagesRef]);
  

  return (
    <>
      <section className='admin-main'>
        <section className='admin-projects'>
          <p className='admin-section-header'>projects</p>
          {
            projects.length === 0 ? <div>Loading...</div>
            : projects.slice(0,4).map((project) => (
              <div className='project-container'>
                <h2>{project.data.name}</h2>
                <p>{project.data.desc.length > 30 ? project.data.desc.substr(0,30) + '...' : project.data.desc}</p>
                <div className='project-actions'>
                  <IoPencilOutline />
                  <IoTrashOutline />
                </div>
              </div>
            ))
          }
          {
            projects.length > 4 ? <p className='admin-section-more'>and {projects.length - 4} more</p> : <></>
          }
          {
            projects.length !== 0 ? <div className='admin-section-button'><button>show all</button></div> : <></>
          }
        </section>
        <section className='admin-messages'>
          <p className='admin-section-header'>messages</p>
          {
            messages.length === 0 ? <div>Loading...</div>
            : messages.slice(0,4).map((message) => (
              <div className='message-container'>
                <h2>{message.data.name}</h2>
                <p>{message.data.message.length > 30 ? message.data.message.substr(0,30) + '...' : message.data.message}</p>
                <div className='message-actions'>
                  <IoCheckmarkOutline />
                  <IoTrashOutline />
                </div>
              </div>
              ))
          }
          {
            messages.length > 4 ? <p className='admin-section-more'>and {messages.length - 4} more</p> : <></>
          }
          {
            messages.length !== 0 ? <div className='admin-section-button'><button>show all</button></div> : <></>
          }
        </section>
        
      </section>
      <button className='admin-logout' onClick={handleLogout}>
          logout
        </button>
    </>
  )
}

export default Admin
