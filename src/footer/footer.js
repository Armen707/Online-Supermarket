import React from "react";
import { Link } from "react-router-dom";
import './footer.css';

import logo from './images/logo.png';
import arca from './images/arca.png';
import visa from './images/visa.png';
import maestro from './images/maestro.png';
import mastercard from './images/mastercard.png';
import idram from './images/idram.png';

const Footer = () => {

    return (
        <div className="divFooterCont">
            <div className="divFooterHeader">
                <span className="spanLogoFooter">
                    <img src={logo} alt="logo" width="50px" height="50px" className="logoFooter" />
                </span>
                <span className="spanNumberFooter">
                    <p className="contactFooter">+374 12 80 80 22</p>  կամ
                    <p className="contactFooter1">8022</p>
                    <p className="contactFooter">online@tsiran.am</p>
                </span>
            </div>

            <div className="divFooterFooterCont">
                <div className="divFooterFooter">
                    <span className="spanColonka">
                        <span> Վճարման մեթոդներ </span>
                        <div>
                            <img src={arca} alt="arca" className="vjarumFooter" />
                            <img src={visa} alt="visa" className="vjarumFooter" />
                        </div>
                        <div className="vjarumVerjin">
                            <img src={maestro} alt="maestro" className="vjarumFooter" />
                            <img src={mastercard} alt="mastercard" className="vjarumFooter" />
                            <img src={idram} alt="idram" className="vjarumFooter" />
                        </div>
                        <span className="iravunqner"> © Ծիրան Սուպերմարկետ: <br /> Բոլոր իրավունքները պաշտպանված են </span>
                    </span>

                    <span className="spanColonkaText">
                        <Link to="/ourchain">
                            <p className="pTextFooter"> Մեր ցանցը </p>
                        </Link>
                        <Link to="/about">
                            <p className="pTextFooter"> Մեր մասին </p>
                        </Link>
                        <Link to="/career">
                            <p className="pTextFooter"> Թափուր հաստիքներ </p>
                        </Link>
                        <Link to="/questions">
                            <p className="pTextFooter"> Հաճախ տրվող հարցեր </p>
                        </Link>
                    </span>

                    <span className="spanColonkaText">
                        <Link to="/regulations">
                            <p className="pTextFooter"> Կանոններ և պայմաններ </p>
                        </Link>
                        <Link to="/privacy">
                            <p className="pTextFooter"> Գաղտնիության <br /> քաղաքականություն </p>
                        </Link>
                        <Link to="/finance">
                            <p className="pTextFooter"> Ֆինանսական <br /> հաշվետվություններ </p>
                        </Link>
                    </span>

                    <span className="spanIconFooter">
                        <a href="https://www.facebook.com/TsiranMarkets">
                        <i className="fa fa-facebook-official iconFooter"></i>
                        </a>
                        <a href="https://www.instagram.com/tsiran.supermarket/">
                        <i className="fa fa-instagram iconFooter1" ></i>
                        </a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer;