import React from 'react';
import ProfileLayout from 'layouts/ProfileLayout/ProfileLayout';
import UserProfile from 'containers/Profile/UserProfile/UserProfile';
import ProfileDetails from 'containers/Profile/ProfileDetails/ProfileDetails';
import UserAccount from 'containers/Profile/UserAccount/UserAccount';

const Profile = () => {
  return (
    <ProfileLayout>
      <ProfileDetails />
      <UserProfile />
      <UserAccount />
    </ProfileLayout>
  );
};

Profile.isGuestPage = true;

export default Profile;
