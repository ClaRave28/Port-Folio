import '@/App.css'
import meImg from '@/assets/profile_with_background.png'

function AboutMe() {
    return (
        <div className="flex flex-col">
            <div style={{ position: 'relative', paddingTop: '150px', paddingLeft: '550px' }}>
                <img className="me" src={meImg} alt="me" />

                <h1 className="hello font-citation  text-lilac-950">
                    Hi !
                </h1>
                <h1 className="name font-citation  text-lilac-950">
                    I'm Clarisse Del Castillo
                </h1>
                <div className="flex flex-col gap-4">
                    <div className="max-w-[800px]  border p-[1px] rounded-xl bg-gradient-to-br from-lilac-800 via-lilac-900 to-lilac-950 text-center">
                        <div className="rounded-xl bg-black/60 p-2 text-lilac-100 text-lg font-born">
                            I was born on March 15, 2004, in Ermont, in the Val-d'Oise department (95). I am 22 years old.
                        </div>
                    </div>

                    <div className="max-w-[800px]  border p-[1px] rounded-xl bg-gradient-to-br from-lilac-800 via-lilac-900 to-lilac-950 text-center">
                        <div className="rounded-xl bg-black/60 p-2 text-lilac-100 text-lg font-born">
                            I am in my fourth year at EPF, a general engineering school.
                            I am currently majoring in Digital and Intelligent Systems.
                        </div>
                    </div>

                    <div className="max-w-[800px] border p-[1px] rounded-xl bg-gradient-to-br from-lilac-800 via-lilac-900 to-lilac-950 text-center">
                        <div className=" mx-auto rounded-xl bg-black/60 p-2 text-lilac-100 text-lg font-born flex flex-col gap-2">

                            <div >
                                Digital and Intelligent Systems :
                            </div>

                            <div className="flex gap-1">
                                <div className="  mx-auto border p-[1px] rounded-xl bg-lilac-500  text-lilac-100 text-lg font-born">
                                    4ème année
                                </div>
                                <div className="  mx-auto border p-[1px] rounded-xl bg-lilac-500  text-lilac-100 text-lg font-born">
                                    5ème année
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