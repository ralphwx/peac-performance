
import ReactDOM from "react-dom/client";
import "./contact.css";

import "./template.css";
import {Header} from "./header.js";
import {Footer} from "./footer.js";

import {EMAIL, PHONE} from "./info.js";

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
		    {EMAIL}
                </span>
            </div>
	    <div className="slider-h2" style={{paddingTop: "1rem"}}>
		<span style={whiteHighlight}>
		    <b>Office Address: </b>
		</span>
	    </div>
	    <div className="slider-h2">
		<span style={whiteHighlight}>
		    6035 Executive Drive, Suite 204
		</span>
	    </div>
	    <div className="slider-h2">
		<span style={whiteHighlight}>
		    Lansing MI, 48911
		</span>
            </div>
        </div>
        <Footer />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
