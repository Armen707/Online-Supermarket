import React from 'react';
import './brandMarket.css';
import { Link } from 'react-router-dom';

import armenia from "./images/armenia.jpg";
import bandivan from "./images/bandivan.jpg";
import bekon from "./images/bekon.jpg";
import bifido from "./images/bifido.jpg";
import bonaqua from "./images/bonaqua.jpg";
import cola from "./images/cola.jpg";
import dobriy from "./images/dobriy.jpg";
import nemiroff from "./images/nemiroff.jpg";
import samaraci from "./images/samaraci.jpg";
import atenq from "./images/atenq.jpg";
import nashsad from "./images/nashsad.jpg";
import royalarm from "./images/royalarm.jpg";

const BrandMarket = () => {
    return (
        <div className='divContBrendM'>

            <div className='divBrandMarket m-4'>
                <span className='spanBrandMarket m-4'>
                    <Link to="/cola" >
                        <img className='m-4' src={cola} alt="cola" />
                        <p className='m-4 pBrandMarket'> Կոկա-Կոլա </p>
                    </Link>
                </span>
                <span className='spanBrandMarket m-4'>
                    <Link to="/dobriy" >
                        <img className='m-4' src={dobriy} alt="dobriy" />
                        <p className='m-4 pBrandMarket'> Դոբրիյ </p>
                    </Link>
                </span>
                <span className='spanBrandMarket m-4'>
                    <Link to="/nemiroff" >
                        <img className='m-4' src={nemiroff} alt="nemiroff" />
                        <p className='m-4 pBrandMarket'> Նեմիրոֆֆ </p>
                    </Link>
                </span>
            </div>

            <div className='divBrandMarket m-4'>
                <span className='spanBrandMarket m-4'>
                    <Link to="/bonaqua" >
                        <img className='m-4' src={bonaqua} alt="bonaqua" />
                        <p className='m-4 pBrandMarket'> Բոն Աքուա </p>
                    </Link>
                </span>
                <span className='spanBrandMarket m-4'>
                    <Link to="/bifido" >
                        <img className='m-4' src={bifido} alt="bifido" />
                        <p className='m-4 pBrandMarket'> Բիֆիդո </p>
                    </Link>
                </span>
                <span className='spanBrandMarket m-4'>
                    <Link to="/armenia" >
                        <img className='m-4' src={armenia} alt="armenia" />
                        <p className='m-4 pBrandMarket'> Արմենիա Վայն </p>
                    </Link>
                </span>
            </div>

            <div className='divBrandMarket m-4'>
                <span className='spanBrandMarket m-4'>
                    <Link to="/bekon" >
                        <img className='m-4' src={bekon} alt="bekon" />
                        <p className='m-4 pBrandMarket'> Բեկոն </p>
                    </Link>
                </span>
                <span className='spanBrandMarket m-4'>
                    <Link to="/bandivan" >
                        <img className='m-4' src={bandivan} alt="bandivan" />
                        <p className='m-4 pBrandMarket'> Բանդիվան </p>
                    </Link>
                </span>
                <span className='spanBrandMarket m-4'>
                    <Link to="/samaraci" >
                        <img className='m-4' src={samaraci} alt="samaraci" />
                        <p className='m-4 pBrandMarket'> Բարի Սամարացի </p>
                    </Link>
                </span>
            </div>

            <div className='divBrandMarket m-4'>
                <span className='spanBrandMarket m-4'>
                    <Link to="/atenq" >
                        <img className='m-4' src={atenq} alt="atenq" />
                        <p className='m-4 pBrandMarket'> Աթենք </p>
                    </Link>
                </span>
                <span className='spanBrandMarket m-4'>
                    <Link to="/nashsad" >
                        <img className='m-4' src={nashsad} alt="nashsad" />
                        <p className='m-4 pBrandMarket'> Նաշ Սադ </p>
                    </Link>
                </span>
                <span className='spanBrandMarket m-4'>
                    <Link to="/royalarm" >
                        <img className='m-4' src={royalarm} alt="royalarm" />
                        <p className='m-4 pBrandMarket'> Ռոյալ Արմենիա </p>
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default BrandMarket;