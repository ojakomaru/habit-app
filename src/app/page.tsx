'use client';
import { Alert, AppBar, Box, Fab, IconButton, Snackbar, Stack, Toolbar } from '@mui/material';
import { useAppStore } from '../store';
import AppIcon from '../components/ui/AppIcon/AppIcon';
import { AppLink } from '../components/ui/AppLink';
import { useEventSwitchDarkMode } from '../hooks';
import DepositWithdraw from '../components/base/DepositWithdraw';
import SalesByCountries from '../components/base/SalesByCountries';
import TotalEarning from '../components/base/TotalEarning';
import WeeklyOverview from '../components/base/WeeklyOverview';
import Table from '../components/base/Table';
import StatisticsCard from '../components/base/StatisticsCard';
import Spinner from '../components/ui/Spinner/Spinner';
import { Typography } from '../components/ui/Typography';
import { Button } from '../components/ui/Button';
import AppAlert from '../components/ui/AppAlert';
import FullWidthTabs from '../components/ui/AppFab/AppFab';

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
            <Spinner />
          </Toolbar>
        </AppBar>
      </Box>
      <AppAlert title='Info' variant="standard" severity="info">infoカラーのサンプル</AppAlert>
      <AppAlert title='ここがタイトルです' severity="warning">warningカラーのサンプル</AppAlert>
      <AppAlert severity="error">errorカラーのサンプル</AppAlert>
      <AppAlert severity="success">successカラーのサンプル</AppAlert>
      <FullWidthTabs />
      <Stack direction="row" spacing={2} m={2}>
        <Button variant="outlined" color="success" onClick={handleModeChange}>
          Successボタン
        </Button>
        <Button variant="contained" color="error">
          Errorボタン
        </Button>
        <Button variant="outlined" color="primary">
          Primaryボタン
        </Button>
        <Button variant="text" color="noticeRed">
          NoticeRedボタン
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
      <StatisticsCard />
      <Table />
      {/* <TotalEarning />カスタムカラーを用意していないため保留 */}
      <WeeklyOverview />
    </>
  );
}
