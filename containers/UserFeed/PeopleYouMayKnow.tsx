// People.js
import { MuiSecondaryButton } from 'components/Common/Buttons/Buttons';
import { H3, P2 } from 'components/Common/Typography/Typography';
import format from 'date-fns/format';
import React from 'react';
import styled from 'styled-components';

const PeopleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin-top: 32px;
`;

const PersonCard = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
    0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  margin-right: 16px;
  object-fit: cover;
  overflow-clip-margin: unset;
  border-radius: 50%;
  box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
    0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
`;

const PersonInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const Name = styled(H3)`
  font-weight: bold;
`;

const MutualFollowers = styled(P2)`
  color: #666;
`;

const JoinedDate = styled(P2)`
  color: #999;
`;

const FollowButton = styled(MuiSecondaryButton)`
  padding: 8px 16px;
`;

const formatDate = (date) => {
  return format(new Date(date), 'dd MMM, yyyy');
};

const PeopleYouMayKnow = ({ people }) => {
  return (
    <PeopleContainer>
      {people.map((person) => (
        <PersonCard key={person.id}>
          <ProfileImage src={person.profileImage} alt={person.name} />
          <PersonInfo>
            <Name>{person.name}</Name>
            {person.mutualFollowers !== undefined && (
              <MutualFollowers>
                {person.mutualFollowers} mutual follower
                {person.mutualFollowers > 1 ? 's' : ''}
              </MutualFollowers>
            )}
            <JoinedDate>Joined {formatDate(person.joinedDate)}</JoinedDate>
          </PersonInfo>

          <FollowButton>Follow</FollowButton>
        </PersonCard>
      ))}
    </PeopleContainer>
  );
};

export default PeopleYouMayKnow;
