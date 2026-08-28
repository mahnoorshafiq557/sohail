import {
    LuFacebook,
    LuLinkedin,
    LuMapPin,
    LuMessageCircle,
    LuPhone,
} from "react-icons/lu";

const ContactCard = () => {
    return (
        <section className="w-full bg-[#f8f9fb] px-6 py-16 md:px-12 lg:px-16 xl:px-20">

            <div className="mx-auto grid w-full max-w-[1450px] grid-cols-1 overflow-hidden rounded-[28px] bg-[#10203e] lg:grid-cols-[1.15fr_0.85fr]">

                {/* LEFT CONTENT */}
                <div className="flex flex-col justify-center p-8 md:p-12 lg:p-10 xl:p-12">

                    {/* Label */}
                    <div className="mb-5">
                        <span className="inline-flex rounded-full bg-[#253653] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                            Get In Touch
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="max-w-xl text-4xl font-bold leading-[1.05] text-white md:text-5xl">
                        Let's build{" "}
                        <span className="font-serif font-normal italic text-[#7d9cff]">
                            powerful
                            <br />
                            backlinks
                        </span>{" "}
                        for you
                    </h2>

                    {/* Description */}
                    <p className="mt-6 max-w-lg text-sm leading-6 text-[#b7c3d8]">
                        Quick response on Facebook Messenger. Share your
                        niche, budget and target keywords — I'll send best
                        sites list in minutes.
                    </p>

                    {/* Buttons */}
                    <div className="mt-7 flex flex-wrap gap-2">

                        <a
                            href="tel:+923441744517"
                            className="inline-flex items-center gap-2 rounded-full bg-[#287cf5] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#176be0]">
                            <LuPhone size={15} />
                            +92 344 1744517
                        </a>

                        <a
                            href="https://www.facebook.com/muhammad.sohail.71692"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-[#263753] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#314361]">
                            <LuFacebook size={15} />
                            Facebook Profile
                        </a>

                        {/* TODO: replace with the real LinkedIn profile URL */}
                        <a href="https://www.linkedin.com/in/muhammad-sohail-385196251/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-[#263753] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#314361]">
                            <LuLinkedin size={15} />

                            LinkedIn
                        </a>

                    </div>

                    {/* Location */}
                    <div className="mt-8 flex items-start gap-2 text-[11px] leading-5 text-[#aebbd0]">
                        <LuMapPin
                            size={14}
                            className="mt-0.5 shrink-0"
                        />

                        <span>
                            Yazman Mandi, Bahawalpur, Punjab, Pakistan •
                            Available 9AM - 11PM PKT • Same contact for
                            WhatsApp & Facebook
                        </span>
                    </div>

                </div>


                {/* RIGHT QUICK CONTACT */}
                <div className="flex items-center p-6 md:p-8 lg:p-10">

                    <div className="w-full rounded-[20px] bg-white p-5 md:p-6">

                        <h3 className="mb-4 text-xs font-medium uppercase tracking-wide text-[#14213d]">
                            Quick Contact
                        </h3>


                        {/* FACEBOOK CONTACT */}
                        <div className="rounded-xl border border-[#cfe0ff] bg-[#f5f9ff] p-4">

                            <div className="flex items-start justify-between">

                                <div>
                                    <p className="text-[10px] font-medium uppercase tracking-wide text-[#526581]">
                                        Facebook / Messenger
                                    </p>

                                    <h4 className="mt-1 text-sm font-bold text-[#14213d]">
                                        M. Sohail • 6.3K Followers
                                    </h4>

                                    <p className="mt-1 text-[10px] text-[#526581]">
                                        Primary contact • Click to chat •
                                        WhatsApp same as FB
                                    </p>
                                </div>

                                <LuFacebook
                                    size={15}
                                    className="text-[#287cf5]"
                                />

                            </div>

                        </div>


                        {/* STATS */}
                        <div className="mt-3 grid grid-cols-2 gap-3">

                            <div className="rounded-xl border border-[#dce3eb] p-4">
                                <p className="text-[10px] uppercase tracking-wide text-[#70809a]">
                                    Niches
                                </p>

                                <p className="mt-2 text-xs font-semibold text-[#14213d]">
                                    50+ niches
                                </p>
                            </div>

                            <div className="rounded-xl border border-[#dce3eb] p-4">
                                <p className="text-[10px] uppercase tracking-wide text-[#70809a]">
                                    TAT
                                </p>

                                <p className="mt-2 text-xs font-semibold text-[#14213d]">
                                    24-72 Hours
                                </p>
                            </div>

                        </div>


                        {/* NOTE */}
                        <div className="mt-3 rounded-xl border border-dashed border-[#cbd5e1] p-4">

                            <p className="text-[10px] leading-5 text-[#526581]">
                                <span className="font-semibold text-[#14213d]">
                                    Note:
                                </span>{" "}
                                All links are permanent do-follow, Google
                                indexed, with full report (Live URL +
                                Screenshot). Replacement guaranteed if
                                removed. Price editable via Admin / Google
                                Sheet.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default ContactCard;