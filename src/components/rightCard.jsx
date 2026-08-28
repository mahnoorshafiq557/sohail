import Stat from './Stat'
import Benefit from './Benefit'
import { CiLocationOn } from "react-icons/ci";
const RightCard = () => {
  return (
    <div className="w-full max-w-[475px] mx-auto">
       <div className="relative w-full rounded-2xl bg-[#14213d] px-4 sm:px-5 pt-6 pb-20 font-sans text-white/90 shadow-xl">
                {/* Profile Header */}
                <div className="flex items-start gap-3">
                    <img
                        src="/sohail.png"
                        alt="M. Sohail"
                        className="h-[55px] w-[55px] shrink-0 rounded-full border-2 border-white/80 object-cover"
                    />

                    <div className="min-w-0 flex-1">
                        {/* Name */}
                        <div className="flex items-center gap-1.5">
                            <h2 className="text-[17px] font-bold">
                                M. Sohail
                            </h2>

                            <span className="flex h-[15px] w-[15px] items-center justify-center rounded-full bg-[#1769e8] text-[9px] font-bold shrink-0">
                                ✓
                            </span>
                        </div>

                        {/* Description */}
                        <p className="mt-1 text-[12px] leading-[17px] text-[#e0e7f2]">
                            Guest Post Specialist | Content Writer | Outreach Expert | Link Building & Off-Page SEO Strategist
                        </p>

                        {/* Location */}
                        <p className="mt-1 flex items-center gap-1.5 text-[10.5px] leading-[15px] text-[#aebbd0]">
                            <span className="text-[14px] shrink-0"><CiLocationOn /></span>
                            Yazman Mandi, Bahawalpur, Punjab, Pakistan
                        </p>
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-6 grid h-auto min-h-[63px] grid-cols-3 items-center rounded-[17px] border border-white/5 bg-[#14213d] py-1">

                    <Stat
                        value="6.3K"
                        label="FOLLOWERS"
                    />

                    <Stat
                        value="523"
                        label="FOLLOWING"
                    />

                    <Stat
                        value="382"
                        label="POSTS"
                        last
                    />

                </div>

                {/* Benefits */}
                <div className="mt-[17px] grid grid-cols-2 gap-1.5 sm:gap-2">

                    <Benefit
                        title="High Quality Backlinks"
                        subtitle="DA 50-91"
                    />

                    <Benefit
                        title="Safe & White Hat"
                        subtitle="100% Manual"
                    />

                    <Benefit
                        title="Better Rankings"
                        subtitle="Proven Results"
                    />

                    <Benefit
                        title="More Traffic"
                        subtitle="Real Sites"
                    />

                </div>

                {/* Facebook Bar */}
                <div className="absolute bottom-5 left-4 right-4 sm:left-5 sm:right-5 flex min-h-[39px] items-center justify-between rounded-full bg-white pl-3.5 pr-2 py-1 text-[11px] text-[#14213d] gap-2 shadow-md">

                    <div className="flex items-center gap-2 min-w-0">
                        <span className="text-[18px] font-bold text-[#1877f2] shrink-0">
                            f
                        </span>

                        <span className="truncate text-[10px] sm:text-[11px]">
                            6.3K Followers • Facebook
                        </span>
                    </div>

                    <div className="rounded-full bg-[#14213d] px-2.5 py-1 text-[9px] font-semibold text-white shrink-0">
                        Top Rated ★
                    </div>
                </div>

            </div>
    </div>
  )
}

export default RightCard
