import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarViewMonth';
import EventNoteIcon from '@mui/icons-material/EventNote';
import WorkHistoryIcon from '@mui/icons-material/WorkOutlineOutlined';
import EditIcon from '@mui/icons-material/Edit';
import * as Button from 'components/Common/Buttons/Buttons';
import TabPanel from 'components/Common/TabPanel/TabPanel';
import { H2, H3, P1 } from 'components/Common/Typography/Typography';
import {
  StyledProfileWrapper,
  StyledProfileContainer,
  StyledDivItem,
  StyledAdditionalDetailSection,
  StyledUserSummaryHeader,
  StyledUserCoverImageSection,
  StyledUserProfileHeader,
  StyledUserImg,
  StyledUserInfo,
  StyledUserBioSection,
  StyledContainerHeader,
  StyledBioText,
  StyledAdditionalInfo,
  StyledAdditionalItem,
  StyledEmploymentTitle,
  StyledProfileTabs,
  StyledUserPosts,
  StyledPostItem,
  StyledPostHeader,
  StyledPostUserInfo,
} from 'containers/Profile/UserProfile/UserProfile.styles';
import { employmentData, profileTabs, postData } from './data';

const UserProfile = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  console.log(postData);

  return (
    <StyledProfileWrapper>
      <StyledProfileContainer>
        <StyledDivItem>
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
            <StyledContainerHeader>
              <H2>Summary</H2>
              <Button.MuiSecondaryButton>
                <EditIcon />
              </Button.MuiSecondaryButton>
            </StyledContainerHeader>
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
              earlier.
            </StyledBioText>
          </StyledUserBioSection>

          <StyledProfileTabs>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="user-profile-tabs"
              disableRipple
            >
              {profileTabs.map((tab) => {
                return <Tab key={tab} label={tab} />;
              })}
            </Tabs>
          </StyledProfileTabs>
          <TabPanel value={value} index={0}>
            <StyledUserPosts>
              {postData.map((post, i) => {
                return (
                  <StyledPostItem key={post.id} isFirstElement={i === 0}>
                    <StyledPostHeader>
                      <StyledDivItem>
                        <StyledPostUserInfo>
                          <StyledDivItem>
                            <img src={post.postedBy.avatar} alt="" />
                          </StyledDivItem>
                          <StyledDivItem>
                            <H3>{post.postedBy.name}</H3>
                            <P1>
                              {post.postedBy.emailAddress} -{' '}
                              {new Date(post.postedAt).getFullYear()}
                            </P1>
                          </StyledDivItem>
                        </StyledPostUserInfo>
                      </StyledDivItem>
                      <StyledDivItem>
                        <MoreVertIcon />
                      </StyledDivItem>
                    </StyledPostHeader>
                  </StyledPostItem>
                );
              })}
            </StyledUserPosts>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Three
          </TabPanel>
        </StyledDivItem>
        <StyledAdditionalDetailSection>
          <StyledContainerHeader>
            <H2>Additional Details</H2>
            <Button.MuiSecondaryButton>
              <EditIcon />
            </Button.MuiSecondaryButton>
          </StyledContainerHeader>
          <StyledAdditionalInfo>
            <StyledAdditionalItem>
              <EmailIcon />
              <div>
                <H3>Email</H3>
                <P1>utsavojha2@yahoo.com</P1>
              </div>
            </StyledAdditionalItem>
            <StyledAdditionalItem>
              <LocationOnIcon />
              <div>
                <H3>Country</H3>
                <P1>Nepal</P1>
              </div>
            </StyledAdditionalItem>
            <StyledAdditionalItem>
              <CalendarMonthIcon />
              <div>
                <H3>Born on</H3>
                <P1>21 December, 1999</P1>
              </div>
            </StyledAdditionalItem>
            <StyledAdditionalItem>
              <EventNoteIcon />
              <div>
                <H3>Join Date</H3>
                <P1>2 months ago, on 12/15/2020</P1>
              </div>
            </StyledAdditionalItem>
            <StyledEmploymentTitle>Employment History</StyledEmploymentTitle>
            {employmentData.map((data) => (
              <StyledAdditionalItem key={data.id}>
                <WorkHistoryIcon />
                <div>
                  <H3>{data.companyName}</H3>
                  <P1>{data.positionName}</P1>
                </div>
              </StyledAdditionalItem>
            ))}
          </StyledAdditionalInfo>
        </StyledAdditionalDetailSection>
      </StyledProfileContainer>
    </StyledProfileWrapper>
  );
};

export default UserProfile;
