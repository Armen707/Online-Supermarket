import React from "react";
import './superGin.css';
import { Link } from 'react-router-dom';


import xndzor from './images/xndzor.jpg';
import bulki from './images/bulki.jpg';
import zexcher from './images/zexcher.jpg';
import arkx from './images/arkx.jpg';

const SuperGin = () => {

    return (
        <div className="divContSuperGin">
           <span className="m-4"> <h1> Ակցիա </h1> </span>

            <div className="divSuperGin">
                <Link to="akcia">
                <div className="m-4 divCont">
                    <div className="m-4 divh3">
                        <h3 className="h3SuperGinAkciya">
                            Ակցիա
                        </h3>
                        <h6 className="m-4">
                            Բոլոր ակցիաները այս բաժնում
                        </h6>
                    </div>
                    <div >
                        <img src={xndzor} alt="xndzor" />
                    </div>
                </div>
                </Link>

                <Link to="sepakan">
                <div className="m-4 divCont1">
                    <div className="m-4 divh3">
                        <h3 className=" h3SuperGinAkciya1">
                            Սեփական
                        </h3>
                        <h6 className="m-4">
                            Ընտրեք Լավագույնը
                        </h6>
                    </div>
                    <div >
                        <img src={bulki} alt="bulki" />
                    </div>
                </div>
                </Link>
            </div>

            <div className="divSuperGin">
                <Link to="supergin">
                <div className="m-4 divCont3">
                    <div className="m-4 divh3">
                        <h3 className=" h3SuperGinAkciya3">
                            Սուպեր գին
                        </h3>
                        <h6 className="m-4">
                            Միշտ 30% և ավել զեղչ
                        </h6>
                    </div>
                    <div >
                        <img src={zexcher} alt="zexcher" />
                    </div>
                </div>
                </Link>

                <Link to="cacrgin">
                <div className="m-4 divCont4">
                    <div className="m-4 divh3">
                        <h3 className="h3SuperGinAkciya4">
                            Ցածր գին
                        </h3>
                        <h6 className="m-4">
                            Լավագույն գները
                        </h6>
                    </div>
                    <div >
                        <img src={arkx} alt="arkx" />
                    </div>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default SuperGin;