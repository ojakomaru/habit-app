import { useState, useEffect } from "react";
import axios from "axios";

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

// バックエンドのAPIのURLを設定する
const API_URL = "http://localhost:3001/api/habits";

// トップページのコンポーネントを定義する
const IndexPage = () => {
  // 習慣の配列をステートとして管理する
  const [habits, setHabits] = useState<Habit[]>([]);

  // コンポーネントがマウントされたら、APIから習慣のデータを取得する
  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const response = await axios.get(API_URL);
        setHabits(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchHabits();
  }, []);

  // 習慣のリストを表示する
  return (
    <div>
      <h1>習慣管理アプリケーション</h1>
      <ul>
        {habits.map((habit) => (
          <li key={habit.id}>
            <h2>{habit.name}</h2>
            <p>{habit.description}</p>
            <p>
              頻度：{habit.frequency} {habit.unit}
            </p>
            <p>
              目標：{habit.goal} {habit.unit}
            </p>
            <p>
              進捗：{habit.progress} {habit.unit}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IndexPage;
