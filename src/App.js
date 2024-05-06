import {Header} from "./components/Header";
import {MainContext} from "./components/MainContext";
import {SkillCards} from "./components/SkilsCards";
import {ProjectCards} from "./components/ProjectCrads";
import {ContactForm} from "./components/ContactForm";
import {Footer} from "./components/Footer";


function App() {
  return (
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
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
