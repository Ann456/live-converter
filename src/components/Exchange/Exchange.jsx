import React, { useEffect, useState } from 'react';
import CurrencyBox from '../CurrencyBox';
import s from './Exchange.module.scss';
import getCurrency from 'services/baseAPI';

const Exchange = () => {
  const [amount1, setAmount1] = useState(0);
  const [amount2, setAmount2] = useState(0);
  const [currency1, setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('UAH');
  const [currencies, setCurrencies] = useState([]);
  const [rate, setRate] = useState([]);

  useEffect(() => {
    getCurrency().then(data => {
      let rates = data.reduce((acc, item) => {
        acc = { ...acc, [item.ccy]: { sale: item.sale, buy: item.buy } };
        return acc;
      }, {});

      const UAH = { UAH: { sale: 1, buy: 1 } };
      rates = { ...rates, ...UAH };
      setRate(rates);

      let currencies = data.reduce((acc, item) => {
        if (item.ccy !== 'BTC') {
          acc.push(item.ccy);
        }
        return acc;
      }, []);

      currencies = ['UAH', ...currencies];
      setCurrencies(currencies);
    });
  }, []);

  const onConvert = (buyValue, saleValue, amount) => {
    const res = (Number(saleValue) / Number(buyValue)) * Number(amount);
    return Math.round(res * 100) / 100;
  }
  
  const isEqual = (currency1, currency2) => {
    if (currency1 === currency2) {
      alert('Change currency');
      return false;
    } 
      return true;
  };

  const onInput1 = amount1 => {
    if (isEqual (currency1, currency2)) {
      const value = onConvert (
        rate[currency2].sale,
        rate[currency1].buy,
        amount1,
      );

      setAmount2(value);
      setAmount1(amount1);
    }
  };

  const onInput2 = amount2 => {
    if (isEqual (currency1, currency2)) {
      const value = onConvert(
        rate[currency1].sale,
        rate[currency2].buy,
        amount2,
      );
      
      setAmount1(value);
      setAmount2(amount2);
    }
  };

  const onBtnClick1 = currency1 => {
    if (isEqual(currency1, currency2)) {
      const value = onConvert(
        rate[currency2].sale,
        rate[currency1].buy,
        amount1,
      );

      setAmount2(value);
      setCurrency1(currency1);
    }
  };

  const onBtnClick2 = currency2 => {
    if (isEqual(currency1, currency2)) {
      const value = onConvert(
        rate[currency1].sale,
        rate[currency2].buy,
        amount2,
      );
      setAmount1(value);
      setCurrency2(currency2);
    }
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>Live currency converter</h1>
      <div className={s.box}>
        {currencies && (
          <>
            <CurrencyBox
              currencies={currencies}
              typeInput="text"
              onInput={onInput1}
              onBtnClick={onBtnClick1}
              amount={amount1}
              currency={currency1}
            />
            <CurrencyBox
              currencies={currencies}
              typeInput="text"
              onInput={onInput2}
              onBtnClick={onBtnClick2}
              amount={amount2}
              currency={currency2}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Exchange;
