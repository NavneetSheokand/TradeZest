import React from 'react';

function RightSection({imageURL, productName, productDescription, tryDemo}) {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row '>
                
                <div className='col-5 mt-5 p-5' style={{alignContent:"center"}}>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={tryDemo} style={{textDecoration:"none"}}>{tryDemo}<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                     
                </div>
                <div className='col-7 p-5'>
                   <img src={imageURL}  />
                </div>

            </div>
        </div>
     );
}

export default RightSection;