import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Animation from './Animation'
import About from './About'
import Lottie from "lottie-react"
import animationData from "../assets/animation_ll0w5xoz.json"
import Skills from './Skills'
import Project from './Project'
import Contact from './Contact'
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const smoothScroll = (target) => {
      const element = document.querySelector(target);
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth'
        });
      }
    };

    document.addEventListener('click', (event) => {
      if (event.target.matches('a[href^="#"]')) {
        event.preventDefault();
        smoothScroll(event.target.getAttribute('href'));
      }
    });

  return (
    <>
      <div id='home' className="bg-black font-mono">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav className={`flex items-center justify-between p-5 lg:px-8 fixed w-full z-50 ${isScrolled ? 'bg-blur-sm backdrop-blur-sm' : 'bg-transparent'}`} aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="#home" className="-m-1.5 p-1.5">
                <img
                  className={`h-8 sm:h-8 md:h-10 lg:h-12 w-auto ${isScrolled ? 'opacity-100' : 'opacity-100'}`}
                  src="http://localhost:5173/brand.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className={`hidden lg:flex justify-center lg:gap-x-12 ${isScrolled ? 'bg-transparent ' : 'bg-transparent'}`}>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={` block py-2 px-4 text-xl font-semibold leading-6 text-white ${isScrolled ? ' hover: hover:font-bold' : 'hover:-translate-x-0.5'}`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>

          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black bg-opacity-30 backdrop-blur-sm px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className=" flex items-center justify-between">
                <a href="/" className="-m-1.5 p-1.5 ">
                  <img
                    className=" h-8 w-auto"
                    src="http://localhost:5173/brand.svg"
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <h1 className='text-3xl pt-40 text-gray-300 font-bold '> Surprise, Scroll the screen yourself !!</h1>
            </Dialog.Panel>
          </Dialog>
        </header>

        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className='mx-auto max-w-2xl py-3 sm:py-1 lg:py-5 sm:flex sm:justify-center'>
            <Lottie animationData={animationData} />
          </div>
          <div className="mx-auto max-w-2xl py-3 sm:py-48 lg:py-5 sm:flex sm:justify-center">
            <div >
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Hi, I am
                <span className='className="text-4xl font-bold tracking-tight text-green-400 sm:text-6xl pl-7 pb-3'>Milan Roka</span>
              </h1>
              <h1 className="text-4xl font-bold tracking-tight text-green-400 sm:text-4xl">
                <Animation />
              </h1>
              <p className="text-xl mt-6 leading-8 text-gray-400">
                I make the Complex - Simple !
              </p>
            </div>
          </div>
          <div className='text-2xl lg:gap-x-12 py-5 flex gap-x-5 sm:text-4xl sm:flex sm:justify-center text-orange-500'>
            <BsLinkedin
              onClick={
                () => window.open('https://www.linkedin.com/in/milan-roka-b8b12b22a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_resumebuilder%3Bzttt2NoAQL60UT%2B1hYcEFA%3D%3D')}
              className='cursor-pointer'
            />
            <BsGithub
              onClick={
                () => window.open('https://github.com/MilanRoka97')}
              className='cursor-pointer' />
            <TfiEmail
              onClick={
                () => window.open('mailto: <milan.baba777@gmail.com>')}
              className='cursor-pointer'

            />
          </div>

        </div>

        <About />
        <Skills />
        <Project />

        <Contact />
      </div>
    </>
  )
}
export default Hero