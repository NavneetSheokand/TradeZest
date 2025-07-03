import React from 'react';

function Pricing() {
    return (  
       <div className='container mt-5 p-4 mb-5'>
        <div className='row'>
            <div className='col-4 mb-3'>
                <h1 className='fs-2 mb-3'>Unbeatable pricing</h1>
                <p>
                    We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                </p>
                <a href=''  style={{textDecoration:"none"}}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className='col-8'>
                <div className='row text-center'>
                     <div className='col p-3'>
                     <p><h1 style={{color:"orange", fontWeight:800}}><sup><i class="fa-solid fa-indian-rupee-sign"></i></sup>0</h1>Free Account Opening</p>
                </div>
                <div className='col p-3'>
                    <h1 style={{color:"orange", fontWeight:800}}><sup><i class="fa-solid fa-indian-rupee-sign"></i></sup>0</h1><p>Free equity delivery
and direct mutual funds</p>
                </div>
                <div className='col p-3'>
                    <h1 style={{color:"orange", fontWeight:800}}><sup><i class="fa-solid fa-indian-rupee-sign"></i></sup>20</h1><p> Intraday and
F&O</p>
                </div>
                </div>
               
            </div>
        </div>
       </div>
    );
}

export default Pricing;