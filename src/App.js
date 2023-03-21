import React from 'react'
import { Route, Link, Routes } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar, Homepage,  Exchanges, Cryptocurrencies, CryptoDetails, News } from './components/';
import './App.css'
import 'antd/dist/reset.css';


const App = () => {
  return (
    <div>
         <div className='navbar'>
            <Navbar />
            
         </div>
         <div className="main">
              <Layout>
                <div className='routes'>
                  <Routes>
                    <Route path="/" element={<Homepage />}></Route>
                    <Route path="/exchanges" element={<Exchanges />} ></Route>
                    <Route path="/cryptocurrencies" element={<Cryptocurrencies />}></Route>
                    <Route path="/crypto/:coinId" element={<CryptoDetails />}></Route>
                    <Route path="/news" element={<News />}></Route>

                  </Routes>
                </div>
              </Layout>
        
         <div className='footer' >
              <Typography.Title level={5} style={{color : 'white', textAlign : 'center'}}>
              Cryptoverse <br />
              All Rights Reserved
              </Typography.Title>
              <Space>
                  <Link to="/">Home</Link>
                  <Link to="/exchanges">Exchanges</Link>
                  <Link to="/cryptocurrencies">Cryptocurrencies</Link>
              </Space>
              
         </div>
         </div>
      
    </div>
  )
}

export default App
