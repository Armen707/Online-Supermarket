import React from "react";
import './curency.css';

const Curency = ({changeCurency}) => {

    changeCurency = (event) => {
            if (event.target.value === 'amd') {
                console.log('Currency AMD')
            }
            if (event.target.value === 'rur') {
                console.log('Currency RUR')
            }
            if (event.target.value === 'usd') {
                console.log('Currency USD')
            }
            if (event.target.value === 'eur') {
                console.log('Currency EUR')
            }
        }

        return (
            <div>
                <select id="curency" onChange={changeCurency} className="selectC" >
                    <option value="amd"> AMD </option>
                    <option value="rur"> RUR </option>
                    <option value="usd"> USD </option>
                    <option value="eur"> EUR </option>
                </select>
            </div>
        )
    }

    export default Curency;