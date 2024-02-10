// Expressモジュールをインポートする
import express from "express";
// 異なるオリジン（ドメインやポートなど）からのリクエストを許可
import cors from "cors";
import { PORT, connectDB } from "./config";
import habitRouter from "./routes/habit";

// Expressアプリケーションを作成する
const app = express();

// JSONボディパーサーを使用する
app.use(express.json());

// CORSを許可する
app.use(cors());

// データベースに接続する
connectDB();

// APIのルーティングを設定する
app.use("/api/habits", habitRouter);

// サーバーを起動する
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
