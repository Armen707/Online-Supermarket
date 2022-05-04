import React from "react";

const Counter = ({ count, newCountLength }) => {

    if (count.length > 0) {
        return (
            <span> {newCountLength} </span>
        )
    } else {
        return (
            <span> {count.length} </span>
        )
    }

}

export default Counter;