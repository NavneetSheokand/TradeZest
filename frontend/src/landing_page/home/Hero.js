import React from 'react';
import homeHero from '../../assets/images/homeHero.png';
import { Link } from 'react-router-dom';

function Hero() {
    return ( 
        <div className='container p-5 mb-5 mt-5'>
            <div className='row text-center'>
               <img src={homeHero} alt="Hero" className='mb-5' />
               <h1 className='mt-5'>Invest in Everything</h1>
               <p className='mt-3 mb-3'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
               <button className=' btn btn-primary fs-5 mb-5'  style={{width:"20%", margin:'0 auto'}}><Link to={"/signup"} style={{textDecoration:"none", color:"white"} }>Sign up for free</Link></button>
            </div>

        </div>
     );
}

export default Hero;