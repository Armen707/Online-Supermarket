import React, { useContext } from "react";
import { Context } from "../../app/context";
import './sepakan.css';

const Sepakan = () => {

    const { allProducts, createItem } = useContext(Context);

    const elements = allProducts.map((item) => {
        if (item.sepakan) {
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
            <h1> Սեփական արտադրանք </h1>
            <div className="prodBestSelling">
                {elements}
            </div>
        </div>
    )
}

export default Sepakan;