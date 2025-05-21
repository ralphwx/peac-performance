
import ReactDOM from "react-dom/client";
import "./home.css";
import {Header} from "./header.js";

function Main() {
    return <div className="background">
        <Header />
        <div className="section">
            <h1 style={{textAlign: "center"}}>Services</h1>
        </div>
        <div className="footer">
            
        </div>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
