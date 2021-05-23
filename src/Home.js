import React from 'react';
import './Home.css';
import Product from './Product';
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function Home() {

    const properties = {
        duration: 1000,
        autoplay: true,
        transitionDuration: 200,
        arrows: true,
        infinite: true,
        // indicators: i => <div className="indicator">{i + 1}</div>
    };

    const slideImages = [
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC/LPG/LPG_Hero_PC_1500x600._CB407755280_.jpg",
        "https://www.ehr.com.np/uploads/PagesBanner/banner-nepal-01.jpg",
        "https://bsglobal.co/wp-content/uploads/2019/02/980x300_landingpagebanners_newmacbookpro_071418_MS.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg",
        "https://www.nepalrentalcar.com/uploads/img/janaki-temple.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2020/img/Sports/XCM_Manual_ORIGIN_1261289_1333735_IN_in_fitness_days_event_sep_gw_in_en_3328889_1500x600_1X_en_IN._CB405086418_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img20/PC/Accessories/GW/PC-acc_june20_DesktopHero_1500x600._CB429195970_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/WLA/September/Headsets/realmeBudsClassic/White/V248982080_WLA-realme_Buds_Classic_White_Mob_Hero_1242x450._CB405393760_.jpg"
    ];

    return (
        <div className='home'>

            {/* <p>I am the home component</p> */}

            <div className='home__container'>
                {/* <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/GWTO/PostLaunch/Uber/P38983965_IN_WLME_SamsungGalaxy_M51_New_Launchtall-hero_1500x600_1._CB405488972_.jpg' alt='Samsung Galazy M51' /> */}

                <Slide {...properties}>
                    {slideImages.map((each, index) => (
                        //   <div key={index} className="each-slide">
                        <img key={index} className='home__image' src={each} alt="sample" />
                        //   </div>
                    ))}
                </Slide>


                {/* <div className="slide-container">
                    <Slide duration={2000} {...properties}>
                        {slideImages.map((each, index) => (
                            <div key={index} className="each-slide">
                                <img className="lazy" src={each} alt="sample" />
                            </div>
                        ))}
                    </Slide>
                </div> */}


<div className="home__row">
            <Product title='PlayStation 4 Slim 1TB Console' price={300} image='https://www.gtgcafe.com/wp-content/uploads/2020/01/PS4-Pro.png' rating={4}/>
            <Product id="12321"
                title="ASUS ZenBook Duo UX481 Laptop, 14” FHD NanoEdge Bezel Touch, Intel Core i7-10510U, GeForce MX250, 16GB RAM, 1TB PCIe SSD, Innovative ScreenPad Plus, Windows 10 Pro, Celestial Blue, UX481FL-XS74T"
                price={1299.20}
                rating={4}
                image="https://marvelafrica.co.ke/wp-content/uploads/2020/02/UX581GV-H2004T-IMAGE2.jpg"/>
            </div>

            <div className="home__row">
            <Product id="12321"
                title="Samsung Galaxy S10 Factory Unlocked Android Cell Phone | 128GB of Storage Prism Black (SM-G973U1ZKAX)"
                price={800.50}
                rating={5}
                image="https://greatecno.com/98949-large_default/samsung-galaxy-s10-plus-g975f-128gb-black-eu.jpg"/>
            <Product id="12321"
                title="CyberpowerPC Gamer Supreme Liquid Cool Gaming PC, Intel Core i7-9700K 3.6GHz, NVIDIA GeForce RTX 2070 Super 8GB, 16GB DDR4, 1TB PCI-E NVMe SSD, WiFi Ready & Win 10 Home (SLC8260A2, Black)"
                price={1399}
                rating={4}
                image="https://www.wallpaperflare.com/static/560/655/785/pc-gaming-computer-pc-cases-technology-wallpaper.jpg" />
            <Product id="12321"
                title="ASUS ROG Rapture GT-AX11000 AX11000 Tri-Band 10 Gigabit WiFi Router"
                price={449.99}
                rating={3}
                image="https://www.techpowerup.com/img/9LIy8ZQYwOBviArw.jpg" />
            </div> 

            <div className="home__container1">
            <img className="home__image1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/PrimeRewards/LP_Revamp/PC_Header_Banner._CB468631809_.jpg"
            alt=""/>
            </div>

            <div className="home__row">
            <Product id="12321"
                title="SAMSUNG 75-inch Class QLED Q60T Series - 4K UHD Dual LED Quantum HDR Smart TV with Alexa Built-in (QN75Q60TAFXZA, 2020 Model)"
                price={477}
                rating={4}
                image="https://m.media-amazon.com/images/I/81fkfrkmjSL._AC_UY327_FMwebp_QL65_.jpg"/>
            </div>  

            <div className="home__row">
            <Product id="12321"
                title="New Apple MacBook Pro (13-inch, 16GB RAM, 512GB SSD Storage, Magic Keyboard) - Space Gray"
                price={1699.99}
                rating={5}
                image="https://cnet3.cbsistatic.com/img/5vT0nCCzjShxdOjyod28R7n5STM=/1092x0/2020/03/20/915b14cf-24e0-4634-a7ea-8a3b61c9301b/macbook-pro-16-late-2019-1-de-8.jpg"/>

            <Product id="12321"
                title="Xiaomi Redmi Note 8 | 64GB 4GB RAM (GSM Only, No CDMA) | Internationa Version - No Warranty (Space Black)"
                price={449.99}
                rating={5}
                image="https://m.media-amazon.com/images/I/61YjtJEsM2L._AC_UY327_FMwebp_QL65_.jpg" />
            </div>
                </div>
                <div className="home__row">
            <Product id="12321"
                title="Apple AirPods Pro"
                price={249}
                rating={4}
                image="https://ss7.vzw.com/is/image/VerizonWireless/apple-airpods-pro-746275-iset?$device-lg$"/>
            <Product id="12321"
                title="Windows 10 Pro"
                price={129}
                rating={4}
                image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/230504da-65e8-4cd2-8f0a-e726c0f94ca3/damesva-919167cd-2341-441c-861e-67cc776ba9a1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMjMwNTA0ZGEtNjVlOC00Y2QyLThmMGEtZTcyNmMwZjk0Y2EzXC9kYW1lc3ZhLTkxOTE2N2NkLTIzNDEtNDQxYy04NjFlLTY3Y2M3NzZiYTlhMS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.TbSnnY2B-DQt34sRDFqS3bFCkYsU_r28e1B7CZioOZg" />
            </div>
            

            </div>
            
        
    )
}

export default Home
