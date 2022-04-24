import React, { createContext, useState } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Book from './components/Book/Book';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [logedInUser,setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[logedInUser,setLoggedInUser]}>
      <p>Name: {logedInUser.name}</p>
          <Header/>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/book/:bedType" element={
            <PrivateRoute>
              <Book />
            </PrivateRoute>
          } />
            <Route exact path="/" element={<Home />} />
          </Routes>
    </UserContext.Provider>
  );
}

export default App;
