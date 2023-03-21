import { configureStore, applyMiddleware} from "@reduxjs/toolkit";
import { CryptoApi } from "../services/CryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";


//const middleware = [(getDefaultMiddleware) => getDefaultMiddleware().concat(CryptoApi.middleware),(getDefaultMiddleware) => getDefaultMiddleware().concat(cryptoNewsApi.middleware) ]
export default configureStore({
    reducer : {
        [ CryptoApi.reducerPath] : CryptoApi.reducer,
        [cryptoNewsApi.reducerPath] : cryptoNewsApi.reducer,
    }, 
   //middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(CryptoApi.middleware)
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(cryptoNewsApi.middleware, CryptoApi.middleware)
});

//(getDefaultMiddleware) => getDefaultMiddleware().concat(CryptoApi.middleware)
//(getDefaultMiddleware) => getDefaultMiddleware().concat(cryptoNewsApi.middleware)