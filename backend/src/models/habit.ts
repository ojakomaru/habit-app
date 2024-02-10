// mongooseモジュールをインポートする
import mongoose from "mongoose";

// 習慣のデータモデルを定義する
interface Habit {
  id: number; // 習慣のID
  name: string; // 習慣の名前
  description: string; // 習慣の説明
  frequency: number; // 習慣の頻度（1日、1週間、1ヶ月など）
  unit: string; // 習慣の単位（回、分、時間など）
  goal: number; // 習慣の目標値
  progress: number; // 習慣の進捗値
  createdAt: Date; // 習慣の作成日時
  updatedAt: Date; // 習慣の更新日時
}

// 習慣のスキーマを定義する
const habitSchema = new mongoose.Schema<Habit>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  frequency: { type: Number, required: true },
  unit: { type: String, required: true },
  goal: { type: Number, required: true },
  progress: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// 習慣のモデルを作成する
const Habit = mongoose.model<Habit>("Habit", habitSchema);

// 習慣のモデルをエクスポートする
export default Habit;
