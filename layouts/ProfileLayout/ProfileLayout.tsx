import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { H1 } from 'components/Common/Typography/Typography';
import SearchBar from 'components/Layout/SearchBar/SearchBar';
import CropProvider from 'containers/Provider/CropProvider/CropProvider';

interface IProfileLayoutProps {
  children: React.ReactNode;
}

const ProfileLayout: React.FC<IProfileLayoutProps> = ({ children }) => {
  const router = useRouter();

  return (
    <CropProvider>
      <StyledProfileHeader>
        <header onClick={() => router.push('/feed')}>
          <StyledBrandLogo src={'/logo.png'} alt="" />
          <H1>CloudStack</H1>
        </header>
        <SearchBar />
      </StyledProfileHeader>
      {children}
    </CropProvider>
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
    cursor: pointer;
  }
`;

const StyledBrandLogo = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
  border-radius: 50%;
`;

export default ProfileLayout;
