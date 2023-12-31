import { contactData, socialdata } from "./data.js";

import './styles.scss';
import Logo from "../Logo/Logo";
import AnimatedText from "../Common/AnimatedText/AnimatedText.js";

export default function Footer({ uid }) {
    return (
        <div className='page footer'>
            <div className="container">
                <Logo size={10} />
                <div className="talk-to-us">
                    <h1><span>Got a brand on your hands?</span> Let’s talk about it.</h1>
                    <a href="https://wa.me/+917417189899">
                        <button className="button">Get In Touch</button>
                    </a>
                </div>
                <div className="footer-bar">
                    <div className="contact">
                        <div className="item">
                            <p className="highlight">graphicnix.com</p>
                            <p>Privacy Policy © 2023 <span className="highlight"> Graphicnix</span></p>
                        </div>
                        <div className="item">
                            <p>South Extension 42</p>
                            <p>New Delhi, India</p>
                        </div>
                        <div className="item">
                            <p className="highlight link"><a href="mailto:graphicnix.studio@gmail.com?subject=Request for Editing Services&body=Hi,">graphicnix.studio@gmail.com</a></p>
                            <p className="link"><a href="tel:+917417189899">(+91) <span className="highlight">74171 89899</span></a></p>
                        </div>

                    </div>
                    <div className="social">
                        {socialdata.map((e) => {
                            return (
                                <img src={e.image}></img>
                            )
                        })}
                    </div>
                </div>
                <div className="developer-text" id={uid}>
                    <a href="https://wa.me/+919457776161">Love this Site?<span> Get in Touch with Skilled Developers and Bring Your Vision to Life.</span></a>
                </div>
            </div>
        </div>
    )
}