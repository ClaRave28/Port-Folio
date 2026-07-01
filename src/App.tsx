import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { CircleUserRound, BookOpen, Zap, Sparkles, FolderGit2, BriefcaseBusiness, Swords } from "lucide-react";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

import './App.css'
import flowersImg from './assets/flowers.png'
import { Button } from "@/components/ui/button"
import Background from './components/layout/Background'

function App() {
  return (
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
  );


}

export default App
