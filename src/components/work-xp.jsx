import { useState } from "react";
import { APP_MODES } from "../App";
import handleArrayChange  from "../utils/array-utils";

function WorkXpCmp({mode, xps, setXps, index }) {
    function update(workXp) {
        handleArrayChange(xps, setXps, index, workXp);
        setWorkXp(workXp);
    }

    const [workXp, setWorkXp] = useState({...xps[index]});

    switch(mode) {
        case APP_MODES[0]:
            return <section>
                <h3>{workXp.role}</h3>
                <div style={{display:"flex", flexDirection:"column", flexWrap:"wrap"}}>
                    <div>
                        <label>Company</label>
                        <input type="text" value={workXp.company ?? ""}
                            onChange={e => update({...workXp, company: e.target.value})}
                            placeholder="Google" />
                    </div>
                    <div>
                        <label>Role</label>
                        <input type="text" value={workXp.role ?? ""}
                            onChange={e => update({...workXp, role: e.target.value})}
                            placeholder="Sw Engineer" />
                    </div>
                    <div>
                        <label>Role Description</label>
                        <input type="text" value={workXp.roleDescription ?? ""}
                            onChange={e => update({...workXp, roleDescription: e.target.value})}
                            placeholder="Increased profits by 500%" />
                    </div>
                    <div>
                        <label>From</label>
                        <input type="text" value={workXp.start ?? ""}
                            onChange={e => update({...workXp, start: e.target.value})}
                            placeholder="2012" />
                    </div>
                    <div>
                        <label>To</label>
                        <input type="text" value={workXp.end ?? ""}
                            onChange={e => update({...workXp, end: e.target.value})}
                            placeholder="Now" />
                    </div>
                </div>
            </section>;
        case APP_MODES[1]:
            return <section>
                <h3>{workXp.role}</h3>
            </section>;
    }
} export default WorkXpCmp;