import {
    LuShieldCheck,
    LuBadgeCheck,
    LuZap,
    LuInfinity,
} from "react-icons/lu";

const WhyChooseMe = () => {
    const features = [
        {
            icon: LuShieldCheck,
            title: "Safe & White Hat",
            description: "100% manual outreach, no spam.",
        },
        {
            icon: LuBadgeCheck,
            title: "High DA Sites",
            description: "DA 50-91, real traffic.",
        },
        {
            icon: LuZap,
            title: "Fast TAT",
            description: "24-72 hours average.",
        },
        {
            icon: LuInfinity,
            title: "Permanent Do-Follow",
            description: "Links stay live, reports included.",
        },
    ];

    return (
        <section className="w-full bg-[#f8f9fb] px-6 py-10 md:px-12 lg:px-16 xl:px-20">
            <div className="mx-auto flex w-full max-w-[1450px] flex-col gap-8 rounded-[24px] bg-[#10203e] p-6 md:p-8 lg:flex-row lg:items-center lg:gap-10 lg:px-8 lg:py-8">

                {/* LEFT CONTENT */}
                <div className="shrink-0 lg:w-[32%]">
                    <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9eacc4]">
                        Why Choose Me
                    </p>

                    <h2 className="max-w-md text-3xl font-bold leading-[1.05] text-white md:text-4xl">
                        Agency quality,
                        <br />
                        freelancer pricing
                    </h2>
                </div>

                {/* RIGHT CARDS */}
                <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={index}
                                className="min-h-[115px] rounded-2xl border border-white/5 bg-[#1d2e4d] p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-[#243756]"
                            >
                                <div className="mb-3">
                                    <Icon
                                        size={18}
                                        strokeWidth={1.8}
                                        className="text-white"
                                    />
                                </div>

                                <h3 className="mb-1 text-[13px] font-semibold text-white">
                                    {feature.title}
                                </h3>

                                <p className="text-[11px] leading-5 text-[#aebbd0]">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default WhyChooseMe;