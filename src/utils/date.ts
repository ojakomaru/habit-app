import { format } from 'date-fns';

export const FORMAT_DATE_TIME = 'yyyy-MM-dd HH:mm:ss';
export const FORMAT_DATE_ONLY = 'yyyy-MM-dd';
export const FORMAT_TIME_ONLY = 'HH:mm:ss';

/**
 * アプリケーション全体で同じフォーマットを維持するための主なデータと時間の変換ユーティリティ
 * @param dateOrString - UTC文字列またはDateオブジェクトのインスタンスとして表示する日付
 * @param dateFormat - デフォルトでは `FORMAT_DATE_TIME` です。
 * @param fallbackValue - データ変換が不可能な場合のフォールバック値（オプション
 */
export function dateToString(dateOrString: string | Date, dateFormat = FORMAT_DATE_TIME, fallbackValue = ''): string {
  const date = typeof dateOrString === 'object' ? dateOrString : new Date(dateOrString);
  let result;
  try {
    result = format(date, dateFormat);
  } catch (error) {
    result = fallbackValue;
  }
  return result;
}
