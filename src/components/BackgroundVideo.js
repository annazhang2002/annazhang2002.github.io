import React from 'react';
import '../style.css';
import Colors from '../colors';

import Socials from '../components/Socials';

export default function BackgroundVideo() {
    return (
        <div>
            <video loop autoPlay muted id="bg-video">
                <source src={require('../images/bg_video.mp4')} type="video/mp4" />
            </video>
            <div className="my-container between heroContainer">
                <div className="my-container column-dir ">
                    <h1 className="heroAnna">
                        Anna<br /> Zhang
							</h1>
                </div>
                <div className="my-container column-dir heroText">
                    <p className="bio">
                        An undergrad CS student passionate about computer science, sustainability, and
                        psychology.
							</p>
                    <Socials color={Colors.white} />
                </div>
            </div>
        </div>
    )
}
