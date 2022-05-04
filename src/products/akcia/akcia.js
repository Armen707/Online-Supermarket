import React, { useContext } from "react";
import { Context } from "../../app/context";
import './akcia.css';

const Akcia = () => {

    const { allProducts, createItem } = useContext(Context);

    const elements = allProducts.map((item) => {
        if (item.akcia) {
            return createItem (
                item.name,
                item.imgUrl,
                item.price,
                item.description,
                item,
                item.id
            )
        } else {
            return null
        }

    })

    return (
        <div className="bestSellingCont">
            <h1> Ակցիա </h1>
            <div className="prodBestSelling">
                {elements}
            </div>
        </div>
    )
}

export default Akcia;