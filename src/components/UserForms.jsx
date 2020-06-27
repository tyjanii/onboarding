import React, { useState } from 'react';
import { useFormik } from 'formik';
import PersonalInfromation from './PersonalInfromation';
import UserDetails from './UserDetails';
import DisplayDetails from './DisplayDetails';
import './styles/user-forms.scss';
const UserForms = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      occupation: '',
      city: '',
      bio: '',
    },
  });
  const [step, setStep] = useState(1);
  const incrementStep = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };
  const decrementStep = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };
  return (
    <div className='form-body'>
      <div className='sidebar'>
        <h2>Start gaming and get paid for competing with your cryptowallet</h2>
        <p>Compete against elite gamers, earn clout and cash</p>
      </div>
      <div className='form-wrapper'>
        <form>
          {(() => {
            switch (step) {
              case 1:
                return (
                  <PersonalInfromation
                    firstName={formik.values.firstName}
                    lastName={formik.values.lastName}
                    email={formik.values.email}
                    change={formik.handleChange}
                  />
                );
              case 2:
                return (
                  <UserDetails
                    occupation={formik.values.occupation}
                    city={formik.values.city}
                    bio={formik.values.bio}
                    change={formik.handleChange}
                  />
                );
              case 3:
                return (
                  <DisplayDetails
                    firstName={formik.values.firstName}
                    lastName={formik.values.lastName}
                    email={formik.values.email}
                    occupation={formik.values.occupation}
                    city={formik.values.city}
                    bio={formik.values.bio}
                  />
                );
              default:
                return null;
            }
          })()}
          <button onClick={incrementStep}>Increase Me</button>
        </form>
      </div>
    </div>
  );
};

export default UserForms;
