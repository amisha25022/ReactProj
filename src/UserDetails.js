// UserDetails.js
import React from 'react';
import { useSelector } from 'react-redux';

const UserDetails = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <h2>User Details:</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserDetails;
