'use client';
import { Alert, Button, AppBar, Box, Fab, IconButton, Snackbar, Stack, Toolbar, Typography } from '@mui/material';
import { useAppStore } from '../store';
import AppIcon from '../components/ui/AppIcon/AppIcon';
import { AppLink } from '../components/ui/AppLink';
import { useEventSwitchDarkMode } from '../hooks';
import DepositWithdraw from '../components/base/DepositWithdraw';
import SalesByCountries from '../components/base/SalesByCountries';
import TotalEarning from '../components/base/TotalEarning';
import WeeklyOverview from '../components/base/WeeklyOverview';

export default function Home() {
  const modeChange = useEventSwitchDarkMode();
  const handleModeChange = () => {
    modeChange();
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <AppIcon icon="menu" />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Primary
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Alert severity="info">infoカラーのサンプル</Alert>
      <Stack direction="row" spacing={2} m={2}>
        <Button variant="outlined" color="success" onClick={handleModeChange}>
          Successボタン
        </Button>
        <Button variant="contained" color="error">
          Errorボタン
        </Button>
      </Stack>
      <Fab sx={{ position: 'absolute', bottom: 16, right: 16 }} color="secondary" aria-label="add">
        <AppIcon icon="add" />
      </Fab>
      <Snackbar open={true}>
        <Alert severity="warning">warningメッセージサンプル</Alert>
      </Snackbar>
      <DepositWithdraw />
      <SalesByCountries />
      <WeeklyOverview />
    </>
  );
}
