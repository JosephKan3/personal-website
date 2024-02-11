// import type { NextApiRequest, NextApiResponse } from "next";
// import axios, { AxiosError, AxiosRequestConfig } from "axios";
// import { axiosRequestWithRetry, to } from "../../utils/request";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   try {
//     const api = axios.create({
//       baseURL: "https://api-fxtrade.oanda.com",
//       headers: { Authorization: `Bearer ${process.env.OANDA_ACCESS_TOKEN}` },
//     });

//     const config: AxiosRequestConfig = {
//       url: `/v3/accounts/${process.env.OANDA_ACCOUNT_ID}`,
//     };

//     const [err, response] = await to(axiosRequestWithRetry(api, config));

//     if (err) {
//       throw err.response?.data?.errorMessage;
//     } else {
//       const accountData: Account = response.account;

//       const balance: number = parseFloat(accountData.balance);
//       const pl: number = parseFloat(accountData.pl);
//       const returns = (pl / (balance - pl)) * 100;

//       res.status(200).json(parseFloat(returns.toFixed(2))); // Truncates to 2 decimal places
//     }
//   } catch (err) {
//     res.status(500).json("Unknown Error");
//   }
// }

import type { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { axiosRequestWithRetry, to } from "../../utils/request";
import { OANDA_CODES } from "../../types/oandaCodes";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const api = axios.create({
      baseURL: "https://api-fxtrade.oanda.com",
      headers: { Authorization: `Bearer ${process.env.OANDA_ACCESS_TOKEN}` },
    });

    const config: AxiosRequestConfig = {
      url: `/v3/accounts/${process.env.OANDA_ACCOUNT_ID}/transactions/sinceid`,
      params: {
        id: 0,
        type: "ORDER_FILL",
      },
    };

    const [err, response] = await to(axiosRequestWithRetry(api, config));

    if (err) {
      throw err.response?.data?.errorMessage;
    } else {
      const transactions = response.transactions;

      const performances: Trade[] = [
        { date: "2022-03-09T17:24:47.605318441Z", cumPerformance: 0 }, // Addes start date, dont want to fetch from API
      ];
      // Aggregate all the performances of trades placed
      let cumulativeReturn: number = 0;
      transactions.forEach((transaction: any) => {
        // Count only transactions with a valid instrument
        if (
          transaction.pl &&
          parseFloat(transaction.pl) != 0 &&
          transaction.accountBalance &&
          transaction.time
        ) {
          const balance: number = parseFloat(transaction.accountBalance);
          const pl: number = parseFloat(transaction.pl);
          const tradeReturn = (pl / (balance - pl)) * 100;
          cumulativeReturn += tradeReturn;

          performances.push({
            date: transaction.time,
            cumPerformance: cumulativeReturn,
          });
        }
      });

      res.status(200).json(performances);
    }
  } catch (err) {
    res.status(500).json("Unknown Error");
  }
}
