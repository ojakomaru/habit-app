import createCache, { EmotionCache } from '@emotion/cache';

/**
 * .prependオプションをtrueに設定してemotionキャッシュを作成します。
 * これはMUIスタイルを<head>の先頭に移動させ、最初に読み込まれるようにします。
 * CSSモジュールのような他のスタイリングソリューションでMUIスタイルを上書きすることができます。
 * @returns {EmotionCache}
 */
export function createEmotionCache(): EmotionCache {
  return createCache({ key: 'css', prepend: true });
}

export default createEmotionCache;
