import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Experience } from "./pages/Experience";

export function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Cada seção ganha um ID para que o Header possa rolar até ela */}
        <section id="home">
          <Home />
        </section>
        
        <section id="projetos">
          <Projects />
        </section>
        
        <section id="experiencias">
          <Experience />
        </section>
        
        <section id="contato">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}