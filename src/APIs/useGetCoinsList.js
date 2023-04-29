import React, { useEffect, useState } from 'react'
import { coinURL, coinData } from '../constants/constants'
import axios from 'axios'

const useGetCoinsList = () => {
    const [coinList, setCryptoList] = useState([])

    const getCoinsData = () => {
        const coinPromiseArr = []
        coinData.forEach(coin => {
            const URL = coinURL + coin.name.toLowerCase()
            const coinPromise = axios.get(URL)
            coinPromiseArr.push(coinPromise)
        })

        return Promise.allSettled(coinPromiseArr)

    }

    useEffect(() => {
        getCoinsData()
            .then(res => {
                console.log(res)
            })
    }, [])



    return {}
}

export default useGetCoinsList