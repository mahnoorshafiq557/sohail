import { LuLinkedin, LuMapPin } from "react-icons/lu";

const AboutContent = () => {
    return (
        <div>
            <div className="mb-5">
                <span className="inline-flex rounded-full bg-[#14213d] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white">
                    About Me
                </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-2xl font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[58px] font-medium leading-[1.1] tracking-tight text-[#14213d]">
                Professional guest post
                specialist from{" "}
                <span className="text-[#315efb]">
                    Yazman Mandi
                </span>
            </h1>

            {/* Description */}
            <div className="mt-6 max-w-xl space-y-4">

                <p className="text-[14px] leading-6 text-[#29415f] md:text-[15px]">
                    I'm Muhammad Sohail, helping businesses and SEO
                    agencies get high-quality backlinks that actually
                    move rankings. Based in Bahawalpur, Punjab, I focus
                    on real outreach, real sites, and permanent
                    do-follow links.
                </p>

                <p className="text-[14px] leading-6 text-[#29415f] md:text-[15px]">
                    From content writing to off-page strategy, I handle
                    the full cycle — site selection, outreach, content,
                    and live link report. No spam, no PBN footprints,
                    only safe editorial placements.
                </p>

            </div>

            {/* Info Badges */}
            <div className="mt-7 flex flex-wrap gap-2 sm:gap-3">

                {/* Location */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#dce3eb] bg-white px-3.5 py-2 text-xs font-medium text-[#14213d]">
                    <LuMapPin
                        size={14}
                        className="text-[#315efb] shrink-0"
                    />
                    Yazman Mandi, Bahawalpur
                </div>

                {/* LinkedIn */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#dce3eb] bg-white px-3.5 py-2 text-xs font-medium text-[#14213d]">
                    <LuLinkedin
                        size={14}
                        className="text-[#0a66c2] shrink-0"
                    />
                    LinkedIn Active
                </div>
            </div>
        </div>
    )
}

export default AboutContent
