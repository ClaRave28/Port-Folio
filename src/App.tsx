import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import flowersImg from './assets/flowers.png'
import { Button } from "@/components/ui/button"

function App() {
  return (
    <div style={{ position: 'relative' }}>
      <img className="flowers" src={flowersImg} alt="flowers" />
      <Button>About me</Button>
      <Button>Academic</Button>
      <Button>Skills</Button>
      <Button>Experiences</Button>
      <Button>Projects</Button>
      <Button>Professional project</Button>
      <Button>Challenges</Button>
    </div>
  );

  
}

export default App
