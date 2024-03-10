import { FC } from 'react';
import MuiAlert, { AlertProps as MuiAlertProps } from '@mui/material/Alert';

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
  variant: keyof typeof APP_ALERT_VARIANT;
  onClose?: (event: React.SyntheticEvent) => void;
}
/**
 * アラート・コンポーネント
 * @component AppAlert
 */
const AppAlert: FC<MuiAlertProps> = ({
  severity = APP_ALERT_SEVERITY['error'],
  variant = APP_ALERT_VARIANT['filled'],
  onClose,
  ...restOfProps
}) => {
  return (
    <MuiAlert
      severity={severity}
      sx={{ marginY: 1 }}
      variant={variant}
      onClose={onClose}
      {...restOfProps}
    />
  );
};

export default AppAlert;
