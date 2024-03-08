import { ThemeOptions } from '@mui/material';
import { PALETTE_COLORS } from './colors';

/**
 * MUI theme options for "Light Mode"
 */
export const LIGHT_THEME: ThemeOptions = {
  palette: {
    mode: 'light',
    background: {
      paper: '#f5f5f5', // Gray 100 - Background of "Paper" based component
      default: '#FFFFFF',
    },
    ...PALETTE_COLORS,
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
};

export default LIGHT_THEME;
