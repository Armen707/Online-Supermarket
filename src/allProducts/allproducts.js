import React, { useContext } from "react";
import { Context } from "../app/context";
import './allProducts.css';

const AllProducts = () => {

    const { allProducts, createItem } = useContext(Context);

    const elements = allProducts.map((item) => {
        return createItem (
            item.name,
            item.imgUrl,
            item.price,
            item.description,
            item,
            item.id
        )
    })

    return (
        <div className="contAllProducts">
            {elements}
        </div>
    )
}

export default AllProducts;