import { render } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router} from 'react-router-dom'
import App from './App'
import store from './app/store'
import 'antd/dist/reset.css';

import { Provider } from 'react-redux'
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Router>
    <Provider store={store}>
        <App />
    </Provider>
   
 </Router>

)


