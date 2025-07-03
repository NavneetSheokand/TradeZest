import React from 'react';
import {ReactComponent as Pricing0} from "../../assets/images/pricing0.svg";
import {ReactComponent as IntradayTrades} from "../../assets/images/intradayTrades.svg";

function Hero() {
    return ( 
        <div className='container ' >
            <div className='row mt-5 p-5 text-center'>
                <h1 className=''>Charges</h1>
                <h3 className='text-muted mt-4 fs-5 mb-5'>List of all charges and taxes</h3>
            </div>

            <div className='row p-4 text-center'>
                <div className='col-4 mt-5 '>
                     <span className='p-3' ><Pricing0 /></span>
                     <h2 className='fs-4'>Free equity delivery</h2>
                     <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4  mt-5 '>
                    <span className='p-3'><IntradayTrades /></span>
                    <h2 className='fs-4'>Intraday and F&O trades</h2>
                    <p className='text-muted'> Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.

</p>
        
                </div>
                <div className='col-4  mt-5 '>
                     <span className='p-3'><Pricing0 /></span>
                     <h2 className='fs-4'>Free direct MF</h2>
                     <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
                
                
                
            </div>
        
        </div>
     );
}

export default Hero;