import React from 'react';
import { ReactComponent as Educate } from '../../assets/images/education.svg';

function Education() {
    return (
        
        <div className='container p-4 mt-5 mb-5'>
          <div className='row '>
            <div className='col-6'>
               <Educate />
            </div>
            <div className='col-6 '>
              <h1 className='fs-2'>Free and open market education</h1>
              <p className='mt-5'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
              <a href='' style={{textDecoration:"none"}}>Varsity <i class="fa-solid fa-arrow-right"></i></a>

              <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
              <a href='' style={{textDecoration:"none"}}>Trading Q&A <i class="fa-solid fa-arrow-right"></i></a>
               
            </div>
          </div>
        </div>
      );
}

export default Education;