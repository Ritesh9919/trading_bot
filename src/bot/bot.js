import axios from "axios";

let balance = 1000;
let position = null;
let entryPrice = 0;
let profitLoss = 0;

const buyThreshold = -0.02;
const sellThreshold = 0.03;

const fetchStockPrice = async () => {
  try {
    const { data } = await axios.get("http://localhost:7000/stock-price");
    return parseFloat(data.price);
  } catch (error) {
    console.error("Error fetching stock price", error);
  }
};

const trade = async () => {
  const price = await fetchStockPrice();
  if (price == null) return;
  if (position == "buy") {
    const priceChange = (price - entryPrice) / entryPrice;
    if (priceChange >= sellThreshold) {
      balance += price - entryPrice;
      profitLoss += price - entryPrice;
      position = null;
      console.log(
        `Sold at ${price}, Balance: ${balance}, Profit/Loss: ${profitLoss}`
      );
    }
  } else {
    const priceChange = (price - entryPrice) / entryPrice;
    if (priceChange <= buyThreshold || position === null) {
      position = "buy";
      entryPrice = price;
      balance -= price;
      console.log(
        `Bought at ${price}, Balance: ${balance}, Profit/Loss: ${profitLoss}`
      );
    }
  }
};

setInterval(trade, 5000);

export { balance, position, entryPrice, profitLoss };
