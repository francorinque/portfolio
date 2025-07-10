import { Projects, Resume } from "./components";
import { Nav } from "./components/nav";

function App() {
  return (
    <section className="min-h-screen">
      <Nav />
      <main className="max-w-[900px] mx-auto mt-20 px-4 lg:px-0">
        <Resume />
        <Projects />
      </main>
    </section>
  );
}

export default App;
