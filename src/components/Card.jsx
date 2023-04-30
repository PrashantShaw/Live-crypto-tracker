import React, { useEffect, useState } from 'react'
import "../styles/card.css"
import DropdownMenu from './DropdownMenu'
import webSocket from '../APIs/webSocket'
import { FaRupeeSign } from 'react-icons/fa'


const Card = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const [currentValue, setCurrentValue] = useState(0)
  const [investAmount, setInvestAmount] = useState('')
  const [currentCoin, setCurrentCoin] = useState({
    name: 'Bitcoin',
    symbol: 'BTCUSDT'
  })
  const shortSymbol = currentCoin.symbol.replace('USDT','')
  const estimatedStocks = (investAmount/currentValue).toFixed(2)
  useEffect(() => {
    const wbCloseFnc = webSocket(currentCoin.symbol, setCurrentValue)

    return () => {
      wbCloseFnc()
    }
  }, [currentCoin])

  return (
    <div className='container'>
      <div className='card'>

        <div className="icon">
          <img src='images/icon.png' alt="icon" className='ion' />
          <img src={`images/${currentCoin.name}.webp`} alt="icon" className='ion-2' />
        </div>

        <div className="content">

          <div className='val'>
            <div className='curr'>Current value</div>
            <div className='value'><FaRupeeSign className='i' /><span>{currentValue}</span></div>
          </div>

          <div className="div" onClick={() => setShowDropdown(true)}>
            <img src={`images/${currentCoin.name}.webp`} alt='iconSmall' className='iconSm' />
            <span>{currentCoin.name} </span>
            <img src="images/drop.png" alt='drop' className='drop' />
          </div>

          <div className="input-control">
            <label className='lab1'>Amount you want to invest</label>
            <div className='flex'>
              <input
                className="input-1"
                type="text"
                placeholder="0.00"
                value={investAmount}
                onChange={(e) => setInvestAmount(e.target.value)}
              />
              <span className='inr'>INR</span>
            </div>
          </div>

          <div className="input-control">
            <label className='lab2'>Estimate Number of {shortSymbol} You will Get</label>
            <input className="input-2" value={estimatedStocks} type="number" disabled placeholder="0.00" />
          </div>

          <button>Buy</button>

        </div>
      </div>
      {showDropdown &&
        <DropdownMenu
          setShowDropdown={setShowDropdown}
          setCurrentCoin={setCurrentCoin}
        />}
    </div>

  )
}

export default Card