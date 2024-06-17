import { Link } from "react-router-dom";
import {
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaRightToBracket,
    FaUser,
} from "react-icons/fa6";

const Home = () => {
    const links = [
        { path: "/", name: "Home", active: false },
        { path: "/about", name: "About", active: false },
    ];
    const titles = ["Find tour books", "Publish your books", "Buy e-books"];
    const socials = [
        {
            url: "https://github.com/ArmandoAlmanza",
            icon: <FaGithub />,
        },
        {
            url: "https://www.linkedin.com/in/armando-almanza/",
            icon: <FaLinkedin />,
        },
        {
            url: "https://www.instagram.com/arandano_triston",
            icon: <FaInstagram />,
        },
    ];
    return (
        <>
            <header className="flex flex-col md:flex-row justify-evenly items-center md:items-end px-4 py-8 content-center">
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
            <main className="p-4 mx-auto max-w-2xl grid place-items-center my-5">
                <div className="w-full flex flex-col md:flex-row gap-4 justify-between items-center">
                    <div className="grid gap-2 place-items-center place-content-center">
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
                        className="md:w-1/2 rounded-tr-3xl rounded-bl-3xl"
                        src="https://th.bing.com/th/id/OIP.xpw9XeB4YEpgD44xgLzkcAHaHa?rs=1&pid=ImgDetMain"
                        alt="logo"
                    />
                </div>
            </main>

            <section className="bg-[#34373b52] my-5 p-4 grid place-items-center gap-4">
                <h1 className="text-[35px]">Our services</h1>
                <div className="flex flex-col md:flex-row justify-evenly gap-4 items-center">
                    {titles.map((card, i) => (
                        <article
                            className="border border-white rounded-xl max-w-sm grid place-content-center"
                            key={i}
                        >
                            <header className="border-b border-b-white p-4">
                                <h2 className="text-2xl">{card}</h2>
                            </header>
                            <main className="p-4">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Veniam labore voluptates
                                    sit maiores, odit corrupti adipisci harum
                                    repellat deserunt deleniti amet illum
                                    expedita iste perspiciatis perferendis
                                    cumque ex vero animi!
                                </p>
                            </main>
                        </article>
                    ))}
                </div>
            </section>
            <footer className="flex flex-col md:flex-row justify-evenly gap-2 items-center content-center p-3">
                <h2>Made by Armando almanza</h2>
                <nav className="flex justify-evenly gap-4 p-4">
                    {socials.map((social, i) => (
                        <Link
                            to={social.url}
                            target="_blank"
                            key={i}
                            className="text-2xl transition-[colors, transform] ease-in-out duration-300 hover:scale-125 hover:text-violet-400"
                        >
                            {social.icon}
                        </Link>
                    ))}
                </nav>
            </footer>
        </>
    );
};

export default Home;
