
import ReactDOM from "react-dom/client";
import "./home.css";
import {Header} from "./header.js";
import {Footer} from "./footer.js";
import {useState, useEffect} from "react";

const about_threshold = 960;

function AboutBlurb() {
    return <div>
       <p style={{fontSize: "1.2rem"}}>
           Lucinda Huang (she/her/hers) is a Licensed Marriage and 
           Family Therapist (LMFT) currently practicing in Michigan. She
           enjoys working with families, couples, and individuals to 
           improve their mental health, daily functioning, and 
           well-being.
       </p>
       <p style={{fontSize: "1.2rem"}}>
           In addition to her role as a therapist, Lucinda is also 
           doctoral candidate in the Couple and Family Therapy program 
           at Michigan State University. Her program of research focuses
           on understanding parent-adult child relationships, promoting
           intergenerational solidarity, and disseminating of 
           evidence-based interventions for underrepresented and 
           disadvantaged populations. 
       </p>
       <p style={{fontSize: "1.2rem"}}>
           Prior to her doctoral program, Lucinda received her 
           bachelor’s degree in Psychology from Wheaton College and 
           master's degree in Marriage and Family Therapy from 
           Northwestern University. 
       </p>
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
           alignItems: "flex-start"
       }}>
           <div style={{flex: 1, display: "flex", justifyContent: "center", maxWidth: "400px"}}>
               <img 
                   src="/lucinda-home.png" 
                   style={{width: "100%", height: "auto"}}
               />
           </div>
           <div style={{flex: 1, display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "600px"}}>
               <h1 style={{fontSize: "3rem"}}>Lucinda Huang 黄瑶冲, M.S., LMFT</h1>
               <AboutBlurb />
               <div className="learn-more-button purple">Read More</div>
           </div>
       </div>
    } else {
        return <div>
            <h1>Lucinda Huang 黄瑶冲, M.S., LMFT</h1>
            <img 
                src="/lucinda-home.png"
                style={{width: "100%", height: "auto"}}
            />
            <AboutBlurb />
            <div className="learn-more-button purple">Read More</div>
        </div>
    }
    
}

function Main() {
    return <div className="background">
        <Header />
        <div className="slider home">
            <div>
                <div className="slider-h1 left">
                    PEAC Collaboration
                </div>
                <div className="slider-h2 left">
                    Your Pathway to Empowerment And Connection
                </div>
                <div style={{height: "2rem"}}></div>
                <button className="learn-more-button purple">
                    Services offered
                </button>
                <button className="learn-more-button">About me</button>
            </div>
        </div>
        <div style={{backgroundColor: "#b3cde3", padding: "min(10%, 4rem)"}}>
            <div style={{backgroundColor: "#c6dbef", padding: "min(10%, 3rem)"}}>
                <AboutHome />
            </div>
        </div>
        <Footer />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
