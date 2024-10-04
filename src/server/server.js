import express from "express";
const PORT = 3000;
import { balance, position, entryPrice, profitLoss } from "../bot/bot.js";

const app = express();

app.get("/status", (req, res) => {
  return res.json({
    balance,
    position,
    entryPrice,
    profitLoss,
  });
});

app.listen(PORT, () => {
  console.log(`Monitoring bot`);
});

import "../bot/bot.js";
