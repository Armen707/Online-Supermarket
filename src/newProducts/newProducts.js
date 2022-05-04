import React, { useContext } from "react";
import { Context } from "../app/context";
import './newProducts.css';

const NewProducts = () => {

    const { allProducts, createItem } = useContext(Context);

    const elements = allProducts.map((item) => {
        if (item.newProduct) {
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
            <h1> Նոր ապրանքներ </h1>
            <div className="prodNewProd">
                {elements}
            </div>
        </div>
    )
}

export default NewProducts;