
import ReactDOM from "react-dom/client";
import "./contact.css";

import "./template.css";
import {Header} from "./header.js";
import {Footer} from "./footer.js";

function Main() {
    const whiteHighlight = {
        backgroundColor: "#faf9f6",
        padding: "0 1ch",
    }
    return <div className="background">
        <Header />
        <div className="slider home">
            <div className="slider-h1">
                <span style={whiteHighlight}>
                    Contact
                </span>
            </div>
            <div className="slider-h2">
                <span style={whiteHighlight}>
                    Email for inquiries and scheduling:
                </span>
            </div>
            <div className="slider-h2">
                <span style={whiteHighlight}>
                    peaccollaborationllc@gmail.com
                </span>
            </div>
        </div>
        <Footer />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
