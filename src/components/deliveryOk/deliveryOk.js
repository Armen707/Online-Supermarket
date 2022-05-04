import React from "react";
import { Link } from "react-router-dom";
import './deliveryOk.css';

const DeliveryOk = () => {
    return (
        <div className="delOkCont">
            <Link to="/">
                <button className="fatimess btn-outline-secondary">
                    <i className="fa fa-times" />
                </button>
            </Link>
            <h5 className="h5ok"> Ձեր պատվերն ընդունված է։ Շնորհակալություն գնումների համար </h5>
            <Link to="/">
                <button className="btn-outline-secondary btnok">OK</button>
            </Link>
        </div>
    )
}

export default DeliveryOk;