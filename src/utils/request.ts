import { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

export const to = <T>(
  promise: Promise<T>,
  timeout = 60
): Promise<[any, T | null]> => {
  return new Promise((resolve) => {
    let timerId: NodeJS.Timeout;
    if (timeout > 0)
      timerId = setTimeout(() => {
        resolve([`timeout after ${timeout}s`, null]);
      }, timeout * 1000);

    promise
      .then((data) => {
        if (timerId) clearTimeout(timerId);
        resolve([null, data]);
      })
      .catch((err) => {
        if (timerId) clearTimeout(timerId);
        resolve([err, null]);
      });
  });
};

interface RetryConfig {
  retryLimit: number;
  retryStatusCode: number;
  maxRetryDelay: number;
  rateLimit: number;
}

const defaultRetryConfig: RetryConfig = {
  retryLimit: 3,
  retryStatusCode: 429,
  maxRetryDelay: 10,
  rateLimit: 1,
};

export const axiosRequestWithRetry = async (
  instance: AxiosInstance,
  config: AxiosRequestConfig,
  retryConfig: RetryConfig = defaultRetryConfig
): Promise<any> => {
  const { retryLimit, retryStatusCode, maxRetryDelay, rateLimit } = {
    ...defaultRetryConfig,
    ...retryConfig,
  };

  let retryCount = 0;

  while (retryCount < retryLimit) {
    try {
      const response = await instance.request(config);
      return response.data;
    } catch (error: any) {
      if (
        error?.response?.status !== retryStatusCode &&
        !error.message.includes("timeout")
      ) {
        throw error;
      }

      let sleepTime =
        Math.max(1, retryCount * 2) +
        Math.round((1 / rateLimit) * Math.random() * (retryCount + 1) * 1000);

      if (error.response?.headers) {
        const { headers } = error.response;
        let retryAfter: number | null = null;

        if (headers["retry-after"]) {
          retryAfter = parseInt(headers["retry-after"], 10);
        } else if (headers["x-ratelimit-reset"]) {
          retryAfter = Math.round(
            new Date().valueOf() / 1000 -
              parseInt(headers["x-ratelimit-reset"], 10)
          );
        }

        if (retryAfter !== null) {
          if (retryAfter > maxRetryDelay) {
            break;
          }

          sleepTime += retryAfter;

          if (sleepTime > maxRetryDelay) {
            break;
          }
        }
      }

      console.warn(`Retry after ${sleepTime / 1000}s: ${config.url}`);
      await new Promise((resolve) => setTimeout(resolve, sleepTime));
    }

    retryCount += 1;
  }

  throw new Error("Retry limit exceeded");
};
