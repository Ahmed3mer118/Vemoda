import React from 'react'

function Confirm() {
    setTimeout(()=>{    window.location.href = "/"},5000)
    localStorage.removeItem("cart")

  return (
    <div className='confirm'>
        <h1 className='text-confirm'>Confirmed Successfully</h1>
        <p className='body-confirm'>you order has been confirmed successfully <br />thanks for you time</p>
    </div>
  )
}

export default Confirm