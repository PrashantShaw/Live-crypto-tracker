import React, { useEffect } from 'react'
import useGetCoinsList from '../APIs/useGetCoinsList'

const DropdownMenu = () => {

  useGetCoinsList()

  return (
    <div>DropdownMenu</div>
  )
}

export default DropdownMenu