import React from 'react';
import './homePage.css';
import Slider from '../components/slider/slider';
import TopProducts from '../topProducts/topProducts';
import SuperGin from '../superGin/superGin';
import BestSelling from "../bestSelling/bestSelling";
import Tematik from '../tematik/tematik';
import NewProducts from '../newProducts/newProducts';
import Patver from '../patver/patver';

const HomePage = ({onAddedToCard}) => {

    return (
        <div className="divContHomePage">
            <Slider />
            <TopProducts />
            <SuperGin />
            <BestSelling onAddedToCard={onAddedToCard} />
            <Tematik />
            <NewProducts onAddedToCard={onAddedToCard} />
            <Patver />
        </div>
    )
}

export default HomePage;