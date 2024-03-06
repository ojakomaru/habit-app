'use client';
import { createContext, useReducer, useContext, Dispatch, PropsWithChildren, FC } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import AppReducer from './AppReducer';
import { localStorageGet } from '../utils/localStorage';

/**
 * AppState structure and initial values
 */
export interface AppStoreState {
  darkMode: boolean;
  isAuthenticated: boolean;
  currentUser?: object | undefined;
}
const INITIAL_APP_STATE: AppStoreState = {
  darkMode: false, // AppStore の useMediaQuery('(prefers-color-scheme: dark)' によってオーバーライドされる。
  isAuthenticated: false, // AppStoreでは認証トークンをチェックすることでオーバーライドされます。
};

/**
 * グローバルAppStore用React Contextのインスタンス
 */
type AppContextReturningType = [AppStoreState, Dispatch<any>];
const AppContext = createContext<AppContextReturningType>([INITIAL_APP_STATE, () => null]);

/**
 * Main global Store as HOC with React Context API
 *
 * import {AppStoreProvider} from './store'
 * ...
 * <AppStoreProvider>
 *  <App/>
 * </AppStoreProvider>
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
 *
 * import {useAppStore} from './store'
 * ...
 * const [state, dispatch] = useAppStore();
 */
const useAppStore = (): AppContextReturningType => useContext(AppContext);

export { AppStoreProvider as AppStore, AppContext, useAppStore };
