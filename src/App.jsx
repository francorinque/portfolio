import { Projects, Resume } from "./components";
import { Aboutme } from "./components/aboutme";
import { Footer } from "./components/footer";
import { Nav } from "./components/nav";

function App() {
  return (
    <section className="min-h-screen">
      <Nav />
      <main className="max-w-[900px] mx-auto mt-40 px-4 lg:px-0">
        <Resume />
        <Projects />
        <Aboutme />
      </main>
      <Footer />
    </section>
  );
}

export default App;
