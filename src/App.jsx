import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
function App() {
  return (
    <>
      <div>
        <section>
          <Navbar />
        </section>
        <section>
          <Home />
        </section>
        <section>
          <Projects />
        </section>
        <br/>
        <section>
          <Experience/>
        </section>
        <br/>
        <section>
          <Education/>
        </section>
        <section>
          <Contact/>
        </section>
      </div>
    </>
  );
}

export default App;
