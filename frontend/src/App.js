import "@/App.css";
import { Hero } from "./components/Hero";
import { Bio } from "./components/Bio";
import { MusicPlayer } from "./components/MusicPlayer";
import { Links } from "./components/Links";
import { TechRider } from "./components/TechRider";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="noise-overlay">
      <main className="presskit-container" data-testid="presskit-main">
        <Hero />
        <Bio />
        <MusicPlayer />
        <Links />
        <TechRider />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
