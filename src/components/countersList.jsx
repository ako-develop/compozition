import React, { useState } from "react";
import Counter from "./counter"

const CountersList = () => {
    const [counters, setCounters] = useState([
        {id: 0, value:0, name: "Ненужная вещь"}, 
        {id: 1, value:4, name: "ложка"}, 
        {id: 2, value:4, name: "вилка"}, 
        {id: 3, value:4, name: "тарелка"}, 
        {id: 4, value:0, name: "набор минималиста"},
    ]);
    const handleDelete = () =>{
        console.log("handleDelete");
    }
    return (
        <>
            {counters.map((count) => (
                <Counter key={count.id} value={count.value} name={count.name} onDelete={handleDelete}/>
                
            ))}
        </>
    );
};
export default CountersList;