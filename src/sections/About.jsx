import React, {useState} from 'react'
import Globe from "react-globe.gl";
import CustomButton from "../components/CustomButton.jsx";

const About = () => {

    const [isCopied, setIsCopied] = useState();
    const handleCopy = () => {
        navigator.clipboard.writeText("jaimenguyen168@gmail.com")
        setIsCopied(true)
        setTimeout(() => {
            setIsCopied(false)
        }, 2000)
    }

    return (
        <section className="c-space my-20">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img
                            src="/assets/grid1.png"
                            alt="grid1"
                            className="w-full sm:h-[276px] h-fit object-contain"
                        />
                        <div>
                            <p className="grid-headtext">Hi, I am Jaime Nguyen</p>
                            <p className="grid-subtext">A self-taught full-stack mobile developer skilled in SwiftUI,
                                Compose, React Native, and expanding into web and 3D design to craft seamless digital
                                experiences.</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 row-span-3">
                    <div className="grid-container">
                        <div className="flex justify-center">
                            <img
                                src="/assets/grid2.png"
                                alt="grid2"
                                className="w-full sm:w-[276px] h-fit object-contain justify-center"
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">SwiftUI, Compose, React Native, and newly focus on React,
                                Next.js, and Three.js</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{
                                    lat: 39.9526,
                                    lng: -75.1652,
                                    size: 20,
                                    text: "I'm here",
                                    color: "white"
                                }]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">I work remotely</p>
                            <p className="grid-subtext">I&apos;m based in Philadelphia, PA</p>
                            <CustomButton name="Contact Me" isBeam containerClass="w-full mt-10"/>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img
                            src="/assets/grid3.png"
                            alt="grid-3"
                            className="w-full sm:h-[266px] h-fit object-contain"
                        />

                        <div>
                            <p className="grid-headtext">My Passion for Coding</p>
                            <p className="grid-subtext">
                                I love solving problems and building things through code. Programming is my passion. I
                                enjoy exploring new technologies, and enhancing my
                                skills.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img
                            src="/assets/grid4.png"
                            alt="grid-4"
                            className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                        />

                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img
                                    src={isCopied ? '/assets/tick.svg' : '/assets/copy.svg'}
                                    alt="copy"
                                />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">jaimenguyen168@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About
