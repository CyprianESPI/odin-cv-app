import { useState } from "react";
import { APP_MODES } from "../App";
import handleArrayChange  from "../utils/array-utils";

function SchoolXpCmp({mode, xps, setXps, index }) {
    function update(workXp) {
        handleArrayChange(xps, setXps, index, workXp);
        setXp(workXp);
    }

    const [xp, setXp] = useState({...xps[index]});

    switch(mode) {
        case APP_MODES[0]:
            return <section>
                <span style={{display: "flex", justifyContent:"center",flexWrap:"wrap"}}>
                    <h3>{xp.title} at {xp.school}</h3>
                    <button onClick={() => {
                        setXps(xps.filter((v, i) => i !== index));
                        }}>delete</button>
                </span>
                <div style={{display:"flex", flexDirection:"column", flexWrap:"wrap"}}>
                    <div>
                        <label>School</label>
                        <input type="text" value={xp.school ?? ""}
                            onChange={e => update({...xp, school: e.target.value})}
                            placeholder="MIT" />
                    </div>
                    <div>
                        <label>Title</label>
                        <input type="text" value={xp.title ?? ""}
                            onChange={e => update({...xp, title: e.target.value})}
                            placeholder="Computer science" />
                    </div>
                    <div>
                        <label>Graduated</label>
                        <input type="text" value={xp.end ?? ""}
                            onChange={e => update({...xp, end: e.target.value})}
                            placeholder="2015" />
                    </div>
                </div>
            </section>;
        case APP_MODES[1]:
            return <section>
                <h3>{xp.title} at {xp.school}</h3>
                <p>{xp.end}</p>
            </section>;
    }
} export default SchoolXpCmp;