
import "./footer.css";
import instagramImgSrc from "./img/instagram.png";
import {DOMAIN} from "./config.js";
import {useState, useEffect} from "react";

function FooterMenu() {
    return <div className="footer-menu">
        <div></div>
        <div className="footer-menuitem" onClick={() => {
            window.location.replace(DOMAIN);
        }}>
            Home
        </div>
        <div className="footer-menuitem" onClick={() => {
            window.location.replace(DOMAIN + "/services");
        }}>
            Services
        </div>
        <div className="footer-menuitem" onClick={() => {
            window.location.replace(DOMAIN + "/contact");
        }}>
            Contact
        </div>
        <div className="footer-menuitem" onClick={() => {
            window.location.replace(DOMAIN + "/about");
        }}>
            About
        </div>
    </div>
}

function FooterMedium() {
    return <div className="footer">
        <div className="footer-logo">
            <div style={{display: "flex", alignItems: "center"}}>
                <img src="/logo.png" className="logo-img" />
                <div>
                </div>
            </div>
            <div className="socials-row" style={{color: "white"}}>
                <img src="/phone.png" className="contact-icon-img" />
                <p>PHONE NUMBER HERE</p>
            </div>
            <div className="socials-row" style={{color: "white"}}>
                <img src="/mail.png" className="contact-icon-img" />
                <p>EMAIL HERE</p>
            </div>
            <div className="socials-row">
                <img src={instagramImgSrc} className="social-icon-img" />
            </div>
        </div>
        <FooterMenu />
    </div>

}

function FooterWide() {
    return <div className="footer">
        <div className="footer-logo">
            <div style={{display: "flex", alignItems: "center"}}>
                <img src="/logo.png" className="logo-img" />
                <div>
                    <div className="logo-title">PEAC Collaboration</div>
                    <div className="logo-subtitle">
                        Therapy and Consulting Services
                    </div>
                </div>
            </div>
            <div className="socials-row" style={{color: "white"}}>
                <img src="/phone.png" className="contact-icon-img" />
                <p>PHONE NUMBER HERE</p>
            </div>
            <div className="socials-row" style={{color: "white"}}>
                <img src="/mail.png" className="contact-icon-img" />
                <p>EMAIL HERE</p>
            </div>
            <div className="socials-row">
                <img src={instagramImgSrc} className="social-icon-img" />
            </div>
        </div>
        <FooterMenu />
    </div>
}

const footer_threshold = 960;
function Footer() {
    let [display, setDisplayState] = useState("wide");
   
    let updateState = () => {
        if(window.innerWidth > footer_threshold) {
            setDisplayState("wide");
        } else {
            setDisplayState("medium");
        }
    }

    useEffect(() => {
        updateState();
        window.addEventListener("resize", updateState);

        return () => {
            window.removeEventListener("resize", updateState);
        }
    }, [display]);

    if(display === "wide") return <FooterWide />
    else return <FooterMedium />
}

export {Footer}
