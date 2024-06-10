import { Link } from "react-router-dom";

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
      <main className="container mx-auto max-w-2xl grid place-items-center">
        <div className="w-full flex gap-4 justify-between items-center">
          <div className="grid gap-2">
            <h1 className="text-5xl font-bold">
              Welcome to <span className="text-purple-400">MachaBooks</span>{" "}
            </h1>
            <p>Well this is my first poage... what know?</p>
          </div>
          <img
            className="w-1/2"
            src="https://th.bing.com/th/id/OIP.xpw9XeB4YEpgD44xgLzkcAHaHa?rs=1&pid=ImgDetMain"
            alt=""
          />
        </div>
      </main>
    </>
  );
};

export default Home;
