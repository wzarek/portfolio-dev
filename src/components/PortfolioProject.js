import React, { useEffect, useState } from 'react'
import { storage } from '../firebase/Firebase';
import { getDownloadURL, ref } from 'firebase/storage';
import { IoChevronForwardSharp } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';

function PortfolioProject(props) {
    const [image, setImage] = useState(props?.thumb);
    const [animated, setAnimated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const imageRef = ref(storage, props?.thumb);
        getDownloadURL(imageRef)
        .then((url) => setImage(url));
    }, [props.thumb]);
    return (
    <div className='portfolio-project' 
        onClick={() => {window.location.href.indexOf('github') === -1 ? navigate(`/projects/${props?.slug}`) : navigate(`/portfolio/projects/${props?.slug}`)}} 
        onMouseEnter={() => setAnimated(true)}
        onAnimationEnd={() => setAnimated(false)}
    >
        <h3>{props?.name}</h3>
        <Link className={animated ? 'animated' : ''} to={window.location.href.indexOf('github') === -1 ? `/projects/${props?.slug}` : `/portfolio/projects/${props?.slug}`}>
            <IoChevronForwardSharp size={'1.25vmax'}/>
        </Link>
        <img src={image} alt={props?.name}/>
    </div>
    )
}

export default PortfolioProject
