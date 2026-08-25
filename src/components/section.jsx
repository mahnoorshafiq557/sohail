const stats = [
    { value: '6.3K+', label: 'Followers', sublabel: 'Organic community' },
    { value: '382+', label: 'Posts', sublabel: 'SEO & link tips' },
    { value: '1000+', label: 'Sites Available', sublabel: 'DA 30 to 91+' },
    { value: '100%', label: 'White Hat', sublabel: 'Safe & permanent' },
]

const Section = () => {
    return (
        <div className='justify-between items-center h-full w-full px-45 bg-[#ffffff] grid grid-cols-4 border border-gray-200'>
            {stats.map((stat, index) => (
                <div
                    key={stat.label}
                    className={`col-span-1 flex flex-col gap-2 justify-center px-10 py-8 h-full w-full ${index !== 0 ? 'border-l border-gray-200' : ''
                        }`}
                >
                    <h1 className='font-bold text-3xl text-[#14213d]'>{stat.value}</h1>
                    <p className='text-[#14213d] text-sm font-medium'>
                        {stat.label}
                        <br />
                        <span className='text-gray-400 font-normal'>{stat.sublabel}</span>
                    </p>
                </div>
            ))}
        </div>
    )
}

export default Section
