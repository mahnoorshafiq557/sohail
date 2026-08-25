const stats = [
    { value: '6.3K+', label: 'Followers', sublabel: 'Organic community' },
    { value: '382+', label: 'Posts', sublabel: 'SEO & link tips' },
    { value: '1000+', label: 'Sites Available', sublabel: 'DA 30 to 91+' },
    { value: '100%', label: 'White Hat', sublabel: 'Safe & permanent' },
]

const Section = () => {
    return (
        <section className='w-full bg-[#ffffff] border-y border-gray-200 py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20'>
            <div className='mx-auto w-full max-w-[1450px] grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-gray-200'>
                {stats.map((stat) => (
                    <div
                        key={stat.label}
                        className='flex flex-col gap-1.5 justify-center px-2 sm:px-6 lg:px-10 py-2 sm:py-4 w-full text-center sm:text-left'
                    >
                        <h2 className='font-bold text-2xl sm:text-3xl text-[#14213d]'>{stat.value}</h2>
                        <p className='text-[#14213d] text-xs sm:text-sm font-medium leading-tight'>
                            {stat.label}
                            <br />
                            <span className='text-gray-400 font-normal text-xs'>{stat.sublabel}</span>
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Section
