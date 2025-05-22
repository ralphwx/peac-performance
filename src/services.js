
import ReactDOM from "react-dom/client";
import "./home.css";
import {Header} from "./header.js";
import {Footer} from "./footer.js";
import {Slider} from "./slider.js";

function Main() {
    return <div className="background">
        <Header />
        <div className="section">
            <Slider imagesWide={["/couch.jpg"]} imagesNarrow={["/couchCropped.jpg"]} />
        </div>
        <Footer />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
