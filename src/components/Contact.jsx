/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import { FcCellPhone } from 'react-icons/fc';
import { RiUserLocationFill } from 'react-icons/ri';
import { MdAlternateEmail } from 'react-icons/md';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Contact = () => {
    const [agreed, setAgreed] = useState(false)


    return (
        <div>
            
            <div id='contact' className="mx-auto max-w-2xl text-center">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl lg:pt-20 font-bold tracking-tight text-gray-400">Get in Touch!</h2>
                </div>
            <div className="flex flex-col items-center py-10 text-center sm:flex-row sm:justify-center sm:items-center sm:py-20 text-2xl md:text-3xl lg:text-5xl">
                <div className="mb-6 sm:mb-0 sm:mr-10 flex items-center flex-col text-center">
                    <FcCellPhone className="text-3xl sm:text-4xl" />
                    <p className="text-white text-base sm:text-xl">+977 9826178377</p>
                </div>
                <div className="mb-6 sm:mb-0 sm:mr-10 flex items-center flex-col text-center">
                    <RiUserLocationFill className="text-green-100 text-3xl sm:text-4xl" />
                    <p className="text-white text-base sm:text-xl">Lalitpur, Nepal</p>
                </div>
                <div className="mb-6 sm:mb-0 sm:mr-10 flex items-center flex-col text-center">
                    <MdAlternateEmail className="text-white text-3xl sm:text-4xl" />
                    <p className="text-white text-base sm:text-xl">
                        <a href="mailto:milan.baba777@gmail.com">milan.baba777@gmail.com</a>
                    </p>
                </div>
            </div>


            <div className="bg-transparent px-6 py-12 md:py-24 lg:px-8">
                
                <form action="#" method="POST" className="mx-auto mt-8 max-w-xl">
                    <div className="grid gap-4 md:gap-8">
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-semibold text-white">
                                First name
                            </label>
                            <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="w-full rounded-md border-gray-300 px-3.5 py-2 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm font-semibold text-white">
                                Last name
                            </label>
                            <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                className="w-full rounded-md border-gray-300 px-3.5 py-2 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-white">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                className="w-full rounded-md border-gray-300 px-3.5 py-2 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold text-white">
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                rows={4}
                                className="w-full rounded-md border-gray-300 px-3.5 py-2 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                                defaultValue={''}
                            />
                        </div>
                    </div>
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full rounded-md bg-orange-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-orange-400 focus:ring-2 focus:ring-indigo-600"
                        >
                            Let's talk
                        </button>
                    </div>
                    <div className="mt-4 text-center">
                        <Switch.Group as="div" className="flex justify-center items-center">
                            <Switch
                                checked={agreed}
                                onChange={setAgreed}
                                className={classNames(
                                    agreed ? 'bg-orange-600' : 'bg-gray-200',
                                    'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-indigo-600'
                                )}
                            >
                                <span className="sr-only">Agree to policies</span>
                                <span
                                    aria-hidden="true"
                                    className={classNames(
                                        agreed ? 'translate-x-3.5' : 'translate-x-0',
                                        'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                                    )}
                                />
                            </Switch>
                            <Switch.Label className="ml-2 text-sm text-white">
                                By selecting this, you agree to the{' '}
                                <a href="#" className="font-semibold text-orange-600">
                                    privacy&nbsp;& policy
                                </a>
                                .
                            </Switch.Label>
                        </Switch.Group>
                        <p className='text-red-800'>For the moment messaging is not available</p>

                    </div>
                </form>
            </div>

        </div>
    )
}
export default Contact
