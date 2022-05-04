import React, { useContext } from "react";
import { Context } from "../../app/context";
import './cacrgin.css';

const CacrGin = () => {

    const { allProducts, createItem } = useContext(Context);

    const elements = allProducts.map((item) => {
        if (item.lowPrice) {
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
            <h1> Ցածր գին </h1>
            <div className="prodBestSelling">
                {elements}
            </div>
        </div>
    )
}

export default CacrGin;