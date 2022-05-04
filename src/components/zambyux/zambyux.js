import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './zambyux.css';
import toprak from "./images/toprak.jpg.png"
import basket from "./images/emptybasket.jpg"

const Zambyux = ({ cardItems, setCardItems, deleteAllItems, removeItem, deliveryOK, newCountLength }) => {

    let toprakQuant = 1;
    let toprakPrice = 40;

    if (newCountLength === 1) {
        toprakQuant = 1
        toprakPrice = 40
    } else {
        toprakQuant = Math.ceil(newCountLength * 0.25)
        toprakPrice = toprakPrice * toprakQuant
    }

    let sum = 0;
    for (let i = 0; i < cardItems.length; i++) {
        sum += cardItems[i].price * cardItems[i].quantity
    }

    const price = sum + toprakPrice

    const itemPlus = (id) => {
        const itemQuant = cardItems.map((item) => {
            if (item.id === id) {
                item.quantity = item.quantity + 1
            }
            return item
        })
        setCardItems(itemQuant)
    }

    const itemMinus = (id) => {
        const itemQuant = cardItems.map((item) => {
            if (item.quantity > 1) {
                if (item.id === id) {
                    item.quantity = item.quantity - 1
                }
                return item
            } else {
                item.quantity = 1
            }
            return item
        })
        setCardItems(itemQuant)
    }

    useEffect(() => {
        localStorage.setItem('cardItems', JSON.stringify(cardItems));
    }, [cardItems])

    const elements = cardItems.map((item) => {
        const itemPrice = item.quantity * item.price

        return (
            <div className="divContProd" key={item.id} id={item.id}>
                <span className="spanItemImg" >
                    <img src={item.imgUrl} alt="imgUrl" width="60px" height="60px" className="itemImg" />
                </span>

                <span className="spanItemName">
                    {item.name}
                </span>

                <span className="spanItemCount ">
                    <button className="btn-outline-secondary btnminus"
                        onClick={() => itemMinus(item.id)} >
                        <i className="fa fa-minus"></i>
                    </button>
                    <input
                        value={item.quantity}
                        className="itemInput"
                        readOnly
                    />
                    <button className="btn-outline-secondary btnplus"
                        onClick={() => itemPlus(item.id)} >
                        <i className="fa fa-plus"></i>
                    </button>
                </span>

                <span className="spanItemPrice">
                    {itemPrice} դր
                </span>

                <span className="spanItemDelete">
                    <button className=" btn-outline-danger btn-sm "
                        onClick={() => removeItem(item.id)}  >
                        <i className="fa fa-trash-o" />
                    </button>
                </span>
            </div>
        )
    })

    if (elements.length > 0) {
        return (
            <div>
                <div className="divContainerZambyux" >
                    <div className="divZambyuxHeader">
                        <span><h3> Զամբյուղ </h3></span>
                        <Link to="/">
                            <button className="btn-outline-secondary buttonclose" >
                                <i className="fa fa-times" />
                            </button>
                        </Link>
                    </div>

                    <div className="divZambyuxDatarkel">
                        <Link to="/">
                            <button className="sharunakelGnumner btn-outline-secondary">
                                Շարունակել գնումները
                            </button>
                        </Link>
                        <button className="datarkelZamyux btn-outline-secondary">
                            <span> <i className="fa fa-trash-o" /> </span>
                            <span onClick={deleteAllItems}> Դատարկել զամբյուղը </span>
                        </button>
                    </div>

                    {elements}

                    <div className="divContToprak">
                        <span className="spanToprak">
                            <img src={toprak} alt="toprak" width="50" height="60px" />
                        </span>

                        <span className="spanToprak1"> Տոպրակ </span>
                        <span className="spanToprImg">
                            <input type="text" value={toprakQuant} className="itemInput" disabled />
                        </span>
                        <span className="toprakPrice"> {toprakPrice} դր </span>
                        <span></span>
                    </div>

                    <hr className="hr" />

                    <div className="divContPatver">
                        <span className="spanTextPatver">
                            Ընդամենը {price} դր
                        </span>
                        <span>
                            <Link to="/deliveryok">
                                <button className="btn btn-outline-secondary patver"
                                    onClick={deliveryOK} >
                                    Պատվիրել
                                </button>
                            </Link>
                        </span>
                    </div>

                </div>
            </div >
        )
    } else {
        return (
            <div className="divContEmpty" >
                <div className="divZambyuxHeader">
                    <span><h3> Զամբյուղ </h3></span>
                    <Link to="/">
                        <button className="btn-outline-secondary buttonclose" >
                            <i className="fa fa-times" />
                        </button>
                    </Link>
                </div>

                <h2 className="h2empty"> Զամբյուղը դատարկ է </h2>
                <h4 className="h4empty"> Զամբյուղը դատարկ է: Խնդրում ենք ավելացնել ապրանքներ: </h4>

                <div className="divBasket">
                    <img src={basket} alt="basket" />
                </div>

                <div className="divButtonZamb">
                    <Link to="/">
                        <button className="buttonZambText"> Կատարել գնումներ </button>
                    </Link>
                </div>

            </div>
        )
    }
}

export default Zambyux;