import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '9886ccbdb1msh35e4fbe954a1169p187e71jsn0b42b02694ee',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'



}

const baseUrl =  'https://coinranking1.p.rapidapi.com/'

const createRequest = (url) => ({ url, headers : cryptoApiHeaders })
export const CryptoApi = createApi( { 
    reducerPath : 'CryptoApi',
    baseQuery : fetchBaseQuery({ baseUrl }),
    endpoints : (builder) => ({
        getCryptos : builder.query({
            query : (count) => createRequest(`/coins?limit=${count}`)
        }),
    
    
    getExchange : builder.query({
            query : (count) => createRequest(`/exchanges`)
        }),


    getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
          }),

    getCryptoHistory: builder.query({
            query: (coinId, timeperiod) => createRequest(`/coin/${coinId}/history/${timeperiod}`),
          })
    })

}) 

export const{
    useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetExchangeQuery,
   
} = CryptoApi;