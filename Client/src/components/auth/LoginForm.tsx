import { useNavigate } from "react-router-dom";
import Button from "../generals/Button";

interface htmlFormProps {
    setState: () => void;
}

const LoginForm = ({ setState }: htmlFormProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/books");
    };
    return (
        <div className="w-full">
            <form className="max-w-md mx-auto">
                <fieldset className="border border-white p-4 w-full">
                    <legend>Machabooks Login</legend>

                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="email"
                            name="floating_email"
                            id="floating_email"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_email"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Email address
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="password"
                            name="floating_password"
                            id="floating_password"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_password"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Password
                        </label>
                    </div>

                    <div className="flex flex-col gap-3 md:gap-0 justify-between items-center md:flex-row">
                        <p
                            className="ms-2 text-sm font-medium text-blue-500 hover:underline dark:text-blue-400 cursor-pointer"
                            onClick={setState}
                        >
                            You don't have an account?
                        </p>
                        <Button onClick={handleClick} className="px-5 py-2.5 focus:ring-4 focus:outline-none focus:ring-black hover:text-black hover:bg-blue-200 transition-colors duration-300" >
                            <span>Submit</span>
                        </Button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default LoginForm;
