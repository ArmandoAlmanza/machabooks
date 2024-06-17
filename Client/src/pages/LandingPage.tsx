import { Link } from "react-router-dom";
import { FaRightToBracket, FaUser } from "react-icons/fa6";

const Home = () => {
    const links = [
        { path: "/", name: "Home", active: false },
        { path: "/about", name: "About", active: false },
    ];
    return (
        <>
            <header className="flex flex-row justify-evenly items-end px-4 py-8 content-center">
                <h1 className="text-violet-400 text-4xl font-bold cursor-pointer">
                    MachaBooks
                </h1>
                <nav className="flex flex-row gap-4">
                    {links.map((link, i) => (
                        <Link
                            key={i}
                            className="hover:text-violet-400 transition-colors duration-300"
                            to={link.path}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </header>
            <main className="container mx-auto max-w-2xl grid place-items-center my-5">
                <div className="w-full flex gap-4 justify-between items-center">
                    <div className="grid gap-2">
                        <h1 className="text-5xl font-bold">
                            Welcome to{" "}
                            <span className="text-purple-400">MachaBooks</span>{" "}
                        </h1>
                        <p>Come and make reading an habit</p>
                        <Link
                            className="border border-white rounded-[15px] w-fit py-[15px] px-[18px] mx-auto my-3 group/link flex items-center content-center gap-2"
                            to={"/auth"}
                        >
                            <span className="group-hover/link:text-violet-400 transition-colors ease-in-out duration-300 text-xl">
                                Start using{" "}
                            </span>
                            <FaUser className="translate-x-2 group-hover/link:translate-x-2 transition-[opacity, transform] ease-in-out duration-300 text-xl group-hover/link:opacity-0" />
                            <FaRightToBracket className="opacity-0 group-hover/link:-translate-x-5 transition-[opacity, transform] ease-in-out duration-300 text-xl group-hover/link:opacity-100" />
                        </Link>
                    </div>
                    <img
                        className="w-1/2 rounded-tr-3xl rounded-bl-3xl"
                        src="https://th.bing.com/th/id/OIP.xpw9XeB4YEpgD44xgLzkcAHaHa?rs=1&pid=ImgDetMain"
                        alt="logo"
                    />
                </div>
            </main>

            <section className="bg-[#52575D] my-5 p-4 grid place-items-center">
                <h1 className="text-[35px]">Our services</h1>
                <div>
                  <article>
                    
                  </article>
                </div>
            </section>
        </>
    );
};

export default Home;
