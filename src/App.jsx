import './App.css'
import Contact from './components/contact'
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  return (
    <>
      <h1>CV App</h1>
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
    </>
  )
}

export default App
