declare module '@mui/material/styles' {
  interface Palette {
    noticeRed: Palette['primary']
  }
  interface PaletteOptions {
    noticeRed?: PaletteOptions['primary']
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    noticeRed: true
  }
}

export {}
