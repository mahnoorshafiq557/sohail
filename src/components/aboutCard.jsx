import { FileText, Link2, PenLine, GraduationCap, Globe2, TrendingUp } from "lucide-react";
import ServiceCard from './ServiceCard';
const AboutCard = () => {
    const services = [
        {
            title: "Guest Posting",
            description:
                "High DA editorial placements on real blogs, news & niche sites. With content included.",
            icon: <FileText/>,
        },
        {
            title: "Link Insertion / Niche Edits",
            description:
                "Contextual links inserted into existing indexed articles for fast ranking boost.",
            icon: <Link2/>,
        },
        {
            title: "Content Writing",
            description:
                "SEO-optimized, human-written articles that pass editorial guidelines.",
            icon: <PenLine/>,
        },
        {
            title: "EDU Links",
            description:
                "Powerful .edu backlinks from university blogs, resources and scholarships.",
            icon: <GraduationCap/>,
        },
        {
            title: "PBN Links",
            description:
                "Clean, safe PBN network with unique content and no footprints.",
            icon: <Globe2/>,
        },
        {
            title: "Off-Page SEO",
            description:
                "Complete link strategy, anchor diversification & toxic link audit.",
            icon: <TrendingUp/>,
        },
    ];
    return (
        <section className="w-full px-4 py-8 md:px-8">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2">
                {services.map((service) => (
               
                    <ServiceCard
                        key={service.title}
                        title={service.title}
                        description={service.description}
                        icon={service.icon}
                    />
                ))}
            </div>
        </section>
    )
}

export default AboutCard

