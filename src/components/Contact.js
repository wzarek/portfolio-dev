import React, { useState } from 'react';
import { db } from '../firebase/Firebase';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import { useTranslation } from "react-i18next";

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [type, setType] = useState('job-offer');

    const [t] = useTranslation('common');
    
    const sendMessage = (e) => {
        e.preventDefault();
        if (!name) alert('Please set name');
        if (!email) alert('Please set email');
        if (!message) alert('Please set message');
        if (!type) alert('Please set type');
        if (!name || !email || !message || !type) return;

        addDoc(collection(db, 'messages'), {
            name,
            email,
            message,
            type,
            sent: Timestamp.now()
        })
        .then(() => {
            alert('Succesfully sent');
            setName('');
            setEmail('');
            setMessage('');
            setType('job-offer');
        })
        .catch((e) => console.error(e));
    };

    return (
    <section id="contact">
        <h2>{t('app.header.contact')}</h2>
        <p>{t('app.sections.contact.description')} <a href='mailto:contact@wzarek.me'>contact@wzarek.me</a></p>
        <div>
            <a href="https://www.github.com/wzarek" target='_blank' rel='noreferrer'>
                <IoLogoGithub color='white' size={'2vmax'} />
            </a>
            <a href="https://www.instagram.com/wzarek" target='_blank' rel='noreferrer'>
                <IoLogoInstagram color='white' size={'2vmax'} />
            </a>
            <a href="https://www.linkedin.com/in/wzarek" target='_blank' rel='noreferrer'>
                <IoLogoLinkedin color='white' size={'2vmax'} />
            </a>
        </div>
        <form className='contact-form' onSubmit={sendMessage}>
            <p>{t('app.sections.contact.form.title')}</p>
            <input aria-label='name' placeholder={t('app.sections.contact.form.inputs.name')} value={name} onChange={(e) => setName(e.target.value)} />
            <input aria-label='email' placeholder={t('app.sections.contact.form.inputs.email')} value={email} onChange={(e) => setEmail(e.target.value)} />
            <textarea aria-label='message' placeholder={t('app.sections.contact.form.inputs.message')} value={message} onChange={(e) => setMessage(e.target.value)} />
            <select value={type} aria-label='type' name='type' id='type' onChange={(e) => setType(e.target.value)}>
                <option value='job-offer'>{t('app.sections.contact.form.inputs.select.joboffer')}</option>
                <option value='valuation'>{t('app.sections.contact.form.inputs.select.pricing')}</option>
                <option value='bug-report'>{t('app.sections.contact.form.inputs.select.bug')}</option>
                <option value='other'>{t('app.sections.contact.form.inputs.select.other')}</option>
            </select>
            <div className='contact-submit'>
                <button className="g-recaptcha" 
                    data-sitekey="6LdmE8kfAAAAAGg4_ieOJIRyLy_Fm44vfWqRdtw3" 
                    data-callback='sendMessage' 
                    data-action='submit'>
                        {t('app.sections.contact.form.inputs.send')}
                </button>
            </div>
        </form>
    </section>
    )
}

export default Contact
