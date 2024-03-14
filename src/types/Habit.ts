// 習慣のデータモデルを定義する
export interface Habit {
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
