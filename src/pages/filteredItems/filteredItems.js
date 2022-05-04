import React from 'react';
import './filteredItems.css';

import search from './images/search.png'

const FilteredItems = ({ filterValue, allProducts, createItem }) => {

    const filteredValue = filterValue.filterResult.filterResult

    const ItemFilter = () => {
        const filterName = (str) => {
            const res = str.split('').slice(0, 3).join('')
            return res.toLowerCase()
        }

        const filterName1 = (str) => {
            const res = str.split('').slice(0, 4).join('')
            return res.toLowerCase()
        }

        const filterName2 = (str) => {
            const res = str.split('').slice(0, 5).join('')
            return res.toLowerCase()
        }

        const filterNameUp = (str) => {
            const res = str.split('').slice(0, 3).join('')
            return res
        }

        const filterNameUp1 = (str) => {
            const res = str.split('').slice(0, 4).join('')
            return res
        }

        const filterNameUp2 = (str) => {
            const res = str.split('').slice(0, 5).join('')
            return res
        }
        const items = []
        const elements = allProducts.map((item) => {
            if (filteredValue === item.type ||
                filteredValue === item.name ||
                filteredValue === item.name.toLowerCase() ||
                filteredValue === item.brend ||
                filteredValue === filterName(item.name) ||
                filteredValue === filterName1(item.name) ||
                filteredValue === filterName2(item.name) ||
                filteredValue === filterNameUp(item.name) ||
                filteredValue === filterNameUp1(item.name) ||
                filteredValue === filterNameUp2(item.name)) {
                items.push(item)

                return createItem(
                    item.name,
                    item.imgUrl,
                    item.price,
                    item.description,
                    item,
                    item.id
                )
            }
            return null
        })

        if (items.length > 0) {
            return elements
        } else {
            return (
                <div className='emptyItemFilter'>
                    <h2 className='h2ItemFilter m-4'>
                        "{filteredValue}" Որոնման արդյունքում ոչինչ չի գտնվել:
                    </h2>
                    <h5 className='h6ItemFilter m-4'>
                        Փորձեք պարենային և ոչ պարենային ենթաբաժիններից
                        գտնել Ձեր որոնած ապրանքը:
                    </h5>
                    <span>
                        <img src={search} alt="search" width="100px" height="100px" />
                    </span>
                </div>
            )
        }
    }

    return (
        <div className="divItemFilter">
            {ItemFilter()}
        </div>
    )
}

export default FilteredItems;