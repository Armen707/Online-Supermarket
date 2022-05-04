import React, { useContext } from "react";
import { Context } from "../../app/context";
import './sweets.css';

const Sweets = () => {

    const { allProducts, createItem } = useContext(Context);

    const elements = allProducts.map((item) => {
        if (item.type === "sweet") {
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
            <h1> Հրուշակեղեն </h1>
            <div className="prodBestSelling">
                {elements}
            </div>
        </div>
    )
}

export default Sweets;