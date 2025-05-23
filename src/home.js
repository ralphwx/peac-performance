
import ReactDOM from "react-dom/client";
import "./home.css";
import {Header} from "./header.js";
import {Footer} from "./footer.js";
import {Slider} from "./slider.js";

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
            <Slider 
                imagesWide={["/room.png"]} 
                imagesNarrow={["/roomCropped.png"]} 
                height={"100dvh"}
            />
            <div style={{
                position: "absolute", 
                top: "40%", 
                left: "30%", 
                width: "calc(60% - 6rem)",
                transform: "translate(-50%, -50%)",
            }}>
                <div className="slider-h1">PEAC Collaboration</div>
                <div className="slider-h2">
                    Overcoming negativity through
                    evidence-based therapy
                </div>
                <div style={{height: "2rem"}}></div>
                <button className="learn-more-button purple">Services offered</button>
                <button className="learn-more-button">About me</button>
            </div>
        </div>
        <div className="section" style={{backgroundColor: "#b3cde3"}}>
            <div className="section-h1">Services</div>
            <div className="services-container">
                <ServiceBox service={"Individual Therapy"} img={"/individual.jpg"} description={"I offer individual therapy ..."} />
                <ServiceBox service={"Couples Therapy"} img={"/couple.jpg"} description={"I offer individual therapy ..."} />
                <ServiceBox service={"Family Therapy"} img={"/family.jpg"} description={"I offer individual therapy ..."} />
            </div>
            <div style={{height: "5rem"}}></div>
        </div>
        <Footer />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
