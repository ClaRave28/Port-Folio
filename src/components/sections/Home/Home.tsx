import { CircleUserRound, BookOpen, Zap, Sparkles, FolderGit2, BriefcaseBusiness, Swords } from "lucide-react";


import '@/App.css'
import flowersImg from '@/assets/Flowers.png'
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    return (


        <div className="flex flex-col">


            <div style={{ position: 'relative', paddingTop: '450px', paddingLeft: '500px' }}>

                <h1 className=" neon citation font-citation  text-lilac-950">
                    ❝Il faut toute la vie pour apprendre à vivre❞
                </h1>
                <img className="flowers" src={flowersImg} alt="flowers" />
                <div className="flex gap-3">
                    <Button
                        onClick={() => navigate('/about-me')}
                        className="transition-all duration-300 hover:drop-shadow-[0_0_20px_var(--color-lilac-400)]">
                        <CircleUserRound />
                        About me
                    </Button>
                    <Button
                        onClick={() => navigate('/academic')}
                        className="transition-all duration-300 hover:drop-shadow-[0_0_20px_var(--color-lilac-400)]">
                        <BookOpen />
                        Academic
                    </Button>
                    <Button
                        onClick={() => navigate('/skills')}
                        className="transition-all duration-300 hover:drop-shadow-[0_0_20px_var(--color-lilac-400)]">
                        <Zap />
                        Skills
                    </Button>
                    <Button
                        onClick={() => navigate('/experiences')}
                        className="transition-all duration-300 hover:drop-shadow-[0_0_20px_var(--color-lilac-400)]">
                        <Sparkles />
                        Experiences
                    </Button>
                    <Button
                        onClick={() => navigate('/projects')}
                        className="transition-all duration-300 hover:drop-shadow-[0_0_20px_var(--color-lilac-400)]">
                        <FolderGit2 />
                        Projects
                    </Button>
                    <Button
                        onClick={() => navigate('/professional-project')}
                        className="transition-all duration-300 hover:drop-shadow-[0_0_20px_var(--color-lilac-400)]">
                        <BriefcaseBusiness />
                        Professional project
                    </Button>
                    <Button
                        onClick={() => navigate('/challenges')}
                        className="transition-all duration-300 hover:drop-shadow-[0_0_20px_var(--color-lilac-400)]">
                        <Swords />
                        Challenges</Button>
                </div>

            </div>



        </div>


    );


}

export default Home
