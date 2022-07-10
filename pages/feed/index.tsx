import React from 'react';
import UserFeedLayout from 'layouts/FeedLayout/FeedLayout';
import UserFeed from 'containers/UserFeed/UserFeed';

const Feed = () => {
  return (
    <UserFeedLayout>
      <UserFeed />
    </UserFeedLayout>
  );
};

Feed.isGuestPage = true;

export default Feed;
