'use client';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import { useAppStore } from '../store';

interface CurrentUser {
  id?: string;
  email?: string;
  phone?: string;
  avatar?: string;
  name?: string;
}

/**
 * 現在ログインしているユーザーを取得するフック
 * @returns {object | undefined}
 */
export function useCurrentUser(): CurrentUser | undefined {
  const [state] = useAppStore();
  return state.currentUser;
}

/**
 * 現在のユーザーが認証済みかどうかを検出するフック
 * @returns {boolean} ユーザーが認証されていればtrue、そうでなければfalse
 */
export function useIsAuthenticated() {
  const [state] = useAppStore();
  const result = state.isAuthenticated;

  // TODO: AUTH: add access token verification or other authentication check here
  // result = Boolean(sessionStorageGet('access_token', ''));

  return result;
}

/**
 * 現在のユーザーをログアウトするイベントハンドラを返します。
 * @returns {function} ログアウトするためのイベントハンドラ
 */
export function useEventLogout() {
  const router = useRouter();
  const [, dispatch] = useAppStore();

  return useCallback(() => {
    // TODO: AUTH: add auth and tokens cleanup here
    // sessionStorageDelete('access_token');

    dispatch({ type: 'LOG_OUT' });
    router.replace('/'); // リロードでホームへリダイレクト
  }, [dispatch, router]);
}

/**
 * ウォッチドッグを追加し、ユーザーのログインとログアウト時に異なるコールバックを呼び出す
 * @param {function} afterLogin callback to call after user login
 * @param {function} afterLogout callback to call after user logout
 */
export function useAuthWatchdog(
  afterLogin: () => void,
  afterLogout: () => void
) {
  const [state, dispatch] = useAppStore();

  useEffect(() => {
    if (state.isAuthenticated) {
      afterLogin?.();
    } else {
      afterLogout?.();
    }
  }, [state.isAuthenticated, dispatch, afterLogin, afterLogout]);
}
