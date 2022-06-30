import React from 'react'
import { useSelector } from 'react-redux/es/exports'

function Cart() {
  const things = useSelector(state => state)
  
  return (
    <div>
        <h1>Cart here</h1>
        <h4>{things}</h4>
    </div>
  )
}

export default Cart