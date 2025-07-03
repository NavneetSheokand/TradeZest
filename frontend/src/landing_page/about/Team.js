import React from 'react';
import Navneet from '../../assets/images/Navneet3.jpg'

function Team() {
    return (
        <div className='container'>
            <div className='row '>
                <h1 className='text-center'>
                    People
                </h1>
            </div>
            <div className='row p-5 text-muted' >
                <div className='col-5  text-center mb-5'>
                    <img src={Navneet} alt='photo' style={{ borderRadius: "50%", width: "70%" }} />
                    <h4 className='mt-5'>Navneet Sheokand</h4>
                    <h6>Founder, CEO</h6>

                </div>
                <div className='col-7 p-4 ' style={{ fontSize: "1.1em" }}>

                    <p>Navneet make a project TradeZest in 2025 to build a powerful, beginner-friendly trading experience inspired by the tools he wished existed during his early experiments in the stock market. TradeZest aims to reimagine stock trading for young investors with a clean UI and a tech-first approach.</p>

                    <p>He is currently a B.Tech CSE student, passionate about solving real-life problems through tech.</p>

                    <p>Building intuitive experiences and meaningful impact is his zen.
</p>
                    <p>Connect on <a href='' style={{ textDecoration: "none" }}>HomePage</a>/<a href='https://www.linkedin.com/in/navneet-sheokand-759360259/' style={{ textDecoration: "none" }}>LinkedIn</a>/<a href='https://github.com/NavneetSheokand' style={{ textDecoration: "none" }}>GitHub</a> </p>
                </div>

            </div>
        </div>
    );
}

export default Team;