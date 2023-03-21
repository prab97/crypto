import { createApi, fetchBaseQuery }  from '@reduxjs/toolkit/query/react'

// const cryptoNewsHeaders = {
//     'x-rapidapi-subscription': 'ultra',
//     'x-rapidapi-proxy-secret': 'c02cea90-4588-11eb-add9-c577b8ecdc8e',
//     'x-rapidapi-user': 'suprikurniyanto',
//     'X-RapidAPI-Key': '9886ccbdb1msh35e4fbe954a1169p187e71jsn0b42b02694ee',
//     'X-RapidAPI-Host': 'news-api14.p.rapidapi.com'
// }

//const baseUrl = 'https://news-api14.p.rapidapi.com/'

const cryptoNewsHeaders =  {
          'X-BingApis-SDK': 'true',
          //'X-RapidAPI-Key': '99886ccbdb1msh35e4fbe954a1169p187e71jsn0b42b02694ee',
          'Ocp-Apim-Subscription-Key': "99886ccbdb1msh35e4fbe954a1169p187e71jsn0b42b02694ee",
          'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
          
        }

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/'
const createRequest = (url) => ({ url, headers : cryptoNewsHeaders })


export const cryptoNewsApi = createApi( { 
    reducerPath : 'cryptoNewsApi',
    baseQuery : fetchBaseQuery({ baseUrl }),
    endpoints : (builder) => ({
        getCryptosNews : builder.query({
            query : ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Month&count=${count}`),
        })
    })

})

export const{
    useGetCryptosNewsQuery,
} = cryptoNewsApi;

//`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
///search?q=${newsCategory}&pageSize=${count}