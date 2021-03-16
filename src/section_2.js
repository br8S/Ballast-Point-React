import React from 'react';
import './section_2.css';
import video from './videos/BP-Complete-Art-Release-with-Subtitles.mp4';
import redPlay from './images/play-red.png';
import whitePlay from './images/play-white.png';

function section_2(){

    const redPlayButton = () => {
        document.querySelector('.play-button').style.backgroundImage = `url(${redPlay})`;
        document.querySelector('.complete-video-bg').style.opacity = "70%";
        document.querySelector('.play-button').style.cursor = "pointer";
    }

    const whitePlayButton = () => {
        document.querySelector('.play-button').style.backgroundImage = `url(${whitePlay})`;
        document.querySelector('.complete-video-bg').style.opacity = "100%";
    }

    const playVideo = () => {
        document.querySelector('.complete-video-vid').style.visibility = "visible";
        document.querySelector('.complete-video-vid').play();
    }

    return(
        <section className="complete-video">
            <div className="complete-video-bg" onClick={ playVideo } onMouseOver={ redPlayButton } onMouseLeave={ whitePlayButton }></div>
            <div className="play-button" onClick={ playVideo } onMouseOver={ redPlayButton }></div>
            <video className="complete-video-vid" width="100%" height="100%" controls>
                <source src={video} type="video/mp4"></source>
            </video>
        </section>
    );
}

export default section_2;