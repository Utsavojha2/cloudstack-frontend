import React from 'react';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <StyledHeaderBar>
      <IconButton type="submit" sx={{ p: '10px' }}>
        <SearchIcon />
      </IconButton>
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
    </StyledHeaderBar>
  );
};

const StyledHeaderBar = styled(Paper)`
  ${({ theme }) => `
    padding: 2px 4px;
    display: flex;
    align-items: center;
    width: 400px;
    border: 1px solid lightgray;
    box-shadow: none;
    border-radius: 10px;
    ${theme.breakpoints.down('lg')} {
      width: 300px;
    }
    ${theme.breakpoints.down('md')} {
        width: 210px;
    }
    ${theme.breakpoints.down('sm')} {
        width: 250px;
    }
 `};
`;

export default SearchBar;
