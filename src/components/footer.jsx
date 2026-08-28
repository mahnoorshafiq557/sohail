import { Link } from "react-router-dom";
import {
    LuFacebook,
    LuLinkedin,
    LuMail,
    LuMapPin,
    LuArrowUpRight,
    LuPhone,
} from "react-icons/lu";

const Footer = () => {
    return (
        <footer className="w-full bg-[#10203e] text-white">

            <div className="mx-auto w-full max-w-[1450px] px-6 py-14 md:px-12 lg:px-16 xl:px-20">

                {/* TOP FOOTER */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

                    {/* BRAND */}
                    <div>
                        <Link
                            to="/"
                            className="text-2xl font-bold tracking-tight"
                        >
                            Muhammad<span className="text-[#7d9cff]">.</span>
                        </Link>

                        <p className="mt-4 max-w-sm text-sm leading-6 text-[#aebbd0]">
                            Professional guest post specialist helping
                            businesses and SEO agencies build high-quality
                            backlinks through real outreach and editorial
                            placements.
                        </p>

                        {/* SOCIALS */}
                        <div className="mt-6 flex gap-2">

                            <a
                                href="https://www.facebook.com/muhammad.sohail.71692"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#213352] text-[#c4d0e2] transition hover:bg-[#287cf5] hover:text-white"
                                aria-label="Facebook"
                            >
                                <LuFacebook size={16} />
                            </a>

                            {/* TODO: replace with the real LinkedIn profile URL */}
                            <a
                                href="https://www.linkedin.com/in/muhammad-sohail-385196251/"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#213352] text-[#c4d0e2] transition hover:bg-[#287cf5] hover:text-white"
                                aria-label="LinkedIn"
                            >
                                <LuLinkedin size={16} />
                            </a>

                            <a
                                href="mailto:sohail.guestpostofficial@gmail.com"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#213352] text-[#c4d0e2] transition hover:bg-[#287cf5] hover:text-white"
                                aria-label="Email"
                            >
                                <LuMail size={16} />
                            </a>

                        </div>
                    </div>


                    {/* QUICK LINKS */}
                    <div>
                        <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-white">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-sm text-[#aebbd0]">

                            <li>
                                <Link
                                    to="/"
                                    className="transition hover:text-white"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/about"
                                    className="transition hover:text-white"
                                >
                                    About Me
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/sitelist"
                                    className="transition hover:text-white"
                                >
                                    Sites Inventory
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/contact"
                                    className="transition hover:text-white"
                                >
                                    Contact
                                </Link>
                            </li>

                        </ul>
                    </div>


                    {/* SERVICES */}
                    <div>
                        <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-white">
                            Services
                        </h3>

                        <ul className="space-y-3 text-sm text-[#aebbd0]">

                            <li>Guest Posting</li>
                            <li>Link Insertion</li>
                            <li>Content Writing</li>
                            <li>EDU Links</li>
                            <li>Off-Page SEO</li>

                        </ul>
                    </div>


                    {/* CONTACT */}
                    <div>
                        <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-white">
                            Get In Touch
                        </h3>

                        <div className="space-y-4">

                            <div className="flex items-start gap-3">
                                <LuMapPin
                                    size={17}
                                    className="mt-0.5 shrink-0 text-[#7d9cff]"
                                />

                                <p className="text-sm leading-5 text-[#aebbd0]">
                                    Yazman Mandi,
                                    <br />
                                    Bahawalpur, Punjab, Pakistan
                                </p>
                            </div>

                            <a
                                href="tel:+923441744517"
                                className="flex items-center gap-3 text-sm text-[#aebbd0] transition hover:text-white"
                            >
                                <LuPhone size={17} className="text-[#7d9cff]" />
                                +92 344 1744517
                            </a>

                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 rounded-full bg-[#287cf5] px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-[#176be0]"
                            >
                                Let's Work Together
                                <LuArrowUpRight size={14} />
                            </Link>

                        </div>
                    </div>

                </div>


                {/* DIVIDER */}
                <div className="my-10 h-px bg-white/10" />


                {/* BOTTOM */}
                <div className="flex flex-col gap-3 text-xs text-[#8190a8] md:flex-row md:items-center md:justify-between">

                    <p>
                        © {new Date().getFullYear()} Muhammad Sohail. All
                        rights reserved.
                    </p>

                    <div className="flex gap-5">
                        <a
                            href="#"
                            className="transition hover:text-white"
                        >
                            Privacy Policy
                        </a>

                        <a
                            href="#"
                            className="transition hover:text-white"
                        >
                            Terms & Conditions
                        </a>
                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;