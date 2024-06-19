import { useNavigate, useParams } from "react-router-dom";
import Button from "../generals/Button";
import { FaAngleLeft, FaBook, FaCashRegister, FaPaypal } from "react-icons/fa6";
import { books } from "../../mock/books";
const Book = () => {
    const { sku } = useParams();
    const currentBook = {
        sku: sku,
        title: "The Final Empire",
        stock: 17,
        genres: ["Fantasy", "Novel"],
        author: "Brandon Sanderson",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis euismod hendrerit. Aliquam malesuada lectus eros, sit amet consequat ipsum laoreet ut. Morbi ut arcu sed velit mollis ultricies ut vel orci. Donec imperdiet sodales condimentum. In faucibus commodo erat, sed scelerisque enim consequat id. Praesent suscipit dui in odio sollicitudin tristique. Aliquam sapien tellus, pharetra nec porttitor ac, pretium et urna. Mauris tincidunt tortor sapien, sed commodo magna efficitur at. Suspendisse a molestie dui, eget sodales odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis quis eleifend dolor, et blandit eros. Curabitur purus neque, aliquet non bibendum vitae, eleifend id metus. Fusce tristique tortor nec elementum maximus. Nunc mauris nibh, convallis eu ligula ut, malesuada fermentum dolor.",
        pub_date: "2006-07-17",
    };

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    };
    return (
        <main className="py-8 px-4 min-h-[900px] grid gap-04 max-w-[850px]">
            <article className="max-w-[800px]">
                <header className="flex flex-col md:flex-row gap-4 justify-evenly items-center content-center">
                    <section className="grid gap-4">
                        <h1 className="text-[35px] font-bold underline underline-offset-8">
                            {currentBook.title}
                        </h1>
                        <p>
                            by:{" "}
                            <span className="text-xl transition-colors duration-300 hover:text-blue-400 cursor-pointer">
                                {currentBook.author}
                            </span>
                        </p>
                        <p className="text-left">{currentBook.description}</p>
                        <div className="flex flex-row gap-4">
                            {currentBook.genres.map((genre, i) => (
                                <p key={i} className="text-purple-200 text-xl">
                                    {genre}
                                </p>
                            ))}
                        </div>
                        <div className="flex gap-4 justify-evenly">
                            <Button
                                className="py-[7px] px-[15px] my-3 group/link"
                                onClick={() => console.log(currentBook.sku)}
                            >
                                <span className="group-hover/link:text-violet-400 transition-colors ease-in-out duration-300 text-xl">
                                    Buy Now{" "}
                                </span>
                                <FaCashRegister className="translate-x-2 group-hover/link:translate-x-2 transition-[opacity, transform] ease-in-out duration-300 text-xl group-hover/link:opacity-0" />
                                <FaPaypal className="opacity-0 group-hover/link:-translate-x-5 transition-[opacity, transform] ease-in-out duration-300 text-xl group-hover/link:opacity-100" />
                            </Button>
                            <Button
                                className="py-[7px] px-[15px] my-3 group/link"
                                onClick={handleClick}
                            >
                                <span className="group-hover/link:text-violet-400 transition-colors ease-in-out duration-300 text-xl">
                                    Go Back{" "}
                                </span>
                                <FaAngleLeft className="translate-x-2 group-hover/link:translate-x-2 transition-[opacity, transform] ease-in-out duration-300 text-xl group-hover/link:opacity-0" />
                                <FaBook className="opacity-0 group-hover/link:-translate-x-5 transition-[opacity, transform] ease-in-out duration-300 text-xl group-hover/link:opacity-100" />
                            </Button>
                        </div>
                    </section>
                    <aside className="grid place-items-center">
                        <img
                            src="https://m.media-amazon.com/images/I/91U6rc7u0yL._AC_UF1000,1000_QL80_.jpg"
                            alt="cover"
                            className="max-w-[150px] md:max-w-[250px] select-none"
                        />
                        <p>
                            Publication Date:{" "}
                            <span className="text-purple-300">
                                {currentBook.pub_date}
                            </span>
                        </p>
                        <small>
                            on Stock{" "}
                            <span className="text-yellow-400">
                                {currentBook.stock}
                            </span>
                        </small>
                    </aside>
                </header>
            </article>
            <div className="my-4 p-4 grid gap-4">
                <h1 className="text-2xl">Similar Books Books</h1>
                <div className="flex justify-evenly gap-4 max-w-2xl md:max-w-max overflow-x-scroll scroll py-2">
                    {books.map((book, i) => (
                        <article
                            className="grid place-items-center place-content-center p-4 border border-white max-w-fit rounded-md gap-4"
                            key={i}
                        >
                            <h2 className="text-xl min-h-14">{book.title}</h2>
                            <small>
                                on Stock{" "}
                                <span className="text-yellow-400">
                                    {book.stock}
                                </span>
                            </small>
                            <img
                                src="https://m.media-amazon.com/images/I/91U6rc7u0yL._AC_UF1000,1000_QL80_.jpg"
                                alt="cover"
                                className="max-w-[100px] md:max-w-[150px] select-none"
                            />
                            <Button className="py-[7px] px-[15px] my-3 group/link">
                                <span className="group-hover/link:text-violet-400 transition-colors ease-in-out duration-300 text-xl">
                                    Buy Now{" "}
                                </span>
                                <FaCashRegister className="translate-x-2 group-hover/link:translate-x-2 transition-[opacity, transform] ease-in-out duration-300 text-xl group-hover/link:opacity-0" />
                                <FaPaypal className="opacity-0 group-hover/link:-translate-x-5 transition-[opacity, transform] ease-in-out duration-300 text-xl group-hover/link:opacity-100" />
                            </Button>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
};
export default Book;
