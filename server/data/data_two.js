const API_AMBITO = "https://mercados.ambito.com//dolar/informal/variacion"
const getData2 = async()=> {
    const response = await fetch(API_AMBITO);
    const res = await response.json();
    return {
        "name" : "Ambito",
        "buy_price": parseInt(res.compra),
        "sell_price": parseInt(res.venta),
        "source": "https://www.ambito.com/contenidos/dolar.html"
    }
}

export default getData2 ;


