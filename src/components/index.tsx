import { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent, Checkbox, Typography } from "@mui/material";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from 'date-fns';
import { Line } from "react-chartjs-2";
import React from "react";
import { Habit } from "../types/Habit";
import DeterminateLinearProgress from "./DeterminateLinearProgress";


// バックエンドのAPIのURLを設定する
const API_URL = "http://localhost:3210/habit";

// トップページのコンポーネントを定義する
const IndexPage = () => {
  // 習慣の配列をステートとして管理する
  const [habits, setHabits] = useState<Habit[]>([]);
  // 選択した日付をステートとして管理する
  const [selectedDate, setSelectedDate] = useState<Date>();
  // グラフのデータをステートとして管理する
  const [chartData, setChartData] = useState<any>(null);
  // チェックボックスの状態をステートとして管理する
  const [checked, setChecked] = useState<boolean>(false);

  let footer = <p>Please pick a day.</p>;
  if (selectedDate) {
    footer = <p>You picked {format(selectedDate, 'PP')}.</p>;
  }
  // 日付が変更されたら、グラフのデータを更新する
  useEffect(() => {
    const updateChartData = () => {
      // ダミーのグラフのデータ
      const data = {
        labels: ["1月", "2月", "3月", "4月", "5月", "6月"],
        datasets: [
          {
            label: "習慣の進捗",
            data: [12, 19, 3, 5, 2, 3],
            fill: false,
            backgroundColor: "rgb(75, 192, 192)",
            borderColor: "rgba(75, 192, 192, 0.2)",
          },
        ],
      };
      setChartData(data);
    };
    updateChartData();
  }, [selectedDate]);

  // チェックボックスの状態が変更されたら、習慣の進捗を更新する
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    // ここでAPIにリクエストを送って、習慣の進捗を更新する
  };

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

  // 習慣のリストをカード形式で表示する
  return (
    <React.Fragment>
      <h1>習慣管理アプリケーション</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {habits.map((habit, i) => (
          <Card key={habit.id + i} style={{ margin: "10px", width: "300px" }}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {habit.name}
              </Typography>
              <Typography color="textSecondary">{habit.description}</Typography>
              <Typography>
                頻度：{habit.frequency} {habit.unit}
              </Typography>
              <Typography>
                目標：{habit.goal} {habit.unit}
              </Typography>
              <Typography>
                進捗：{habit.progress} {habit.unit}
              </Typography>
              {/* プログレスバーを追加する */}
              <DeterminateLinearProgress
                variant="determinate"
                value={(habit.progress / habit.goal) * 100}
              />
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            </CardContent>
          </Card>
        ))}
      </div>
      <div style={{ width: "40%" }}>
        {/* カレンダーを追加する */}
        <DayPicker
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          footer={footer}
        />
        {/* グラフを追加する */}
        {/* <Line data={chartData} /> */}
      </div>
    </React.Fragment>
  );
};

export default IndexPage;
