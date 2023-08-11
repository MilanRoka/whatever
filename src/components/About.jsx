/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react"
import animationData from "../assets/animation2.json"

const About = () => {
    return (
        <>
            <div className="bg-black-100 min-h-screen">
                <h1 id="about" className="pt-10 text-1xl text-center font-bold text-gray-400 lg:pt-20 sm:text-4xl">About Me</h1>

                <div className="flex flex-col-reverse md:flex-row py-10 px-4">
                    <div className="w-full md:w-1/2 md:pr-10 md:opacity-70">
                        <Lottie animationData={animationData} className="w-full h-auto md:" />
                    </div>
                    <p className="text-sm md:pl-10 sm:m-10 md:py-20 text-gray-400 text-justify sm:text-2xl md:w-1/2 ">
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
                        <h1 className="py-5 text-1xl text-center font-bold text-gray-400 lg:pt-10 sm:text-3xl">Academics</h1>
                        <div className="flex flex-row ">
                            <div className="hidden md:block">
                                <div className="mt-7 h-5 w-5 rounded-full bg-green-400" />
                                <div className="ml-2 w-1 sm:h-40 h-40 bg-green-400 violet-gradient" />
                                <div className="h-5 w-5 rounded-full bg-green-400" />
                                <div className="ml-2 w-1 sm:h-40 h-40 bg-green-400 violet-gradient" />
                                <div className="h-5 w-5 rounded-full bg-green-400" />
                            </div>

                            <div className="pt-9 pl-5">
                                <h2 className="text-gray-400">National School of Science/Management, NIST</h2>
                                <h6>Kathmandu</h6>
                                <h6>2019</h6>
                                <h6>Higher Secondary Education Board</h6>

                                <div className="pt-14">
                                    <h2 className="text-gray-400">Herald College</h2>
                                    <h6>Kathmandu</h6>
                                    <h6>2023</h6>
                                    <h6>BSc.(Hons)Computer Science</h6>

                                </div>
                            </div>
                        </div>
                    </p>
                </div>
                {/* <div className="w-1/2 opacity-70">
                    <Lottie animationData={animationData} className="sm:" />
                </div> */}
            </div>
        </>
    )
}

export default About
