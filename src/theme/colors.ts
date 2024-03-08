import { PaletteOptions, SimplePaletteColorOptions } from '@mui/material';

const COLOR_PRIMARY: SimplePaletteColorOptions = {
  main: '#1455a3',
  contrastText: '#000000',
};

const COLOR_SECONDARY: SimplePaletteColorOptions = {
  main: '#c0dbee',
  contrastText: '#000000',
};

/**
 * MUI colors set to use in theme.palette
 */
export const PALETTE_COLORS: Partial<PaletteOptions> = {
  primary: COLOR_PRIMARY,
  secondary: COLOR_SECONDARY,
  success: { main: '#312114' },
};

