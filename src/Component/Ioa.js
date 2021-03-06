import React, { useEffect, useState } from 'react'
import vid1 from '../Videos/vid1.mp4'
import vid2 from '../Videos/vid2.mp4'
import vid3 from '../Videos/vid3.mp4'
import vid4 from '../Videos/vid4.mp4'
import VideoIOA from './VideoIOA'

function Ioa() {
    const [sources, setSources] = useState([{ url: vid1 }, { url: vid2 }, { url: vid3 }, { url: vid4 }])

    /***************** Intersection Observer API *****************/
    const callback = entries => {
        entries.forEach(element => {
            console.log(element);
            let el = element.target.childNodes[0];
            el.play().then(() => {
                //if this video is not in viewport then pause it
                if (!el.paused && !element.isIntersecting) {
                    el.pause();
                }
            })
        })
    }
    const observer = new IntersectionObserver(callback, {
        threshold: 0.9
    })
    // useEffect is used to attach observer on every videos element
    useEffect(() => {
        console.log('Use Effect');
        let elements = document.querySelectorAll('.videos');
        elements.forEach((el) => {
            observer.observe(el);
        })
    }, [])
    return (
        <div className='video-container'>
            <div className='videos'>
                <VideoIOA source={sources[0].url} />
            </div>
            <div className='videos'>
                <VideoIOA source={sources[1].url} />
            </div>
            <div className='videos'>
                <VideoIOA source={sources[2].url} />
            </div>
            <div className='videos'>
                <VideoIOA source={sources[3].url} />
            </div>
        </div>
    )
}

export default Ioa
