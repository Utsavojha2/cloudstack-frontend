import { useRouter } from 'next/router';
import React from 'react';

const UserPost = () => {
  const router = useRouter();

  console.log(router);
  return <div>UserPost</div>;
};

UserPost.isGuestPage = true;

export default UserPost;
