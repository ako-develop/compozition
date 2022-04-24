import React, { useState } from 'react'
import Counter from './counter'
import { child } from './../untils'

const CounterList = () => {
  const initialState = [
    { id: 0, value: 0, name: 'Ненужная вещь' },
    { id: 1, value: 0, name: 'Тарелка' },
    { id: 2, value: 0, name: 'Вилка' },
    { id: 3, value: 0, name: 'Ложка' },
    { id: 4, value: 0, name: 'Набор минималиста' },
  ]
  const [counters, setCounters] = useState(initialState)

  const handleIncrement = (id) => {
    setCounters((counters) =>
      counters.filter((counter) => {
        return counter.id === id ? (counter.value += 1) : counter
      })
    )
  }

  const handleDecrement = (id) => {
    setCounters((counters) =>
      counters.filter((counter) => {
        if (counter.id === id && counter.value > 0) {
          counter.value -= 1
          return counter
        }
        return counter
      })
    )
  }

  const handleDelete = (id) => {
    setCounters((counters) => counters.filter((counter) => counter.id !== id))
  }

  const handleReset = () => {
    setCounters((prevState) => (prevState = initialState))
  }

  return (
    <>
      {counters.map((count) => {
        return (
          <Counter
            key={count.id}
            {...count}
            onDelete={handleDelete}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
        )
      })}
      <button
        className="btn btn-secondary btn-sm m-2"
        onClick={handleReset}
        children={child('Сброс')}
      />
    </>
  )
}

export default CounterList