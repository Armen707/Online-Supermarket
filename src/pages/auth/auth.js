import React, { useState } from "react";
import { Link } from "react-router-dom";
import './auth.css';

import loginimg from './images/loginimg.jpg'

const Auth = () => {

    const [inputEmail, setInputEmail] = useState("")
    const [inputPassword, setInputPassword] = useState("")

    const tryEmail = (e) => {
        setInputEmail(e.target.value)
        const value = e.target.value.split('').reverse()
        const newValue = value.slice(0, 4).join('')
        if (newValue === 'moc.' || newValue === 'ur.l' || newValue === 'ur.x') {
            e.target.style.border = "2px solid green"
        } else {
            e.target.style.border = "2px solid red"
        }
    }

    const tryPassword = (e) => {
        setInputPassword(e.target.value)
        if (e.target.value.length <= 5) {
            e.target.style.border = "2px solid red"
        } else {
            e.target.style.border = "2px solid green"
        }
    }

    return (
        <div className="divLoginCont">
            <div className="divAuth1">
                <div className="divInerContAuth grancumAuth">
                    <span>
                        <h3>Մուտք</h3>
                    </span>
                    <span>
                        <Link to="register">
                            <button className="btn-outline-secondary buttonAuthGrancvel">Գրանցում</button>
                        </Link>
                    </span>
                </div>

                <div className="divInerContAuth">
                    <p className="textInputAuth">էլ․ հասցե</p>
                    <input className="inputAuth" placeholder="user@email.com"
                        value={inputEmail}
                        onChange={(e) => tryEmail(e)} />
                </div>

                <div className="divInerContAuth">
                    <p className="textInputAuth">Գաղտնաբառ</p>
                    <input className="inputAuth" placeholder="******"
                        value={inputPassword}
                        onChange={(e) => tryPassword(e)} />
                </div>

                <div className="divInerContAuth">
                    <button className="btn-outline-secondary buttonAuthMutq">Մուտք գործել</button>
                </div>

                <div className="divInerContAuth">
                    <Link to="/resetPassword" className="linkAuth">
                        Մոռացե՞լ եք գաղտնաբառը
                    </Link>
                </div>

                <div className="textayAylMutqAuth">
                    Կամ մուտք գործեք սոցիալական օգտահաշվի միջոցով
                </div>

                <div className="divAylMutqAuth">
                    <span>
                        <a href="https://www.facebook.com/" className="aMutqAuth">
                            <span><i className="fa fa-facebook iconAuth"></i> </span>
                            <p className="pAylMutqAuth">Մուտք գործել</p>
                        </a>
                    </span>
                    <span>
                        <a href="https://www.gmail.com/" className="aMutqAuth">
                            <span> <i className="fa fa-google iconAuth"></i> </span>
                            <p className="pAylMutqAuth">Մուտք գործել</p>
                        </a>
                    </span>
                </div>
            </div>

            <div className="divAuth2">
                <img src={loginimg} alt="loginimg" width="480px" height="550px" />
            </div>
        </div>
    )
}

export default Auth;