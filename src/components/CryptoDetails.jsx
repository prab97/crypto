import React, { useState } from 'react'
import HTMLReactParser from 'html-react-parser';
import { Link, useParams } from 'react-router-dom';
import millify from 'millify';
import { Col, Row, Typography, Select } from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
import LineChart from './LineChart';
import {  useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../services/CryptoApi';
import Loader from './Loader';
const { Title, Text} = Typography 
const { Option } = Select;


const CryptoDetails = () => {

  const { coinId } = useParams()
  const [timeperiod, setTimeperiod] = useState('7d')  
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId)
  const { data: coinHistory } = useGetCryptoDetailsQuery({coinId, timeperiod})
  const cryptodetails = data?.data?.coin;

  if(isFetching) return <Loader />;


  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  const stats = [
    { title: 'Price to USD', value: `$ ${cryptodetails?.price && millify(cryptodetails?.price)}`, icon: <DollarCircleOutlined /> },
    { title: 'Rank', value: CryptoDetails?.rank, icon: <NumberOutlined /> },
    { title: '24h Volume', value: `$ ${cryptodetails?.volume && millify(cryptodetails?.volume)}`, icon: <ThunderboltOutlined /> },
    { title: 'Market Cap', value: `$ ${cryptodetails?.marketCap && millify(cryptodetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${cryptodetails?.allTimeHigh?.price && millify(cryptodetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptodetails?.numberOfMarkets, icon: <FundOutlined /> },
    { title: 'Number Of Exchanges', value: cryptodetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    { title: 'Aprroved Supply', value: cryptodetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    { title: 'Total Supply', value: `$ ${cryptodetails?.supply?.total && millify(cryptodetails?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
    { title: 'Circulating Supply', value: `$ ${cryptodetails?.supply?.circulating && millify(cryptodetails?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
  ];



  return (
    <Col className="coin-detail-container">
      <Col className="coin-heading-container">
       <Title level={2} className="coin-name">
         {data?.data?.coin.name} ({data?.data?.coin.symbol}) Price
        </Title>
       <p>{cryptodetails?.name} live price in US Dollar (USD). View value statistics, market cap and supply.</p>
      </Col>
    <Select defaultValue="7d" className="select-timeperiod" placeholder="Select Timeperiod" onChange={(value) => setTimeperiod(value)}>
      {time.map(
        (date) => <Option key={date}>{date}</Option>)}
    </Select>
    <LineChart coinHistory={coinHistory} currentPrice={millify(cryptodetails?.price)} coinName={cryptodetails?.name}/>
    <Col className="stats-container-info">
        <Col className="coin-value-statistics">
          <Col className='coin-value-statistics-heading'>
               <Title level={3} className='coin-detailed-heading'>
                    {cryptodetails?.name} Value
               </Title>
               <p>
                  An overview showing the stats of {cryptodetails?.name}, such as the base and quote currency, the rank, and trading volume. 
               </p>
          </Col>
          {stats.map(({ icon,title,value }) => (
             <Col className="coin-stats">
                 <Col className="coin-stats-name">
                      <Text>{icon}</Text>
                      <Text>{title}</Text>
                      
                 </Col>
                 <Text className='stats'>{value}</Text>
             </Col>
          ))}

        </Col>
        <Col className="other-stats-info">
        <Col className="coin-value-statistics">
          <Col className='coin-value-statistics-heading'>
               <Title level={3} className='coin-detailed-heading'>
                    Other statistics
               </Title>
               <p>
                  An overview showing the stats of all cryptocurrencies.
               </p>
          </Col>
          {genericStats.map(({ icon,title,value }) => (
             <Col className="coin-stats">
                 <Col className="coin-stats-name">
                      <Text>{icon}</Text>
                      <Text>{title}</Text>
                      
                 </Col>
                 <Text className='stats'>{value}</Text>
             </Col>
          ))}

        </Col>
    
    </Col>
    
    </Col>
    <Col className="coin-desc-link">
      <Row className="coin-desc"> 
          <Title level={3} className="coin-details-heading">
               What is {cryptodetails?.name}
               {/* {HTMLReactParser(CryptoDetails?.description)}           */}
          </Title>
      </Row>
      <Col className="coins-links">
         <Title level={3} className="coin-details-heading ">
            {cryptodetails?.name} Links
          </Title>
          {cryptodetails?.links.map((link) => {
              <Row className='coin-link' key={link.name}>
                <Title level={5} className="link-name">
                {Link.type}
                </Title>
                <a href ={link.url} target="_blank" rel="noreferrer">
                   {link.name}
                </a>
                   
              </Row>
          })}
      </Col>
        
    </Col>

    </Col>
  )
}

export default CryptoDetails
