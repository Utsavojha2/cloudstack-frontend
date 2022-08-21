import React from 'react';
import ProfileLayout from 'layouts/ProfileLayout/ProfileLayout';
import UserSettings from 'containers/Settings/UserSettings';

const Profile = () => {
  return (
    <ProfileLayout>
      <UserSettings />
    </ProfileLayout>
  );
};

Profile.isGuestPage = true;

export default Profile;
