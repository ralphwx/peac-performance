
import "./footer.css";
import instagramImgSrc from "./img/instagram.png";
import {DOMAIN} from "./config.js";

function Footer() {
    return <div className="footer">
        <div className="footer-logo">
            <div className="footer-logo-text">
                Peac Collaboration
            </div>
            <div style={{height: "2rem"}}></div>
            <div className="socials-row">
                <img src={instagramImgSrc} />
            </div>
        </div>
        <div className="footer-menu">
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
    </div>
}

export {Footer}
