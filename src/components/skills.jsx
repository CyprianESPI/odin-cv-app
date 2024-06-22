import { APP_MODES } from "../App";

function Skills({mode, skills, setSkills }) {
    function handleArrayChange(arr, setArr, index, newValue) {
        const newArr = arr.map((v, i) => {
            if (i === index) {
                return newValue;
            } else {
                return v;
            }
        });
        setArr(newArr);
    }

    const title = "Skills";

    switch(mode) {
        case APP_MODES[0]:
            return (<section>
            <h2>{title}</h2>
            {skills.map((skill, index) => (
            <div key={index}>
                <input type="text" value={skill} onChange={event => handleArrayChange(skills, setSkills, index, event.target.value)}  />
                <button onClick={event => setSkills(skills.filter((v,i) => i !== index))}>delete</button>
            </div>
            ))}
            <button onClick={event => setSkills([...skills, ""])}>add new skill</button>
            </section>);
        case APP_MODES[1]:
            return (<section>
            <h2>{title}</h2>
            <div style={{display: "flex", flexWrap:"wrap"}}>
            {skills.map((skill, index) => (
            <span key={index} style={{margin:"0 4px"}}>
                {skill}
            </span>
            ))}
            </div>
            </section>);
    }
} export default Skills;