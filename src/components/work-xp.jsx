import { useState } from "react";
import { APP_MODES } from "../App";

function WorkXpCmp({mode, xp }) {
    const [workXp, setWorkXp] = useState({...xp});


    switch(mode) {
        case APP_MODES[0]:
            return <section>
                <h3>{workXp.role}</h3>
                <div style={{display:"flex", justifyContent:"space-around", flexWrap:"wrap"}}>
                </div>
            </section>;
        case APP_MODES[1]:
            return <section>
                <h3>{workXp.role}</h3>
            </section>;
    }
} export default WorkXpCmp;