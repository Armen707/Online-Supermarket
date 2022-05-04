import React from "react";
import { Link } from 'react-router-dom';
import './topProducts.css';

import hac from './images/hac.jpg';
import milk from './images/milk.jpg';
import sigaret from './images/sigaret.jpg';
import xmichq from './images/xmichq.jpg';
import hrushakexen from './images/hrushakexen.jpg';

const TopProducts = () => {
    return (
        <div className="m-4">
            <div>
                <h1> Թոփ կատեգորիաներ </h1>
            </div>

            <div className="m-4 divTopProducts">
                <span className="topProducts">
                    <Link to="bread" >
                        <img
                            src={hac}
                            alt="hac" />
                        <h5> Հացամթերք և <br /> թխվածք </h5>
                    </Link>
                </span>
                <span className="topProducts">
                    <Link to="milk">
                        <img
                            src={milk}
                            alt="milk" />
                        <h5> Կաթնամթերք և ձու </h5>
                    </Link>
                </span>
                <span className="topProducts">
                    <Link to="sigaret">
                        <img
                            src={sigaret}
                            alt="sigaret" />
                        <h5> Ծխախոտային <br /> արտադրանք </h5>
                    </Link>
                </span>
                <span className="topProducts">
                    <Link to="drinks">
                        <img
                            src={xmichq}
                            alt="xmichq" />
                        <h5> խմիչքներ </h5>
                    </Link>
                </span>
                <span className="topProducts">
                    <Link to="sweets">
                        <img
                            src={hrushakexen}
                            alt="hrushakexen" />
                        <h5> Հրուշակեղեն </h5>
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default TopProducts;