import React from 'react';

const PersonalInfromation = ({ firstName, lastName, email, change }) => {
  return (
    <div>
      <label htmlFor='firstName'>First Name</label>
      <input
        type='text'
        id='firstName'
        name='firstName'
        value={firstName}
        onChange={change}
      />
      <label htmlFor='lastName'>Last Name</label>
      <input
        type='text'
        id='lastName'
        name='lastName'
        value={lastName}
        onChange={change}
      />
      <label htmlFor='email'>Email</label>
      <input
        type='email'
        id='email'
        name='email'
        value={email}
        onChange={change}
      />
    </div>
  );
};

export default PersonalInfromation;
