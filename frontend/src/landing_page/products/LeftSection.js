import React from 'react';
import {ReactComponent as GooglePlay} from "../../assets/images/googlePlayBadge.svg"
import {ReactComponent as AppStore} from "../../assets/images/appstoreBadge.svg"

function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row '>
                <div className='col-8 mb-5 '>
                   <img src={imageURL} />
                </div>
                <div className='col-4 p-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={tryDemo} style={{textDecoration:"none"}}>{tryDemo } <i class="fa-solid fa-arrow-right"></i></a>
                     <a href={learnMore} style={{marginLeft:"50px", textDecoration:"none"}}>{learnMore} <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                     
                     <div className='mt-3'>
                        <a href={googlePlay}><GooglePlay /></a>
                     <a href={appStore} style={{marginLeft:"25px"}}><AppStore /></a>

                     </div>
                     
                </div>

            </div>
        </div>
     );
}

export default LeftSection;