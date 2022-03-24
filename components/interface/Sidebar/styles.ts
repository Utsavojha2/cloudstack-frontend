import styled from 'styled-components';
import { Drawer, Grid } from '@mui/material';
import { P2 } from 'components/common/Typography/Typography';

const drawerWidth = 350;

const MuiSidebar = styled(Drawer)`
  ${({ open: isOpen, theme }) => {
    console.log(theme);
    return ` 
      width: ${isOpen ? drawerWidth : 0}px;
      transition: ${theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      })};
      flex-shrink: 0;
      // margin-left: ${!isOpen ? -drawerWidth : 0}px;
      & .MuiDrawer-paper {
        width: ${isOpen ? drawerWidth : 0}px;
        box-sizing: border-box;
        // margin-left: ${!isOpen ? -drawerWidth : 0}px;
      }
      & .grid-lastcell {
        border: none;
      };
    `;
  }}
`;

const DrawerHeader = styled.div`
  ${({ theme }) => `
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 5px 15px 0 0;
    ${theme.breakpoints.up('md')}{
      display: none;
    }
  `};
`;

const BrandLogo = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
  border-radius: 50%;
`;

const UserLogoWrapper = styled.div`
  border: 1px solid;
  border-color: ${({ theme }) => theme.palette.action.active};
  padding: 5px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    height: 100px;
    width: 100px;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const UserHeaderWrapper = styled.div`
  width: 100%;
  & > * {
    text-align: center;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const UserHandle = styled(P2)`
  text-align: center;
  display: block;
  margin-top: 5px;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

const UserFeedInfo = styled(Grid)`
  border-right: 1px solid;
  border-color: ${({ theme }) => theme.palette.grey['200']};

  & .MuiTypography-p1 {
    margin-bottom: 8px;
    font-size: 1.2rem;
  }
`;

export default {
  MuiSidebar,
  DrawerHeader,
  BrandLogo,
  UserLogoWrapper,
  UserHeaderWrapper,
  UserHandle,
  UserFeedInfo,
};
