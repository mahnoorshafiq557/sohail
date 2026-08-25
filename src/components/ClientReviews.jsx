import {
    LuFacebook,
    LuBadgeCheck,
    LuThumbsUp,
    LuMessageCircle,
    LuStar,
} from "react-icons/lu";

const reviews = [
    {
        name: "Jason R.",
        initial: "J",
        time: "2 days ago",
        role: "SaaS Founder, US",
        rating: "5.0",
        likes: 24,
        comments: 3,
        review:
            "Sohail delivered DA 80+ links within 48h. Content quality was editorial level and links are still live after 8 months. My Ahrefs DR increased by 9 points.",
    },
    {
        name: "Ayesha K.",
        initial: "A",
        time: "1 week ago",
        role: "SEO Agency Owner, UK",
        rating: "5.0",
        likes: 18,
        comments: 3,
        review:
            "My go-to guy for guest posts. White hat, fast communication, and always provides live URL report. We order 20+ links monthly now.",
    },
    {
        name: "Mark T.",
        initial: "M",
        time: "3 days ago",
        role: "Affiliate Marketer",
        rating: "5.0",
        likes: 31,
        comments: 3,
        review:
            "Best outreach expert I've worked with on Fiverr. Got me placement on Outlook India and Deccan Herald at fair price. Rankings jumped for competitive keywords.",
    },
];

const ClientReviews = () => {
    return (
        <section className="w-full bg-[#f7f9fe] px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 py-10 md:py-16">

            <div className="mx-auto w-full max-w-[1200px]">

                {/* HEADER */}
                <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

                    {/* LEFT */}
                    <div>
                        <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[#526581]">
                            Client Reviews
                        </p>

                        <h2 className="max-w-md text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-[#10203e]">
                            Trusted by founders
                            <br />
                            & agencies
                        </h2>

                        {/* Facebook Source */}
                        <div className="mt-4 inline-flex items-center gap-2 rounded-2xl sm:rounded-full border border-blue-200 bg-blue-50 px-3.5 py-2 text-[11px] font-medium text-blue-600 max-w-full">
                            <LuFacebook size={14} className="shrink-0" />
                            <span>Reviews fetched from Facebook - 6.3K Followers Community</span>
                        </div>
                    </div>


                    {/* RIGHT */}
                    <div className="flex flex-wrap items-center gap-3">

                        <div className="flex items-center gap-1.5 text-xs text-[#29415f]">
                            <LuStar
                                size={15}
                                fill="#fbbf24"
                                className="text-[#fbbf24]"
                            />
                            <span className="font-medium">
                                4.9 average
                            </span>
                            <span>
                                • 120+ reviews on Facebook
                            </span>
                        </div>

                        <a
                            href="https://www.facebook.com/muhammad.sohail.71692"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-[#2878ed] px-5 py-2.5 text-[11px] font-semibold text-white transition hover:bg-[#1766d5]"
                        >
                            <LuFacebook size={13} />
                            View Facebook Page
                        </a>

                    </div>

                </div>


                {/* REVIEWS */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="group rounded-2xl border border-[#dce3ed] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >

                            {/* USER */}
                            <div className="flex items-start justify-between">

                                <div className="flex items-center gap-3">

                                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2878ed] text-xs font-semibold text-white">
                                        {review.initial}
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-1">
                                            <h3 className="text-xs font-semibold text-[#10203e]">
                                                {review.name}
                                            </h3>

                                            <LuBadgeCheck
                                                size={13}
                                                className="text-[#2878ed]"
                                            />
                                        </div>

                                        <p className="mt-0.5 text-[10px] text-[#70809a]">
                                            {review.time} •{" "}
                                            <span>◉ Public</span> • {review.role}
                                        </p>
                                    </div>

                                </div>

                                <LuFacebook
                                    size={14}
                                    className="text-blue-300"
                                />

                            </div>


                            {/* STARS */}
                            <div className="mt-4 flex items-center gap-1">

                                <div className="flex gap-0.5">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <LuStar
                                            key={star}
                                            size={13}
                                            fill="#fbbf24"
                                            className="text-[#fbbf24]"
                                        />
                                    ))}
                                </div>

                                <span className="ml-1 text-[10px] text-[#29415f]">
                                    {review.rating} recommendation
                                </span>

                            </div>


                            {/* REVIEW TEXT */}
                            <p className="mt-4 min-h-0 md:min-h-[105px] text-[12px] leading-6 text-[#29415f]">
                                "{review.review}"
                            </p>


                            {/* FOOTER */}
                            <div className="mt-4 flex items-center justify-between border-t border-[#edf1f5] pt-3">

                                <div className="flex items-center gap-3 text-[10px] text-[#70809a]">

                                    <span className="flex items-center gap-1">
                                        <LuThumbsUp
                                            size={12}
                                            className="text-[#2878ed]"
                                            fill="#2878ed"
                                        />
                                        {review.likes}
                                    </span>

                                    <span className="flex items-center gap-1">
                                        <LuMessageCircle size={12} />
                                        {review.comments} comments
                                    </span>

                                </div>

                                <span className="text-[9px] text-[#70809a]">
                                    Facebook • Verified Reviewer
                                </span>

                            </div>

                        </div>
                    ))}

                </div>


                {/* BOTTOM NOTE */}
                <div className="mt-6 flex justify-center">

                    <div className="rounded-2xl sm:rounded-full border border-[#dce3ed] bg-white px-4 sm:px-5 py-2.5 text-center text-[10px] text-[#70809a] max-w-full">
                        Showing Facebook community reviews • Profile photos use
                        Facebook avatars • All images from personal FB profile
                    </div>

                </div>

            </div>

        </section>
    );
};

export default ClientReviews;