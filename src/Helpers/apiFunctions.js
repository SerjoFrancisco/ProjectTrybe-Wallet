export default async function getCurrencies() {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    const currencies = Object.keys(data).filter((currency) => currency !== 'USDT');
    return currencies;
  } catch (error) {
    return error;
  }
}
