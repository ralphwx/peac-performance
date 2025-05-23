
import ReactDOM from "react-dom/client";
import "./home.css";
import {Header} from "./header.js";
import {Footer} from "./footer.js";
import {Slider} from "./slider.js";

function Main() {
    return <div className="background">
        <Header />
        <div className="section">
            <Slider 
                imagesWide={["/couch.png"]} 
                imagesNarrow={["/couchCropped.jpg"]} 
                height={"50dvh"}
            />
            <div className="slider-h1" style={{
                position: "absolute", 
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                color: "#08519c",
            }}>
                Services
            </div>
        </div>
        <Footer />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
