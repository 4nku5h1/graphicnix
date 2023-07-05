import { motion } from "framer-motion"
import { about, services } from "../Services/data/data";
import { contactData, socialdata } from "./data.js";

import video from '../../assets/video/backgroundVideo.mp4'
import './styles.scss';
import Logo from "../Logo/Logo";

export default function Footer({ uid }) {
    return (
        <div className='page footer' id={uid}>
            <Logo size={10}/>
            <div className="talk-to-us">
                <h1><span>Got a brand on your hands?</span> Let’s talk about it.</h1>
                <button className="button">Get In Touch</button>
            </div>
          
            <div className="social">
                <div className="item">
                    <p className="highlight">graphicnix.com</p>
                    <p>Privacy Policy © 2023 <span className="highlight"> Graphicnix</span></p>
                </div>
                <div className="item">
                    <p>South Extension 42</p>
                    <p>New Delhi, India</p>
                </div>
                <div className="item">
                    <p className="highlight">graphicnix@gmail.com</p>
                    <p>(+91) <span className="highlight">74171 89899</span></p>
                </div>
                <div className="item-img">
                    {socialdata.map((e) => {
                        return (
                            <div className="item">

                                <img src={e.image}></img>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
  {/* <video preload="auto" autoplay="" loop="true" muted="" playsinline="" id="bgvid"  class="">
                    <source src={video} type="video/mp4" />
                </video> */}
{/* <div className="footer-banner">
<Logo />
<Social />
</div>
<div className="footer-content">
<Services title={'Image Services'} data={['Custom Editing', 'Enhancement', 'Virtual Staging', 'Day to Dusk', 'Item removal', 'Renders']} />
<Services title={'Video Services'} data={['Custom Editing', 'Animation', 'Motion Graphics', 'Compositing', 'Sound FX', 'VFX']} />
<Services title={'Extra Services'} data={['Product (Shoes, Bags, Cloth)', 'Jewellery', 'Real Estate', 'Restoration']} />
<ContactUs />
</div>
<AboutUs /> */}