import { Theme } from '@emotion/react';
import { CircularProgress, SxProps } from '@mui/material';

export type SpinnerProps = {
  size?: number;
  color?: string;
  sx?: SxProps<Theme>;
};

const Spinner = ({ size = 40, color = '#999999', sx = {} }: SpinnerProps) => {
  return <CircularProgress size={size} sx={{ ...sx, color: color }} />;
};

export default Spinner;
