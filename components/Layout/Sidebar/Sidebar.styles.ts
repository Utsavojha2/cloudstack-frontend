import styled from 'styled-components';
import { Grid, Drawer } from '@mui/material';
import { P2 } from 'components/Common/Typography/Typography';

const drawerWidth = 350;

interface ISidebarProps {
  isOverlay: boolean;
}

export const MuiSidebar = styled(Drawer)<ISidebarProps>`
  ${({ open: isOpen, theme, isOverlay }) => {
    return ` 
      width: ${isOpen ? drawerWidth : 0}px;
      transition: ${theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      })};
      flex-shrink: 0;
      margin-left: ${!isOpen ? -drawerWidth : 0}px;
      & .MuiDrawer-paper {
        background-color: ${!isOverlay ? theme.palette.grey[100] : '#fff'};
        width: ${isOpen ? drawerWidth : 0}px;
        box-sizing: border-box;
        margin-left: ${!isOpen ? -drawerWidth : 0}px;
      }
      & .grid-lastcell {
        border: none;
      };
    `;
  }}
`;

export const DrawerHeader = styled.div`
  ${({ theme }) => `
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 5px 15px 0 0;
    ${theme.breakpoints.up('lg')}{
      display: none;
    }
  `};
`;

export const BrandLogo = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
  border-radius: 50%;
`;

export const UserLogoWrapper = styled.div`
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

export const UserHeaderWrapper = styled.div`
  width: 100%;
  & > * {
    text-align: center;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const UserHandle = styled(P2)`
  text-align: center;
  display: block;
  margin-top: 5px;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const UserFeedInfo = styled(Grid)`
  border-right: 1px solid;
  border-color: ${({ theme }) => theme.palette.grey['200']};

  & .MuiTypography-p1 {
    margin-bottom: 8px;
    font-size: 1.2rem;
  }
`;
