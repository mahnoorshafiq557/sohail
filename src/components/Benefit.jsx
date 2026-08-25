
const Benefit = ({ title, subtitle }) => {
    return (
        <div className="h-[57px] rounded-[13px] border border-white/5 bg-[#182a4a] px-3 py-2.5">
            <h4 className="text-[11px] font-medium text-[#f4f7fb]">
                {title}
            </h4>

            <p className="mt-1 text-[9px] text-[#aab8cc]">
                {subtitle}
            </p>
        </div>
    )
}

export default Benefit