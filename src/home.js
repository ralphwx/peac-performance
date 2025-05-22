
import ReactDOM from "react-dom/client";
import "./home.css";
import {Header} from "./header.js";
import {Footer} from "./footer.js";
import {Slider} from "./slider.js";

import roomImgSrc from "./img/room.jpg";
import roomCroppedImgSrc from "./img/roomCropped.jpg";
import individualImgSrc from "./img/individual.jpg";
import couplesImgSrc from "./img/couple.jpg";
import familyImgSrc from "./img/family.jpg";

function ServiceBox({service, img, description}) {
    return <div className="service-box">
        <img src={img} className="service-preview-img" />
        <div className="service-header">{service}</div>
        <div className="service-description">{description}</div>
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
            <button className="learn-more-button">Learn More</button>
        </div>
    </div>
}

function Main() {
    return <div className="background">
        <Header />
        <div className="section">
            <Slider imagesWide={[roomImgSrc]} imagesNarrow={[roomCroppedImgSrc]} />
            <div style={{
                position: "absolute", 
                top: "30%", 
                left: "25%", 
                width: "calc(50% - 6rem)",
                transform: "translate(-50%, -50%)",
            }}>
                <div className="slider-h1">Peac Performance</div>
                <div className="slider-h2">
                    Overcoming negativity through
                    evidence-based therapy
                </div>
            </div>
        </div>
        <div className="section" style={{backgroundColor: "#b3cde3"}}>
            <div className="section-h1">Services</div>
            <div className="services-container">
                <ServiceBox service={"Individual Therapy"} img={individualImgSrc} description={"I offer individual therapy ..."} />
                <ServiceBox service={"Couples Therapy"} img={couplesImgSrc} description={"I offer individual therapy ..."} />
                <ServiceBox service={"Family Therapy"} img={familyImgSrc} description={"I offer individual therapy ..."} />
            </div>
            <div style={{height: "5rem"}}></div>
        </div>
        <Footer />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
