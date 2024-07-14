import './App.css'
import Contact from './components/contact'
import { useState } from "react";
import ContactInfos from './models/contact-infos';
import Data from './models/data';
import Skills from './components/skills';
import WorkXp from './models/work-xp';
import WorkXpCmp from './components/work-xp';
import SchoolXp from './models/school-xp';
import SchoolXpCmp from './components/school-xp';

/** 0 : edit | 1 : view */
export const APP_MODES = ["edit", "view"]
/** 0 : dark | 1 : light */
export const APP_THEMES = ["dark", "light"]

const LOCAL_STORAGE_DATA_KEY = 'data';

function App() {
  const [initialized, setInitialized] = useState(false);
  // Defaults to Edit mode
  const [mode, setMode] = useState(APP_MODES[1]);
  // Defaults to Light mode
  const [theme, setTheme] = useState(APP_THEMES[1]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  const [skills, setSkills] = useState([""]);
  const [workXps, setWorkXps] = useState([new WorkXp()]);
  const [schoolXps, setSchoolXps] = useState([new SchoolXp()]);

  if (initialized) {
    const contactInfos = new ContactInfos();
    contactInfos.name = name;
    contactInfos.email = email;
    contactInfos.tel = tel;
  
    const data = new Data();
    data.ContactInfos = contactInfos;
    data.Skills = skills;
    data.WorkXps = workXps;
    data.SchoolXps = schoolXps;
    localStorage.setItem(LOCAL_STORAGE_DATA_KEY, JSON.stringify(data));
    console.log(`Saved ${LOCAL_STORAGE_DATA_KEY}`, data);
  } else {
    try {
      const rawData = localStorage.getItem(LOCAL_STORAGE_DATA_KEY);
      if (rawData !== null) {
        const data = JSON.parse(rawData);
        console.info(`Loaded ${LOCAL_STORAGE_DATA_KEY}`, data);
        setName(data.ContactInfos.name);
        setEmail(data.ContactInfos.email);
        setTel(data.ContactInfos.tel);
        setSkills(data.Skills);
        if (data.WorkXps.length)
          setWorkXps(data.WorkXps);
        else
          setWorkXps([new WorkXp()]);

        if (data.SchoolXps.length)
          setSchoolXps(data.SchoolXps);
        else
          setSchoolXps([new SchoolXp()]);
      }
    } catch (err) {
      console.error(err);
    }
    setInitialized(true);
  }

  return (
    <>
      <div>
        <main>
          <Contact mode={mode} name={name} setName={setName} email={email} setEmail={setEmail} tel={tel} setTel={setTel} ></Contact>
          <Skills mode={mode} skills={skills} setSkills={setSkills}></Skills>
          <section className="card">
            <h2>Work Experience</h2>
            {workXps.map((workXp, index) => {
              return (
              <div key={`work-xp-${workXp.id}`}>
              <WorkXpCmp mode={mode} xps={workXps} setXps={setWorkXps} index={index}></WorkXpCmp>
              </div>);
            })}
            {mode === APP_MODES[0] && <button onClick={(e) => setWorkXps([...workXps, new WorkXp()])} className='material-icons'>add</button>}
          </section>
          <section className="card">
            <h2>Education</h2>
            {schoolXps.map((xp, index) => {
              return (
              <div key={`school-xp-${xp.id}`}>
              <SchoolXpCmp mode={mode} xps={schoolXps} setXps={setSchoolXps} index={index}></SchoolXpCmp>
              </div>);
            })}
            {mode === APP_MODES[0] && <button onClick={(e) => setSchoolXps([...schoolXps, new SchoolXp()])} className='material-icons'>add</button>}
          </section>
        </main>

        <footer>
          <div style={{position:'fixed', bottom:'2rem', right: '2rem'}}>
            {
              mode === APP_MODES[0] ?
              <button onClick={(e) => setMode(APP_MODES[1])} className='material-icons'>visibility</button>
              :
              <button onClick={(e) => setMode(APP_MODES[0])} className='material-icons'>edit</button>
            }
          </div>
        </footer>
      </div>
    </>
  );
  
}

export default App
