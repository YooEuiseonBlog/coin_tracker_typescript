const express = require("express");
const fs = require('fs').promises;
const cors = require("cors");


const app = express();
const port = 3001;

app.use(cors());

// '/coins' 경로에 GET 요청이 오면 코인 데이터를 JSON 형식으로 응답합니다.
app.get("/coins", async (req, res) => {
  try {
    const data = await fs.readFile('./data/coins.json', 'utf-8');
    const coins = JSON.parse(data);
    res.json(coins);
  } catch (error) {
    console.error(error);
  }
 
});

// 각 코인의 상세 정보를 제공하는 엔드포인트 추가
app.get("/coins/:id", async (req, res) => {
  const coinId = req.params.id;
  const data = await fs.readFile('./data/coinDetails.json', 'utf-8');
  const coinDetails = JSON.parse(data);
  const coinDetail = coinDetails[coinId];

  if (coinDetail) {
    res.json(coinDetail);
  } else {
    res.status(404).json({ error: "Coin not found" });
  }
});

// 각 코인의 가격 정보를 제공하는 엔드포인트 추가
app.get("/coins/:id/price", async (req, res) => {
  const coinId = req.params.id;
  const data = await fs.readFile('./data/coinPrices.json', 'utf-8');
  const coinPrices = JSON.parse(data);
  const coinPrice = coinPrices[coinId];

  if (coinPrice) {
    res.json(coinPrice);
  } else {
    res.status(404).json({ error: "Price data not found" });
  }
});

// 각 코인의 히스토리 정보를 제공하는 엔드포인트 추가
app.get("/coins/:id/historical", async (req, res) => {
  const coinId = req.params.id;
  const data = await fs.readFile('./data/historicalData.json', 'utf-8');
  const historicalData = JSON.parse(data);
  const history = historicalData[coinId];

  if (history) {
    res.json(history);
  } else {
    res.status(404).json({ error: "Historical data not found" });
  }
});

// 지정된 포트에서 서버를 시작하고, 서버가 실행 중임을 콘솔에 출력합니다.
app.listen(port, () => {
  console.log(`Dummy coin API listening at http://localhost:${port}`);
});
