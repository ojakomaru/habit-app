import { localStorageSet } from '../utils/localStorage';
import { AppStoreState } from './AppStore';

/**
 * Reduxスタイル "のアクションを使ったグローバルAppStore用レデューサー
 * @param state - 現在/デフォルト状態
 * @param action.type - アクションの一意名
 * @param action.payload - 任意のデータ・オブジェクト、またはデータ・オブジェクトを取得する関数
 */
const AppReducer: React.Reducer<AppStoreState, any> = (state, action) => {
  // console.log('AppReducer() - action:', action);
  switch (action.type || action.action) {
    case 'CURRENT_USER':
      return {
        ...state,
        currentUser: action?.currentUser || action?.payload,
      };
    case 'SIGN_UP':
    case 'LOG_IN':
      return {
        ...state,
        isAuthenticated: true,
      };
    case 'LOG_OUT':
      return {
        ...state,
        isAuthenticated: false,
        currentUser: undefined, // 以前のユーザーデータもリセット
      };
    case 'DARK_MODE': {
      const darkMode = action?.darkMode ?? action?.payload;
      localStorageSet('darkMode', darkMode);
      return {
        ...state,
        darkMode,
      };
    }
    default:
      return state;
  }
};

export default AppReducer;
