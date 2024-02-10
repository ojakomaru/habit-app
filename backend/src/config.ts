// dotenvモジュールをインポートする
import dotenv from "dotenv";

// mongooseモジュールをインポートする
import mongoose from "mongoose";

// 環境変数を読み込む
dotenv.config();

// ポート番号を設定する
export const PORT = process.env.PORT || 3001;

// MongoDBの接続文字列を設定する
export const MONGO_URI =
  process.env.MONGO_URI || "mongodb://localhost:27017/habit-app";

// データベースに接続する関数を定義する
export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
