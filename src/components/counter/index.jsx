import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementByAmount } from '../../redux/counterSlider'

function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={()=>dispatch(incrementByAmount(-5))}>-</button>
        <div>{count}</div>
        <button onClick={()=>dispatch(incrementByAmount(5))}>+</button>
    </div>
  )
}

export default Counter