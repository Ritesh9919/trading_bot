import express from "express";

const app = express();
const PORT = 7000;

const getRandomPrice = () => {
  return (Math.random() * 100).toFixed(2);
};

app.get("/stock-price", (req, res) => {
  return res.json({ price: getRandomPrice() });
});

app.listen(PORT, () => {
  console.log(`mock api server is running on port:${PORT}`);
});
