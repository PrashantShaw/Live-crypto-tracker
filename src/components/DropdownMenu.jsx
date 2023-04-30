import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { coinData } from '../constants/constants'
import { RxCross2 } from 'react-icons/rx'
import '../styles/dropdownMenu.css'

const DropdownMenu = ({ setShowDropdown, setCurrentCoin }) => {
  const [filterText, setFilterText] = useState('')
  const handleCoinChange = (coin) => {
    setCurrentCoin(coin)
    setShowDropdown(false)
  }
  return (
    <div className='dropdown-container' onClick={() => { setShowDropdown(false) }}>
      <div className="border-wrapper" onClick={(e) => { e.stopPropagation() }}>
        <div className="dropdown">
          <div className="coin-searchbar">
            <CiSearch className='search-icon' />
            <input
              type="text"
              placeholder='Search chains'
              value={filterText}
              onChange={e => { setFilterText(e.target.value) }}
            />
          </div>
          <div className="coins-container">
            {coinData
              .filter(coin => coin.name.toLowerCase().includes(filterText.toLowerCase()))
              .map((coin, idx) => {
                return (
                  <div
                    onClick={() => { handleCoinChange(coin) }}
                    key={idx + coin.symbol}
                    className="coin-row"
                  >
                    <img src={`images/${coin.name.toLowerCase()}.webp`} alt='crypto coin' />
                    <p>{coin.name}</p>
                  </div>)
              })}
          </div>
          <RxCross2 className='cross-icon' onClick={() => { setShowDropdown(false) }} />
        </div>
      </div>
    </div>
  )
}

export default DropdownMenu