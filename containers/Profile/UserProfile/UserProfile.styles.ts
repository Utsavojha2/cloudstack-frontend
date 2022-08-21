import styled from 'styled-components';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { H2 } from 'components/Common/Typography/Typography';

interface IStyledPostItemProps {
  isFirstElement: boolean;
}

export const StyledProfileWrapper = styled.section`
  ${({ theme }) => `
    display: grid;
    place-items: center;
    padding: 50px;
    ${theme.breakpoints.down('md')}{
      padding: 30px 20px;
    }
`}
`;

export const StyledProfileContainer = styled.div`
  ${({ theme }) => `
    display: flex;
    align-items: flex-start;
    justify-content: center;
    column-gap: 35px;
    row-gap: 25px;
    flex-wrap: wrap;
    ${theme.breakpoints.down('lg')}{
      display: block
    }
  `}
`;

export const StyledDivItem = styled.div``;

export const StyledUserSummaryHeader = styled.div`
  ${({ theme }) => `
    border: 1px solid ${theme.palette.grey[100]};
    border-radius: 16px;
    background-color: ${theme.palette.grey[100]};
    margin-bottom: 25px;
  `}
`;

export const StyledUserCoverImageSection = styled.div`
  ${({ theme }) => `
    border-radius: 16px;

    & img {
      object-fit: cover;
      min-width: 100%;
      height: 250px;
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;

      ${theme.breakpoints.down('md')}{
        height: auto;
        max-height: 200px;
      }

      ${theme.breakpoints.down('sm')}{
        height: auto;
        max-height: 175px;
      }
    }
  `}
`;

export const StyledUserProfileHeader = styled.div`
  ${({ theme }) => `
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 10px 50px;
    & button path {
      fill: #000;
    }
    ${theme.breakpoints.down('md')}{
      padding: 10px 35px;
    }

    ${theme.breakpoints.down('sm')}{
      padding: 10px 15px;
    }
  `}
`;

export const StyledUserImg = styled.div`
  ${({ theme }) => `
    border: 1px solid;
    border-color: ${theme.palette.action.active};
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

      ${theme.breakpoints.down('md')}{
        height: 100px;
        width: 100px;
      }
    }
  `}
`;

export const StyledUserInfo = styled.div`
  ${({ theme }) => `
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
    ${theme.breakpoints.down('md')}{
      padding-left: 40px;
    }

    ${theme.breakpoints.down('sm')}{
      padding-left: 20px;
    }
  `}
`;

export const StyledUserBioSection = styled.div`
  ${({ theme }) => `
    width: 800px;
    border: 1px solid ${theme.palette.grey[100]};
    border-radius: 16px;
    background-color: ${theme.palette.grey[100]};
    padding: 20px 25px;
    margin-bottom: 25px;
    ${theme.breakpoints.down('lg')}{
      width: auto;
      max-width: 800px;
    }
  `}
`;

export const StyledContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & button {
    padding: 5px;
    & path {
      fill: #000;
    }
  }
`;

export const StyledBioText = styled.div`
  padding-top: 18px;
`;

export const StyledAdditionalDetailSection = styled.div`
  ${({ theme }) => `
    width: 400px;
    padding: 15px 20px;
    border: 1px solid ${theme.palette.grey[100]};
    background-color: ${theme.palette.grey[100]};
    border-radius: 16px;
    ${theme.breakpoints.down('md')}{
      width: auto;
      max-width: 400px;
    }
  `}
`;

export const StyledAdditionalInfo = styled.div`
  margin-top: 5px;
`;

export const StyledAdditionalItem = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
  padding: 12px 0;

  & div {
    display: flex;
    flex-direction: column;
    row-gap: 4px;
  }
`;

export const StyledEmploymentTitle = styled(H2)`
  margin: 15px 0 5px 0;
  font-size: 18px;
  display: inline-block;
  border-bottom: 1px solid gray;
  padding-bottom: 5px;
`;

export const StyledProfileTabs = styled.div`
  ${({ theme }) => `
    width: 800px;
    border: 1px solid ${theme.palette.grey[100]};
    border-radius: 16px;
    background-color: ${theme.palette.grey[100]};
    padding: 10px 25px;

    & .MuiTabs-flexContainer {
      column-gap: 16px;
    }

    & .MuiTabs-indicator	{
      background-color: transparent;
    }

    & .MuiButtonBase-root {
      border-radius: 6px;
      padding: 5px 10px;
    }

    & .Mui-selected {
      background-color: #fff;
    }

    ${theme.breakpoints.down('lg')}{
      width: auto;
      max-width: 800px;
    }
  `}
`;

export const StyledUserPosts = styled.div`
  display: grid;
  place-items: center;
`;

export const StyledPostItem = styled.div<IStyledPostItemProps>`
  padding: 12px 0px;
  width: 700px;
  background-color: ${({ theme }) => theme.palette.grey[100]};
  margin-top: ${({ isFirstElement }) => (isFirstElement ? '30px' : '15px')};
  margin-bottom: 15px;
  border-radius: 14px;

  & > div:nth-child(2) {
    background-color: #000;
  }

  & .default-nav {
    padding: 10px !important;
    background-color: #fff;
    margin: 0 5px;
  }
`;

export const StyledPostHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 5px 15px 10px;
`;

export const StyledPostUserInfo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  & > div:first-child {
    border: 1px solid;
    padding: 2px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;

    & img {
      height: 40px;
      width: 40px;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 6px;
  }
`;

export const StyledPostBody = styled.div``;

export const StyledPostFooter = styled.div``;

export const StyledPostAction = styled.div`
  padding: 10px 0 10px 5px;
  margin: 20px 16px 0;
  display: flex;
  align-items: center;
  column-gap: 6px;
  border: ${({ theme }) => `1px solid ${theme.palette.grey[200]}`};
  border-radius: 12px;
`;

export const StyledPostCommentInput = styled.div`
  padding: 17px 0 10px;
  margin: 0 15px;
  display: flex;
  align-items: flex-start;
  justify-content: stretch;
  column-gap: 12px;

  & > div:first-child {
    border: 1px solid;
    border-color: ${({ theme }) => theme.palette.action.active};
    padding: 5px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.palette.grey[100]};

    & img {
      height: 40px;
      width: 40px;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  & > div:nth-child(2) {
    flex-grow: 1;
  }
`;

export const StyledMuiTextArea = styled(TextareaAutosize)`
  padding: 15px;
  min-width: 100%;
  max-width: 100%;
  height: 100%;
  border-color: lightgray;
  font-family: inherit;
  background-color: ${({ theme }) => theme.palette.grey[50]};
  resize: none;
  font-size: 16px;
  border-radius: 6px;
  &:focus {
    outline: none;
  }
`;
