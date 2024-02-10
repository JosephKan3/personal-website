import type { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { axiosRequestWithRetry, to } from "@/utils/request";

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
        type: "ORDER",
      },
    };

    const [err, response] = await to(axiosRequestWithRetry(api, config));

    if (err) {
      throw err.response?.data?.errorMessage;
    } else {
      const transactions = response.transactions;

      // Count the number of trades placed per instrument
      const tradesPerInstrument: { [key: string]: number } =
        transactions.reduce(
          (map: { [key: string]: number }, transaction: any) => {
            // Count only transactions with a valid instrument
            if (transaction.instrument) {
              map[transaction.instrument] =
                (map[transaction.instrument] || 0) + 1;
            }
            return map;
          },
          {}
        );

      res.status(200).json(tradesPerInstrument);
    }
  } catch (err) {
    res.status(500).json("Unknown Error");
  }
}
