import { type ThemeOptions } from '@mui/material'
import { PALETTE_COLORS } from './colors'

/**
 * MUI theme options for "Dark Mode"
 */
export const DARK_THEME: ThemeOptions = {
  palette: {
    mode: 'dark',
    background: {
      paper: '#0a2458', // Background of "Paper" based component
      default: '#091d32'
    },
    ...PALETTE_COLORS
  },

  spacing: 8,
  shape: {
    borderRadius: 4
  }
}

export default DARK_THEME
