import AboutCard from "./aboutCard";
import AboutContent from "./aboutContent";


const About = () => {
    return (
        <section className="w-full bg-[#f8f9fb] px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 py-10 md:py-16">

            <div className="mx-auto grid w-full max-w-[1450px] grid-cols-1 items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 xl:gap-20">

                {/* ABOUT */}
                <div className="flex flex-col justify-between">
                    <AboutContent />
                </div>


                {/* SERVICES */}
                <div className="flex flex-col justify-center">
                    <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl font-bold text-[#14213d]">
                        What I Do
                    </h2>

                    <div className="mb-6 h-1 w-14 rounded-full bg-[#14213d]" />

                    <AboutCard />

                </div>

            </div>
        
        </section>
    );
};

export default About;