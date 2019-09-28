import React, { useEffect, useState } from 'react'

import s from './Counter.module.css'


const Counter = () => {
  const [count, setCount] = useState(0)

  const tick = () => {
    setCount((prevCount) => prevCount + 1)
  }

  useEffect(() => {
    const timerId = setInterval(tick, 1000)

    return () => {
      clearInterval(timerId)
    }
  }, [])


  return (
    <h6 className={s.counter}>Counter: {count}</h6>
  )
}

export default Counter
