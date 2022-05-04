import React from "react";
import { Link } from "react-router-dom";
import './deladr.css';

const DelAdr = ({ adress, ChangeAdress }) => {

    const elements = adress.map((item) => {
        return (
            <h2 key={item.id}>
                <input id={item.id}
                    type="checkbox"
                    value={item.value}
                    className="inp" />
                {item.value}
            </h2>
        )
    })

    return (
        <div className="container11" >
            <div className="divDelHeader">
                <span> <i className="fa fa-truck truckDel"></i> </span>
                <span className="spanH1Del"><h1> Առաքման մասնաճյուղ </h1></span>
                <Link to="/">
                    <button className="buttonTrashDel btn-outline-secondary ">
                        <i className="fa fa-times" />
                    </button>
                </Link>
            </div>
            <h5 className="h5Del">
                Առաքումն առավել արդյունավետ կազմակերպելու համար խնդրում ենք նշված
                ցանկից ընտրել Ձեզ ամենամոտ Ծիրան սուպերմարկետը: Նշված հասցեներից
                որևէ մեկը չընտրելու դեպքում առաքումը կկատարվի Դավիթաշենի
                Ծիրան սուպերմարկետից (Տ. Պետրոսյան 44/1)
            </h5>

            <h5 className="qErevanDel"> Երևան ք․ </h5>
            <div className="divElementsDel">
                {elements}
            </div>
            <Link to="/">
                <button
                    className="btn-outline-secondary buttonOKDel"
                    onClick={ChangeAdress}>
                    Հաստատել հասցեն
                </button>
            </Link>
        </div>
    )
}



export default DelAdr;