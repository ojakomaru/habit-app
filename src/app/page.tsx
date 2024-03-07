import { Stack, TextField, Typography } from '@mui/material';
import { useAppStore } from '../store';
import { Button } from '../components/ui/Button';
import AppIcon from '../components/ui/AppIcon/AppIcon';
import { AppLink } from '../components/ui/AppLink';

export default function Home() {
  return (
    <Stack height="100vh" justifyContent="center" alignItems="center" gap="32px">
      <Typography id="login_heading" variant="h1" fontSize="1.5rem">
        ログインフォーム
      </Typography>
      <Stack component="form" gap="24px" aria-labelledby="login_heading">
        <TextField label="メールアドレス" />
        <TextField label="パスワード" />
        <Button variant='contained' color="info" startIcon={'search'} endIcon={'account'} >
          ここに中身を書きます。
        </Button>
        <AppLink color="error" href="/dashboard">
          これは自前のリンクです
        </AppLink>
      </Stack>
    </Stack>
  );
}
