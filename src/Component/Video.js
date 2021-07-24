import React from 'react'
import ReactDOM from 'react-dom'
import './Video.css'

function Video(props) {
    const handleMute = (e) => {
        e.preventDefault();
        e.target.muted = !e.target.muted;
    }
    const handleAutoScroll = (e) => {
        let next = ReactDOM.findDOMNode(e.target).parentNode.nextSibling;
        if (next) {
            next.scrollIntoView({ behaviour: 'smooth' });
            e.target.muted = true;
        }
    }
    return (
        <>
            <video src={props.source} type='video/mp4' className='video-styles' onClick={handleMute} onEnded={handleAutoScroll} muted='muted'></video>
        </>
    )
}

export default Video
