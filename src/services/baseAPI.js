const BASE_URL =
  'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

async function fetchCurrency(url, option) {
  try {
    const response = await fetch(url, option);
    const data = await response.json();
    // console.log(data);
    return data;
    
  } catch (error) {
    alert(error.message);
  }
}

export default function getCurrency() {
  return fetchCurrency(BASE_URL);
}