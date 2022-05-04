import React from "react";
import './patver.css';

import patver from './images/patver.jpg';

const Patver = () => {

    return (
        <div className="divPatverCont">
                <img src={patver} alt="patver" className="imgPatver" width="100%" />
        </div>
    )
}

export default Patver;