import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, className, ...props }: Props) => {
    return (
        <button
            className={twMerge(
                clsx(
                    "border border-white rounded-[15px] w-fit py-[15px] px-[18px] my-3 flex items-center content-center gap-2",
                    className
                )
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
