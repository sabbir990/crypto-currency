import React, { useEffect, useState } from "react";
import './index.css'
import Search from "./components/search";
import CurrencyRender from "./components/currencyRender";
const App = () => {
  const [search, setSearch] = useState('');
  const [coins, setCoins] = useState([])
  const getInput = (input) => {
    setSearch(input);
  }
  useEffect(()=>{
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en').then((response) =>{
      return response.json();
    }).then((result) => {
      setCoins(result);
    }).catch((error) => {
      console.log("Error is ", error);
    })
  }, [])
  const filteredCoins = coins.filter(coin => {
    return coin.name.toLowerCase().includes(search.toLowerCase())
  })
  return (
    <div className="container">
      <div className="search-div">
        <Search getInput={getInput}/>
      </div>
      <div className="currency">
        {filteredCoins.map((coin) => {
          return(
            <CurrencyRender key={coin.id} name={coin.name} image={coin.image} symbol={coin.symbol} price={coin.current_price} marketcap={coin.market_cap} priceChange={coin.price_change_percentage_24h} volume={coin.total_volume} />
          )
        })}
      </div>
    </div>
  )
}

export default App;