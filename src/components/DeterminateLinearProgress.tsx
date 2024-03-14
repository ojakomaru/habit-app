import { LinearProgress, type LinearProgressProps } from '@mui/material';
import React from 'react';

export default function DeterminateLinearProgress(props: LinearProgressProps) {
  // 進捗値をステートで管理する
  const [progress, setProgress] = React.useState(0);

  // 進捗値を更新する関数を定義する
  const updateProgress = () => {
    // 進捗値が100になったら0に戻す
    if (progress === 100) {
      setProgress(0);
    } else {
      // 進捗値を10ずつ増やす
      setProgress((prevProgress) => prevProgress + 10);
    }
  };

  // コンポーネントがマウントされたら、1秒ごとに進捗値を更新する
  React.useEffect(() => {
    const timer = setInterval(updateProgress, 1000);
    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <LinearProgress {...props} variant="determinate" value={progress} />
    </div>
  );
}
