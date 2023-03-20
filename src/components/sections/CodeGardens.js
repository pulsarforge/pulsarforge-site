import React from "react";
import Pagetitle from "../elements/Pagetitle";
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';

function CodeGardens() {
    const colorTheme = {
        level4: "#39d353",
        level3: "#26a641",
        level2: "#006d32",
        level1: "#0e4429",
        level0: "#ced4da"
    };
    return (
        <section id="code-gardens">
            <div style={{paddingLeft: "30px", paddingRight: "30px", marginTop: "100px"}}>
            <a class="navigate-link" href="#passion-projects">
                <Pagetitle title="Open code gardens" />
            </a>
            </div>
            <div style={{paddingLeft: "30px", paddingRight: "30px"}}>
                <div className="row align-items-center">
                    <p>@pulsarforge on GitHub</p>
                    <GitHubCalendar username="pulsarforge" blockMargin={9} blockSize={35} fontSize={25} theme={colorTheme}>
                        <ReactTooltip delayShow={40} html />
                    </GitHubCalendar>
                </div>
            </div>
        </section>
    );
}

export default CodeGardens;
