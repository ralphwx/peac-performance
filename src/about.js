
import ReactDOM from "react-dom/client";
import "./template.css";
import "./about.css";
import {Header} from "./header.js";
import {Footer} from "./footer.js";
import {useState, useEffect} from "react";

function AboutIntroWide() {
    return <div className="about-me">
        <img src="/lucinda-about.png" style={{
            flex: 1, 
            minWidth: "300px", 
            aspectRatio: "auto"
        }}/>
        <div style={{
            flex: 2, 
            marginBottom: "3rem", 
            minWidth: "500px",
            marginLeft: "3rem",
        }}>
            <div className="section-h1" style={{paddingBottom: 0}}>
                Lucinda Huang, MS, LMFT
            </div>
            <div className="section-h2">
                Founder and Owner of PEAC Collaboration LLC
            </div>
            <div className="section-h3">
                Welcome! I am happy you are here.
            </div>
        </div>
    </div>
}

function AboutIntroNarrow() {
    return <div style={{
        display: "flex",
        flexDirection: "column",
    }}>
        <div className="section-h1">Lucinda Huang, MS, LMFT</div>
        <div className="section-h2">
            Founder and Owner of PEAC Collaboration LLC
        </div>
        <div className="section-h3">
            Welcome! I am happy you are here.
        </div>
        <div style={{height: "3rem"}}></div>
        <img src="/lucinda-about.png" style={{
            aspectRatio: "auto"
        }}/>
    </div>
}

let about_threshold = 800;
function AboutIntroSection() {
    const [displayState, setDisplayState] = useState("wide");

    let updateState = () => {
        if(window.innerWidth > about_threshold) {
            setDisplayState("wide");
        } else {
            setDisplayState("narrow");
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
        return <AboutIntroWide />
    } else {
        return <AboutIntroNarrow />
    }
}

function Main() {
    return <div>
        <Header />
        <div className="section">
            <AboutIntroSection />
        </div>
        <div className="section">
            <div className="section-h1">
                Who am I?
            </div>
            <p>
                I was born and raised in Yiwu, China, and my journey has 
                taken me across continents, shaping my understanding of 
                people and relationships along the way. Now pursuing a 
                Ph.D. at Michigan State University, I focus my research on 
                parent-adult child relationships and intergenerational 
                solidarity, driven by a deep appreciation for the 
                complexities of family dynamics.
            </p>
            <p>
                Outside of my professional life, I love spending time with 
                my husband, playing with my cats, reading novels, playing 
                tennis, and, of course, going down YouTube rabbit holes. I 
                believe in balance—embracing curiosity, creativity, and 
                lifelong learning in everything I do.
            </p>
            <div className="section-h1">
                Therapeutic Approach
            </div>
            <p>
                I believe that every individual, couple, and family exist 
                within a unique system, shaped by culture and personal 
                experiences. My approach is grounded in understanding these 
                complexities while fostering meaningful growth through 
                mindful and intentional interactions. 
            </p>
            <p>
                Through a collaborative process, I help clients navigate 
                interpersonal challenges, strengthen communication, and 
                deepen connections. Whether working with families, couples, 
                or individuals, I strive to create a space where each 
                person feels heard, valued, and empowered to embrace their 
                journey. I am trained in Integrative Systemic Therapy (IST) 
                and Emotionally Focused Therapy (EFT). In my practice, I 
                also incorporate cognitive-behavioral therapy (CBT), 
                solution-focused therapy, internal family systems model 
                (IFS), and integrative behavioral couple therapy (IBCT).
            </p>
            <div style={{height: "3rem"}}></div>
        </div>
        <div className="section">
            <div className="section-h1">Licenses and Trainings</div>
            <ul>
                <li><p>
                    Michigan Licensed Marriage and Family Therapist
                </p></li>
                <li><p>
                    ICEEFT-endorsed Emotionally Focused Therapy (EFT) 
                    Training I & II
                </p></li>
                <li><p>
                    MI Parenting Resource - Online Parenting Program
                </p></li>
                <li><p>
                    Skills for Psychological Recovery (SPR) Online
                </p></li>
                <li><p>
                    Advocacy Academy Online Training
                </p></li>
                <li><p>
                    Grief Counseling Certification
                </p></li>
                <li><p>
                    Trauma Focused Cognitive Behavioral Therapy Course
                </p></li>
            </ul>
            <div className="section-h1">Affiliation, Memberships, and Honors</div>
            <ul>
                <li><p>
                    American Association for Marriage and Family Therapy
                </p></li>
                <li><p>
                    FAHS Minority Fellowship 2024-2025
                </p></li>
                <li><p>
                    Scholarship of Undergraduate Teaching and Learning 
                    Fellowship
                </p></li>
            </ul>
        </div>
        <Footer />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
