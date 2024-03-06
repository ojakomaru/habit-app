'use client';
import { useMemo, PropsWithChildren, FC } from 'react';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { useAppStore } from '../store';
import DARK_THEME from './dark';
import LIGHT_THEME from './light';
import createEmotionCache from './createEmotionCache';

function getThemeByDarkMode(darkMode: boolean) {
  return darkMode ? createTheme(DARK_THEME) : createTheme(LIGHT_THEME);
}

// クライアント側のキャッシュで、ブラウザ内のユーザーのセッション全体で共有される。
const CLIENT_SIDE_EMOTION_CACHE = createEmotionCache();

interface Props extends PropsWithChildren {
  emotionCache?: EmotionCache; // Emotionスタイリングライブラリを使用しない場合は省略可能です。
}

/**
 * Emotion の CacheProvider + MUI の ThemeProvider を組み合わせて、アプリ全体のコンテンツをラップする。
 * グローバルな .darkMode の状態に応じて、Light または Dark テーマが適用されます。
 * @param emotionCache - Emotionのキャッシュを共有して アプリで使う
 */
const AppThemeProvider: FC<Props> = ({ children, emotionCache = CLIENT_SIDE_EMOTION_CACHE }) => {
  const [state] = useAppStore();

  const theme = useMemo(
    () => getThemeByDarkMode(state.darkMode),
    [state.darkMode] // AppStoreを観察し、.darkModeが変更されたらテーマを再作成する
  );

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline /* MUI Styles */ />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default AppThemeProvider;
