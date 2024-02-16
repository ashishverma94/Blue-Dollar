
const calcAverage = (dollarData) => {
    const getData1 = dollarData[0], getData2 = dollarData[1] , getData3 = dollarData[2] ;

    let average_buy_price = 0.0;
    let average_sell_price = 0.0;

    if (getData1?.buy_price && getData2?.buy_price && getData3?.buy_price) {
        average_buy_price = ((getData1.buy_price + getData2.buy_price + getData3.buy_price) / 3).toFixed(2);
    }
    if (getData1?.sell_price && getData2?.sell_price && getData3?.sell_price) {
        average_sell_price = ((getData1.sell_price + getData2.sell_price + getData3.sell_price) / 3).toFixed(2);
    }
    
    return {average_buy_price, average_sell_price} ;
}

export default calcAverage ;