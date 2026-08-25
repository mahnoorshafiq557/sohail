
const LabelCard = ({ title, subtitle }) => {
    return (
        <div className="flex gap-2 items-center">
            <div className="flex h-[25px] w-[25px] items-center justify-center rounded-lg border-2 border-[#08a86b] text-sm font-bold text-[#08a86b]">
                ✓
            </div>

            <div>
                <strong className="block text-[11px]">
                    {title}
                </strong>

                <p className="mt-0.5 text-[8px] text-[#8b98aa]">
                    {subtitle}
                </p>
            </div>

        </div>
    )
}

export default LabelCard
