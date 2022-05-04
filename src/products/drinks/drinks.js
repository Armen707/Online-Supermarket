import React, { useContext } from "react";
import { Context } from "../../app/context";
import './drinks.css';

const Drinks = () => {

    const { allProducts, createItem } = useContext(Context);

    const elements = allProducts.map((item) => {
        if (item.type === "drinks") {
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
            <h1> Խմիչքներ </h1>
            <div className="prodBestSelling">
                {elements}
            </div>
        </div>
    )
}

export default Drinks;