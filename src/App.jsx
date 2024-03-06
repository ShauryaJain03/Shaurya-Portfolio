import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects/Projects";
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
          <About />
        </section>
        <section>
          <Projects />
        </section>
        <section>
          <Contact/>
        </section>
      </div>
    </>
  );
}

export default App;
