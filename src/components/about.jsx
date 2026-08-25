import AboutCard from "./aboutCard";
import AboutContent from "./aboutContent";


const About = () => {
    return (
        <section className="w-full bg-[#f8f9fb] px-6 py-10 md:px-12 lg:px-16 xl:px-20">

            <div className="mx-auto grid w-full max-w-[1450px] grid-cols-1 items-center gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">

                {/* ABOUT */}
                <div className="flex flex-col justify-between">

                    {/* Label */}

                    <AboutContent />
                </div>


                {/* SERVICES */}
                <div className="flex flex-col justify-center">
                    <h2 className="mb-6 text-3xl font-bold text-[#14213d] md:text-4xl">
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