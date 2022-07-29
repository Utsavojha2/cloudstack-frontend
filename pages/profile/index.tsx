import React from 'react';
import ProfileLayout from 'layouts/ProfileLayout/ProfileLayout';
import UserProfile from 'containers/Profile/UserProfile/UserProfile';

const Profile = () => {
  return (
    <ProfileLayout>
      <UserProfile />
    </ProfileLayout>
  );
};

Profile.isGuestPage = true;

export default Profile;
