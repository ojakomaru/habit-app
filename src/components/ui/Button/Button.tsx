import { ElementType, FunctionComponent, ReactNode, useMemo } from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import { AppIcon } from '../AppIcon';
import { AppLink } from '../Link';

const APP_BUTTON_VARIANT = 'contained';

const MUI_BUTTON_COLORS = ['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning'];

const DEFAULT_SX_VALUES = {
  margin: 1, // デフォルトでは、AppButtonの四方にtheme.spacing(1)のマージンがあります。
};

export interface AppButtonProps extends Omit<ButtonProps, 'color' | 'endIcon' | 'startIcon'> {
  color?: string; // Not only 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning',
  endIcon?: string | ReactNode;
  label?: string; // .text の代替
  text?: string; // .label の代替
  startIcon?: string | ReactNode;
  // Missing props
  component?: ElementType; // RouterLink、AppLink、<a>など。
  to?: string; // Link prop
  href?: string; // Link prop
  openInNewTab?: boolean; // Link prop
  underline?: 'none' | 'hover' | 'always'; // Link prop
}

/**
 * アプリケーション・スタイルのマテリアルUIボタンと、プロップを使って余白を指定するためのボックス・アラウンド
 * @component AppButton
 * @param color - MUIの値（'primary'、'secondary'など）を渡す場合、ボタン本体の色になり、そうでない場合はテキストとアイコンの色になる。
 * @param children - レンダリングするコンテンツ。.label と .text プロップを上書きする。
 * @param endIcon - ボタンラベルの後に表示するAppIconまたはReactNodeの名前
 * @param href - 外部リンクURI
 * @param label - レンダリングするテキスト。
 * @param openInNewTab - trueの場合、リンクは新しいタブで開かれる
 * @param startIcon - ボタンラベルの前に表示するAppIconまたはReactNodeの名前
 * @param sx - ボタンに適用する追加CSSスタイル
 * @param text - レンダリングするテキスト。
 * @param to - 内部リンクURI
 * @param underline - ボタンがリンクとして使用される際の下線スタイルを制御します。
 * @param variant - ボタンのMUIバリエーション。「text」、「outlined」、「contained」のいずれか。
 */
const AppButton: FunctionComponent<AppButtonProps> = ({
  children,
  color: propColor = 'inherit',
  component: propComponent,
  endIcon,
  label,
  startIcon,
  sx: propSx = DEFAULT_SX_VALUES,
  text,
  underline = 'none',
  variant = APP_BUTTON_VARIANT,
  ...restOfProps
}) => {
  const iconStart: ReactNode = useMemo(
    // startIconが文字列かコンポーネントで設定されていなければundefined
    () => (!startIcon ? undefined : typeof startIcon === 'string' ? <AppIcon icon={String(startIcon)} /> : startIcon),
    [startIcon]
  );

  const iconEnd: ReactNode = useMemo(
    () => (!endIcon ? undefined : typeof endIcon === 'string' ? <AppIcon icon={String(endIcon)} /> : endIcon),
    [endIcon]
  );

  const isMuiColor = useMemo(() => MUI_BUTTON_COLORS.includes(propColor), [propColor]);

  const componentToRender =
    !propComponent && (restOfProps?.href || restOfProps?.to) ? AppLink : propComponent ?? Button;

  const colorToRender = isMuiColor ? (propColor as ButtonProps['color']) : 'inherit';
  const sxToRender = {
    ...propSx,
    ...(isMuiColor ? {} : { color: propColor }),
  };

  return (
    <Button
      component={componentToRender}
      color={colorToRender}
      endIcon={iconEnd}
      startIcon={iconStart}
      sx={sxToRender}
      variant={variant}
      {...{ ...restOfProps, underline }}
    >
      {children || label || text}
    </Button>
  );
};

export default AppButton;
