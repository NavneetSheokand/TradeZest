import React from 'react';
import { ReactComponent as LargestBroker } from '../../assets/images/largestBroker.svg';
import pressLogos from '../../assets/images/pressLogos.png';
function Awards () {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                   <LargestBroker />
                </div>
                <div className='col-6 p-5 mt-3'>
                    <h1>
                         Largest stock broker in India
                    </h1>
                    <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all volumes in India daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                        <li className='mb-2'>Futures and options</li>
                        <li className='mb-2'>Commodity derivatives</li>
                        <li className='mb-2'>Currency Derivatives</li>
                    </ul>

                        </div>
                        <div className='col-6'>
                            <ul>
                        <li className='mb-2'>Stocks and IPOs</li>
                        <li className='mb-2'>Direct Mutual Funds</li>
                        <li className='mb-2'>Bonds and Govt Securities</li>
                    </ul>
                        </div>

                    </div>
                    <img src={pressLogos} alt='Logos'  style={{width:'90%'}}/>
                </div>

            </div>

        </div>
     );
}

export default Awards;