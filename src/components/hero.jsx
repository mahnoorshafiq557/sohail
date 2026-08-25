import { GoDotFill } from "react-icons/go";
import { IoIosList, IoIosStar } from "react-icons/io";
import FacebookProfileCard from './FacebookProfileCard';
import Button from './button';
const Hero = () => {
    return (
        <div className='flex flex-row justify-between items-center h-full w-full px-45 py-10 bg-[#edf2f4]'>
            <div className='flex flex-col justify-between items-start gap-8 w-[40%] h-full py-10'>
                <p className='px-2 py-1 border border-gray-300 bg-white rounded-full text-xs flex flex-row justify-between items-center gap-0.5 text-gray-500'><GoDotFill color='#75ba75' />Available for new projects • 6.3K+ followers</p>
                <h1 className='font-black text-6xl text-[#14213d]'>Link Building That <span className='text-blue-700 font-serif italic'>Works</span> for Your Business</h1>
                <p className='text-gray-600 w-[60%]'>High Quality Backlinks • Better Rankings • More Traffic & Conversions. Safe & White Hat strategies trusted by 500+ businesses.</p>
                <div className='flex flex-row justify-between items-center gap-6'>
                   
                    < Button Color='#14213d' textColor='#ffffff' text='Get Started!'/>
                    < Button Color='#ffffff' AColor='#14213d' textColor='#14213d' text='View Sites List' icon={<IoIosList />} />
                  
                </div>
                <div className='flex flex-col justify-between items-start'>
                    <p className='gap-1 flex justify-between items-center font-semibold text-xs'><IoIosStar color='#fca311' /> 4.9/5 on Fiverr & Upwork</p>
                    <p className='font-light text-gray-500 text-xs mt-2'>Trusted by founders & SEO agencies worldwide</p>
                </div>

                <div className='flex justify-between gap-6 font-semibold py-3 text-gray-400'>
                    <p className='px-3 py-1.5  border border-gray-300 rounded-full text-xs bg-[#ffffff]'>SEO</p>
                    <p className='px-3 py-1.5  border border-gray-300 rounded-full text-xs bg-[#ffffff]'>Backlinks</p>
                    <p className='px-3 py-1.5  border border-gray-300 rounded-full text-xs bg-[#ffffff]'>Guest Posting</p>
                    <p className='px-3 py-1.5  border border-gray-300 rounded-full text-xs bg-[#ffffff]'>PBN</p>
                    <p className='px-3 py-1.5  border border-gray-300 rounded-full text-xs bg-[#ffffff]'>EDU Links</p>
                </div>
            </div>
            <div className='relative flex flex-col justify-between gap-6 font-semibold py-10 px-30 w-[50%] h-full'>
                <FacebookProfileCard />
            </div>
        </div>
    )
}

export default Hero