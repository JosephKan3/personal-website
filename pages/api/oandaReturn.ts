import type { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { axiosRequestWithRetry, to } from "../../utils/request";

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
      url: `/v3/accounts/${process.env.OANDA_ACCOUNT_ID}`,
    };

    const [err, response] = await to(axiosRequestWithRetry(api, config));

    if (err) {
      throw err.response?.data?.errorMessage;
    } else {
      const accountData: Account = response.account;

      const balance: number = parseFloat(accountData.balance);
      const pl: number = parseFloat(accountData.pl);
      const returns = (pl / (balance - pl)) * 100;

      res.status(200).json(parseFloat(returns.toFixed(2))); // Truncates to 2 decimal places
    }
  } catch (err) {
    res.status(500).json("Unknown Error");
  }
}
