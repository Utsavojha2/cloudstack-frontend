import React from 'react';
import ProfileLayout from 'layouts/ProfileLayout/ProfileLayout';
import ProfileDetails from 'containers/Profile/ProfileDetails/ProfileDetails';

const Profile = () => {
  return (
    <ProfileLayout>
      <ProfileDetails />
    </ProfileLayout>
  );
};

Profile.isGuestPage = true;

export default Profile;
