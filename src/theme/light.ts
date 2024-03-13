import { type ThemeOptions } from '@mui/material'
import { PALETTE_COLORS } from './colors'

/**
 * MUI theme options for "Light Mode"
 */
export const LIGHT_THEME: ThemeOptions = {
  palette: {
    mode: 'light',
    background: {
      paper: '#c0dbee', // Background of "Paper" based component
      default: '#FFFFFF'
    },
    ...PALETTE_COLORS
  },
  spacing: 8,
  shape: {
    borderRadius: 4
  }
}

export default LIGHT_THEME
