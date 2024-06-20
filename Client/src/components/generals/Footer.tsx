import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
const Footer = () => {
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
        <footer className="flex flex-col md:flex-row justify-evenly gap-2 items-center content-center p-3 border-t border-t-white">
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
    );
};

export default Footer;
