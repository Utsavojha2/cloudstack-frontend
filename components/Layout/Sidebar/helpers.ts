import FeedIcon from '@mui/icons-material/Feed';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';

export const navigationItems = [
  {
    name: 'Feed',
    icon: FeedIcon,
  },
  {
    name: 'Explore',
    icon: SearchIcon,
  },
  {
    name: 'Profile',
    icon: AccountCircleIcon,
  },
  {
    name: 'Settings',
    icon: SettingsIcon,
  },
  {
    name: 'Log Out',
    isAsyncAction: true,
    icon: LogoutIcon,
  },
];
