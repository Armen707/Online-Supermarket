import React, { useContext } from "react";
import { Context } from "../../app/context";
import './dobriy.css';

const Dobriy = () => {

    const { allProducts, createItem } = useContext(Context);

    const elements = allProducts.map((item) => {
        if (item.brend === "dobriy") {
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
            <h1> Դոբրիյ </h1>
            <div className="prodBestSelling">
                {elements}
            </div>
        </div>
    )
}

export default Dobriy;