import React from "react";
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo= () => {

    return(
        <div className="ma4 mt0">
            <Tilt className="Tilt" tiltMaxAngleX={45} tiltMaxAngleY={45}>
                <div className="inner-tilt pa3">
                    <img style= {{paddingTop: '5px'}}alt="logo" src={brain}/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;