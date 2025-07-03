import React from 'react';

import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './Rightsection';
import Universe from './Universe';
import Kite from "../../assets/images/kite.png"
import Coin from "../../assets/images/coin.png"
import Varsity from "../../assets/images/varsity.png"
import Console from "../../assets/images/console.png"
import Connect from "../../assets/images/kiteconnect.png"



function ProductsPage() {
    return ( 
        <>
            <Hero />
            <LeftSection  imageURL={Kite} productName="Kite" productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo=" Try Demo" learnMore="LearnMore" googlePlay="" appStore="" />
            <RightSection  imageURL={Console} productName="Console" productDescription="The central dashboard for your TradeZest account. Gain insights into your trades and investments with in-depth reports and visualisations." tryDemo="LearnMore"/>
            <LeftSection  imageURL={Coin} productName="Coin" productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryDemo="Try Demo"  googlePlay="" appStore="" />
            <RightSection  imageURL={Connect} productName="Kite Connect API" productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." tryDemo="Kite Connect"/>
            <LeftSection  imageURL={Varsity} productName="Varsity mobile" productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."  googlePlay="" appStore="" />
            <p className='text-center fs-5'>Want to know more about our technology stack? Check out the <a href='' style={{textDecoration:"none"}}>TradeZest.tech</a> blog.</p>
            <Universe/>
        </>
     );
}

export default ProductsPage;