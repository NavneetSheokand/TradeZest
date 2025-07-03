import React from 'react';
import zerodhaFund from '../../assets/images/zerodhaFundhouse.png';
import streakLogo from '../../assets/images/streakLogo.png';
import dittoLogo from '../../assets/images/dittoLogo.png';
import smallcaseLogo from '../../assets/images/smallcaseLogo.png';
import { ReactComponent as SensibullLogo } from '../../assets/images/sensibullLogo.svg';
import { Link } from 'react-router-dom';
import GoldenPi  from '../../assets/images/goldenpiLogo.png';


function Universe() {
    return (
        <div className='container p-5'>
            <div className='row text-center'>
                <h1 className='mt-5'>The TradeZest Universe</h1>
                <p className='mt-3 fs-5'>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className='row p-5 ' >
                <div className='col-4  p-5'>
                    <img src={zerodhaFund} alt='fundHouse' style={{ width: '100%', marginTop: "20px" }} className='p-2' />
                    <p style={{ fontWeight: "500" }} className='text-muted mt-2'>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>
                <div className='col-4 p-5'>
                    <SensibullLogo style={{ width: "800px",height: "auto", alignContent:"center" }} className='p-2'/>
                    <p style={{ fontWeight: "500" }} className='text-muted mt-2'>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.
                    </p>
                </div>
                <div className='col-4 p-5'>
                    <img src={dittoLogo} alt='streak' style={{ width: '80%', marginTop: "20px" }} className='p-2' />
                    <p style={{ fontWeight: "500" }} className='text-muted mt-2'>
                        Systematic trading platform
                        that allows you to create and backtest
                        strategies without coding.</p>
                </div>

                <div className='col-4 p-5'>
                    <img src={streakLogo} alt='streak' style={{ width: '100%', marginTop: "20px" }
                    } className='p-2' />
                    <p style={{ fontWeight: "500" }} className='text-muted mt-2'>

                        Thematic investing platform
                        that helps you invest in diversified
                        baskets of stocks on ETFs.</p>

                </div>
                <div className='col-4  p-5'>
                    <img src={smallcaseLogo} alt='smallcase' style={{ width: '100%', marginTop: "20px" }} className='p-2' />
                    <p style={{ fontWeight: "500" }} className='text-muted mt-3'>

                        Personalized advice on life
                        and health insurance. No spam
                        and no mis-selling.</p>
                </div>
                <div className='col-4  p-5'>
                    <img src={GoldenPi} alt='smallcase' style={{ width: '100%', marginTop: "20px" }} className='p-2' />
                    <p style={{ fontWeight: "500" }} className='text-muted mt-3'>

                        Personalized advice on life
                        and health insurance. No spam
                        and no mis-selling.</p>
                </div>
            
                <button className=' btn btn-primary fs-5'  style={{width:"20%", margin:'0 auto'}}><Link to={"/signup"} style={{textDecoration:"none", color:"white"} } >Sign up for free</Link></button>
    
        </div>
    </div>
    );
}

export default Universe;