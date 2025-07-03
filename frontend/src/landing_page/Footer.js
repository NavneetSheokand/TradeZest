import React from 'react';
import Logoo from '../assets/images/Logo.png';
function Footer() {
    return (
        <div className='container border-top mt-5'>
            <div className='row mt-5 mb-5 p-2'>
                <div className='col'>
                    <img src={Logoo} alt='Logo' style={{ width: "80%" }} />
                    <p className='text-muted' style={{fontSize:"12px"}}>&copy;2010 - 2025, TradeZest Broking Ltd.

All rights reserved.</p>
                </div>
                <div className='col p-2'>
                    <p>Account</p>
                    <p> <a href='' className='text-muted ' style={{textDecoration:"none"}}>Open demat account</a></p>
                    <p><a href='' className='text-muted ' style={{textDecoration:"none"}}>Minor demat account</a></p>
                    <p><a href='' className='text-muted ' style={{textDecoration:"none"}}>NRI demat account</a></p>
                    <p><a href='' className='text-muted ' style={{textDecoration:"none"}}>Commodity</a></p>
                    <p><a href='' className='text-muted ' style={{textDecoration:"none"}}>Dematerialisation</a></p>
                    <p><a href=''className='text-muted ' style={{textDecoration:"none"}}>Fund transfer</a></p>
                    <p><a href=''className='text-muted ' style={{textDecoration:"none"}}>MTF</a></p>
                    <p><a href=''className='text-muted ' style={{textDecoration:"none"}}>Referral program</a></p>
                </div>
                <div className='col p-2'>
                    <p>Support</p>
                    <p><a href='' className='text-muted ' style={{textDecoration:"none"}}>Contact us</a></p>
                    <p><a href=''className='text-muted ' style={{textDecoration:"none"}}>Support portal</a></p>
                    <p><a href='' className='text-muted ' style={{textDecoration:"none"}}>How to file a complaint?</a></p>
                    <p><a href=''className='text-muted ' style={{textDecoration:"none"}}>Status of your complaints</a></p>
                    <p><a href=''className='text-muted ' style={{textDecoration:"none"}}>Bulletin</a></p>
                    <p><a href=''className='text-muted ' style={{textDecoration:"none"}}> Circular</a></p>
                    <p><a href=''className='text-muted ' style={{textDecoration:"none"}}>Z-Connect blog</a></p>
                    <p><a href=''className='text-muted ' style={{textDecoration:"none"}}>Downloads</a></p>   
                </div>
                <div className='col'>
                    <p>Company</p>
                    <p><a href='' className='text-muted ' style={{textDecoration:"none"}}>About</a></p>
                    <p><a href='' className='text-muted ' style={{textDecoration:"none"}}>Philosophy</a></p>
                    <p><a href='' className='text-muted ' style={{textDecoration:"none"}}>Press & media</a></p>
                    <p><a href='' className='text-muted ' style={{textDecoration:"none"}}>Careers</a></p>
                    <p><a href='' className='text-muted ' style={{textDecoration:"none"}}>TradeZest Cares (CSR)</a></p>
                    <p><a href='' className='text-muted ' style={{textDecoration:"none"}}>TradeZest.tech</a></p>
                    <p><a href='' className='text-muted ' style={{textDecoration:"none"}}>Open source</a></p>
                    
                </div>
                <div className='col '>
                    <p>Quick Links</p>
                    <p><a href='' className='text-muted ' style={{textDecoration:"none"}}>Upcoming IPOs</a></p>
                    <p><a href=''className=' text-muted ' style={{textDecoration:"none"}}>Brokerage charges</a></p>
                    <p><a href=''className='text-muted' style={{textDecoration:"none"}}>Market holidays</a><br></br></p>
                    <p><a href='' className='text-muted ' style={{textDecoration:"none"}}>Economic calendar</a><br></br></p>
                    <p><a href='' className='text-muted ' style={{textDecoration:"none"}}>Calculators</a><br></br></p>
                    <p><a href='' className='text-muted ' style={{textDecoration:"none"}}>Markets</a><br></br></p>
                    <p><a href='' className='text-muted ' style={{textDecoration:"none"}}>Sectors</a></p>
                </div>


            </div>
            <div className=' text-muted' style={{fontSize:"11px"}}>
                <p><strong>TradeZest Technologies Pvt. Ltd.</strong>: TradeZest is a platform built for stock market simulation, learning, and portfolio tracking. It is not a SEBI-registered stockbroker and does not facilitate real-time trading or financial transactions. All stock data shown is for educational and informational purposes only.</p> <p><strong>Registered Address</strong>: TradeZest Technologies Pvt. Ltd., [Insert full address here], India. For any queries or feedback, write to <a href="mailto:support@tradezest.in">support@tradezest.in</a>.</p> <p><strong>Disclaimer:</strong> TradeZest does not offer any investment advisory services or stock tips. It is an educational platform only. Investments in the securities market are subject to market risks. Always consult a SEBI-registered financial advisor before investing.</p> <p><strong>Important Investor Notices:</strong></p> <ul> <li>This platform is meant for simulation and educational purposes only. No real trading or monetary transactions are executed on TradeZest.</li> <li>Please ensure your personal details like email and mobile number are always up-to-date for account security.</li> <li>TradeZest will never ask for your passwords or OTPs. Beware of impersonators and scams. If you come across any suspicious activity claiming to be TradeZest, please report it immediately at <a href="mailto:support@tradezest.in">support@tradezest.in</a>.</li> </ul> <p><strong>Data Disclaimer:</strong> Market data used in TradeZest may be delayed or simulated for educational use. It should not be relied upon for live investment decisions.</p> <p><strong>Know Your Customer (KYC):</strong> KYC is not required for using TradeZest as it does not involve any real-money trading or regulatory investment activity.</p> <p><strong>Educational Purpose Only:</strong> TradeZest is built to help users learn the basics of trading and market behavior in a safe, simulated environment. No investment products are sold or recommended.</p>
            </div>
            <div  className='d-flex p-4 ' style={{justifyContent:"space-evenly", fontSize:"13px"}}>
    <a href='' className='text-muted' style={{textDecoration:"none"}}>NSE</a> 
    <a href='' className='text-muted' style={{textDecoration:"none"}}>BSE</a>
    <a href='' className='text-muted' style={{textDecoration:"none"}}>MCX</a>
    <a href='' className='text-muted' style={{textDecoration:"none"}}>Terms & Conditions</a>
    <a href='' className='text-muted' style={{textDecoration:"none"}}>Policies & Procedures</a>
    <a href='' className='text-muted' style={{textDecoration:"none"}}>Privacy Policy</a>
    <a href='' className='text-muted' style={{textDecoration:"none"}}>Disclosure</a>
    <a href='' className='text-muted' style={{textDecoration:"none"}}>For investors's attention</a>
    <a href='' className='text-muted' style={{textDecoration:"none"}}>Investor Charter</a>
   </div>
        </div>

    );
}

export default Footer;