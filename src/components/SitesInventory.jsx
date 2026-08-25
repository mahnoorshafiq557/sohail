import { useMemo, useState } from "react";
import {
    LuSearch,
    LuLockKeyhole,
    LuList,
    LuCheck,
} from "react-icons/lu";

const sites = [
    {
        website: "outlookindia.com",
        niche: "News / General",
        da: 91,
        dr: 88,
        traffic: "5.2M",
    },
    {
        website: "deccanherald.com",
        niche: "News",
        da: 88,
        dr: 84,
        traffic: "3.8M",
    },
    {
        website: "khaleejtimes.com",
        niche: "News / Finance",
        da: 86,
        dr: 83,
        traffic: "4.5M",
    },
    {
        website: "usatimes.co",
        niche: "Business",
        da: 78,
        dr: 72,
        traffic: "450K",
    },
    {
        website: "techbullion.com",
        niche: "Tech",
        da: 76,
        dr: 71,
        traffic: "890K",
    },
    {
        website: "ibtimes.sg",
        niche: "Finance",
        da: 79,
        dr: 76,
        traffic: "1.2M",
    },
    {
        website: "startup.info",
        niche: "Business / Startup",
        da: 68,
        dr: 65,
        traffic: "210K",
    },
];

const SiteInventory = () => {
    const [search, setSearch] = useState("");
    const [selectedNiche, setSelectedNiche] = useState("All Niches");

    const niches = [
        "All Niches",
        ...new Set(sites.map((site) => site.niche)),
    ];

    const filteredSites = useMemo(() => {
        return sites.filter((site) => {
            const matchesSearch =
                site.website.toLowerCase().includes(search.toLowerCase()) ||
                site.niche.toLowerCase().includes(search.toLowerCase());

            const matchesNiche =
                selectedNiche === "All Niches" ||
                site.niche === selectedNiche;

            return matchesSearch && matchesNiche;
        });
    }, [search, selectedNiche]);

    return (
        <section className="w-full bg-[#f8f9fb] px-6 py-16 md:px-12 lg:px-16 xl:px-20">

            <div className="mx-auto w-full max-w-[1450px]">

                {/* HEADER */}
                <div className="mb-6">

                    <span className="inline-flex rounded-full border border-[#dce3eb] bg-white px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-[#14213d]">
                        Sites Inventory
                    </span>

                    <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#14213d] md:text-4xl lg:text-5xl">
                        1000+ Verified Guest Post Sites
                    </h2>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-[#526581]">
                        Filter by niche or search domain. Contact on Facebook
                        Messenger for full list with 1000+ sites.
                    </p>

                </div>


                {/* FILTER ROW */}
                <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                    {/* Notice */}
                    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#f5c75d] bg-[#fffaf0] px-3 py-2 text-[11px] text-[#8a5a00]">
                        <LuLockKeyhole size={13} />

                        <span>
                            Client can add prices from admin panel / Google
                            Sheet — Currently showing "Contact for Price"
                        </span>
                    </div>


                    {/* Search + Filter */}
                    <div className="flex flex-col gap-2 sm:flex-row">

                        {/* Search */}
                        <div className="relative">
                            <LuSearch
                                size={16}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8b9ab0]"
                            />

                            <input
                                type="text"
                                placeholder="Search website, niche..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="h-10 w-full rounded-full border border-[#dce3eb] bg-white pl-9 pr-4 text-xs text-[#14213d] outline-none transition focus:border-[#315efb] sm:w-[260px]"
                            />
                        </div>


                        {/* Niche */}
                        <select
                            value={selectedNiche}
                            onChange={(e) => setSelectedNiche(e.target.value)}
                            className="h-10 rounded-full border border-[#dce3eb] bg-white px-4 text-xs text-[#14213d] outline-none focus:border-[#315efb]"
                        >
                            {niches.map((niche) => (
                                <option key={niche} value={niche}>
                                    {niche}
                                </option>
                            ))}
                        </select>

                    </div>

                </div>


                {/* TABLE */}
                <div className="overflow-hidden rounded-2xl border border-[#dce3eb] bg-white">

                    <div className="overflow-x-auto">

                        <table className="w-full min-w-[850px] border-collapse">

                            {/* TABLE HEADER */}
                            <caption className="sr-only">Guest post site inventory with domain authority, domain rating, and traffic</caption>
                            <thead>
                                <tr className="bg-[#f5f8fc] text-left">

                                    <th className="px-5 py-4 text-[10px] font-semibold uppercase tracking-wider text-[#526581]">
                                        Website
                                    </th>

                                    <th className="px-5 py-4 text-[10px] font-semibold uppercase tracking-wider text-[#526581]">
                                        Niche
                                    </th>

                                    <th className="px-5 py-4 text-[10px] font-semibold uppercase tracking-wider text-[#526581]">
                                        DA
                                    </th>

                                    <th className="px-5 py-4 text-[10px] font-semibold uppercase tracking-wider text-[#526581]">
                                        DR
                                    </th>

                                    <th className="px-5 py-4 text-[10px] font-semibold uppercase tracking-wider text-[#526581]">
                                        Traffic
                                    </th>

                                    <th className="px-5 py-4 text-[10px] font-semibold uppercase tracking-wider text-[#526581]">
                                        Price
                                    </th>

                                    <th className="px-5 py-4 text-[10px] font-semibold uppercase tracking-wider text-[#526581]">
                                        Action
                                    </th>

                                </tr>
                            </thead>


                            {/* TABLE BODY */}
                            <tbody>

                                {filteredSites.length === 0 && (
                                    <tr>
                                        <td colSpan={7} className="px-5 py-10 text-center text-sm text-[#526581]">
                                            No websites found matching your search.
                                        </td>
                                    </tr>
                                )}

                                {filteredSites.map((site) => (
                                    <tr
                                        key={site.website}
                                        className="border-t border-[#edf1f5] transition hover:bg-[#fafcff]"
                                    >

                                        {/* WEBSITE */}
                                        <td className="px-5 py-4">

                                            <div className="flex items-center gap-3">

                                                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#101c35] text-[10px] font-semibold uppercase text-white">
                                                    {site.website.charAt(0)}
                                                </div>

                                                <span className="text-sm font-medium text-[#14213d]">
                                                    {site.website}
                                                </span>

                                            </div>

                                        </td>


                                        {/* NICHE */}
                                        <td className="px-5 py-4">

                                            <span className="inline-flex rounded-full bg-[#f0f4f9] px-3 py-1 text-[10px] font-medium text-[#29415f]">
                                                {site.niche}
                                            </span>

                                        </td>


                                        {/* DA */}
                                        <td className="px-5 py-4 text-sm font-medium text-[#14213d]">
                                            {site.da}
                                        </td>


                                        {/* DR */}
                                        <td className="px-5 py-4 text-sm font-medium text-[#14213d]">
                                            {site.dr}
                                        </td>


                                        {/* TRAFFIC */}
                                        <td className="px-5 py-4 text-sm text-[#526581]">
                                            {site.traffic}
                                        </td>


                                        {/* PRICE */}
                                        <td className="px-5 py-4 text-sm text-[#526581]">
                                            —
                                        </td>


                                        {/* ACTION */}
                                        <td className="px-5 py-4">

                                            <a
                                                href="https://www.facebook.com/muhammad.sohail.71692"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-[#dce3eb] bg-white px-3 py-2 text-[11px] font-medium text-[#14213d] shadow-sm transition hover:border-[#14213d] hover:bg-[#14213d] hover:text-white"
                                            >
                                                <LuLockKeyhole size={13} />
                                                Contact for Price
                                            </a>

                                        </td>

                                    </tr>
                                ))}

                            </tbody>

                        </table>

                    </div>


                    {/* TABLE FOOTER */}
                    <div className="flex flex-col gap-3 border-t border-[#edf1f5] bg-[#f5f8fc] px-5 py-3 text-[11px] text-[#526581] sm:flex-row sm:items-center sm:justify-between">

                        <span>
                            Showing {filteredSites.length} of {sites.length} sample sites • Full list 1000+ on Facebook Messenger
                        </span>

                        <span className="flex items-center gap-1 text-[#176b58]">
                            <LuCheck size={13} />
                            Permanent Do-Follow • Indexed
                        </span>

                    </div>

                </div>


                {/* CTA */}
                <div className="mt-4 flex justify-center">

                    <button className="items-center gap-2 rounded-full border border-[#14213d] bg-white px-6 py-3 text-xs font-medium text-[#14213d] transition hover:bg-[#14213d] hover:text-white">
                        <a href="https://www.facebook.com/muhammad.sohail.71692">
                            <LuList size={15} />
                            Get Full 1000+ Sites List on Facebook
                        </a>
                    </button>

                </div>

            </div>

        </section>
    );
};

export default SiteInventory;
