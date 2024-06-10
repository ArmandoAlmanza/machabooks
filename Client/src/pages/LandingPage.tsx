import { Link } from "react-router-dom";

const Home = () => {
  const links = [{path: "/", name: "Home", active: false}, {path: "/about", name: "About", active: false}];
  return (
    <>
      <header className="flex flex-row justify-evenly items-end px-4 py-8 content-center">
        <h1 className="text-violet-400 text-4xl font-bold cursor-pointer">MachaBooks</h1>
        <nav className="flex flex-row gap-4">
          {links.map((link, i) => (
            <Link key={i} className="hover:text-violet-400 transition-colors duration-300" to={link.path}>
              {link.name}
            </Link>
          ))}
        </nav>
      </header>
      <main>
        <p>This is the main content</p>
        <p>Well this is my first poage... what know?</p>
      </main>
    </>
  );
};

export default Home;
