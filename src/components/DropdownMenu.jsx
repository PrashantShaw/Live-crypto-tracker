import React from 'react'
import useGetCoinsList from '../APIs/useGetCoinsList'

const DropdownMenu = () => {

  useGetCoinsList()

  return (
    <div>DropdownMenu</div>
  )
}

export default DropdownMenu