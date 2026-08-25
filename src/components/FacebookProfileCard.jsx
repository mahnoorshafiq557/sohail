import RightCard from "./rightCard";
import LabelCard from "./labelCard";

const FacebookProfileCard = () => {
    return (
        <div >
            <RightCard />

            <div className="absolute bottom-6 left-4 flex h-[55px] w-[152px] items-center gap-2 rounded-xl bg-white drop-shadow-xl px-3 text-[#10203b]">
                <LabelCard title={'100% White Hat'} subtitle={'Google-safe links only'} />
            </div>

            <div className="absolute bottom-20 left-145 flex h-[55px] w-[152px] items-center gap-2 rounded-xl bg-white drop-shadow-xl px-3 text-[#10203b]">
                <LabelCard title={'Real Websites'} subtitle={'High-quality sites only'} />
            </div>

            <div className="absolute bottom-60 left-130 flex h-[55px] w-[152px] items-center gap-2 rounded-xl bg-white drop-shadow-xl px-3 text-[#10203b]">
                <LabelCard title={'Fast Delivery'} subtitle={' Posts published on time'} />
            </div>
        </div>
    );
};


export default FacebookProfileCard;