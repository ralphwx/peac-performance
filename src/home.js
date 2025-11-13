
import ReactDOM from "react-dom/client";
import "./home.css";
import "./template.css";
import {Header} from "./header.js";
import {Footer} from "./footer.js";
import {useState, useEffect} from "react";

const about_threshold = 960;

function AboutBlurb() {
    return <div>
       <p>
           Lucinda Huang (she/her/hers) is a Licensed Marriage and Family 
           Therapist currently practicing in Michigan. She enjoys working with 
           families, couples, and individuals to improve their awareness of 
           self in the system, interaction patterns, and mental well-being. 
       </p>
       <p>
           In addition to her role as a therapist, Lucinda is also doctoral 
           candidate in the Couple and Family Therapy program at Michigan 
           State University. Her program of research focuses on understanding 
           parent-adult child relationships, promoting intergenerational 
           solidarity, and disseminating of evidence-based interventions for 
           underrepresented and disadvantaged populations.
       </p>
       <p>
           Prior to her doctoral program, Lucinda received her bachelor’s 
           degree in Psychology from Wheaton College and master's degree in 
           Marriage and Family Therapy from Northwestern University.
       </p>
    </div>
}

function NameBlurb() {
    return <div>
        <div className="section-h1">
            Lucinda Huang, MS, LMFT
        </div>
        <div className="section-h2">
            Founder and Owner of PEAC Collaboration LLC
        </div>
    </div>
}

function AboutHome() {
    const [displayState, setDisplayState] = useState("wide");
                    
    let updateState = () => {
        if(window.innerWidth > about_threshold) {
            setDisplayState("wide");
        } else {
            setDisplayState("medium");
        }
    }

    useEffect(() => {
        updateState();
        window.addEventListener("resize", updateState);

        return () => {
            window.removeEventListener("resize", updateState);
        }
    }, []);
    
    if(displayState === "wide") {
       return <div style={{
           display: "flex", 
           justifyContent: "center", 
           gap: "4rem",
           alignItems: "center"
       }}>
           <div style={{flex: 1, display: "flex", justifyContent: "center", maxWidth: "400px"}}>
               <img 
                   src="/lucinda-home.png" 
                   style={{width: "100%", height: "auto"}}
               />
           </div>
           <div style={{flex: 1, display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "600px"}}>
               <NameBlurb />
               <AboutBlurb />
           </div>
       </div>
    } else {
        return <div>
            <NameBlurb />
            <img 
                src="/lucinda-home.png"
                style={{width: "100%", height: "auto"}}
            />
            <AboutBlurb />
        </div>
    }
}

function Main() {
    return <div>
        <div className="section">
            <Header />
        </div>
        <div className="section slider home">
            <div style={{flex: 1}}></div>
            <div className="slider-h2 left" style={{flex: 2}}>
                Pathway to Empowerment and Connection
            </div>
        </div>
        <div className="section section-content">
            <div className="subsection" style={{paddingTop: "1.5rem"}}>
                <AboutHome />
            </div>
            <div style={{
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center",
                gap: "2rem",
            }}>
                <div></div>
                <img className="tag-img" src="/lgbtq-affirming.png" />
                <a href="https://www.psychologytoday.com/us/therapists/lucinda-huang-okemos-mi/1290285">
                    <img className="tag-img" src="/verified.png" />
                </a>
                <a href="https://www.instagram.com/peacmentalhealth/">
                    <img className="tag-img" src="/instagram.png" />
                </a>
                <div></div>
            </div>
        </div>
        <Footer />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
