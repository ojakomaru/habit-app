'use client';
import { PaletteOptions, SimplePaletteColorOptions, alpha, getContrastRatio } from '@mui/material';

const mainBlueBase = '#0e64cc';
const BlueMain = alpha(mainBlueBase, 0.8);
const COLOR_PRIMARY: SimplePaletteColorOptions = {
  main: BlueMain, // DarkBlueColor
  light: alpha(mainBlueBase, 0.5),
  dark: alpha(mainBlueBase, 0.9),
  contrastText: getContrastRatio(BlueMain, '#fff') > 4.5 ? '#fff' : '#111',
};

const COLOR_SECONDARY: SimplePaletteColorOptions = {
  main: '#e7bf8c', // CreamMocaColor
  contrastText: '#000000',
};

const noticeRed: SimplePaletteColorOptions = {
  main: '#E01E5A',
  dark: '#621B16',
  light: '#FEECEB',
  contrastText: '#fff',
};

/**
 * MUI colors set to use in theme.palette
 */
export const PALETTE_COLORS = {
  primary: COLOR_PRIMARY,
  secondary: COLOR_SECONDARY,
  // success: { main: '#312114' },
  noticeRed: noticeRed,
};
