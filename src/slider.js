
import {useState, useEffect} from "react";

const slider_threshold = 900;
function Slider({imagesWide, imagesNarrow, height, innerContent}) {
    const [index, setIndex] = useState(0);
    const [display, setDisplay] = useState("wide");
    
    const updateDisplay = () => {
        if(window.innerWidth > slider_threshold) setDisplay("wide");
        else setDisplay("narrow");
    }

    const incrementIndex = () => {
        if(display === "wide") setIndex((index + 1) % imagesWide.length);
        else setIndex((index + 1) % imagesNarrow.length);
    }

    useEffect(() => {
        updateDisplay();
        window.addEventListener("resize", updateDisplay);
        const indexTimer = setTimeout(incrementIndex, 5000);

        return () => {
            window.removeEventListener("resize", updateDisplay)
            clearTimeout(indexTimer);
        };
    }, [index, display]);

    const imagesDisplayed = display === "wide" ? imagesWide : imagesNarrow;
    const output = imagesDisplayed.map((e, i) => {
        const opacity = i === index ? 1 : 0;
        return <div 
            className="slider-img" 
            style={{backgroundImage: "url(" + e + ")", opacity: opacity}} 
            key={display + i}
        ></div>
    });
    return <div style={{position: "relative", width: "100%", height: height}}>
        {output}
    </div>
}

export {Slider}
