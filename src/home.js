
import ReactDOM from "react-dom/client";
import "./home.css";

function Main() {
    return <div className="background">
        <div className="header">
            <div className="header logo">Peac Performance</div>
            <div className="header menuitem">Home</div>
            <div className="header menuitem">Services</div>
            <div className="header menuitem">Contact</div>
            <div className="header menuitem">About</div>
        </div>
        <div className="section">
            <h1>Home</h1>
        </div>
        <div className="footer">
            
        </div>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
