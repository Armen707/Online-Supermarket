import React, { useContext } from "react";
import { Context } from "../../app/context";
import './milk.css';

const Milk = () => {

    const { allProducts, createItem } = useContext(Context);

    const elements = allProducts.map((item) => {
        if (item.type === "milk") {
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
            <h1> Կաթնամթերք </h1>
            <div className="prodBestSelling">
                {elements}
            </div>
        </div>
    )
}

export default Milk;