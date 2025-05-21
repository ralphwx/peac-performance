import {useState, useEffect} from "react";

function HeaderWide() {
    return <div className="header">
        <div className="header-logo">Peac Performance</div>
        <div className="header-menuitem">Home</div>
        <div className="header-menuitem">Services</div>
        <div className="header-menuitem">Contact</div>
        <div className="header-menuitem">About</div>
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

    return <div className="header-expandablemenu">
        <div className="header-menubuttonwrapper">
            <div className="header-menubutton" onClick={toggleMenu}>
                <div className="hline"></div>
                <div className="vline"></div>
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

function HeaderMedium() {
    return <div className="header">
        <div className="header-logo">Peac Performance</div>
        <div style={{flex: 1}}>
            <ExpandableMenu items={<div className="menu-fullscreen">
                <div className="menuitem">Home</div>
                <div className="menuitem">Services</div>
                <div className="menuitem">Contact</div>
                <div className="menuitem">About</div>
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
