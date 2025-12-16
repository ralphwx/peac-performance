
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
                Couples Therapy
            </div>
            <p>
		I work with couples facing a wide range of challenges, including
	        communication difficulties, recurring conflicts, infidelity,
		emotional disconnection, sexual concerns, and major relationship
	        transitions. I specialize in supporting couples navigating ADHD
	        symptoms. I also provide premarital counseling 
	        for couples who want to strengthen their connection and build
	        healthier patterns together. (Please note that premarital 
	        counseling can only be self-pay.)
            </p>
            <p className="sub-p">
                Format: In person or telehealth.
            </p>
            <p className="sub-p">
                Cost: $175 per session. I accept insurance (Aetna, Blue Cross 
	        Blue Shield, and Blue Cross Network) and self-pay. Please inquire for self-pay rates.
            </p>
        </div>
        <div className="section section-content" style={paddingStyle}>
            <div className="section-h1">
                Family Therapy
            </div>
            <p>
		I work with families (age 18+) dealing with conflict,
		parent-child relationship challenges, and challenging life 
        	transitions. I have a particular focus on strengthening 
	        relationships between parents and young adult children. 
		Depending on your family's needs, we may meet together or in
		smaller groups to create clearer communication and healthier
	        dynamics.
            </p>
            <p className="sub-p">
                Format: In person or telehealth.
            </p>
            <p className="sub-p">
                Cost: $175 per session. I accept insurance (Aetna, Blue Cross 
		Blue Shield, and Blue Cross Network) and self-pay. Please inquire for self-pay rates.
            </p>
        </div>
        <div className="section section-content" style={paddingStyle}>
            <div className="section-h1">
                Individual Therapy
            </div>
            <p>
		I support individual adults navigating depression, anxiety,
		identity concerns, relationship issues, and life transitions.
		With a warm and direct approach, I help clients become more
	        mindful of how they relate to themselves and others. I welcome
	        conversations about social identities and lived experiences,
		especially for those from marginalized racial, ethnic, or
	        immigrant backgrounds.
            </p>
            <p className="sub-p">
                Format: In person or telehealth.
            </p>
            <p className="sub-p">
                Cost: $175 per session. I accept insurance (Aetna, Blue Cross 
		Blue Shield, and Blue Cross Network) and self-pay. Please inquire for self-pay rates
            </p>
        </div>
        <div className="section section-content" style={paddingStyle}>
            <div className="section-h1">
                Supervision
            </div>
            <p>
                I provide structured, supportive supervision for LLMFTs seeking 
                licensure in Michigan. My approach integrates systemic thinking,
                ethical guidance, and clinical skill-building, and 
	        self-of-the-therapist work, ensuring supervisees develop 
	        confidence and competency and cultural awareness in their 
        	practice. 
            </p>
            <p className="sub-p">
                Format: Virtual, individual or group supervision. Flexible 
	        scheduling to accommodate professional needs. 
            </p>
            <p className="sub-p">
                Cost: $55 per supervision hour.
            </p>
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
            <p className="sub-p">
                Disclaimer: Consultation services provided are NOT therapy or 
                mental health treatment. If a need for clinical intervention 
                arises, I will encourage clients to seek appropriate 
                professional support for their long-term well-being.
            </p>
	    <p className="sub-p">
	        Format: In person or virtual.
            </p>
            <p className="sub-p">
                Cost: $125 per session, self-pay only.
            </p>
        </div>
        <Footer />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
