
import ReactDOM from "react-dom/client";
import "./home.css";
import {Header} from "./header.js";
import {Footer} from "./footer.js";
import {Slider} from "./slider.js";

import roomImgSrc from "./img/room.jpg";
import roomCroppedImgSrc from "./img/roomCropped.jpg";

function Main() {
    return <div className="background">
        <Header />
        <div className="section">
            <Slider imagesWide={[roomImgSrc]} imagesNarrow={[roomCroppedImgSrc]} />
        </div>
        <Footer />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
