
const Button = ({ Color, AColor, text, icon, textColor }) => {
    return (
        <button
            style={{
                "--color": Color,
                "--active-color": AColor,
                "--text-color": textColor,
            }}
            className={`
                bg-[var(--color)]
                ${AColor ? "active:bg-[var(--active-color)] active:text-white" : ""}
                ${textColor
                    ? "text-[var(--text-color)]"
                    : "text-[#14213d]"
                } px-6 py-2.5 rounded-full gap-1 flex items-center border border-[#14213d]
            `}
        >
            {icon}
            {text}
        </button>
    );
};

export default Button