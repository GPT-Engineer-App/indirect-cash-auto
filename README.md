# indirect-cash-auto

Create automatically calculate Indirect Cash Flow Statement using prompt below:
1.	In the app should include two columns for manually providing the data of Current year and previous year.
2.	Income Statement Section:
o	Row 1: Titles (e.g., Net Income, Depreciation, Amortization)
o	Row 2: Input cells for the values
o	Row 3: Calculation cells to sum up the values
3.	Balance Sheet Section:
o	Include relevant balance sheet data such as Current Assets, Current Liabilities, Debt, and Equity in rows similar to the Income Statement section
4.	Cash Flow from Operations:
o	Calculate Net Income using the Income Statement data
o	Add back Depreciation and Amortization
o	Include cells for Changes in Working Capital calculations
o	Calculate Cash Flow from Operations
5.	Cash Flow from Investing:
o	Include cells for Capital Expenditures, Purchases/Sales of Investments, Sales/Disposals of Property, Plant, and Equipment, and other investing activities
o	Calculate Cash Flow from Investing
6.	Cash Flow from Financing:
o	Include cells for Net Change in Debt, Net Change in Equity, Dividends Paid, and other financing activities
o	Calculate Cash Flow from Financing
7.	Total Cash Flow:
o	Add the Cash Flow from Operations, Investing, and Financing to calculate Total Cash Flow
Ensure to include clear labels, formulas, and possibly color-coding to make the Excel sheet user-friendly and easy to understand. Remember to provide instructions on how to input data, update values, and interpret the results.


## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/indirect-cash-auto.git
cd indirect-cash-auto
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
