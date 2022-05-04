import React from "react";
import { useState } from "react";
import './lang.css'
import flagarm from './images/flagarm.png';
import flagrus from './images/rus.png';
import flageng from './images/eng.png';

const Lang = (changeLanguages) => {
    const flags = [flagarm, flagrus, flageng];

    const image = {
        src: flags[0],
        height: "25px",
        width: "25px",
        alt: "logo"
    }

    const [flagIcon, setflagIcon] = useState(flags[0]);

    changeLanguages = (event) => {
        if (event.target.value === 'eng') {
            setflagIcon(flags[2])
            console.log('Changed to ENGLISH')
        }
        if (event.target.value === 'arm') {
            setflagIcon(flags[0])
            console.log('Changed to ARMENIAN')
        }
        if (event.target.value === 'rus') {
            setflagIcon(flags[1])
            console.log('Changed to RUSSIAN')
        }
    }

    return (
        <div>
            <img
                src={flagIcon}
                height={image.height}
                width={image.width}
                alt={image.alt}
            />

            <select defaultValue={'arm'} onChange={changeLanguages} className="selectL" >
                <option value={'eng'} > Eng </option>
                <option value={'arm'} > Հայ </option>
                <option value={'rus'} > Рус </option>
            </select>
        </div>
    )
}

export default Lang;