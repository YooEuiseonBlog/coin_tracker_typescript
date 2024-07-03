const BASE_URL = "http://localhost:3001";

export async function fetchCoins() {
  try {
    const response = await fetch(`${BASE_URL}/coins`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching coins:", error);
    return [];
  }
}

export function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}/price`).then((response) =>
    response.json()
  );
}

export function fetchCoinHistory_v1(coinId: String) {
  const endDate = Math.floor(Date.now() / 1000);
  const StartDate = endDate - 60 * 60 * 24 * 7 * 2;
  return fetch(
    `${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${StartDate}&end=${endDate}`
  ).then((response) => response.json());
}

export async function fetchCoinHistory_v2(coinId: string) {
  // `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`

  const response = await fetch(`${BASE_URL}/coins/${coinId}/historical`);
  // const response = await fetch(
  //   `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`
  // );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}
