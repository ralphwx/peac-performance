
import ReactDOM from "react-dom/client";
import "./services.css";
import "./template.css";
import {Header} from "./header.js";
import {Footer} from "./footer.js";

function Main() {
    const paddingStyle = {
        paddingTop: "1rem",
        paddingBottom: "1rem",
    }
    const titlePaddingStyle = {
        paddingTop: "1.5rem",
        paddingBottom: "1.5rem",
    }
    return <div className="background">
        <Header />
        <div className="section section-content" style={titlePaddingStyle}>
            <div className="section-title">
                Services
            </div>
        </div>
        <div className="section section-content" style={paddingStyle}>
            <div className="section-h1">
                Relationship Consultation
            </div>
            <p>
                I offer a 55-minute consultation designed to provide 
                relationship insights, communication strategies, and 
                psychoeducation. This session focuses on practical 
                skills-building, equipping clients with tools to enhance their 
                relationships, rather than addressing deeper emotional or 
                psychological distress.
            </p>
            <p>
                Disclaimers: Consultation services provided are NOT therapy or 
                mental health treatment. If a need for clinical intervention 
                arises, I will encourage clients to seek appropriate 
                professional support for their long-term well-being.
            </p>
            <p>
                Cost: $125 per session, private-pay only
            </p>
        </div>
        <div className="section section-content" style={paddingStyle}>
            <div className="section-h1">
                Supervision
            </div>
            <p>
                I provide structured, supportive supervision for LLMFTs seeking 
                licensure in Michigan. My approach integrates systemic thinking,
                ethical guidance, and clinical skill-building, ensuring 
                supervisees develop confidence and competency in their practice.
            </p>
            <p>
                Format: Virtual, individual supervision. Flexible scheduling 
                to accommodate professional demands. 
            </p>
            <p>
                Cost: $50 per hour
            </p>
        </div>
        <Footer />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
