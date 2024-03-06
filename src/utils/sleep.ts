/**
 * コードの実行を特定の時間だけ遅らせる。awaitと一緒に呼び出す必要がある！
 * @param {number} interval - 待機するミリ秒数
 */
export async function sleep(interval = 1000) {
  return new Promise((resolve) => setTimeout(resolve, interval));
}

export default sleep;
