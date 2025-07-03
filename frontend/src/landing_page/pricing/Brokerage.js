import React from 'react';

function Brokerage() {
    return (
        <div className='container mt-5 ' >
            <h3 className='mt-5 mb-5 text-center'><a href='' style={{textDecoration:"none"}}>Calculate your costs upfront</a> using our brokerage calculator</h3>
            <h3 className='mt-5'>Charges explained</h3>
            <div className='row mt-5 '>
                <div className='col-6'>
                    <h5 className='text-muted'>Securities/Commodities transaction tax</h5>
                    <p className='text-muted mt-3' style={{fontSize:"13.5px"}}>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>
                    <p className='text-muted mt-3' style={{fontSize:"13.5px"}}> When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>
                     
                     <h5 className='text-muted'>Transaction/Turnover Charges</h5>
                    <p className='text-muted mt-3' style={{fontSize:"13.5px"}}>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017).</p>
                    <p className='text-muted mt-3' style={{fontSize:"13.5px"}}> BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>
                    <p className='text-muted mt-3' style={{fontSize:"13.5px"}}>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover</p>


                    <h5 className='text-muted'>Call & trade</h5>
                    <p className='text-muted mt-3' style={{fontSize:"13.5px"}}> Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>


                    <h5 className='text-muted'>Stamp charges</h5>
                    <p className='text-muted mt-3' style={{fontSize:"13.5px"}}> Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>

                    <h5 className='text-muted'>NRI brokerage charges</h5>
                    <ul className='text-muted mt-3' style={{fontSize:"13.5px"}}>
                         <li>₹100 per order for futures and options.</li>
                         <li>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                         <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                         <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
                     </ul>

                    <h5 className='text-muted'>Account with debit balance</h5>
                    <p className='text-muted mt-3' style={{fontSize:"13.5px"}}>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p>
                     
                     <h5 className='text-muted'>Charges for Investor's Protection Fund Trust (IPFT) by NSE</h5>
                    <ul className='text-muted mt-3' style={{fontSize:"13.5px"}}>
                         <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
                         <li>Options - ₹50 per crore + GST traded value (premium value).</li>
                         <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
                         
                     </ul>

                    <h5 className='text-muted'>Stamp charges</h5>
                    <ul className='text-muted mt-3' style={{fontSize:"13.5px"}}>
                         <li>MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.</li>
                         <li>MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</li>
                         <li>MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</li>
                    
                     </ul>


                </div>
                <div className='col-6'>
                    <h5 className='text-muted'>Securities/Commodities transaction tax</h5>
                    <p className='text-muted mt-3' style={{fontSize:"13.5px"}}>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>
                    <p className='text-muted mt-3' style={{fontSize:"13.5px"}}> When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>
                     
                     <h5 className='text-muted'>Transaction/Turnover Charges</h5>
                    <p className='text-muted mt-3' style={{fontSize:"13.5px"}}>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017).</p>
                    <p className='text-muted mt-3' style={{fontSize:"13.5px"}}> BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>
                    <p className='text-muted mt-3' style={{fontSize:"13.5px"}}>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover</p>


                    <h5 className='text-muted'>Call & trade</h5>
                    <p className='text-muted mt-3' style={{fontSize:"13.5px"}}> Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>


                    <h5 className='text-muted'>Stamp charges</h5>
                    <p className='text-muted mt-3' style={{fontSize:"13.5px"}}> Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>

                    <h5 className='text-muted'>NRI brokerage charges</h5>
                    <ul className='text-muted mt-3' style={{fontSize:"13.5px"}}>
                         <li>₹100 per order for futures and options.</li>
                         <li>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                         <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                         <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
                     </ul>

                    <h5 className='text-muted'>Account with debit balance</h5>
                    <p className='text-muted mt-3' style={{fontSize:"13.5px"}}>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p>
                     
                     <h5 className='text-muted'>Charges for Investor's Protection Fund Trust (IPFT) by NSE</h5>
                    <ul className='text-muted mt-3' style={{fontSize:"13.5px"}}>
                         <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
                         <li>Options - ₹50 per crore + GST traded value (premium value).</li>
                         <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
                         
                     </ul>

                    <h5 className='text-muted'>Stamp charges</h5>
                    <ul className='text-muted mt-3' style={{fontSize:"13.5px"}}>
                         <li>MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.</li>
                         <li>MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</li>
                         <li>MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</li>
                    
                     </ul>

                </div>

            </div>

            <h3 className='mt-5'>Charges for account opening</h3>
            <div className='row mt-5 border'>
                <div className='col-10'>
                    <p style={{ fontWeight: "500" }}>Type of Account</p>
                    <hr></hr>
                    <p>Online account</p>
                    <p>Offline account</p>
                    <p>NRI account (offline only)</p>
                    <p>Partnership, LLP, HUF, or Corporate accounts (offline only)</p>
                </div>
                <div className='col-2'>
                    <p style={{ fontWeight: "500" }}>Charges</p>
                    <hr></hr>
                    <p>Free</p>
                    <p>Free</p>
                    <p>500</p>
                    <p>500</p>
                </div>
            </div>

            <h3 className='mt-5'> Charges for optional value added services
            </h3>
            <div className='row mt-5 border'>
                <div className='col-3'>
                    <p style={{ fontWeight: "500" }}>
                        Service</p>
                    <hr></hr>
                    <p>Tickertape</p>
                    <p>Smallcase</p>
                    <p>Kite Connect	</p>
                </div>
                <div className='col-3'>
                    <p style={{ fontWeight: "500" }}>Billing Frquency</p>
                    <hr></hr>
                    <p>Monthly / Annual	</p>
                    <p>Per transaction</p>
                    <p>Monthly</p>
                </div>
                <div className='col-4'>
                    <p style={{ fontWeight: "500" }}>Charges</p>
                    <hr></hr>
                    <p>Free: 0 | Pro: 249/2399</p>
                    <p>Buy & Invest More: 100 | SIP: 10</p>
                    <p>Connect: 500 | Historical: 500</p>
                </div>
                <div className='col-2'>

                </div>
            </div>

        </div>

    );
}

export default Brokerage;