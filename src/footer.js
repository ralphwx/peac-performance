
import "./footer.css";
import instagramImgSrc from "./img/instagram.png";

function Footer() {
    return <div className="footer">
        <div className="footer-logo">
            <div className="footer-logo-text">
                Peac Performance
            </div>
            <div style={{height: "2rem"}}></div>
            <div className="socials-row">
                <img src={instagramImgSrc} />
            </div>
        </div>
        <div className="footer-menu">
            <div></div>
            <div className="footer-menuitem" onClick={() => {
                window.location.replace("/");
            }}>
                Home
            </div>
            <div className="footer-menuitem" onClick={() => {
                window.location.replace("/services");
            }}>
                Services
            </div>
            <div className="footer-menuitem" onClick={() => {
                window.location.replace("/contact");
            }}>
                Contact
            </div>
            <div className="footer-menuitem" onClick={() => {
                window.location.replace("/about");
            }}>
                About
            </div>

        </div>
    </div>
}

export {Footer}
