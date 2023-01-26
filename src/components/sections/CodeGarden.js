import React from "react";
import Pagetitle from "../elements/Pagetitle";
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';

function CodeGarden() {
    const colorTheme = {
        level4: "#39d353",
        level3: "#26a641",
        level2: "#006d32",
        level1: "#0e4429",
        level0: "#ced4da"
    };
    return (
        <section id="code-garden">
            <div className="container">
                <Pagetitle title="Open code garden" />
                <p>@pulsarforge on GitHub</p>
                <GitHubCalendar username="pulsarforge" blockMargin={7} blockSize={20} fontSize={18} theme={colorTheme}>
                    <ReactTooltip delayShow={40} html />
                </GitHubCalendar>
            </div>
        </section>
    );
}

export default CodeGarden;
