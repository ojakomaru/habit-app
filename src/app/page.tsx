'use client';
import {
  Alert,
  AppBar,
  Box,
  Fab,
  IconButton,
  Snackbar,
  Stack,
  Toolbar,
} from '@mui/material';
Withdraw';
import SalesByCountries from '../components/base/SalesByCountries';
import StatisticsCard from '../components/base/StatisticsCard';
import Table from '../components/base/Table';
import TotalEarning from '../components/base/TotalEarning';
import WeeklyOverview from '../components/base/WeeklyOverview';
import AppAlert from '../components/ui/AppAlert';
import AppFab from '../components/ui/AppFab/AppFab';
import AppIcon from '../components/ui/AppIcon/AppIcon';
import { Button } from '../components/ui/Button';
import Slider from '../components/ui/Slider';
import AlertSnackbar from '../components/ui/Snackbar/AlertSnackbar';
import Spinner from '../components/ui/Spinner/Spinner';
import { Typography } from '../componenimport DepositWithdraw from '../components/base/Deposit
ts/ui/Typography';
import { useEventSwitchDarkMode } from '../hooks';

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
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
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
      <AppAlert title="Info" variant="standard" severity="info">
        infoカラーのサンプル
      </AppAlert>
      <Slider />
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
      <AppFab color="secondary" />
      <AlertSnackbar openFlg={true} message="スナックバーのコンポーネント" />
      <DepositWithdraw />
      <SalesByCountries />
      <StatisticsCard />
      <Table />
      {/* <TotalEarning />カスタムカラーを用意していないため保留 */}
      <WeeklyOverview />
    </>
  );
}
