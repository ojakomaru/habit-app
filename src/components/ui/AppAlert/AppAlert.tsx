import React, { FC, SyntheticEvent, useState } from 'react';
import MuiAlert, { AlertProps as MuiAlertProps } from '@mui/material/Alert';
import { styled } from '@mui/material/styles';
import { ErrorOutline, Info, CheckCircle, Warning } from '@mui/icons-material';
import { AlertTitle } from '@mui/material';

interface CustomAlertProps extends MuiAlertProps {
  $alertIsActive: boolean;
}
// カスタムアラートのスタイル
const CustomAlert = styled(MuiAlert, {
  shouldForwardProp: (prop) => prop !== '$alertIsActive',
})<CustomAlertProps>(({ theme, $alertIsActive }) => ({
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1.5),
  display: $alertIsActive ? 'flex' : 'none',
  alignItems: 'center',
  '& .MuiAlert-icon': {
    marginRight: theme.spacing(1),
  },
  '& .MuiAlert-message': {
    flex: 1,
  },
  '&.MuiAlert-filledError': {
    backgroundColor: theme.palette.noticeRed.main, // エラーの背景色
  },
  '&.MuiAlert-filledSuccess': {
    backgroundColor: theme.palette.secondary.light, // 成功の背景色
  },
}));

// アラートのアイコン
const AlertIcon = ({ severity }: { severity: string }) => {
  switch (severity) {
    case 'error':
      return <ErrorOutline />;
    case 'info':
      return <Info />;
    case 'success':
      return <CheckCircle />;
    case 'warning':
      return <Warning />;
    default:
      return null;
  }
};

const APP_ALERT_SEVERITY = {
  error: 'error',
  info: 'info',
  success: 'success',
  warning: 'warning',
} as const;

const APP_ALERT_VARIANT = {
  filled: 'filled',
  outlined: 'outlined',
  standard: 'standard',
} as const;

interface AlertProps extends MuiAlertProps {
  severity: keyof typeof APP_ALERT_SEVERITY;
  variant?: keyof typeof APP_ALERT_VARIANT;
  title?: string;
  children?: React.ReactNode;
  onClose?: (event: React.SyntheticEvent) => void;
}
/**
 * カスタムアラート・コンポーネント
 * @component AppAlert
 * @description MUIのラッパー。閉じることもできるがactionプロパティでReactNodeを渡してイベントハンドラを用意することもできる。
 * @param severity -用途。デフォルトはerror
 * @param variant -表示。デフォルトはfilled
 * @param title -Alertに表示するタイトルがあれば設定できる
 * @param onClose -アラートを非表示にする関数のコールバック後に呼び出す関数
 */
const AppAlert: FC<AlertProps> = ({
  severity,
  variant = APP_ALERT_VARIANT['filled'],
  title,
  children,
  onClose,
  ...restOfProps
}) => {
  const [alertIsActive, setAlertActive] = useState(true);
  const handleClose = (e: SyntheticEvent) => {
    setAlertActive(false);
    onClose && onClose(e);
  };
  return (
    <CustomAlert
      $alertIsActive={alertIsActive}
      severity={severity}
      variant={variant}
      onClose={handleClose}
      {...restOfProps}
      icon={<AlertIcon severity={severity} />}
    >
      {title && <AlertTitle>{title}</AlertTitle>}
      {children}
    </CustomAlert>
  );
};

export default AppAlert;
