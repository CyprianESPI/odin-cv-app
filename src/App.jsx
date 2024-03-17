import './App.css'
import Contact from './components/contact'

function App() {
  return (
    <>
      <h1>CV App</h1>
      <main>
        <section className="card">
          <h2>General</h2>
          <Contact></Contact>
        </section>
        <section className="card">
          <h2>Skills</h2>
          <Contact></Contact>
        </section>
        <section className="card">
          <h2>Work Experience</h2>
          <Contact></Contact>
        </section>
        <section className="card">
          <h2>Education</h2>
          <Contact></Contact>
        </section>
      </main>
    </>
  )
}

export default App
