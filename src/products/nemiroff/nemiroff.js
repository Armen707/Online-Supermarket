import React, { useContext } from "react";
import { Context } from "../../app/context";
import './nemiroff.css';

const Nemiroff = () => {

    const { allProducts, createItem } = useContext(Context);

    const elements = allProducts.map((item) => {
        if (item.brend === "nemiroff") {
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
            <h1> Նեմիրոֆֆ </h1>
            <div className="prodBestSelling">
                {elements}
            </div>
        </div>
    )
}

export default Nemiroff;