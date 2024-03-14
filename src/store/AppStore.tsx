'use client';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  createContext,
  useReducer,
  useContext,
  type Dispatch,
  type PropsWithChildren,
  type FC,
} from 'react';
import { localStorageGet } from '../utils/localStorage';
import AppReducer from './AppReducer';

/**
 * AppState structure and initial values
 */
export interface AppStoreState {
  darkMode: boolean; // テーマモード
  isAuthenticated: boolean; // ログイン済み判定
  currentUser?: object | undefined; // ログインユーザー
}
const INITIAL_APP_STATE: AppStoreState = {
  darkMode: false, // AppStore の useMediaQuery('(prefers-color-scheme: dark)' によってオーバーライドされる。
  isAuthenticated: false, // AppStoreでは認証トークンをチェックすることでオーバーライドされます。
};

/**
 * グローバルAppStore用React Contextのインスタンス
 */
type AppContextReturningType = [AppStoreState, Dispatch<any>];
const AppContext = createContext<AppContextReturningType>([
  INITIAL_APP_STATE,
  () => null,
]);

/**
 * React Context APIを使用したHOCとしてのメイングローバルストア
 * @param - darkMode ローカルストレージを検索してなければユーザーデバイスのメディアクエリに従って設定
 * @description - テーマモードとユーザーのAuthenticationを管理する
 */
const AppStoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const previousDarkMode = Boolean(localStorageGet('darkMode'));
  // const tokenExists = Boolean(loadToken());

  const initialState: AppStoreState = {
    ...INITIAL_APP_STATE,
    darkMode: previousDarkMode || prefersDarkMode,
    // isAuthenticated: tokenExists,
  };
  const value: AppContextReturningType = useReducer(AppReducer, initialState);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

/**
 * 関数コンポーネントでAppStoreを使用するフック
 */
const useAppStore = (): AppContextReturningType => useContext(AppContext);

export { AppStoreProvider as AppStore, AppContext, useAppStore };
