import React from 'react';

const DisplayDetails = ({
  firstName,
  lastName,
  email,
  occupation,
  city,
  bio,
}) => {
  return (
    <div>
      <h3>First Name</h3>
      <p>{firstName}</p>
      <h3>Last Name</h3>
      <p>{lastName}</p>
      <h3>Email</h3>
      <p>{email}</p>
      <h3>Occupation</h3>
      <p>{occupation}</p>
      <h3>Bio</h3>
      <p>{bio}</p>
      <h3>City</h3>
      <p>{city}</p>
    </div>
  );
};

export default DisplayDetails;
