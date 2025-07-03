import React from 'react';
import Watchlist from './Watchlist';
import { Routes, Route } from 'react-router-dom';
import Summary from './Summary';
import Orders from './Orders';
import Holdings from './Holdings';
import Positions from './Positions';
import Funds from './Funds';
import Apps from './Apps';
import { GeneralContextProvider } from './GeneralContext';


const Dashboard =() => {
    return ( 
        <div className="dashboard-container">
            <div className='watchlist-content'>
                <GeneralContextProvider>
                     <Watchlist />
                </GeneralContextProvider>
                   
               
           
            </div>
            
            <div className='content'>
                <GeneralContextProvider>
                <Routes>
                    <Route exact path='/' element={<Summary />} />
                    <Route path='/orders' element={<Orders/>} />
                    <Route path='/holdings' element={<Holdings />} />
                    <Route path='/positions' element={<Positions/>} />
                    <Route path='/funds' element={<Funds/>} />
                    <Route path='/apps' element={<Apps />} />
                    


                </Routes>
                 </GeneralContextProvider>

            </div>

        </div>
     );
};

export default Dashboard;