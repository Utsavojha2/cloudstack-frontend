import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Tab, Tabs } from '@mui/material';
import TabPanel from 'components/Common/TabPanel/TabPanel';
import { H1 } from 'components/Common/Typography/Typography';
import SearchBar from 'components/Layout/SearchBar/SearchBar';

interface IProfileLayoutProps {
  children: React.ReactNode;
}

const ProfileLayout: React.FC<IProfileLayoutProps> = ({ children }) => {
  const router = useRouter();
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <StyledProfileHeader>
        <header onClick={() => router.push('/feed')}>
          <StyledBrandLogo src={'/logo.png'} alt="" />
          <H1>CloudStack</H1>
        </header>
        <Tabs value={value} onChange={handleChange} aria-label="profile-tabs">
          <Tab label="Details" />
          <Tab label="Profile" />
          <Tab label="Account" />
        </Tabs>
        <SearchBar />
      </StyledProfileHeader>
      {React.Children.map(children, (child, i) => {
        return (
          <TabPanel value={value} index={i}>
            {child}
          </TabPanel>
        );
      })}
    </div>
  );
};

const StyledProfileHeader = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 50px;
  background-color: ${({ theme }) => theme.palette.grey[100]};

  & header {
    display: flex;
    align-items: center;
    column-gap: 10px;
  }
`;

const StyledBrandLogo = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
  border-radius: 50%;
`;

export default ProfileLayout;
