import { type Theme } from '@emotion/react';
import { CircularProgress, type SxProps } from '@mui/material';

export interface SpinnerProps {
  size?: number;
  color?: string;
  sx?: SxProps<Theme>;
}

const Spinner = ({ size = 40, color = '#999999', sx = {} }: SpinnerProps) => {
  return <CircularProgress size={size} sx={{ ...sx, color }} />;
};

export default Spinner;
