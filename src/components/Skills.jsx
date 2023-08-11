import Lottie from "lottie-react"
import animationData from "../assets/animation3.json"
import { TfiHtml5 } from "react-icons/tfi"
import { SiCss3 } from "react-icons/si"
import { RiJavascriptFill } from "react-icons/ri"
import { BiLogoReact } from "react-icons/bi"
import { SiTailwindcss } from "react-icons/si"
import { SiMui } from "react-icons/si"
import { DiNodejs } from "react-icons/di"
import { BiLogoMongodb } from "react-icons/bi"
import { FaNpm } from "react-icons/fa"

const Skills = () => {
    return (
        <>
            <div id="skills" className=" py-4 ">
                <h1 className="pt-9 text-1xl text-center font-bold text-gray-400 lg:pt-20 sm:text-4xl">Skills</h1>


                <div className="flex flex-col md:flex-row justify-center items-center ">
                    <div className="text-5xl sm:w-3/4 lg:w-2/3 p-4">
                        <Lottie animationData={animationData} />
                    </div>
                    <div className="text-white pl-16 text-xl font-bold flex flex-wrap gap-8 md:gap-12 md:mt-0">
                        <div className=" w-1/3 md:w-1/3 lg:w-1/4">
                            <h1 className="text-2xl md:text-3xl">HTML</h1>
                            <TfiHtml5 className="text-orange-500 text-6xl animate-pulse" />
                        </div>
                        <div className="w-1/3 md:w-1/3 lg:w-1/4">
                            <h1 className=" text-2xl md:text-3xl">CSS</h1>
                            <SiCss3 className="text-blue-500 text-6xl animate-pulse" />
                        </div>
                        <div className="w-1/3 md:w-1/3 lg:w-1/4">
                            <h1 className=" text-2xl md:text-3xl">JavaScript</h1>
                            <RiJavascriptFill className="text-yellow-500 text-6xl animate-pulse" />
                        </div>
                        <div className="w-1/3 md:w-1/3 lg:w-1/4">
                            <h1 className=" text-2xl md:text-3xl">ReactJs</h1>
                            <BiLogoReact className="text-blue-500 text-6xl animate-spin" />
                        </div>
                        <div className="w-1/3 md:w-1/3 lg:w-1/4">
                            <h1 className=" text-2xl md:text-3xl">Tailwind CSS</h1>
                            <SiTailwindcss className="text-blue-500 text-6xl animate-pulse" />
                        </div>
                        <div className="w-1/3 md:w-1/3 lg:w-1/4">
                            <h1 className=" text-2xl md:text-3xl">Material UI</h1>
                            <SiMui className="text-blue-500 text-6xl animate-pulse" />
                        </div>
                        <div className="w-1/3 md:w-1/3 lg:w-1/4">
                            <h1 className="text-2xl md:text-3xl">Node.js</h1>
                            <DiNodejs className="text-green-500 text-6xl animate-pulse" />
                        </div>
                        <div className="w-1/3 md:w-1/3 lg:w-1/4">
                            <h1 className=" text-2xl md:text-3xl">MongoDB</h1>
                            <BiLogoMongodb className="text-green-500 text-6xl animate-pulse" />
                        </div>
                        <div className="w-1/3 md:w-1/3 lg:w-1/4">
                            <h1 className="text-2xl md:text-3xl">NPM</h1>
                            <FaNpm className="text-green-500 text-6xl animate-pulse" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Skills
