// SVG assets
// Material Icons
import AccountCircle from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import NightIcon from '@mui/icons-material/Brightness3';
import DayNightIcon from '@mui/icons-material/Brightness4';
import DayIcon from '@mui/icons-material/Brightness5';
import CloseIcon from '@mui/icons-material/Close';
import InfoIcon from '@mui/icons-material/Info';
import MenuIcon from '@mui/icons-material/Menu'
import DefaultIcon from '@mui/icons-material/MoreHoriz'
import SettingsIcon from '@mui/icons-material/Settings'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { type ComponentType, type FC, type SVGAttributes } from 'react';
import LogoIcon from './icons/LogoIcon';
const APP_ICON_SIZE = 24;

/**
 * 使用方法
 * 1.必要なすべてのMUIまたは他のSVGアイコンをこのファイルにインポートします。
 * 2.ICONSオブジェクトに「ユニークな小文字の名前」を持つアイコンを追加します。
 */
export const ICONS: Record<string, ComponentType> = {
  default: DefaultIcon,
  logo: LogoIcon,
  close: CloseIcon,
  menu: MenuIcon,
  settings: SettingsIcon,
  visibilityon: VisibilityIcon,
  visibilityoff: VisibilityOffIcon,
  daynight: DayNightIcon,
  night: NightIcon,
  day: DayIcon,
  search: SearchIcon,
  info: InfoIcon,
  home: HomeIcon,
  add: AddIcon,
  delete: DeleteIcon,
  remove: RemoveIcon,
  account: AccountCircle,
  signup: PersonAddIcon,
  login: PersonIcon,
  logout: ExitToAppIcon,
  notifications: NotificationsIcon,
};

export interface AppIconProps extends SVGAttributes<SVGElement> {
  color?: string;
  icon?: string;
  size?: string | number;
  title?: string;
}
/**
 * 与えられたアイコン名でSVGアイコンをレンダリングする
 * @component AppIcon
 * @param color - CSSカラー値としてのアイコンの色
 * @param icon - レンダリングするアイコンのname
 * @param title - カーソルがアイコンの上に来たときに表示されるtitle/hint
 * @param size - size
 */
const AppIcon: FC<AppIconProps> = ({
  color,
  icon = 'default',
  size = APP_ICON_SIZE,
  style,
  ...restOfProps
}) => {
  const iconName = (icon || 'default').trim().toLowerCase();

  let ComponentToRender = ICONS[iconName];
  if (!ComponentToRender) {
    console.warn(`AppIcon: icon "${iconName}" is not found!`);
    ComponentToRender = DefaultIcon;
  }

  const propsToRender = {
    height: size,
    color,
    fill: color && 'currentColor',
    size,
    style: { ...style, color },
    width: size,
    ...restOfProps,
  };

  return <ComponentToRender data-icon={iconName} {...propsToRender} />;
};
AppIcon.displayName = 'AppIcon';

export default AppIcon;
