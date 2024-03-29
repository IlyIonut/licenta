import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword} from '../../utils/firebase/firebase.utils';
import { useNavigate } from 'react-router-dom';

import {SignUpContainer, ButtonsContainer,Button} from './sign-in-form.styles.jsx';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, password} = formFields;
  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle= async () =>{
  await signInWithGooglePopup();
  navigate('/users');
    
    
};

  const handleSubmit = async (event) => {
    event.preventDefault();

  
    try {
      const {user} = await signInAuthUserWithEmailAndPassword(email,password);
      resetFormFields();
      navigate('/')
    } catch (error) {
        switch(error.code){
          case 'auth/wrong-password':
            alert('icorrect password or email');
            break;
          case 'auth/user-not-found':
            alert('no user associated with this email');
            break;
          default:
            console.log(error);

        }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <ButtonsContainer>
        <Button type='submit'>Sign In</Button>
        {/* <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle} >Google sign in</Button> */}
        <Button type='button' onClick={()=>{navigate('/account')}} >Create Account</Button>
        </ButtonsContainer>
      </form>
    </SignUpContainer>
  );
};

export default SignInForm;