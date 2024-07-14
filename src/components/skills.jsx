import { APP_MODES } from "../App";
import handleArrayChange  from "../utils/array-utils";

function Skills({mode, skills, setSkills }) {

    const title = "Skills";

    switch(mode) {
        case APP_MODES[0]:
            return (<section>
            <h2>{title}</h2>
            {skills.map((skill, index) => (
            <div key={'skill' + index.toString()}>
                <input type="text" value={skill} onChange={event => handleArrayChange(skills, setSkills, index, event.target.value)}  />
                <button onClick={event => setSkills(skills.filter((v,i) => i !== index))} className="material-icons">delete</button>
            </div>
            ))}
            <button onClick={event => setSkills([...skills, ""])} className="material-icons">add</button>
            </section>);
        case APP_MODES[1]:
            return (<section>
            <h2>{title}</h2>
            <div style={{display: "flex", flexWrap:"wrap"}}>
            {skills.join(' | ')}
            </div>
            </section>);
    }
} export default Skills;