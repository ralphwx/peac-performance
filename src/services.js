
import ReactDOM from "react-dom/client";
import "./home.css";
import {Header} from "./header.js";
import {Footer} from "./footer.js";
import {Slider} from "./slider.js";
import couchImgSrc from "./img/couch.jpg";
import couchCroppedImgSrc from "./img/couchCropped.jpg";

function Main() {
    return <div className="background">
        <Header />
        <div className="section">
            <Slider imagesWide={[couchImgSrc]} imagesNarrow={[couchCroppedImgSrc]} />
        </div>
        <Footer />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
