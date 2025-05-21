
import "./footer.css";
import instagramImgSrc from "./img/instagram.png";

function Footer() {
    return <div className="footer">
        <div className="footer-logo">
            <div className="footer-logo-text">
            </div>
            <div className="social-icon">
                <img src={instagramImgSrc} />
            </div>
        </div>
        <div className="footer-menu">
        </div>
    </div>
}

export {Footer}
