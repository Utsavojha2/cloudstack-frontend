import React from 'react';
import styled from 'styled-components';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

interface IMenuProps extends Omit<MenuProps, 'open'> {
  children: ReadonlyArray<React.ReactElement<typeof MenuItem>>;
}

const MuiMenu: React.FC<IMenuProps> = ({ children, anchorEl, ...props }) => {
  const open = Boolean(anchorEl);

  return (
    <StyledMuiMenu
      {...props}
      id="mui-menu"
      anchorEl={anchorEl}
      open={open}
      MenuListProps={{
        'aria-labelledby': 'menu-list-buttons',
      }}
    >
      {children}
    </StyledMuiMenu>
  );
};

const StyledMuiMenu = styled(Menu)`
  & .MuiSvgIcon-root {
    width: 15px;
    height: 15px;
    margin-right: 6.5px;
  }
`;

export default MuiMenu;
