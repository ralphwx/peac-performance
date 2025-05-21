
import ReactDOM from "react-dom/client";
import "./home.css";
import {Header} from "./header.js";
import {Footer} from "./footer.js";

function Main() {
    return <div className="background">
        <Header />
        <div className="section">
            <h1 style={{textAlign: "center"}}>Contact</h1>
        </div>
        <Footer />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
