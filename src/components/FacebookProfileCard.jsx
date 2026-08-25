import RightCard from "./rightCard";
import LabelCard from "./labelCard";

const FacebookProfileCard = () => {
    return (
        <div className="relative w-full max-w-[475px] mx-auto">
            <RightCard />

            <div className="absolute -bottom-3 left-2 sm:-left-6 hidden min-[400px]:flex h-[55px] w-[145px] sm:w-[152px] items-center gap-2 rounded-xl bg-white shadow-xl px-3 text-[#10203b] z-10 border border-gray-100">
                <LabelCard title={'100% White Hat'} subtitle={'Google-safe links only'} />
            </div>

            <div className="absolute bottom-20 -right-2 sm:-right-6 hidden min-[400px]:flex h-[55px] w-[145px] sm:w-[152px] items-center gap-2 rounded-xl bg-white shadow-xl px-3 text-[#10203b] z-10 border border-gray-100">
                <LabelCard title={'Real Websites'} subtitle={'High-quality sites only'} />
            </div>

            <div className="absolute top-12 -right-2 sm:-right-6 hidden min-[400px]:flex h-[55px] w-[145px] sm:w-[152px] items-center gap-2 rounded-xl bg-white shadow-xl px-3 text-[#10203b] z-10 border border-gray-100">
                <LabelCard title={'Fast Delivery'} subtitle={' Posts published on time'} />
            </div>
        </div>
    );
};


export default FacebookProfileCard;