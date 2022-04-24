import React, { useContext } from 'react';
import firebase from 'firebase';
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [logedInUser,setLoggedInUser] = useContext(UserContext)
    const history = useNavigate();
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } };
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const handleLoginWithGoogle = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
         const {displayName,email} = result.user;
         const signedInUser = {name: displayName, email}
         setLoggedInUser(signedInUser);
         history(from, { replace: true })
     }).catch((error) => {
         console.log(error);
  });
    }
    return (
        <div>
            <h1>This is Login</h1>
            <button onClick={handleLoginWithGoogle}>Log In With Google</button>
        </div>
    );
};

export default Login;