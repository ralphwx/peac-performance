
import ReactDOM from "react-dom/client";
import "./home.css";
import "./about.css";
import {Header} from "./header.js";
import {Footer} from "./footer.js";

function Main() {
    return <div className="background">
        <Header />
        <div className="section">
            <div className="about-me">
                <div style={{
                    flex: 2, 
                    marginBottom: "3rem", 
                    minWidth: "500px",
                    marginLeft: "3rem",
                }}>
                    <div className="section-h1" style={{paddingBottom: 0}}>
                        Lucinda Huang, MS, LMFT
                    </div>
                    <div className="section-h2">Therapist</div>
                    <div className="section-p">
                        Welcome! I am Lucinda Huang and my Chinese name is 
                        黄瑶冲. 
                    </div>
                </div>
                <img src="/lucinda-about.png" style={{
                    flex: 1, 
                    minWidth: "300px", 
                    aspectRatio: "auto"
                }}/>
            </div>
        </div>
        <div className="section">
            <div className="section-h1">
                Who am I?
            </div>
            <div className="section-p">
                I was born and raised in Yiwu, China, and my journey has 
                taken me across continents, shaping my understanding of 
                people and relationships along the way. Now pursuing a 
                Ph.D. at Michigan State University, I focus my research on 
                parent-adult child relationships and intergenerational 
                solidarity, driven by a deep appreciation for the 
                complexities of family dynamics.
            </div>
            <div className="section-p">
                Outside of my professional life, I love spending time with 
                my husband, playing with my cats, reading novels, playing 
                tennis, and, of course, going down YouTube rabbit holes. I 
                believe in balance—embracing curiosity, creativity, and 
                lifelong learning in everything I do.
            </div>
            <div className="section-h1" style={{
                color: "#756bb1", 
                paddingBottom: "2rem",
                textAlign: "left",
            }}>
                Therapeutic Approach
            </div>
            <div className="section-p">
                I believe that every individual, couple, and family exist 
                within a unique system, shaped by culture and personal 
                experiences. My approach is grounded in understanding these 
                complexities while fostering meaningful growth through 
                mindful and intentional interactions. 
            </div>
            <div className="section-p">
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
            </div>
            <div style={{height: "3rem"}}></div>
        </div>
        <div className="section">
            <div className="section-h1">Licenses and Trainings</div>
            <ul>
                <li><div className="section-p">
                    Michigan Licensed Marriage and Family Therapist
                </div></li>
                <li><div className="section-p">
                    ICEEFT-endorsed Emotionally Focused Therapy (EFT) 
                    Training I & II
                </div></li>
                <li><div className="section-p">
                    MI Parenting Resource - Online Parenting Program
                </div></li>
                <li><div className="section-p">
                    Skills for Psychological Recovery (SPR) Online
                </div></li>
                <li><div className="section-p">
                    Advocacy Academy Online Training
                </div></li>
                <li><div className="section-p">
                    Grief Counseling Certification
                </div></li>
                <li><div className="section-p">
                    Trauma Focused Cognitive Behavioral Therapy Course
                </div></li>
            </ul>
            <div className="section-h1">Affiliation, Memberships, and Honors</div>
            <ul>
                <li><div className="section-p">
                    American Association for Marriage and Family Therapy
                </div></li>
                <li><div className="section-p">
                    FAHS Minority Fellowship 2024-2025
                </div></li>
                <li><div className="section-p">
                    Scholarship of Undergraduate Teaching and Learning 
                    Fellowship
                </div></li>
            </ul>
        </div>
        <Footer />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
