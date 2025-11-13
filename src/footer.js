
import "./footer.css";
import instagramImgSrc from "./img/instagram.png";
import {DOMAIN} from "./config.js";
import {useState, useEffect} from "react";
import {EMAIL, PHONE} from "./info.js";

function FooterMenu() {
    return <div className="footer-menu">
        <div></div>
        <div className="footer-menuitem" onClick={() => {
            window.location.replace(DOMAIN);
        }}>
            Home
        </div>
        <div className="footer-menuitem" onClick={() => {
            window.location.replace(DOMAIN + "/about");
        }}>
            About
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
    </div>
}

function FooterMedium() {
    return <div className="footer">
        <div className="footer-logo">
            <a href={"/"}><div style={{display: "flex", alignItems: "center"}}>
                <img src="/logo.png" className="logo-img" />
            </div></a>
            <div className="socials-row">
                <p className="footer-info">Phone: {PHONE}</p>
            </div>
            <div className="socials-row">
                <p className="footer-info">
		    Email: {EMAIL}
                </p>
            </div>
        </div>
        <FooterMenu />
    </div>

}

function FooterWide() {
    return <div className="footer">
        <div className="footer-logo">
            <div style={{display: "flex"}}>
                <a href={"/"}><img src="/logo.png" className="logo-img" /></a>
                <div>
                    <a href={"/"}><div style={{
                        height: "clamp(2rem, 16vw, 7rem)", 
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}>
                        <div className="logo-title" style={{color: "#faf9f6"}}>
                            PEAC Collaboration
                        </div>
                        <div className="logo-subtitle" style={{color: "#faf9f6"}}>
                            Therapy, Supervision, and Consulting Services
                        </div>
                    </div></a>
                    <div className="socials-row">
                        <p className="footer-info">Phone: {PHONE}</p>
                    </div>
                    <div className="socials-row">
                        <p className="footer-info">
		            Email: {EMAIL}
	                </p>
                    </div>
                </div>
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
