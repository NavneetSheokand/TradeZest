import React from 'react';

function Hero() {
    return ( 
       
        <section  id='supportHero'>
    
            <div className='p-5 ' id='supportWrapper'>
                <h4>Support Portal</h4>
                <h5><a href='' style={{color:'white', fontWeight:"400"}}>Track Tickets</a></h5>

            </div>
            <div className='row mb-5 ' style={{margin:'0 150px'}}>
                <div className='col-6 mb-5 '>
                   <h3  className='fs-4' style={{ fontWeight:"400"}}>Search for an answer or browse help topics to create a ticket</h3><br></br>
                   <input placeholder='Eg: how do I activate F&O, why is my order getting rejected...'/><br></br><br></br>
                   <a href='' style={{color:'white', fontWeight:"400"}}>Track account opening</a> &nbsp;&nbsp;
                   <a href='' style={{color:'white', fontWeight:"400"}}>Track segment activation</a>&nbsp;&nbsp;
                   <a href='' style={{color:'white', fontWeight:"400"}}>Intraday margins</a>&nbsp;&nbsp;
                   <a href='' style={{color:'white', fontWeight:"400"}}>Kite user manual</a>
               </div>
               <div className='col-1'></div> 
                <div className='col-5'>   
                    <h3>Featured</h3>
                    <ol>
                        <li>
                            <a href='' style={{color:'white', fontWeight:"400", lineHeight:'2.5em'}}>Surveillance measure on scrips - June 2025</a>
                        </li>
                        <li>
                             <a href='' style={{color:'white', fontWeight:"400", lineHeight:'2.5em'}}>Latest Intraday leverages and Square-off timings</a>
                        </li>
                    </ol>
                   
                   
                </div>
            </div>
            
        </section>
     );

}

export default Hero;