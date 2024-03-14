import { Snackbar, SnackbarProps } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import React, { useEffect, useState } from 'react';

type Props = {
  openFlg: boolean;
  message: string;
} & SnackbarProps;
/**
 * 一定時間で閉じるスナックバーを表示します
 * @param openFlg -Alert起動のきっかけとなるフラグ
 * @param message -Alertに表示したいメッセージ
 * @returns
 */
const AlertSnackbar = ({ openFlg, message, ...rest }: Props) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (openFlg) setOpen(true);
  }, [openFlg]);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };
  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      {...rest}
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        onClose={handleClose}
        severity="warning"
        sx={{ width: '100%' }}
      >
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default AlertSnackbar;
