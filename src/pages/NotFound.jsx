import { Link } from "react-router-dom";
import { LuArrowLeft, LuHouse } from "react-icons/lu";

const NotFound = () => {
    return (
        <section className="flex min-h-screen w-full items-center justify-center bg-[#f8f9fb] px-6 py-16">

            <div className="mx-auto w-full max-w-2xl text-center">

                {/* 404 */}
                <div className="mb-6">
                    <h1 className="font-serif text-[120px] font-bold leading-none tracking-tight text-[#14213d] md:text-[160px]">
                        404
                    </h1>
                </div>

                {/* Label */}
                <span className="inline-flex rounded-full bg-[#14213d] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white">
                    Page Not Found
                </span>

                {/* Heading */}
                <h2 className="mt-5 text-3xl font-bold text-[#14213d] md:text-4xl">
                    Oops! This page doesn't exist.
                </h2>

                {/* Description */}
                <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#526581]">
                    The page you're looking for may have been moved, deleted,
                    or the URL might be incorrect.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-wrap justify-center gap-3">

                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 rounded-full bg-[#14213d] px-6 py-3 text-xs font-semibold text-white transition hover:bg-[#253653]"
                    >
                        <LuHouse size={15} />
                        Back to Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center gap-2 rounded-full border border-[#dce3eb] bg-white px-6 py-3 text-xs font-semibold text-[#14213d] transition hover:border-[#14213d]"
                    >
                        <LuArrowLeft size={15} />
                        Go Back
                    </button>

                </div>

            </div>

        </section>
    );
};

export default NotFound;
