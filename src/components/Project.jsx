const products = [
    {
        id: 1,
        name: 'bookHostel',
        href: 'https://github.com/MilanRoka/book-hostel',
        description: 'Developed a whole Hostel Booking System as Final Year Student',
        imageSrc: '/back2.jpg',
        
    },
    {
        id: 2,
        name: 'Kaar-Culator',
        href: 'https://github.com/MilanRoka/Kaar-culator',
        description: 'Worked as a Frontend Developer for Tax Calculator System "Kaar-Culator" ',
        imageSrc: '/project1.png',
    },
    {
        id: 3,
        name: 'Image Search Engine',
        href: 'https://github.com/MilanRoka/ImageFinder-Javascript',
        description: 'Image searching engine using HTML, CSS, JavaScript',
        imageSrc: '/project3.png',
    },
]

const Project = () => {
    return (
        <div id="projects">
    <h1 id="projects" className="pt-9 text-1xl text-center font-bold text-gray-400 lg:pt-20 sm:text-4xl">Projects</h1>

    <div className="flex justify-center bg-transparent">
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <a key={product.id} href={product.href} className="group">
                        <div className="h-64 sm:h-72 bg-gray-100 rounded-lg overflow-hidden">
                            <img
                                src={product.imageSrc}
                                className="h-full w-full object-cover object-center group-hover:opacity-75"
                                alt={product.name}
                            />
                        </div>
                        <h3 className="mt-3 text-base font-semibold text-orange-500">{product.name}</h3>
                        <p className="mt-2 text-sm text-gray-300">{product.description}</p>
                    </a>
                ))}
            </div>
        </div>
    </div>
</div>

    )
}

export default Project
