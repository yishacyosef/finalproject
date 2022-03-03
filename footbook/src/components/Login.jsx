import { Button } from '@mui/material';
import React from 'react';
import { auth } from '../firebase';
import '../css/Login.css';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
function Login () {
  const [state, dispatch] = useStateValue();
    // const signIn =() => {
      signInWithPopup(auth, provider)
        .then((result) => {
          dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
          });
          // This gives you a Google Access Token. You can use it to access the Google API.
          // const credential = GoogleAuthProvider.credentialFromResult(result);
          // const token = credential.accessToken;
          // // The signed-in user info.
          // const user = result.user;
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        })
      
    
    return (
      <div className='login'> 
          <div className="login__logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/900px-Facebook_f_logo_%282019%29.svg.png?20200820101156" alt="Facebook logo" />
              <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="Facebook logo" />
              </div>
          <Button type='submit' onClick={signInWithPopup}>
              Sign In
          </Button> 

      </div>
    );
  // }
}
// }
export default Login