import React from 'react';
import TopBar from './TopBar';
import Dashboard from './Dashboard';
import { useEffect } from 'react';
import axios from 'axios';

const Home =() => {

 

 
    return (
        <>
          <TopBar />
          <Dashboard />
        </>
      );
};

export default Home;