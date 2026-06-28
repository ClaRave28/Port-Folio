import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
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
        <div className="flex gap-2">
          <Button>About me</Button>
          <Button>Academic</Button>
          <Button>Skills</Button>
          <Button>Experiences</Button>
          <Button>Projects</Button>
          <Button>Professional project</Button>
          <Button>Challenges</Button>
        </div>

      </div>
    </Background>
  );


}

export default App
