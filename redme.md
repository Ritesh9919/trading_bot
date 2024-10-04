# Trading Bot

## Description

This application simulates a basic trading bot for a hypothetical stock market. The bot executes trades based on predefined rules and conditions, tracking its profit/loss and performance metrics.

## Installation

1. Clone the repository.
2. Run `npm install` to install dependencies.

## Running the Application

1. Start the mock API:
   ```bash
   npm run mock-api
   ```
2. Start the trading bot:
   ```bash
   npm run dev
   ```

## Trading Strategy

- **Buy** when the stock price drops by 2%.
- **Sell** when the stock price rises by 3%.

## API Endpoints

- `/status` - Get the current status of the trading bot (balance, position, entry price, profit/loss).

## Example

Monitor the bot's performance by visiting `http://localhost:3000/status`.
