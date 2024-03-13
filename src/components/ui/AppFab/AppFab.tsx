import {
  Fab,
  useMediaQuery,
  type FabProps,
  type SxProps,
  type Theme,
} from '@mui/material';
import React from 'react';
import { AppIcon } from '../AppIcon';
import { ICONS } from '../AppIcon/AppIcon';

const defautlPosition = { position: 'fixed', bottom: 16, right: 16 };

type AppFabProps = {
  icon?: keyof typeof ICONS;
  color: 'info' | 'error' | 'success' | 'warning' | 'secondary' | 'primary';
  sx?: SxProps<Theme>;
} & FabProps;

/**
 * フローティングアクションボタンのラッパー
 * @param icon -ICONS定数の値を与える
 * @param color -MUIのプロパティに準拠
 * @returns
 */
const AppFab = ({ icon, color = 'secondary', sx, ...rest }: AppFabProps) => {
  const isMobile: boolean = useMediaQuery('(min-width:1000px)');
  return (
    <Fab
      size={isMobile ? 'large' : 'medium'}
      sx={{ ...defautlPosition }}
      color={color}
      {...rest}
      aria-label={icon || 'add'}
    >
      <AppIcon icon={icon || 'add'} />
    </Fab>
  );
};

export default AppFab;
