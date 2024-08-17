import React from 'react';
import UserFeedLayout from 'layouts/FeedLayout/FeedLayout';
import UserFeed from 'containers/UserFeed/UserFeed';
import { feedItems } from 'containers/UserFeed/helpers';

const Feed = () => {
  return (
    <UserFeedLayout>
      <UserFeed onLoadMore={() => null} posts={feedItems} />
    </UserFeedLayout>
  );
};

Feed.isGuestPage = true;

export default Feed;
