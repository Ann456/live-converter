import '../styles/main.scss';
import Header from './Header';
import Exchange from './Exchange';
import getCurrency from '../services/baseAPI';
import { useEffect, useState } from 'react';

function App() {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    getCurrency().then(data => {
      const result = data.filter(item => item.ccy !== 'BTC');
      setCurrencies(result);
    });
  }, []);

  return (
    <div className="App">
      <Header currencies={currencies} />
      <Exchange />
    </div>
  );
}

export default App;
