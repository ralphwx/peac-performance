import {useState, useEffect} from "react";
import "./header.css";

//Header for wide screen
function HeaderWide() {
    return <div className="header">
        <div className="header-logo">{"<logo>"}</div>
        <div className="header-menu">
            <div className="header-menuitem" onClick={() => {
                window.location.replace("/");
            }}>
                Home
            </div>
            <div className="header-menuitem" onClick={() => {
                window.location.replace("/services");
            }}>
                Services
            </div>
            <div className="header-menuitem" onClick={() => {
                window.location.replace("/contact");
            }}>
                Contact
            </div>
            <div className="header-menuitem" onClick={() => {
                window.location.replace("/about");
            }}>
                About
            </div>
        </div>
    </div>
}

function ExpandableMenu({items}) {
    const [showMenu, setShowMenu] = useState(false);
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        if(showMenu) setOpacity(1);
        else setOpacity(0);
    }, [showMenu]);

    let toggleMenu = () => {
        if(showMenu) {
            setOpacity(0);
            setTimeout(() => {setShowMenu(false)}, 500);
        } else {
            setShowMenu(true);
        }
    }

    let rotation = (showMenu && opacity === 1) ? "45deg" : "0deg";
    let linesColor = {
        backgroundColor: (showMenu && opacity === 1) ? "#b75" : "#68b",
        transition: "background-color 0.5s ease-in-out",
    }
    return <div className="header-expandablemenu">
        <div className="header-menubuttonwrapper" style={{
            transform: "rotate(" + rotation + ")",
            transition: "transform 0.5s ease-in-out",
        }}>
            <div className="header-menubutton" onClick={toggleMenu}>
                <div className="hline" style={linesColor}></div>
                <div className="vline" style={linesColor}></div>
            </div>
        </div>
        <div className="header-hiddenmenu" style={{
            display: (showMenu || opacity === 1) ? "block" : "none",
            opacity: opacity,
            transition: "opacity 0.5s ease-in-out",
        }}>
            {items}
        </div>
    </div>
}

//Header for medium-sized screen
function HeaderMedium() {
    return <div className="header">
        <div className="header-logo">{"<logo>"}</div>
        <div style={{flex: 1}}>
            <ExpandableMenu items={<div className="menu-fullscreen">
                <div></div>
                <div className="menuitem" onClick={() => {
                    window.location.replace("/");
                }}>
                    Home
                </div>
                <div className="menuitem" onClick={() => {
                    window.location.replace("/services");
                }}>
                    Services
                </div>
                <div className="menuitem" onClick={() => {
                    window.location.replace("/contact");
                }}>
                    Contact
                </div>
                <div className="menuitem" onClick={() => {
                    window.location.replace("/about");
                }}>
                    About
                </div>
                <div></div>
            </div>}/>
        </div>
    </div>
}

const threshold = 1170;
function Header() {
    const [displayState, setDisplayState] = useState("wide");

    let updateState = () => {
        if(window.innerWidth > threshold) {
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
        return <HeaderWide />
    } else {
        return <HeaderMedium />
    }
}

export {Header}
