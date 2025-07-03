import React from 'react';

function CreateTicket() {
    return (
        <div className='container'>
          
          <div className='row mt-5 p-5'>
            <h2 className='text-muted fs-5 mb-5'>To create a ticket, select a relevant topic</h2>
            <div className='col-4'>
              <h2><a href='' className='text-muted fs-5 mt-5 mb-5' style={{textDecoration:"none"}}><i class="fa-solid fa-circle-plus"></i>Account Opening</a></h2>
              <p><a href='' className='mt-5' style={{textDecoration:"none"}}>Resident Individual</a></p>
              <p><a href='' style={{textDecoration:"none"}}>Minor</a></p>
              <p><a href='' style={{textDecoration:"none"}}>Non Resident Indian (NRI)</a></p>
              <p><a href='' style={{textDecoration:"none"}}>Company, Partnership, HUF and LLP</a></p>
              <p><a href='' style={{textDecoration:"none"}}>Glossary</a></p>
              
            </div>
            <div className='col-4 '>
              <h2><a href='' className='text-muted fs-5 mt-5' style={{textDecoration:"none",  color:"black"}}><i class="fa-solid fa-user"></i> Your Zerodha Account</a></h2>
              <p><a href='' style={{textDecoration:"none"}}>Your Profile</a></p>
              <p><a href='' style={{textDecoration:"none"}}>Account modification</a></p>
              <p><a href='' style={{textDecoration:"none"}}>Client Master Report (CMR) and Depository Participant (DP)</a></p>
              <p><a href=''style={{textDecoration:"none"}}>Nomination</a></p>
              <p><a href='' style={{textDecoration:"none"}}>Transfer and conversion of securities</a></p>
              
            </div>
            <div className='col-4 '>
              <h2><a href='' className='text-muted fs-5 mt-5' style={{textDecoration:"none" ,  color:"black"}}><i class="fa-solid fa-chart-simple"></i> Kite</a></h2>
              <p><a href='' className='mt-5' style={{textDecoration:"none", fontSize:"15px",}}>IPO</a></p>
              <p><a href='' style={{textDecoration:"none"}}>Trading FAQs</a></p>
              <p><a href=''style={{textDecoration:"none"}}>Margin Trading Facility (MTF) and Margins</a></p>
              <p><a href='' style={{textDecoration:"none"}}>Charts and orders</a></p>
              <p><a href='' style={{textDecoration:"none"}}>Alerts and Nudges</a></p>
              <p><a href='' style={{textDecoration:"none"}}>General</a></p>
              
            </div>
            <div className='col-4 '>
              <h2><a href='' className='text-muted fs-5 ' style={{textDecoration:"none" ,  color:"black"}}><i class="fa-brands fa-square-letterboxd "></i>Funds</a></h2>
              <p><a href='' style={{textDecoration:"none"}}>Add money</a></p>
              <p><a href='' style={{textDecoration:"none"}}>Withdraw Money</a></p>
              <p><a href='' style={{textDecoration:"none"}}>Add bank accounts</a></p>
              <p><a href='' style={{textDecoration:"none"}}>eMandates</a></p>
              
            </div>
            <div className='col-4  '>
              <h2><a href='' className='text-muted fs-5' style={{textDecoration:"none" ,  color:"black"}}><i class="fa-solid fa-terminal"></i>Console</a></h2>
              <p><a href='' style={{textDecoration:"none"}}>Portfolio</a></p>
              <p><a href='' style={{textDecoration:"none"}}>Corporate actions</a></p>
              <p><a href='' style={{textDecoration:"none"}}>Funds Statement</a></p>
              <p><a href='' style={{textDecoration:"none"}}>Reports</a></p>
              <p><a href='' style={{textDecoration:"none"}}>Profile</a></p>
              <p><a href='' style={{textDecoration:"none"}}>Segments</a></p>
              
            </div>
           
            <div className='col-4 '>
              <h2><a href='' className='text-muted fs-5  mb-5' style={{textDecoration:"none" ,  color:"black"}}><i class="fa-brands fa-nfc-directional"></i>Coin</a></h2>
              <p><a href='' style={{textDecoration:"none"}}>Mutual Funds</a></p>
              <p><a href='' style={{textDecoration:"none"}}>National Pension Scheme (NPS)</a></p>
              <p><a href=''style={{textDecoration:"none"}}>Features on Coin</a></p>
              <p><a href='' style={{textDecoration:"none"}}>Payments and Orders</a></p>
              <p><a href='' style={{textDecoration:"none"}}>General</a></p>
              
            </div>
          </div>
        </div>
      );
}

export default CreateTicket;