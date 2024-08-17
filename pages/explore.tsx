import React from 'react';
import UserFeedLayout from 'layouts/FeedLayout/FeedLayout';
import PeopleYouMayKnow from 'containers/UserFeed/PeopleYouMayKnow';
import { people } from 'containers/UserFeed/helpers';

const Profile = () => {
  return (
    <UserFeedLayout>
      <PeopleYouMayKnow people={people} />
    </UserFeedLayout>
  );
};

Profile.isGuestPage = true;

export default Profile;
