
import request from 'request-promise';
import cheerio from 'cheerio';

const getData1 = async () => {
    const link1 = "https://dolarhoy.com/i/cotizaciones/dolar-blue";

    const tag1 = ".data__valores p"
    const response1 = await request({
        uri: link1,
    })

    let data1 = [];
    let $1 = cheerio.load(response1);
    $1(tag1).each(function () {
        data1.push($1(this).text().replace(/[^\d.-]/g, ''))
    })
    return {
        "name" : "DollarHoy",
        "buy_price": parseInt(data1[0]),
        "sell_price": parseInt(data1[1]),
        "source": link1
    }

};

export default getData1;