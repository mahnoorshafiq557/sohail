
const Stat = ({ value, label, last }) => {
    return (
        <div
            className={`
        flex h-[38px] flex-col justify-center pl-3
        ${!last ? "border-r border-white/10" : ""}
      `}
        >
            <strong className="text-[17px] leading-5">
                {value}
            </strong>

            <span className="mt-0.5 text-[8px] tracking-[1px] text-[#b9c5d8]">
                {label}
            </span>
        </div>
    )
}

export default Stat
