import { useEffect, useState } from 'react'
import './App.css'
import Row from './components/Row'

interface avgItem {
  average_buy_price: String,
  average_sell_price: String
}

interface dataItem{
  name: String,
  buy_price: String,
  sell_price: String,
  source : string,
}

function App() {

  const [data, setData] = useState<dataItem[]>([] as dataItem[]);
  const [avgData, setAvgData] = useState<avgItem>({} as avgItem);

  const getData = async () => {
    fetch('http://localhost:8000/quotes')
    .then((res) => res )
    .then((e)=>e.json())
    .then((e)=>setData(e))

    console.log(data) ;
  }

  const getAverageData = async () => {
    fetch('http://localhost:8000/average')
    .then((res) => res )
    .then((e)=>e.json())
    .then((e)=>setAvgData(e as avgItem))
  }

  useEffect(() => { 
    getData();
    getAverageData();

    setInterval(() => {
      getData()
      getAverageData()
    },10000)
  }, [])

  return (
    <>
      <h1 className='stroke-text'> BLUE DOLLAR PRICE</h1>
      <div className='container'>
        <Row name = "Source" source= "" buy_price = "Buy Price ($)" sell_price = "Sell Price ($)"  />
        {
          data.map((val)=>{
            return <Row name = {val?.name} source={val?.source} buy_price={val?.buy_price} sell_price={val.sell_price} />
          })
        }
        <Row name = "Average" source= "" buy_price = {avgData?.average_buy_price} sell_price = {avgData?.average_sell_price}  />
      </div>
    </>
  )
}

export default App
