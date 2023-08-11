import Lottie from "lottie-react"
import animationData from "../assets/animation4.json"

const products = [
    {
        id: 1,
        name: 'Kaar-Culator',
        href: '#',
        description: 'Worked as a Frontend Developer for Tax Calculator System "Kaar-Culator" ',
        imageSrc: 'http://localhost:5173/project1.png',
    },
    {
        id: 2,
        name: 'bookHostel',
        href: '#',
        description: 'Developed a whole Hostel Booking System as Final Year Student',
        imageSrc: 'http://localhost:5173/back2.jpg',
    },
]

const Project = () => {
    return (
        <div id="projects">
            <h1 id='projects' className="pt-9 text-1xl text-center font-bold text-gray-400 lg:pt-20 sm:text-4xl">Project</h1>
            <div className="">
                <div className="mx-auto max-w-sm py-32 sm:py-1 lg:py-1 sm:flex sm:justify-end">
                    <Lottie
                        animationData={animationData}
                    />
                </div>
                <div className="bg-transparent">
                    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <h2 className="sr-only">Products</h2>

                        <div className="justify-center flex flex-row gap-x-6 gap-y-10 sm:xl:gap-x-8">
                            {products.map((product) => (
                                <a key={product.id} href={product.href} className="group">
                                    <div className="h-72 w-96">
                                        <img
                                            src={product.imageSrc}
                                            className="h-full w-full object-fit object-center group-hover:opacity-75"
                                        />
                                    </div>
                                    <h3 className="mt-4 text-sm font-extrabold text-orange-500">{product.name}</h3>
                                    <h2 className="mt-4 text-sm text-white">{product.description}</h2>
                                    <p className="mt-1 text-lg font-medium text-white">{product.price}</p>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
