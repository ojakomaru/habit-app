export const CHARS_NUMERIC = '0123456789'
export const CHARS_ALPHA_LOWER = 'abcdefghijklmnopqrstuvwxyz'
export const CHARS_ALPHA_UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
export const CHARS_ALPHA_NUMERIC = CHARS_NUMERIC + CHARS_ALPHA_LOWER + CHARS_ALPHA_UPPER

/**
 * 指定された文字セットを使って、指定された長さのランダムな文字列を生成する。
 * @param length - t生成する文字列の長さ
 * @param allowedChars - 文字列で使用する文字のセット。デフォルトは大文字と小文字の英数字すべて＋数字。
 * @returns - 生成された文字列
 */
export function randomText (length: number, allowedChars = CHARS_ALPHA_NUMERIC) {
  let result = ''
  const charLength = allowedChars.length
  let counter = 0
  while (counter < length) {
    result += allowedChars.charAt(Math.floor(Math.random() * charLength))
    counter += 1
  }
  return result
}
/**
 * 文字列が同じか、両方がNULLか未定義の場合は真、そうでない場合は偽
 * @param a - 比較文字１
 * @param b - 比較文字２
 * @returns {boolean} - 文字列が同じか、両方がNULLか未定義の場合は真、そうでない場合は偽
 */
export function compareTexts (a: string | null | undefined, b: string | null | undefined) {
  if (a === undefined || a === null || a === '') {
    return b === undefined || b === null || b === ''
  }
  return a === b
}

/**
 * 文字列の最初の文字を頭文字にする
 * @param s - 変換する文字列を渡す
 * @returns - 変換後の文字列
 */
export const capitalize = (s: string): string => s.charAt(0).toUpperCase() + s.substring(1)

/**
 * ランダムな色を#RRGGBB値として生成する。
 * @returns {string} - 生成したカラーコード
 */
export function randomColor (): string {
  const color = Math.floor(Math.random() * 16777215).toString(16)
  return '#' + color
}
