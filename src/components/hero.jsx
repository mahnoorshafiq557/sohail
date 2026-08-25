import { GoDotFill } from "react-icons/go";
import { IoIosList, IoIosStar } from "react-icons/io";
import { Link } from "react-router-dom";
import FacebookProfileCard from './FacebookProfileCard';
import Button from './button';

const Hero = () => {
    return (
        <section className='w-full bg-[#edf2f4] px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 py-8 md:py-12 lg:py-16'>
            <div className='mx-auto flex w-full max-w-[1450px] flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12'>
                
                {/* Left content */}
                <div className='flex w-full flex-col items-start gap-6 lg:w-[50%] xl:w-[48%] py-2 sm:py-4'>
                    <p className='px-3 py-1.5 border border-gray-300 bg-white rounded-full text-xs flex flex-row items-center gap-1.5 text-gray-600 font-medium shadow-2xs'>
                        <GoDotFill color='#75ba75' className="shrink-0" /> Available for new projects • 6.3K+ followers
                    </p>

                    <h1 className='font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#14213d] leading-[1.15] tracking-tight'>
                        Link Building That <span className='text-blue-700 font-serif italic'>Works</span> for Your Business
                    </h1>

                    <p className='text-gray-600 text-sm md:text-base leading-relaxed w-full max-w-xl'>
                        High Quality Backlinks • Better Rankings • More Traffic & Conversions. Safe & White Hat strategies trusted by 500+ businesses.
                    </p>

                    <div className='flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto'>
                        <Link to="/contact" className="w-full sm:w-auto">
                            <Button Color='#14213d' textColor='#ffffff' text='Get Started!' className="w-full" />
                        </Link>
                        <Link to="/sitelist" className="w-full sm:w-auto">
                            <Button Color='#ffffff' AColor='#14213d' textColor='#14213d' text='View Sites List' icon={<IoIosList />} className="w-full" />
                        </Link>
                    </div>

                    <div className='flex flex-col justify-between items-start pt-1'>
                        <p className='gap-1.5 flex items-center font-semibold text-xs text-[#14213d]'>
                            <IoIosStar color='#fca311' size={16} /> 4.9/5 on Fiverr & Upwork
                        </p>
                        <p className='font-light text-gray-500 text-xs mt-1'>
                            Trusted by founders & SEO agencies worldwide
                        </p>
                    </div>

                    <div className='flex flex-wrap items-center gap-2 sm:gap-3 font-semibold pt-2 text-gray-500 text-xs'>
                        <span className='px-3 py-1.5 border border-gray-300 rounded-full bg-white shadow-2xs'>SEO</span>
                        <span className='px-3 py-1.5 border border-gray-300 rounded-full bg-white shadow-2xs'>Backlinks</span>
                        <span className='px-3 py-1.5 border border-gray-300 rounded-full bg-white shadow-2xs'>Guest Posting</span>
                        <span className='px-3 py-1.5 border border-gray-300 rounded-full bg-white shadow-2xs'>PBN</span>
                        <span className='px-3 py-1.5 border border-gray-300 rounded-full bg-white shadow-2xs'>EDU Links</span>
                    </div>
                </div>

                {/* Right content */}
                <div className='relative flex w-full flex-col items-center justify-center lg:w-[48%] py-2 sm:py-4 max-w-[500px] lg:max-w-none mx-auto'>
                    <FacebookProfileCard />
                </div>
            </div>
        </section>
    )
}

export default Hero