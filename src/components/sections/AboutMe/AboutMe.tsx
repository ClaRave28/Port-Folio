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



                    <div className="relative -mt-[80px] -ml-[-263px] w-80 h-80 mx-auto animate-slide-in-bottom">
                        <FlowerBox className="absolute inset-0 w-full h-full" />

                        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3">
                            <div className="w-48 text-center text-lilac-100 text-xl leading-snug">
                                Digital and Intelligent Systems
                            </div>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button
                                        onClick={() => {
                                            playClick();
                                        }}
                                        className=" btn-glossy bg-lilac-950 text-lilac-100  transition-all duration-300 hover:drop-shadow-[0_0_20px_var(--color-lilac-400)]">
                                        Syllabus
                                    </Button>
                                </DialogTrigger>

                                <DialogContent className="bg-[#1a1025] text-white border-[var(--lavender-purple)] max-h-[80vh] overflow-y-auto sm:max-w-[1150px]">
                                    <DialogHeader>
                                        <DialogTitle className="text-[var(--lavender-purple)]">
                                            Syllabus des cours
                                        </DialogTitle>

                                    </DialogHeader>

                                    <p className="text-sm text-[var(--white)]/70">
                                        4th year
                                    </p>

                                    <div className="flex gap-4">
                                        <div className="flex-column">
                                            <Accordion type="single" collapsible className="w-full">



                                                <AccordionItem value="labour-law" className="border-lilac-800">
                                                    <AccordionTrigger>
                                                        Labour Law
                                                    </AccordionTrigger>
                                                    <AccordionContent className="text-black">
                                                        Droit du travail, loi sur le travail...
                                                    </AccordionContent>
                                                </AccordionItem>

                                                <AccordionItem value="java" className="border-lilac-800">
                                                    <AccordionTrigger >
                                                        Java Programming Language
                                                    </AccordionTrigger>
                                                    <AccordionContent className="text-black">
                                                        Contenu...
                                                    </AccordionContent>
                                                </AccordionItem>

                                                <AccordionItem value="mobile-materials" className="border-lilac-800">
                                                    <AccordionTrigger >
                                                        Mobile Materials
                                                    </AccordionTrigger>
                                                    <AccordionContent className="text-black">
                                                        Contenu...
                                                    </AccordionContent>
                                                </AccordionItem>


                                            </Accordion>
                                        </div>
                                        <div className="flex-column">
                                            <Accordion type="single" collapsible className="w-full">

                                                <AccordionItem value="angular-js" className="border-lilac-800">
                                                    <AccordionTrigger >
                                                        Angular and JS
                                                    </AccordionTrigger>
                                                    <AccordionContent className="text-black">
                                                        Contenu...
                                                    </AccordionContent>
                                                </AccordionItem>

                                                <AccordionItem value="symfony" className="border-lilac-800">
                                                    <AccordionTrigger >
                                                        Symfony Web Development
                                                    </AccordionTrigger>
                                                    <AccordionContent className="text-black">
                                                        Contenu...
                                                    </AccordionContent>
                                                </AccordionItem>

                                                <AccordionItem value="unix-linux" className="border-lilac-800">
                                                    <AccordionTrigger >
                                                        UNIX and LINUX Systems
                                                    </AccordionTrigger>
                                                    <AccordionContent className="text-black">
                                                        Contenu...
                                                    </AccordionContent>
                                                </AccordionItem>
                                            </Accordion>

                                        </div>

                                        <div className="flex-column">
                                            <Accordion type="single" collapsible className="w-full">

                                                <AccordionItem value="git" className="border-lilac-800">
                                                    <AccordionTrigger >
                                                        Git and Version Control
                                                    </AccordionTrigger>
                                                    <AccordionContent className="text-black">
                                                        Contenu...
                                                    </AccordionContent>
                                                </AccordionItem>

                                                <AccordionItem value="apis" className="border-lilac-800">
                                                    <AccordionTrigger >
                                                        API's Architecture
                                                    </AccordionTrigger>
                                                    <AccordionContent className="text-black">
                                                        Contenu...
                                                    </AccordionContent>
                                                </AccordionItem>

                                                <AccordionItem value="networks" className="border-lilac-800">
                                                    <AccordionTrigger >
                                                        Networks and Infrastructure
                                                    </AccordionTrigger>
                                                    <AccordionContent className="text-black">
                                                        Contenu...
                                                    </AccordionContent>
                                                </AccordionItem>

                                            </Accordion>

                                        </div>

                                        <div className="flex-column">
                                            <Accordion type="single" collapsible className="w-full">

                                                <AccordionItem value="org-security" className="border-lilac-800">
                                                    <AccordionTrigger >
                                                        Organizational Security
                                                    </AccordionTrigger>
                                                    <AccordionContent className="text-black">
                                                        Contenu...
                                                    </AccordionContent>
                                                </AccordionItem>

                                                <AccordionItem value="op-security" className="border-lilac-800">
                                                    <AccordionTrigger >
                                                        Operational Security
                                                    </AccordionTrigger>
                                                    <AccordionContent className="text-black">
                                                        Contenu...
                                                    </AccordionContent>
                                                </AccordionItem>

                                                <AccordionItem value="ai" className="border-lilac-800">
                                                    <AccordionTrigger >
                                                        Artificial Intelligence
                                                    </AccordionTrigger>
                                                    <AccordionContent className="text-black">
                                                        Contenu...
                                                    </AccordionContent>
                                                </AccordionItem>

                                            </Accordion>

                                        </div>

                                    </div>

                                </DialogContent>

                            </Dialog>
                        </div>
                    </div>




                </div>
            </div >

        </div >
    );
}

export default AboutMe