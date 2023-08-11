/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react"
import animationData from "../assets/animation2.json"

const About = () => {
    return (
        <>
            <h1 id="about" className="pt-10 text-1xl text-center font-bold text-gray-400 lg:pt-20 sm:text-4xl">About Me</h1>

            <div className="flex flex-row">
                <p className="text-sm pl-32 py-20 text-gray-400 sm:text-justify sm:text-2xl w-1/2 pr-4">
                    Hi there! <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;I'm Milan Roka, a passionate frontend developer with a keen interest in building
                    modern and user-friendly websites.
                    I have a strong attraction to the area of frontend software development.
                    I find myself intrigued by the practice of developing appealing graphical user interfaces with effortless experiences
                    and I am enthusiastic to keep on top of technological advances. I seek to create user-centric products that have a long-lasting impact
                    by paying close attention to detail and engaging problem-solving. My desire to develop into a skilled and creative frontend developer
                    is stimulated by my willingness to continue developing and adapting to emerging difficulties.
                    {/* 
                    I have experience in HTML, CSS, JavaScript, and
                    React.js with other Tailwind css framework, MUI Library. I also have a basic knowledge of Nodejs and MongoDb as well.
                    When I'm not coding, you can find me hiking or exploring new coffee shops. */}
                    <h1 className="text-1xl text-center font-bold text-gray-400 lg:pt-10 sm:text-3xl">Academics</h1>
                    <div className="flex flex-row ">
                        <div>
                            <div className="mt-7 h-5 w-5 rounded-full bg-green-400" />
                            <div className="ml-2 w-1 sm:h-40 h-40 bg-green-400 violet-gradient" />
                            <div className="h-5 w-5 rounded-full bg-green-400" />
                            <div className="ml-2 w-1 sm:h-40 h-40 bg-green-400 violet-gradient" />
                            <div className="h-5 w-5 rounded-full bg-green-400" />
                        </div>
                        <div className="pt-9 pl-5">
                            <h2 className="text-gray-400">National School of Science/Management, NIST</h2>
                            <h6>Kathmandu</h6>
                            <h6>2018 - 2020</h6>
                            <h6>Higher Secondary Education</h6>
                            <h6>Computer Science</h6>
                            <div className="pt-7">
                            <h2 className="text-gray-400">Herald College</h2>
                            <h6>Kathmandu</h6>
                            <h6>2018 - 2020</h6>
                            <h6>Higher Secondary Education</h6>
                            <h6>Computer Science</h6> 
                            </div>
                        </div>
                    </div>
                </p>

                <div className="w-1/2 sm:w-1/2 opacity-70 ">
                    <Lottie animationData={animationData} className="" />
                </div>
            </div>



        </>
    )
}

export default About
