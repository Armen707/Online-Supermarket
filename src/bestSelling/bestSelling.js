import React, { useContext } from "react";
import { Context } from "../app/context";
import './bestSelling.css';

const BestSelling = () => {

    const { allProducts, createItem } = useContext(Context);

    const elements = allProducts.map((item) => {
        if (item.bestSelling) {
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
            <h1> Լավագույն վաճառքներ </h1>
            <div className="prodNewProd">
                {elements}
            </div>
        </div>
    )
}

export default BestSelling;