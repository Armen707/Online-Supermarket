import React from "react";
import { Link } from "react-router-dom";
import './tematikProd.css';

import italakan from './images/italakan.jpg';
import asiakan from './images/asiakan.jpg';
import kino from './images/kino.jpg';
import kofe from './images/kofe.jpg';
import qaxcr from './images/qaxcr.jpg';
import zatik from './images/zatik.jpg';



const TematikProd = () => {

    return (
        <div className="tematikProdCont">
            <h1> Թեմատիկ </h1>

            <div className="divTematikProd">
                <span className="spanTematikProd">
                    <Link to="/italakan">
                        <img src={italakan} alt="italakan" className="divTematikProdImg" />
                    </Link>
                    <h1 className="h1TematikProd"> Իտալական </h1>
                </span>
                <span className="spanTematikProd">
                    <Link to="/asiakan">
                        <img src={asiakan} alt="asiakan" className="divTematikProdImg" />
                    </Link>
                    <h1 className="h1TematikProd"> Ասիական </h1>
                </span>
            </div>

            <div className="divTematikProd">
                <span className="spanTematikProd">
                    <Link to="/kino">
                        <img src={kino} alt="kino" className="divTematikProdImg" />
                    </Link>
                    <h1 className="h1TematikProd"> Կինոդիտում </h1>
                </span>
                <span className="spanTematikProd">
                    <Link to="/kofe">
                        <img src={kofe} alt="kofe" className="divTematikProdImg" />
                    </Link>
                    <h1 className="h1TematikProd"> Սուրճի ընդմիջում </h1>
                </span>
            </div>

            <div className="divTematikProd">
                <span className="spanTematikProd">
                    <Link to="/qaxcr">
                        <img src={qaxcr} alt="qaxcr" className="divTematikProdImg" />
                    </Link>
                    <h1 className="h1TematikProd"> Քաղցրակերների համար </h1>
                </span>
                <span className="spanTematikProd">
                    <Link to="/zatik">
                        <img src={zatik} alt="zatik" className="divTematikProdImg" />
                    </Link>
                    <h1 className="h1TematikProd"> Զատիկ </h1>
                </span>
            </div>
        </div>
    )
}

export default TematikProd;