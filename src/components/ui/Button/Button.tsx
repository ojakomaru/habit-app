'use client'
import { type FC, type ReactNode, useMemo } from 'react'
import { Button as MuiButton, type ButtonProps } from '@mui/material'
import { AppIcon } from '../AppIcon'

const MUI_BUTTON_COLORS = [
  'inherit',
  'primary',
  'secondary',
  'success',
  'error',
  'info',
  'warning'
]

export interface AppButtonProps extends Omit<ButtonProps, 'color' | 'endIcon' | 'startIcon'> {
  color?: string // Not only 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning',
  endIcon?: string | ReactNode
  text?: string // .label の代替
  startIcon?: string | ReactNode
}

/**
 * アプリケーション・スタイルのマテリアルUIボタンと、プロップを使って余白を指定するためのボックス・アラウンド
 * @component Button
 * @param color - MUIの値（'primary'、'secondary'など）を渡す場合、ボタン本体の色になり、そうでない場合はテキストとアイコンの色になる。
 * @param children - レンダリングするコンテンツ。.label と .text プロップを上書きする。
 * @param endIcon - ボタンラベルの後に表示するAppIconまたはReactNodeの名前
 * @param startIcon - ボタンラベルの前に表示するAppIconまたはReactNodeの名前
 * @param sx - ボタンに適用する追加CSSスタイル
 * @param underline - ボタンがリンクとして使用される際の下線スタイルを制御します。
 * @param variant - ボタンのMUIバリエーション。「text」、「outlined」、「contained」のいずれか。
 */
const Button: FC<AppButtonProps> = ({
  children,
  color: propColor = 'inherit',
  component: propComponent,
  endIcon,
  startIcon,
  sx: propSx = { margin: 1 }, // デフォルトでは、AppButtonの四方にtheme.spacing(1)のマージン
  text,
  variant = 'contained',
  ...restOfProps
}) => {
  // startIconが文字列かコンポーネントで設定されていなければundefined
  const iconStart: ReactNode = useMemo(
    () =>
      !startIcon
        ? undefined
        : typeof startIcon === 'string'
          ? (
        <AppIcon icon={String(startIcon)} />
            )
          : (
              startIcon
            ),
    [startIcon]
  )

  const iconEnd: ReactNode = useMemo(
    () =>
      !endIcon
        ? undefined
        : typeof endIcon === 'string'
          ? (
        <AppIcon icon={String(endIcon)} />
            )
          : (
              endIcon
            ),
    [endIcon]
  )

  // MUI規定のカラーコードか判定
  const isMuiColor = useMemo(() => MUI_BUTTON_COLORS.includes(propColor), [propColor])
  const colorToRender = isMuiColor ? (propColor as ButtonProps['color']) : 'inherit'
  // sxPropsを展開
  const sxToRender = {
    ...propSx,
    ...(isMuiColor ? {} : { color: propColor })
  }

  return (
    <MuiButton
      color={colorToRender}
      endIcon={iconEnd}
      startIcon={iconStart}
      sx={sxToRender}
      variant={variant}
      {...restOfProps}
    >
      {children || text}
    </MuiButton>
  )
}

export default Button
