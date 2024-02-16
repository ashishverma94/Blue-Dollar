import express from 'express' ;
import cors from 'cors' ;
import { getData1, getData2, getData3, calcAverage } from './data/index.js' ;

const app = express() ;

app.use(cors()) ;

let dollarData = [];
const getData =async ()=>{
   dollarData.push(await getData1()) ;
   dollarData.push(await getData2()) ;
   dollarData.push(await getData3()) ;
}

await getData() ;
const avgData = calcAverage(dollarData) ;

app.get('/quotes', (req, res) => {
    res.send(dollarData)
})

app.get('/average',(req,res)=>{
    res.send(avgData) ;
})

app.listen(8000,()=>{
    console.log('listening to the port no 8000') ;
}) ;




























// const request = require("request-promise") ;
// const cheerio = require("cheerio") ;

// let data = [] ;
// const webLink = "https://dolarhoy.com/i/cotizaciones/dolar-blue" ;
// const fetchData = async()=> {
    
//     const response = await request({
//         uri : webLink,
//     })

//     let $ = cheerio.load(response) ;
//     $('.data__valores p').each(function(){
//         data.push($(this).text().replace(/[^\d.-]/g, ''))
//     })

//     console.log(data) ;
// } ;

// fetchData() ;
// setTimeout(() => {
//     console.log(data) ;
// }, 2000);

