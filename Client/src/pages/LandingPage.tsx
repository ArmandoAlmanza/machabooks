const Home = () => {
  return (
    <>
      <header className="flex flex-row justify-evenly items-center px-4 py-8">
        <h1>Hello World</h1>
        <nav className="flex flex-row gap-4">
          <a>Home</a>
          <a>About</a>
          <a>Contact</a>
        </nav>
      </header>
      <main>
        <p>This is the main content</p>
      </main>
    </>
  );
};

export default Home;
