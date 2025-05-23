
import ReactDOM from "react-dom/client";
import "./home.css";
import "./about.css";
import {Header} from "./header.js";
import {Footer} from "./footer.js";

function Main() {
    return <div className="background">
        <Header />
        <div className="section" style={{backgroundColor: "#eff3ff"}}>
            <div style={{height: "3rem"}}></div>
            <div className="about-me">
                <img src="/lucinda.avif" style={{flex: 1, minWidth: "300px", aspectRatio: "auto"}}/>
                <div style={{flex: 2, marginBottom: "3rem", minWidth: "500px"}}>
                    <div className="section-h1" style={{paddingBottom: 0}}>
                        Lucinda Huang, MS, LMFT
                    </div>
                    <div className="section-h2">Therapist</div>
                    <div className="section-p">
                        I am a fully licensed marriage and family therapist, and
                        I love helping my clients become more mindful about how
                        they interact with themselves and others in their 
                        environment.
                    </div>
                    <div className="section-p">
                        I earned my bachelor's degree in psychology from Wheaton
                        College and my master's degree in marriage and family 
                        therapy from Northwestern University. I am currently a 
                        doctoral student in Couple and Family Therapy at 
                        Michigan State University.
                    </div>
                    <div className="section-p">
                        In my free time, I love spending time with my partner, 
                        playing with my cat, Walnut, reading novels, playing 
                        tennis, and watching YouTube videos.
                    </div>
                </div>
            </div>
            <div style={{height: "3rem"}}></div>
        </div>
        <div className="section" style={{backgroundColor: "#b3cde3"}}> 
            <div style={{
                padding: "3rem max(10%, 3rem)"
            }}>
                <div className="section-h1" style={{color: "#756bb1", paddingBottom: "2rem"}}>My approach</div>
                <div className="section-p">
                    I work with individuals, couples, and families who 
                    experience a variety of concerns, including depression, 
                    anxiety, relationship issues, family conflicts, and life 
                    transitions. I also specialize in premarital counseling and 
                    parent-adult child relationships.
                </div>
                <div className="section-p">
                    In my clinical work, I am both warm and direct. I believe 
                    that therapy can be a lot like working out, sometimes 
                    uncomfortable, yet always rewarding. I invite clients to 
                    share and incorporate their social identities (such as 
                    marginalized racial and gender identities) and life 
                    experiences into the current concerns.
                </div>
                <div className="section-p">
                    I practice from an integrative approach, which includes 
                    integrative systemic therapy (IST), cognitive-behavioral 
                    therapy (CBT), solution-focused therapy, internal family 
                    systems model (IFS), emotionally focused therapy (EFT), and 
                    integrative behavioral couple therapy (IBCT).
                </div>
            </div>
            <div className="contact-button">Schedule an appointment</div>
            <div style={{height: "3rem"}}></div>
        </div>
        <Footer />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
