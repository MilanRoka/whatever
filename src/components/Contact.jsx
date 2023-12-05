/* eslint-disable react/no-unescaped-entities */
import { FcCellPhone } from 'react-icons/fc';
import { RiUserLocationFill } from 'react-icons/ri';
import { MdAlternateEmail } from 'react-icons/md';



const Contact = () => {
    return (
        <>
            <div id='contact' className="mx-auto max-w-2xl text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl lg:pt-20 font-bold tracking-tight text-gray-400">Get in Touch!</h2>
            </div>
            <div className="flex flex-col items-center py-10 text-center sm:flex-row sm:justify-center sm:items-center sm:py-20 text-2xl md:text-3xl lg:text-5xl">
                <div className="mb-6 sm:mb-0 sm:mr-10 flex items-center flex-col text-center">
                    <FcCellPhone className="text-3xl sm:text-4xl" />
                    <p className="text-white text-base sm:text-xl">07387 670908</p>
                </div>
                <div className="mb-6 sm:mb-0 sm:mr-10 flex items-center flex-col text-center">
                    <RiUserLocationFill className="text-green-100 text-3xl sm:text-4xl" />
                    <p className="text-white text-base sm:text-xl">Leicester City, England</p>
                </div>
                <div className="mb-6 sm:mb-0 sm:mr-10 flex items-center flex-col text-center">
                    <MdAlternateEmail className="text-white text-3xl sm:text-4xl" />
                    <p className="text-white text-base sm:text-xl">
                        <a href="mailto:milan.baba777@gmail.com">milan.baba777@gmail.com</a>
                    </p>
                </div>
            </div>
        </>
    )
}
export default Contact
