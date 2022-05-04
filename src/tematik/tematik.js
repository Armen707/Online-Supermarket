import React from "react";
import { Link } from "react-router-dom";
import './tematik.css';

import tematik from './images/tematik.png';
import brendmarket from './images/brendmarket.png';

const Tematik = () => {

    return (
        <div className="divTematikCont">
            <span className="spanTematik">
                <Link to="/tematikProd">
                    <img src={tematik} alt="tematik" width="550px" height="250px" />
                </Link>
            </span>

            <span className="spanTematik" >
                <Link to="/brendmarket">
                    <img src={brendmarket} alt="brendmarket" width="550px" height="250px" />
                </Link>
            </span>
        </div>
    )
}

export default Tematik;

