import { Link } from "react-router-dom";
import {
    FaBook,
    FaBookOpenReader,
    FaRightToBracket,
    FaUser,
} from "react-icons/fa6";
import racoon from "../assets/logo.png";
import avatar from "../assets/avatar.png";
import machape from "../assets/machawhite.png";
import Footer from "../components/generals/Footer";

const Home = () => {
    const links = [
        { path: "/", name: "Home", active: false },
        { path: "/about", name: "About", active: false },
    ];
    const titles = ["Find tour books", "Publish your books", "Buy e-books"];

    const testimonials = [
        {
            name: "Marlen Ambros",
            body: "Machabooks is a pretty awesome app. I recommend this to anyone who loves to read",
        },
        {
            name: "Armando Almanza",
            body: "Machabooks is a pretty awesome app. I recommend this to anyone who loves to read",
        },
        {
            name: "Sergio Cholula",
            body: "Machabooks is a pretty awesome app. I recommend this to anyone who loves to read",
        },
        {
            name: "Ivan Espiritu",
            body: "Machabooks is a pretty awesome app. I recommend this to anyone who loves to read",
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
                        src={machape}
                        alt="logo"
                    />
                </div>
            </main>

            <section className="bg-[#34373b52] my-5 p-4 grid place-items-center gap-4">
                <h1 className="text-[35px]">Our services</h1>
                <div className="flex flex-col md:flex-row justify-evenly gap-4 items-center">
                    {titles.map((card, i) => (
                        <article
                            className="border border-white rounded-xl max-w-[300px] grid place-content-center"
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

            <section className="p-4 mx-auto max-w-2xl grid place-items-center my-5">
                <h1 className="text-[35px]">Are you a writter?</h1>
                <div className="w-full flex flex-col md:flex-row gap-4 justify-between items-center">
                    <img
                        src={racoon}
                        alt="mapcha leyendo"
                        className="md:w-1/2 rounded-tr-3xl rounded-bl-3xl"
                    />
                    <div className="grid gap-3 place-items-center place-content-center">
                        <h2 className="text-[30px] font-bold">
                            You can publish Your books here!
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Harum, architecto quibusdam aspernatur itaque
                            temporibus esse accusantium numquam impedit
                            corrupti, molestiae facere voluptatibus facilis
                            maiores cum mollitia pariatur veniam quaerat
                            nostrum.
                        </p>
                        <Link
                            className="border border-white rounded-[15px] w-fit py-[15px] px-[18px] my-3 group/link flex items-center content-center gap-2"
                            to={"/auth"}
                        >
                            <span className="group-hover/link:text-violet-400 transition-colors ease-in-out duration-300 text-xl">
                                Start Publishing{" "}
                            </span>
                            <FaBook className="translate-x-2 group-hover/link:translate-x-2 transition-[opacity, transform] ease-in-out duration-300 text-xl group-hover/link:opacity-0" />
                            <FaBookOpenReader className="opacity-0 group-hover/link:-translate-x-5 transition-[opacity, transform] ease-in-out duration-300 text-xl group-hover/link:opacity-100" />
                        </Link>
                    </div>
                </div>
            </section>
            <section className="p-4 mx-auto max-w-2xl md:max-w-max grid place-items-center my-5 overflow-x-scroll md:overflow-clip">
                <h1 className=" text-[35px]">User review</h1>
                <div className="flex justify-evenly gap-4 md:grid md:grid-cols-2">
                    {testimonials.map((opinion, i) => (
                        <article
                            className="flex gap-2 p-2 items-center border border-white rounded-xl"
                            key={i}
                        >
                            <img
                                className="max-w-[70px] rounded-full border border-orange-400"
                                src={avatar}
                                alt="testimonial photo"
                            />
                            <div className="grid gap-2">
                                <h2 className="text-xl font-bold">
                                    {opinion.name}
                                </h2>
                                <p>{opinion.body}</p>
                                <span className="text-center">⭐⭐⭐⭐⭐</span>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Home;
