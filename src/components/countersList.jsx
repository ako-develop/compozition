import React, { useState } from "react";
import Counter from "./counter"

const CountersList = () => {
    const initialState = [
        {id: 0, value:0, name: "Ненужная вещь", price: "200"}, 
        {id: 1, value:4, name: "ложка"}, 
        {id: 2, value:4, name: "вилка"}, 
        {id: 3, value:4, name: "тарелка"}, 
        {id: 4, value:0, name: "набор минималиста"},
    ]
    
    const [counters, setCounters] = useState(initialState);
    const handleDelete = (id) =>{
        // console.log("handleDelete", id);
        const newCounters = counters.filter((c) => c.id !==id);
        setCounters(newCounters);
        // console.log(newCounters);
    }
    const handleReset = () =>{
        setCounters(initialState)
    }
    const handleUpdate=() => {
        const updatedState = [
            {id: 0, value:1, name: "Ненужная вещь", price: "200"}, 
            {id: 1, value:2, name: "ложка"}, 
            {id: 2, value:3, name: "вилка"}, 
            {id: 3, value:4, name: "тарелка"}, 
            {id: 4, value:0, name: "набор минималиста"},
        ]
        setCounters(updatedState)
    }
    return (
        <>
            {counters.map((count) => (
                <Counter 
                    key={count.id} onDelete={handleDelete} {...count}/>
                
            ))}
            <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
            <button className="btn btn-primary btn-sm m-2" onClick={handleUpdate}>Обновить состояние</button>
        </>
    );
};
export default CountersList;