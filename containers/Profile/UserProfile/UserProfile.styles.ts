import styled from 'styled-components';

export const StyledProfileWrapper = styled.section`
  display: grid;
  place-items: center;
  padding: 50px;
`;

export const StyledProfileContainer = styled.div``;

export const StyledUserSummarySection = styled.div`
  ${({ theme }) => `
    min-width: 800px;
    max-width: 800px;
    height: 500px;
    border: 1px solid ${theme.palette.grey[100]};
    border-radius: 16px;
    background-color: ${theme.palette.grey[100]};
  `}
`;

export const StyledAdditionalDetailSection = styled.div``;

export const StyledUserSummaryHeader = styled.div``;

export const StyledUserCoverImageSection = styled.div`
  border-radius: 16px;

  & img {
    object-fit: cover;
    min-width: 100%;
    height: 250px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }
`;

export const StyledUserProfileHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px 50px;
  & button path {
    fill: #000;
  }
`;

export const StyledUserImg = styled.div`
  border: 1px solid;
  border-color: ${({ theme }) => theme.palette.action.active};
  padding: 5px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  position: relative;
  top: -70px;

  & img {
    height: 150px;
    width: 150px;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const StyledUserInfo = styled.div`
  position: relative;
  top: -65px;
  padding-left: 70px;
  display: flex;
  flex-direction: column;
  row-gap: 3px;

  & h3 {
    margin-bottom: 4px;
  }

  & span {
    background-color: #fff;
    display: inline-block;
    padding: 1px 6px;
    border-radius: 5px;
  }
`;

export const StyledUserBioSection = styled.div`
  ${({ theme }) => `
    min-width: 800px;
    max-width: 800px;
    border: 1px solid ${theme.palette.grey[100]};
    border-radius: 16px;
    background-color: ${theme.palette.grey[100]};
    padding: 20px 25px;
  `}
`;

export const StyledBioHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & button path {
    fill: #000;
  }
`;

export const StyledBioText = styled.div`
  padding-top: 18px;
`;
