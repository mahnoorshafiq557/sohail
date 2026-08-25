import { ArrowUpRight } from "lucide-react";
const ServiceCard = (prop) => {

    return (
        <div className="group min-h-[188px] rounded-2xl border border-[#dce3ec] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#14213d] hover:shadow-lg">

            {/* Icon */}
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#14213d] text-white">
                {prop.icon}
            </div>

            {/* Title */}
            <h3 className="mb-2 text-[15px] font-semibold text-[#14213d]">
                {prop.title}
            </h3>

            {/* Description */}
            <p className="mb-4 max-w-[320px] text-[13px] leading-5 text-[#29415f]">
                {prop.description}
            </p>

            {/* Link */}
            <a
                href="#"
                className="inline-flex items-center gap-2 text-[12px] font-medium text-[#14213d] transition-all hover:gap-3"
            >
                Learn more
                <ArrowUpRight size={14} />
            </a>
        </div>
    );
};

export default ServiceCard
