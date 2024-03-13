'use client'
import { useCallback } from 'react'
import { useAppStore } from '../store'

/**
 * Dark/Lightモードを切り替えるイベントハンドラを返します。
 * @returns {function} このイベントを呼び出すと、ダーク／ライトモードが切り替わる
 */
export function useEventSwitchDarkMode () {
  const [state, dispatch] = useAppStore()

  return useCallback(() => {
    dispatch({
      type: 'DARK_MODE',
      payload: !state.darkMode
    })
  }, [state, dispatch])
}
