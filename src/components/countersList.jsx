import React from "react";
import Counter from "./counter"

const countersList = () => {
    const counters = [
        {id: 0, value:0}, 
        {id: 1, value:4}, 
        {id: 2, value:0}];
    return (
        <>
            {counters.map((count) => (
                <Counter key={count.id} value={count.value}/>
            ))}
        </>
    );
};
export default countersList;