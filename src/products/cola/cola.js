import React, { useContext } from "react";
import { Context } from "../../app/context";
import './cola.css';

const Cola = () => {

    const { allProducts, createItem } = useContext(Context);

    const elements = allProducts.map((item) => {
        if (item.brend === "cola") {
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
            <h1> Կոկա-Կոլա </h1>
            <div className="prodBestSelling">
                {elements}
            </div>
        </div>
    )
}

export default Cola;