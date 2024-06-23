import { useState } from "react";
import { APP_MODES } from "../App";

function WorkXpCmp({mode, xp }) {
    const [workXp, setWorkXp] = useState({...xp});

    switch(mode) {
        case APP_MODES[0]:
            return <section>
                <h3>{workXp.role}</h3>
                <div style={{display:"flex", flexDirection:"column", flexWrap:"wrap"}}>
                    <div>
                        <label>Company</label>
                        <input type="text" value={workXp.company ?? ""}
                            onChange={e => setWorkXp({...workXp, company: e.target.value})}
                            placeholder="Google" />
                    </div>
                    <div>
                        <label>Role</label>
                        <input type="text" value={workXp.role ?? ""}
                            onChange={e => setWorkXp({...workXp, role: e.target.value})}
                            placeholder="Sw Engineer" />
                    </div>
                    <div>
                        <label>Role Description</label>
                        <input type="text" value={workXp.roleDescription ?? ""}
                            onChange={e => setWorkXp({...workXp, roleDescription: e.target.value})}
                            placeholder="Increased profits by 500%" />
                    </div>
                    <div>
                        <label>From</label>
                        <input type="text" value={workXp.start ?? ""}
                            onChange={e => setWorkXp({...workXp, start: e.target.value})}
                            placeholder="2012" />
                    </div>
                    <div>
                        <label>To</label>
                        <input type="text" value={workXp.end ?? ""}
                            onChange={e => setWorkXp({...workXp, end: e.target.value})}
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