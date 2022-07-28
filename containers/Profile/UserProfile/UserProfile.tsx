import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import {
  StyledProfileWrapper,
  StyledProfileContainer,
  StyledUserSummarySection,
  StyledAdditionalDetailSection,
  StyledUserSummaryHeader,
  StyledUserCoverImageSection,
  StyledUserProfileHeader,
  StyledUserImg,
  StyledUserInfo,
  StyledUserBioSection,
  StyledBioHeader,
  StyledBioText,
} from 'containers/Profile/UserProfile/UserProfile.styles';
import * as Button from 'components/Common/Buttons/Buttons';
import { H2, H3, P1 } from 'components/Common/Typography/Typography';

const UserProfile = () => {
  return (
    <StyledProfileWrapper>
      <StyledProfileContainer>
        <StyledUserSummarySection>
          <StyledUserSummaryHeader>
            <StyledUserCoverImageSection>
              <img src="/cover.jpg" alt="" />
            </StyledUserCoverImageSection>
            <StyledUserProfileHeader>
              <StyledUserImg>
                <img src="/dp.jpeg" alt="" />
              </StyledUserImg>
              <Button.MuiSecondaryButton>
                <EditIcon sx={{ mr: 1 }} />
                Edit Profile
              </Button.MuiSecondaryButton>
            </StyledUserProfileHeader>
            <StyledUserInfo>
              <H2>Utsav Ojha</H2>
              <H3>VP of Engineering</H3>
              <div>
                <P1>New York, Nepal</P1>
              </div>
            </StyledUserInfo>
          </StyledUserSummaryHeader>
          <StyledUserBioSection>
            <StyledBioHeader>
              <H2>Summary</H2>
              <Button.MuiSecondaryButton>
                <EditIcon />
              </Button.MuiSecondaryButton>
            </StyledBioHeader>
            <StyledBioText>
              TypeORM supports nearly all the types available in the popular
              database engine. Actually, TypeORM enables different set of types
              for each database engine. We can use any database type supported
              by our database engine without any issue. The above two entities
              have columns id, title and description. Using entity inheritance,
              we create one base class Details and combine the above two
              entities as specified below. Now open your mysql server and move
              to your database, you could see the following tables. TypeORM
              provides an extensive set of options other than type to describe
              the column. For example, length option refers the length of the
              database field and it can be specified as below. As learned
              earlier, Entity is actually a collection of attributes. As entity
              object refers the database table. Its attributes / member
              variables refer the corresponding database table’s fields /
              columns. TypeORM supports all type of database fields through
              Column class. Let us learn the different type of column supported
              by TypeORM in this chapter
            </StyledBioText>
          </StyledUserBioSection>
        </StyledUserSummarySection>
        <StyledAdditionalDetailSection></StyledAdditionalDetailSection>
      </StyledProfileContainer>
    </StyledProfileWrapper>
  );
};

export default UserProfile;
