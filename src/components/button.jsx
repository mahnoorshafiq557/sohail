
const Button = ({ Color, AColor, text, icon, textColor, className = '' }) => {
    return (
        <button
            style={{
                "--color": Color,
                "--active-color": AColor,
                "--text-color": textColor,
            }}
            className={`
                bg-[var(--color)]
                ${AColor ? "active:bg-[var(--active-color)] active:text-white hover:bg-[var(--active-color)] hover:text-white" : ""}
                ${textColor
                    ? "text-[var(--text-color)]"
                    : "text-[#14213d]"
                } px-5 sm:px-6 py-2.5 rounded-full gap-2 flex items-center justify-center font-medium text-sm border border-[#14213d] transition-colors cursor-pointer whitespace-nowrap ${className}
            `}
        >
            {icon}
            {text}
        </button>
    );
};

export default Button