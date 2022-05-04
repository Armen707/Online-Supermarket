import React, { useState, useEffect } from "react";
import './app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Context } from "./context";

import Header from "../header/header";
import HomePage from '../homePage/homePage';
import AllProducts from "../allProducts/allproducts";
import FilteredItems from "../pages/filteredItems/filteredItems";
import OurChain from "../pages/ourChain/ourChain";
import About from "../pages/about/about";
import BrandMarket from "../pages/brandMarket/brendMarket";
import Delivery from "../pages/delivery/delivery";
import DelAdr from "../pages/deladress/deladr";
import Auth from "../pages/auth/auth";
import Zambyux from "../components/zambyux/zambyux";
import DeliveryOk from "../components/deliveryOk/deliveryOk";
import Footer from "../footer/footer";

import Bread from "../products/bread/bread";
import Drinks from "../products/drinks/drinks";
import Milk from "../products/milk/milk";
import Sigaret from "../products/sigaret/sigaret";
import Sweets from "../products/sweets/sweets";

import Akcia from "../products/akcia/akcia"
import Sepakan from "../products/sepakan/sepakan";
import SuperGin from "../products/supergin/supergin";
import CacrGin from "../products/cacrgin/cacrgin";
import TematikProd from "../pages/tematikProd/tematikProd";

import Cola from "../products/cola/cola";
import Dobriy from "../products/dobriy/dobriy";
import Nemiroff from "../products/nemiroff/nemiroff";
import Asiakan from "../products/asiakan/asiakan";
import Italakan from "../products/italakan/italakan";

//images
import gini from './images/gini.jpg';
import oxi from './images/oxi.jpg';
import piva from './images/piva.jpg';
import shampayn from './images/shampayn.jpg';
import viski from './images/viski.jpg';
import cola from './images/cola.jpg';
import energy from './images/energy.jpg';
import coffe from './images/coffe.jpg';
import karmirqaxac from './images/karmirqacax.jpg';
import qacax from './images/qacax.jpg';
import spitakqacax from './images/spitakqacax.jpg';
import volor from './images/volor.jpg';
import kat from './images/kat.jpg';
import katani from './images/katani.jpg';
import katashtarak from './images/katashtarak.jpg';
import kaxamb from './images/kaxamb.jpg';
import lapsha from './images/lapsha.jpg';
import sous from './images/sous.jpg';
import barilla from './images/barilla.jpg';
import corice from './images/corice.jpg';
import rega from './images/rega.jpg';
import baget from './images/baget.jpg';
import hackokteil from './images/hackokteil.jpg';
import lavash from './images/lavash.jpg';
import matnaqashm from './images/matnaqashm.jpg';
import mix from './images/mix.jpg';
import citrus from './images/citrus.jpg';
import xaxox from './images/xaxox.jpg';
import delikat from './images/delikat.jpg';
import premium from './images/premium.jpg';
import pxpex from './images/pxpex.jpg';
import kent from './images/kent.jpg';
import davidoff from './images/davidoff.jpg';
import marlboro from './images/marlboro.jpg';
import merci from './images/merci.jpg';
import pecheni from './images/pecheni.jpg';
import vafli from './images/vafli.jpg';

const App = ({ ChangeAdress }) => {

    const allProducts = [
        {
            id: 100,
            name: 'Սպիտակ անապակ գինի',
            imgUrl: gini,
            price: 1950,
            description: "0.7լ",
            quantity: 1,
            type: "drinks",
            akcia: false,
            sepakan: false,
            superPrice: false,
            lowPrice: false,
            bestSelling: true,
            newProduct: false
        },
        {
            id: 101,
            name: 'Օղի Օհանյան',
            imgUrl: oxi,
            price: 7500,
            description: "0.7լ",
            quantity: 1,
            type: "drinks",
            akcia: false,
            sepakan: false,
            superPrice: false,
            lowPrice: false,
            bestSelling: true,
            newProduct: false
        },
        {
            id: 102,
            name: 'Carlsberg',
            imgUrl: piva,
            price: 600,
            description: "0.5լ",
            quantity: 1,
            type: "drinks",
            akcia: false,
            sepakan: false,
            superPrice: false,
            lowPrice: false,
            bestSelling: false,
            newProduct: false
        },
        {
            id: 103,
            name: 'Շամպայն կիսաչոր',
            imgUrl: shampayn,
            price: 1600,
            description: "0.7լ",
            quantity: 1,
            type: "drinks",
            akcia: false,
            sepakan: false,
            superPrice: false,
            lowPrice: false,
            bestSelling: false,
            newProduct: false
        },
        {
            id: 104,
            name: 'Jack Daniels',
            imgUrl: viski,
            price: 15600,
            description: "0.7լ",
            quantity: 1,
            type: "drinks",
            akcia: false,
            sepakan: false,
            superPrice: false,
            lowPrice: false,
            bestSelling: true,
            newProduct: false
        },
        {
            id: 105,
            name: 'Coca-Cola',
            imgUrl: cola,
            price: 450,
            description: "1լ",
            quantity: 1,
            type: "drinks",
            brend: "cola",
            akcia: false,
            sepakan: false,
            superPrice: false,
            lowPrice: false,
            bestSelling: true,
            newProduct: false
        },
        {
            id: 106,
            name: 'Cola-Energy',
            imgUrl: energy,
            price: 600,
            description: "0.25լ",
            quantity: 1,
            type: "drinks",
            brend: "cola",
            akcia: false,
            sepakan: false,
            superPrice: false,
            lowPrice: false,
            bestSelling: false,
            newProduct: false
        },
        {
            id: 107,
            name: 'Cola-Coffe',
            imgUrl: coffe,
            price: 220,
            description: "0.25լ",
            quantity: 1,
            brend: "cola",
            type: "drinks",
            akcia: false,
            sepakan: false,
            superPrice: false,
            lowPrice: false,
            bestSelling: false,
            newProduct: false
        },

        {
            id: 108,
            name: 'Կարմիր գինու քացախ',
            imgUrl: karmirqaxac,
            price: 1050,
            description: "0.5լ",
            quantity: 1,
            type: "qacax",
            akcia: false,
            sepakan: false,
            superPrice: false,
            lowPrice: false,
            bestSelling: false,
            newProduct: true
        },
        {
            id: 109,
            name: 'Խնձորի քացախ',
            imgUrl: qacax,
            price: 1220,
            description: "0.5լ",
            quantity: 1,
            type: "qacax",
            akcia: false,
            sepakan: false,
            superPrice: false,
            lowPrice: true,
            bestSelling: false,
            newProduct: true

        },
        {
            id: 110,
            name: 'Սպիտակ գինու քացախ',
            imgUrl: spitakqacax,
            price: 1050,
            description: "0.5լ",
            quantity: 1,
            type: "qacax",
            akcia: true,
            sepakan: false,
            superPrice: false,
            lowPrice: false,
            bestSelling: false,
            newProduct: true
        },
        {
            id: 111,
            name: 'Կանաչ ոլոռ',
            imgUrl: volor,
            price: 350,
            description: "400գր",
            quantity: 1,
            type: "new",
            akcia: true,
            sepakan: false,
            superPrice: false,
            lowPrice: false,
            bestSelling: false,
            newProduct: true
        },
        {
            id: 112,
            name: 'Կաթ Պրոստոկվաշինո',
            imgUrl: kat,
            price: 920,
            description: "950 մլ",
            quantity: 1,
            type: "milk",
            akcia: true,
            sepakan: false,
            superPrice: false,
            lowPrice: false,
            bestSelling: false,
            newProduct: false,
        },
        {
            id: 113,
            name: 'Կաթ Անի',
            imgUrl: katani,
            price: 530,
            description: "1 լ",
            quantity: 1,
            type: "milk",
            akcia: true,
            sepakan: false,
            superPrice: false,
            lowPrice: true,
            bestSelling: false,
            newProduct: false,
        },
        {
            id: 114,
            name: 'Կաթ Աշտարակ',
            imgUrl: katashtarak,
            price: 490,
            description: "1 լ",
            quantity: 1,
            type: "milk",
            akcia: false,
            sepakan: false,
            superPrice: false,
            lowPrice: true,
            bestSelling: false,
            newProduct: false,
        },
        {
            id: 115,
            name: 'Ծովային կաղամբ',
            imgUrl: kaxamb,
            price: 880,
            description: "150 գր",
            quantity: 1,
            type: "asiakan",
            akcia: true,
            sepakan: false,
            superPrice: false,
            lowPrice: true,
            bestSelling: false,
            newProduct: true,
        },
        {
            id: 116,
            name: 'Լապշա',
            imgUrl: lapsha,
            price: 330,
            description: "90 գր",
            quantity: 1,
            type: "asiakan",
            akcia: false,
            sepakan: false,
            superPrice: true,
            lowPrice: false,
            bestSelling: false,
            newProduct: false,
        },
        {
            id: 117,
            name: 'Սոուս ֆունչոզայի համար',
            imgUrl: sous,
            price: 390,
            description: "60 գր",
            quantity: 1,
            type: "asiakan",
            akcia: false,
            sepakan: false,
            superPrice: false,
            lowPrice: false,
            bestSelling: false,
            newProduct: false,
        },
        {
            id: 118,
            name: 'Լազանյա Ռեջա',
            imgUrl: rega,
            price: 880,
            description: "500 գր",
            quantity: 1,
            type: "italakan",
            akcia: true,
            sepakan: false,
            superPrice: true,
            lowPrice: false,
            bestSelling: false,
            newProduct: true,
        },
        {
            id: 119,
            name: 'Ձիթապտղի Ձեթ',
            imgUrl: corice,
            price: 330,
            description: "0.5 լ",
            quantity: 1,
            type: "italakan",
            akcia: false,
            sepakan: false,
            superPrice: false,
            lowPrice: false,
            bestSelling: false,
            newProduct: false,
        },
        {
            id: 120,
            name: 'Սոուս Զիթապտղով',
            imgUrl: barilla,
            price: 390,
            description: "400 գր",
            quantity: 1,
            type: "italakan",
            akcia: false,
            sepakan: false,
            superPrice: false,
            lowPrice: false,
            bestSelling: false,
            newProduct: true,
        },
        {
            id: 121,
            name: 'Հաց Կոկտեյլ Պիկանտ',
            imgUrl: hackokteil,
            price: 310,
            description: "300 գր",
            quantity: 1,
            type: "hacamterq",
            akcia: false,
            sepakan: false,
            superPrice: false,
            lowPrice: false,
            bestSelling: false,
            newProduct: true,
        },
        {
            id: 122,
            name: 'Բագետ',
            imgUrl: baget,
            price: 270,
            description: "1 հատ",
            quantity: 1,
            type: "hacamterq",
            akcia: false,
            sepakan: true,
            superPrice: false,
            lowPrice: false,
            bestSelling: false,
            newProduct: false,
        },
        {
            id: 123,
            name: 'Մատնաքաշ',
            imgUrl: matnaqashm,
            price: 210,
            description: "1 հատ",
            quantity: 1,
            type: "hacamterq",
            akcia: false,
            sepakan: true,
            superPrice: false,
            lowPrice: false,
            bestSelling: false,
            newProduct: false,
        },
        {
            id: 124,
            name: 'Լավաշ',
            imgUrl: lavash,
            price: 500,
            description: "4 հատ",
            quantity: 1,
            type: "hacamterq",
            akcia: false,
            sepakan: true,
            superPrice: false,
            lowPrice: false,
            bestSelling: false,
            newProduct: false,
        },
        {
            id: 125,
            name: 'Բնական սոկ միքս',
            imgUrl: mix,
            price: 600,
            description: "1լ",
            quantity: 1,
            brend: "dobriy",
            type: "drinks",
            akcia: true,
            sepakan: false,
            superPrice: false,
            lowPrice: false,
            bestSelling: false,
            newProduct: false,
        },
        {
            id: 126,
            name: 'Բնական սոկ ցիտրուս',
            imgUrl: citrus,
            price: 600,
            description: "1լ",
            quantity: 1,
            brend: "dobriy",
            type: "drinks",
            akcia: false,
            sepakan: false,
            superPrice: false,
            lowPrice: true,
            bestSelling: false,
            newProduct: false,
        },
        {
            id: 127,
            name: 'Բնական սոկ խաղող',
            imgUrl: xaxox,
            price: 580,
            description: "1լ",
            quantity: 1,
            brend: "dobriy",
            type: "drinks",
            akcia: false,
            sepakan: false,
            superPrice: true,
            lowPrice: false,
            bestSelling: false,
            newProduct: false,
        },
        {
            id: 128,
            name: 'Օղի Դելիկատ',
            imgUrl: delikat,
            price: 2950,
            description: "0.7լ",
            quantity: 1,
            brend: "nemiroff",
            type: "drinks",
            akcia: true,
            sepakan: false,
            superPrice: false,
            lowPrice: false,
            bestSelling: false,
            newProduct: false,
        },
        {
            id: 129,
            name: 'Օղի Պրեմիում',
            imgUrl: premium,
            price: 3900,
            description: "0.7լ",
            quantity: 1,
            brend: "nemiroff",
            type: "drinks",
            akcia: false,
            sepakan: false,
            superPrice: true,
            lowPrice: false,
            bestSelling: false,
            newProduct: false,
        },
        {
            id: 130,
            name: 'Օղի կծու պղպեղով',
            imgUrl: pxpex,
            price: 3900,
            description: "0.7լ",
            quantity: 1,
            brend: "nemiroff",
            type: "drinks",
            akcia: false,
            sepakan: false,
            superPrice: false,
            lowPrice: false,
            bestSelling: true,
            newProduct: false,
        },
        {
            id: 131,
            name: 'Kent',
            imgUrl: kent,
            price: 800,
            description: "1 Տուփ",
            quantity: 1,
            type: "sigaret",
            akcia: false,
            sepakan: false,
            superPrice: false,
            lowPrice: false,
            bestSelling: false,
            newProduct: false,
        },
        {
            id: 132,
            name: 'Davidoff',
            imgUrl: davidoff,
            price: 750,
            description: "1 Տուփ",
            quantity: 1,
            type: "sigaret",
            akcia: false,
            sepakan: false,
            superPrice: false,
            lowPrice: false,
            bestSelling: false,
            newProduct: false,
        },
        {
            id: 133,
            name: 'Marlboro',
            imgUrl: marlboro,
            price: 900,
            description: "1 Տուփ",
            quantity: 1,
            type: "sigaret",
            akcia: false,
            sepakan: false,
            superPrice: false,
            lowPrice: false,
            bestSelling: false,
            newProduct: false,
        },
        {
            id: 134,
            name: 'Շոկոլադ Merci',
            imgUrl: merci,
            price: 3400,
            description: "1 Տուփ",
            quantity: 1,
            type: "sweet",
            akcia: true,
            sepakan: false,
            superPrice: true,
            lowPrice: false,
            bestSelling: false,
            newProduct: false,
        },
        {
            id: 135,
            name: 'Թխվածքաբլիթ չամիչով',
            imgUrl: pecheni,
            price: 550,
            description: "1 Տուփ",
            quantity: 1,
            type: "sweet",
            akcia: false,
            sepakan: true,
            superPrice: false,
            lowPrice: true,
            bestSelling: true,
            newProduct: false,
        },
        {
            id: 136,
            name: 'Վաֆլի շոկոլադապատ',
            imgUrl: vafli,
            price: 900,
            description: "1 Տուփ",
            quantity: 1,
            type: "sweet",
            akcia: true,
            sepakan: true,
            superPrice: false,
            lowPrice: true,
            bestSelling: true,
            newProduct: true,
        },
    ]

    const createItem = (name, imgUrl, price, description,
        item, key, id, quantity) => {
        return (
            <div
                id={id}
                key={key}
                quantity={quantity}
                className="divProd text-center" >
                <span> <img src={imgUrl} alt="name" /> </span>
                <h3 className="m-4"> {name} </h3>
                <span className="m-4"> {description} </span>
                <div className="m-3 divPrice">
                    <h4> {price}դր </h4>
                    <button className="btn-outline-secondary btnGnel"
                        onClick={() => onAddedToCard(item)}> Գնել </button>
                </div>
            </div>
        )
    }

    const adress = [
        { value: "Հ. Քոչար 2ա", id: 1 },
        { value: "Տ․ Պետրոսյան 44/1", id: 2 }
    ]

    const [value, setValue] = useState(adress[1].value);

    ChangeAdress = () => {
        const inputs = document.getElementsByClassName('inp');
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].checked) {
                setValue(inputs[i].value)
            }
        }
    }

    const [cardItems, setCardItems] = useState(JSON.parse(localStorage.getItem('cardItems') || '[]'));

    const onAddedToCard = (item) => {
        const newList = [
            ...cardItems,
            item
        ];

        const isexist = cardItems.some(i => i.id === item.id)

        if (isexist) {
            const itemQuant = cardItems.map((i) => {
                if (i.id === item.id) {
                    i.quantity = i.quantity + 1
                }
                return i
            })
            setCardItems(itemQuant)
        } else {
            setCardItems(newList)
        }
    }

    const deleteAllItems = () => {
        setCardItems([]);
    }

    const deliveryOK = () => {
        console.log('Պատվերն Ընդունված է');
        deleteAllItems()
    }

    const removeItem = (id) => {
        setCardItems(state => state.filter(item => item.id !== id));
    }

    let res = 0;
    cardItems.map((item) => {
        res += item.quantity
        return res
    })

    const newCountLength = res + 1

    const [filterResult, setFilterResult] = useState(JSON.parse(localStorage.getItem('FilterValue') || ""));

    let filterValue = { filterResult }
    const itemFilter = (e) => {

        if (e.keyCode === 13) {
            filterValue = e.target.value
            setFilterResult(filterValue)
            window.location = '/filteredItems'
        }
    }


    localStorage.setItem('FilterValue', JSON.stringify(filterValue));

    useEffect(() => {
        localStorage.setItem('cardItems', JSON.stringify(cardItems));
    }, [cardItems])

    return (
        <Context.Provider value={{
            allProducts, createItem
        }}>
            <Router>
                <Header
                    cardItems={cardItems}
                    ChangeAdress={ChangeAdress}
                    value={value}
                    newCountLength={newCountLength}
                    itemFilter={itemFilter}
                />
                <Routes>
                    {/* header */}
                    <Route exact path="/" element={<HomePage onAddedToCard={onAddedToCard} />} />
                    <Route exact path="/allProducts" element={<AllProducts
                        onAddedToCard={onAddedToCard} />} />
                    <Route exact path="/filteredItems" element={<FilteredItems
                        filterValue={filterValue}
                        allProducts={allProducts}
                        createItem={createItem} />} />
                    <Route exact path="/ourchain" element={<OurChain />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/DelAdr" element={<DelAdr
                        adress={adress}
                        ChangeAdress={ChangeAdress} />} />
                    <Route exact path="/brendmarket" element={<BrandMarket />} />
                    <Route exact path="/delivery" element={<Delivery />} />
                    <Route exact path="/auth" element={<Auth />} />
                    <Route exact path="/zambyux" element={<Zambyux
                        cardItems={cardItems}
                        setCardItems={setCardItems}
                        removeItem={removeItem}
                        deliveryOK={deliveryOK}
                        deleteAllItems={deleteAllItems}
                        newCountLength={newCountLength} />}
                    />
                    <Route exact path="/deliveryok" element={<DeliveryOk />} />

                    {/* top products */}
                    <Route exact path="/bread" element={<Bread onAddedToCard={onAddedToCard} />} />
                    <Route exact path="/milk" element={<Milk onAddedToCard={onAddedToCard} />} />
                    <Route exact path="/sigaret" element={<Sigaret onAddedToCard={onAddedToCard} />} />
                    <Route exact path="/drinks" element={<Drinks onAddedToCard={onAddedToCard} />} />
                    <Route exact path="/sweets" element={<Sweets onAddedToCard={onAddedToCard} />} />

                    {/* akcia */}
                    <Route exact path="/akcia" element={<Akcia onAddedToCard={onAddedToCard} />} />
                    <Route exact path="/sepakan" element={<Sepakan onAddedToCard={onAddedToCard} />} />
                    <Route exact path="/supergin" element={<SuperGin onAddedToCard={onAddedToCard} />} />
                    <Route exact path="/cacrgin" element={<CacrGin onAddedToCard={onAddedToCard} />} />

                    {/* brendmarket */}
                    <Route exact path="/cola" element={<Cola onAddedToCard={onAddedToCard} />} />
                    <Route exact path="/dobriy" element={<Dobriy onAddedToCard={onAddedToCard} />} />
                    <Route exact path="/nemiroff" element={<Nemiroff onAddedToCard={onAddedToCard} />} />

                    <Route exact path="/tematikProd" element={<TematikProd />} />
                    <Route exact path="/asiakan" element={<Asiakan onAddedToCard={onAddedToCard} />} />
                    <Route exact path="/italakan" element={<Italakan onAddedToCard={onAddedToCard} />} />
                    <Route exact path="/asiakan" element={<Asiakan onAddedToCard={onAddedToCard} />} />
                </Routes>
                <Footer />
            </Router>
        </Context.Provider>
    )
}

export default App;