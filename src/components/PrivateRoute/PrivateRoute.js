/* eslint-disable no-restricted-globals */
import React, { useContext } from 'react';
import { Navigate,useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({ children }) => {
    const [logedInUser,setLoggedInUser] = useContext(UserContext)
    return logedInUser.email ? children : <Navigate  to={{
        pathname: "/login",
        state: { from: location }
      }} />;
};

export default PrivateRoute;