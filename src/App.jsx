import './App.css'
import Contact from './components/contact'
import { useState } from "react";
import ContactInfos from './models/contact-infos';
import Data from './models/data';
import Skills from './components/skills';

/** 0 : edit | 1 : view */
export const APP_MODES = ["edit", "view"]
/** 0 : dark | 1 : light */
export const APP_THEMES = ["dark", "light"]

const LOCAL_STORAGE_DATA_KEY = 'data';

function App() {
  const [initialized, setInitialized] = useState(false);
  const [mode, setMode] = useState(APP_MODES[0]);
  const [theme, setTheme] = useState(APP_THEMES[0]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  const [skills, setSkills] = useState([""]);

  if (initialized) {
    const contactInfos = new ContactInfos();
    contactInfos.name = name;
    contactInfos.email = email;
    contactInfos.tel = tel;
  
    const data = new Data();
    data.ContactInfos = contactInfos;
    data.Skills = skills;
    localStorage.setItem(LOCAL_STORAGE_DATA_KEY, JSON.stringify(data));
    console.log(`Saved ${LOCAL_STORAGE_DATA_KEY}`, data);
  } else {
    try {
      const rawData = localStorage.getItem(LOCAL_STORAGE_DATA_KEY);
      const data = JSON.parse(rawData);
      console.info(`Loaded ${LOCAL_STORAGE_DATA_KEY}`, data);
      setName(data.ContactInfos.name);
      setEmail(data.ContactInfos.email);
      setTel(data.ContactInfos.tel);
      setSkills(data.Skills);
    } catch (err) {
      console.error(err);
    }
    setInitialized(true);
  }

  return (
    <>
      <div style={{ colorScheme: theme }}>
        <header style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <h1>CV App</h1>
        <div style={{flex:"1 1 auto"}}></div>
        <label htmlFor="mode-toggle">{mode}</label>
        <input type="checkbox" id="mode-toggle" onChange={(e) => {
          // We cast to number to conver false/true to 0/1
          setMode(APP_MODES[Number(e.target.checked)]);
        }} />
        <label htmlFor="theme-toggle">{theme}</label>
        <input type="checkbox" id="theme-toggle" onChange={(e) => {
          // We cast to number to conver false/true to 0/1
          setTheme(APP_THEMES[Number(e.target.checked)]);
        }} />
        </header>
        
        
        <main>
          <Contact mode={mode} name={name} setName={setName} email={email} setEmail={setEmail} tel={tel} setTel={setTel} ></Contact>
          <Skills mode={mode} skills={skills} setSkills={setSkills}></Skills>
          <section className="card">
            <h2>Work Experience</h2>
          </section>
          <section className="card">
            <h2>Education</h2>
          </section>
        </main>
      </div>
    </>
  );
  
}

export default App
