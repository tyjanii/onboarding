import React from 'react';

const UserDetails = ({ occupation, city, bio, change }) => {
  return (
    <div>
      <label htmlFor='occupation'>occupation</label>
      <input
        type='text'
        id='occupation'
        name='occupation'
        value={occupation}
        onChange={change}
      />
      <label htmlFor='city'>city</label>
      <input type='text' name='city' id='city' value={city} onChange={change} />

      <label htmlFor='bio'>bio</label>
      <input type='text' name='bio' id='bio' value={bio} onChange={change} />
    </div>
  );
};

export default UserDetails;
