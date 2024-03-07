import { Button, styled } from '@mui/material';

// オーバーライドしたコンポーネントのスタイルを定義
const CustomButton = styled(Button)(({ theme }) => ({
  // デフォルトのスタイル
  color: theme.palette.common.white,
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
  // ブレークポイントに応じてスタイルを変更
  [theme.breakpoints.up('xs')]: {
    fontSize: '0.8rem',
    padding: '0.25rem 1rem',
    width: '90%',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.2rem',
    padding: '0.5rem 2rem',
    width: '100%',
  },
}));

export default CustomButton;
