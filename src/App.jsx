import './App.css'
import Contact from './components/contact'
import { useState } from "react";

function App() {
  const APP_MODES = ["edit", "view"]
  const [mode, setMode] = useState(APP_MODES[0]);
  const APP_THEMES = ["dark", "light"]
  const [theme, setTheme] = useState(APP_THEMES[0]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  switch (mode) {
    case APP_MODES[0]:
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
              <section className="card">
                <h2>General</h2>
                <Contact name={name} setName={setName} email={email} setEmail={setEmail} tel={tel} setTel={setTel} ></Contact>
              </section>
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
      )
    case APP_MODES[1]:
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
              <section className="card">
                <h2>General</h2>
                <h3>Name</h3>
                <p>{name}</p>
              </section>
            </main>
          </div>
        </>
      )

    default:
      return (
        <>
          <main>Oops
          </main>
        </>
      )
  }
}

export default App
