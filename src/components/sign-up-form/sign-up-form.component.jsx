import { useState } from 'react';

import FormInput from '../form-input/form-input.component';


import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import {SignUpContainer, Button} from './sign-up-form.styles.jsx';
import { Link, useNavigate } from 'react-router-dom';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
  sascode:'',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword, sascode } = formFields;
  const navigate = useNavigate();


  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }
    if(sascode !== 'SASUTCN'){
      alert('Codul sas este gresit! Optiunea de creare a contului este disponibilă doar pentru membrii SAS UTCN');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );


      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
      navigate('/');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
      if (error.code === 'auth/weak-password') {
        alert('Password should be at least 6 characters');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form >
        <FormInput
          label='Name'
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />

        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />

        <FormInput
          label='Confirm Password'
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <FormInput
          label='SAS Code'
          type='text'
          required
          onChange={handleChange}
          name='sascode'
          value={sascode}
        />
      
      </form>
      <Button type='submit' onClick={handleSubmit}>Sign Up</Button>
    </SignUpContainer>
  );
};

export default SignUpForm;