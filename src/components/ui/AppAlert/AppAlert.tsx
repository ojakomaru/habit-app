import { FC } from 'react';
import MuiAlert, { AlertProps as MuiAlertProps } from '@mui/material/Alert';

const APP_ALERT_SEVERITY = 'error'; // 'error' | 'info'| 'success' | 'warning'
const APP_ALERT_VARIANT = 'filled'; // 'filled' | 'outlined' | 'standard'

/**
 * アプリケーション・スタイルのアラート・コンポーネント
 * @component AppAlert
 */
const AppAlert: FC<MuiAlertProps> = ({
  severity = APP_ALERT_SEVERITY,
  variant = APP_ALERT_VARIANT,
  onClose,
  ...restOfProps
}) => {
  return <MuiAlert severity={severity} sx={{ marginY: 1 }} variant={variant} onClose={onClose} {...restOfProps} />;
};

export default AppAlert;
