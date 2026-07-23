import '@/App.css'
import imageMe from '@/assets/me.jpeg'
import FlowerBox from '@/components/Box/FlowerBox';
import FlowerBoxMe from '@/components/Box/FlowerBoxMe';
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Sound } from "@/Hooks/Sound"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"



function AboutMe() {
    const playClick = Sound("/sounds/clic.mp3");
    return (
        <div className="flex flex-col">

            <div style={{ position: 'relative', paddingTop: '90px', paddingLeft: '550px' }}>

                <h1 className="neon-2 hello font-citation  text-lilac-950">
                    Hi !
                </h1>
                <h1 className="neon-2 name font-citation  text-lilac-950">
                    I'm Clarisse Del Castillo
                </h1>

                <div className="flex flex-col gap-4">

                    <div className="flex ">

                        <div className="relative -mt-[30px] -ml-[400px] w-80 h-80 mx-auto animate-slide-in-left">
                            <FlowerBoxMe className="absolute inset-0 w-full h-full" image={imageMe} />


                        </div>

                        <div className="relative -mt-[30px] -ml-[1px] w-80 h-80 mx-auto animate-slide-in-top">
                            <FlowerBox className="absolute inset-0 w-full h-full" />

                            <div className="absolute inset-0 z-10 flex items-center justify-center">
                                <div className="w-44 text-center text-lilac-100 text-lg leading-snug ">
                                    born on March 15, 2004, in Ermont, in the Val-d'Oise department (95). 22 years old.
                                </div>
                            </div>
                        </div>

                        <div className="relative -mt-[30px] -ml-[10px]  w-80 h-80 mx-auto animate-slide-in-right">
                            <FlowerBox className="absolute inset-0 w-full h-full" />

                            <div className="absolute inset-0 z-10 flex items-center justify-center">
                                <div className="w-44 text-center text-lilac-100 text-lg leading-snug">
                                    fourth year at EPF, a general engineering school.
                                    majoring in Digital and Intelligent Systems.
                                </div>
                            </div>
                        </div>

                    </div>



                    




                </div>
            </div >

        </div >
    );
}

export default AboutMe