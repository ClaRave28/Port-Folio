import '@/App.css'
import FlowerBox from '@/components/Box/FlowerBox';
import { Button } from "@/components/ui/button"
import { Sound } from "@/Hooks/Sound"
import { CalendarDays, MapPin, BookOpenText } from "lucide-react";


function Academic() {
    const playClick = Sound("/sounds/clic.mp3");
    return (
        <div className="flex flex-col">
            <div style={{ position: 'relative', paddingTop: '90px', paddingLeft: '550px' }}>
                <div className="flex flex-col gap-4">
                    <div className="flex ">

                        <div className="relative -mt-[30px] -ml-[350px] w-80 h-80 mx-auto animate-slide-in-top">
                            <FlowerBox className="absolute inset-0 w-full h-full" />

                            <div className="absolute inset-0 z-10 flex items-center justify-center">
                                <div className="w-44 text-center text-lilac-100 text-lg leading-snug ">
                                    <p className='text-black'>
                                        Lycée Louis Thuillier
                                    </p>
                                    <p className='flex-column gap-1'>
                                        <p className='flex gap-2'>
                                            <CalendarDays />
                                            Sept 2019 – July 2022
                                        </p>
                                        <p className='flex gap-2'>
                                            <MapPin />
                                            Amiens
                                        </p>
                                        <p className='flex gap-1'>
                                            <BookOpenText />
                                            European classes
                                        </p>
                                    </p>


                                </div>
                            </div>
                        </div>

                        <div className="relative -mt-[30px] -mr-[-150px]  w-80 h-80 mx-auto animate-slide-in-right">
                            <FlowerBox className="absolute inset-0 w-full h-full" />

                            <div className="absolute inset-0 z-10 flex items-center justify-center">
                                <div className="w-44 text-center text-lilac-100 text-lg leading-snug">
                                </div>
                            </div>
                        </div>



                    </div>

                    <div className="relative -mt-[80px] -mr-[-550px] w-80 h-80 mx-auto animate-slide-in-bottom">
                        <FlowerBox className="absolute inset-0 w-full h-full" />

                        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3">
                            <div className="w-48 text-center text-lilac-100 text-xl leading-snug">

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Academic