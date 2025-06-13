
import ReactDOM from "react-dom/client";
import "./home.css";
import "./template.css";
import {Header} from "./header.js";
import {Footer} from "./footer.js";

function Main() {
    return <div className="background">
        <Header />
        <div className="slider home">
            <div>
                <div className="slider-h1">
                    Contact
                </div>
            </div>
        </div>
        <Footer />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
