
import cheerio from 'cheerio';

const getData3 = async () => {
    const link1 = "https://www.cronista.com/MercadosOnline/moneda.html?id=ARSB";

    let res = await (fetch(link1));
    let body = await res.text()
    const $ = cheerio.load(body);

    let buy_value = $('.buy-value').text().slice(1)
    let sell_value = $('.sell-value').text().slice(1)

    return {
        "name" : "Cronista",
        "buy_price": parseFloat((buy_value).replace(/,/g, ''))*1000,
        "sell_price": parseFloat((sell_value).replace(/,/g, ''))*1000,
        "source": link1
    }
};

export default getData3;