import React from 'react';
import ecosystem from '../../assets/images/ecosystem.png';

function Stats() {
    return ( 
        <div className='container mt-5 p-3 mb-5'>
            <div className='row p-3'>
                <div className='col-6 p-3'>
                    <h1 className='fs-2 mb-5'>Trust with Confidence</h1>
                    <h3 className='fs-4 text-muted'>Customer-first always</h3>
                    <p className='text-muted'>
                         That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
                    </p>
                    <h3 className='fs-4 text-muted'>No spam or gimmicks</h3>
                    <p  className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    <h3 className='fs-4 text-muted'>The Zerodha universe</h3>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h3 className='fs-4 text-muted'>Do better with money</h3>
                    <p  className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>

                </div>
                <div className='col-6 p-3'>
                     <img src={ecosystem} alt="ecosystem" style={{width:"100%"}} />
                      <div className='text-center'>
                        <a href='' className='mx-5'  style={{textDecoration:"none"}}>Explore our products<i class="fa-solid fa-arrow-right"></i></a>
                        <a href=''  className='ml-5'  style={{textDecoration:"none"}}>Try kite demo<i class="fa-solid fa-arrow-right"></i></a>
                      </div>
                </div>

            </div>
        </div>
     );
}

export default Stats;