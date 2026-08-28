import RightCard from "./rightCard";
import LabelCard from "./labelCard";

const FacebookProfileCard = () => {
    return (
        <div className="relative w-full max-w-[475px] mx-auto">

            <RightCard />

            {/* Left Bottom Label */}
            <div
                className=" absolute -bottom-3 -left-[155px] hidden min-[400px]:flex h-[55px] w-[145px] sm:w-[152px] items-center rounded-xl bg-white shadow-xl/20 px-3 text-[#10203b] z-20 border border-gray-100 ">
                <LabelCard
                    title="100% White Hat"
                    subtitle="Google-safe links only"
                />
            </div>

            {/* Right Middle Label */}
            <div
                className="absolute bottom-20 -right-[155px] hidden min-[400px]:flex h-[55px] w-[145px] sm:w-[152px] items-center rounded-xl bg-white shadow-xl/20 px-3 text-[#10203b] z-20 border border-gray-100 " >
                <LabelCard
                    title="Real Websites"
                    subtitle="High-quality sites only"
                />
            </div>

            {/* Right Top Label */}
            <div
                className=" absolute top-12 -right-[155px] hidden min-[400px]:flex h-[55px] w-[145px] sm:w-[152px] items-center rounded-xl bg-white shadow-xl/20 px-3 text-[#10203b] z-20 border border-gray-100 " >
                <LabelCard
                    title="Fast Delivery"
                    subtitle="Posts published on time"
                />
            </div>

        </div>
    );
};

export default FacebookProfileCard;