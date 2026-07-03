import { CircleUserRound, BookOpen, Zap, Sparkles, FolderGit2, BriefcaseBusiness, Swords } from "lucide-react";

import Footer from "./components/layout/Footer/Footer";

import './App.css'
import flowersImg from './assets/flowers.png'
import { Button } from "@/components/ui/button"
import Background from './components/layout/Background/Background'

function App() {
  return (

    <>
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">
          <Background>
            <div style={{ position: 'relative', paddingTop: '470px', paddingLeft: '600px' }}>

              <h1 className=" neon citation font-display  text-[#6247aa]">
                ❝Il faut toute la vie pour apprendre à vivre❞
              </h1>
              <img className="flowers" src={flowersImg} alt="flowers" />
              <div className="flex gap-3">
                <Button className="transition-all duration-300 hover:drop-shadow-[0_0_20px_var(--wisteria-2)]">
                  <CircleUserRound />
                  About me
                </Button>
                <Button className="transition-all duration-300 hover:drop-shadow-[0_0_20px_var(--wisteria-2)]">
                  <BookOpen />
                  Academic
                </Button>
                <Button className="transition-all duration-300 hover:drop-shadow-[0_0_20px_var(--wisteria-2)]">
                  <Zap />
                  Skills
                </Button>
                <Button className="transition-all duration-300 hover:drop-shadow-[0_0_20px_var(--wisteria-2)]">
                  <Sparkles />
                  Experiences
                </Button>
                <Button className="transition-all duration-300 hover:drop-shadow-[0_0_20px_var(--wisteria-2)]">
                  <FolderGit2 />
                  Projects
                </Button>
                <Button className="transition-all duration-300 hover:drop-shadow-[0_0_20px_var(--wisteria-2)]">
                  <BriefcaseBusiness />
                  Professional project
                </Button>
                <Button className="transition-all duration-300 hover:drop-shadow-[0_0_20px_var(--wisteria-2)]">
                  <Swords />
                  Challenges</Button>
              </div>

            </div>
          </Background>
        </main>
        <Footer />
      </div>
    </>

  );


}

export default App
