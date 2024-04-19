import {Header} from "./components/Header";
import {MainContext} from "./components/MainContext";
import {SkillCards} from "./components/SkilsCards";
import {ProjectCards} from "./components/ProjectCrads";
import {ContactForm} from "./components/ContactForm";
import {Footer} from "./components/Footer";


function App() {
  return (
      <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        <Header/>
        <MainContext/>
          <SkillCards/>
          <ProjectCards/>
          <ContactForm/>
            <Footer/>
      </div>


  );
}

export default App;
