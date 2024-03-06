import { Theme } from '@mui/material/styles';

export type ColorName = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'false' | 'true';

/**
 * アプリ全体のMaterial UI Paperコンポーネントに使用するスタイルを作成
 */
export const paperStyle = (theme: Theme) => ({
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
});

/**
 * アプリ全体でフォームのスタイルを作成
 */
export const formStyle = (theme: Theme) => ({
  width: '100%',
  maxWidth: '40rem', // 640px
});

/**
 * アプリ全体のMaterial UIダイアログで使用するスタイルを作成
 */
export const dialogStyles = (
  theme: Theme
): { xButton: any; paper: any; formControl: any; content: any; actions: any } => ({
  xButton: {
    position: 'absolute',
    right: theme.spacing(0.5),
    top: theme.spacing(0.5),
  },
  paper: {
    [theme.breakpoints.up('md')]: {
      minWidth: theme.breakpoints.values.md / 2,
    },
    [theme.breakpoints.down('md')]: {
      minWidth: theme.breakpoints.values.sm / 2,
    },
  },
  formControl: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  content: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  actions: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
});

/**
 * マテリアルUIの名前「primary」、「secondary」、「warning」などの「塗りつぶし」スタイルを作成する。
 */
export const filledStylesByNames = (theme: Theme) => ({
  primary: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  secondary: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
  error: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  },
  warning: {
    backgroundColor: theme.palette.warning.main,
    color: theme.palette.warning.contrastText,
  },
  info: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.info.contrastText,
  },
  success: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.success.contrastText,
  },
  // Boolean
  false: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  },
  true: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.success.contrastText,
  },
});

/**
 * マテリアルUI名の'primary'、'secondary'、'warning'などの "text "スタイルを作成。
 * true'と'false'クラスも追加。
 */
export const textStylesByNames = (theme: Theme) => ({
  // Standard MUI names
  primary: {
    color: theme.palette.primary.main,
  },
  secondary: {
    color: theme.palette.secondary.main,
  },
  error: {
    color: theme.palette.error.main,
  },
  warning: {
    color: theme.palette.warning.main,
  },
  info: {
    color: theme.palette.info.main,
  },
  success: {
    color: theme.palette.success.main,
  },
  // Boolean
  false: {
    color: theme.palette.error.main,
  },
  true: {
    color: theme.palette.success.main,
  },
});

/**
 * filled" + "hover" (Buttons のような) スタイルを Material UI の名前 'primary', 'secondary', 'warning' などに対応。
 * 注意：variant="contained" のみと完全に互換性があります。
 */
export const buttonStylesByNames = (theme: Theme) => ({
  // Standard MUI names
  primary: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.contrastText,
    },
    '&:disabled': {
      backgroundColor: theme.palette.primary.light,
    },
  },
  secondary: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
      color: theme.palette.secondary.contrastText,
    },
    '&:disabled': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  error: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
      color: theme.palette.error.contrastText,
    },
    '&:disabled': {
      backgroundColor: theme.palette.error.light,
    },
  },
  warning: {
    backgroundColor: theme.palette.warning.main,
    color: theme.palette.warning.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.warning.dark,
      color: theme.palette.warning.contrastText,
    },
    '&:disabled': {
      backgroundColor: theme.palette.warning.light,
    },
  },
  info: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.info.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.info.dark,
      color: theme.palette.info.contrastText,
    },
    '&:disabled': {
      backgroundColor: theme.palette.info.light,
    },
  },
  success: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.success.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.success.dark,
      color: theme.palette.success.contrastText,
    },
    '&:disabled': {
      backgroundColor: theme.palette.success.light,
    },
  },
  // Boolean
  false: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
      color: theme.palette.error.contrastText,
    },
    '&:disabled': {
      backgroundColor: theme.palette.error.light,
    },
  },
  true: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.success.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.success.dark,
      color: theme.palette.success.contrastText,
    },
    '&:disabled': {
      backgroundColor: theme.palette.success.light,
    },
  },
});
