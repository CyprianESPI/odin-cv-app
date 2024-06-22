import './App.css'
import Contact from './components/contact'
import { useState } from "react";
import ContactInfos from './models/contact-infos';

/** 0 : edit | 1 : view */
export const APP_MODES = ["edit", "view"]
/** 0 : dark | 1 : light */
export const APP_THEMES = ["dark", "light"]

function App() {
  const [mode, setMode] = useState(APP_MODES[0]);
  const [theme, setTheme] = useState(APP_THEMES[0]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  const contactInfos = new ContactInfos();
  contactInfos.name = name;
  contactInfos.email = email;
  contactInfos.tel = tel;
  console.log('App', name, email, tel);

  return (
    <>
      <div style={{ colorScheme: theme }}>
        <h1>CV App</h1>
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
        <main>
          <Contact mode={mode} name={name} setName={setName} email={email} setEmail={setEmail} tel={tel} setTel={setTel} ></Contact>
          <section className="card">
            <h2>Skills</h2>
          </section>
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
