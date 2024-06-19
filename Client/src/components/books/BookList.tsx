import { useNavigate } from "react-router";
import Button from "../generals/Button";
import { FaBook, FaBookOpenReader } from "react-icons/fa6";
import FilterBar from "./FilterBar";
const BookList = () => {
    const books = [
        {
            sku: "efgh",
            title: "The Final Empire",
            stock: 7,
            genres: ["Fantasy", "Novel"],
            author: {
                name: "Brandon Sanderson",
                email: "brandon@cosmere.com",
            },
            pub_date: "2006-05-31",
        },
        {
            sku: "abcd",
            title: "The Hero of ages",
            stock: 7,
            genres: ["Fantasy", "Novel"],
            author: {
                name: "Brandon Sanderson",
                email: "brandon@cosmere.com",
            },
            pub_date: "2006-05-31",
        },
        {
            sku: "efgh",
            title: "The Final Empire",
            stock: 7,
            genres: ["Fantasy", "Novel"],
            author: {
                name: "Brandon Sanderson",
                email: "brandon@cosmere.com",
            },
            pub_date: "2006-05-31",
        },
        {
            sku: "abcd",
            title: "The Hero of ages",
            stock: 7,
            genres: ["Fantasy", "Novel"],
            author: {
                name: "Brandon Sanderson",
                email: "brandon@cosmere.com",
            },
            pub_date: "2006-05-31",
        },
        {
            sku: "abcd",
            title: "The Hero of ages",
            stock: 7,
            genres: ["Fantasy", "Novel"],
            author: {
                name: "Brandon Sanderson",
                email: "brandon@cosmere.com",
            },
            pub_date: "2006-05-31",
        },
        {
            sku: "efgh",
            title: "The Final Empire",
            stock: 7,
            genres: ["Fantasy", "Novel"],
            author: {
                name: "Brandon Sanderson",
                email: "brandon@cosmere.com",
            },
            pub_date: "2006-05-31",
        },
        {
            sku: "abcd",
            title: "The Hero of ages",
            stock: 7,
            genres: ["Fantasy", "Novel"],
            author: {
                name: "Brandon Sanderson",
                email: "brandon@cosmere.com",
            },
            pub_date: "2006-05-31",
        },
    ];
    const navigate = useNavigate();
    const handleClick = (sku: string) => {
        navigate("/books/" + sku);
    };
    return (
        <main className="md:container">
            <h1 className="text-center text-3xl font-bold my-6">
                Welcome to our library!
            </h1>
            <FilterBar />
            <div className="my-4 border border-white p-4 container grid gap-4 max-w-[800px] max-h-[950px] md:max-h-[1000px] overflow-y-scroll">
                {books.map((book, i) => (
                    <article
                        key={i}
                        className="border-b border-b-white last-of-type:border-b-0 flex flex-col md:flex-row gap-4 justify-evenly items-center"
                    >
                        <header className="grid place-items-center">
                            <h2 className="text-[25px] font-bold">
                                {book.title}
                            </h2>
                            <p>
                                by:{" "}
                                <span className="text-xl transition-colors duration-300 hover:text-blue-400 cursor-pointer">
                                    {book.author.name}
                                </span>
                            </p>
                            <small>
                                on Stock{" "}
                                <span className="text-yellow-400">
                                    {book.stock}
                                </span>
                            </small>
                            <div className="flex flex-row gap-4">
                                {book.genres.map((genre, i) => (
                                    <p key={i} className="text-purple-200">
                                        {genre}
                                    </p>
                                ))}
                            </div>
                            <Button
                                className="py-[7px] px-[15px] my-3 group/link"
                                onClick={() => handleClick(book.sku)}
                            >
                                <span className="group-hover/link:text-violet-400 transition-colors ease-in-out duration-300 text-xl">
                                    More details{" "}
                                </span>
                                <FaBook className="translate-x-2 group-hover/link:translate-x-2 transition-[opacity, transform] ease-in-out duration-300 text-xl group-hover/link:opacity-0" />
                                <FaBookOpenReader className="opacity-0 group-hover/link:-translate-x-5 transition-[opacity, transform] ease-in-out duration-300 text-xl group-hover/link:opacity-100" />
                            </Button>
                        </header>
                        <main className="grid place-items-center">
                            <img
                                src="https://m.media-amazon.com/images/I/91U6rc7u0yL._AC_UF1000,1000_QL80_.jpg"
                                alt="cover"
                                className="max-w-[125px] select-none"
                            />
                            <p>{book.pub_date}</p>
                        </main>
                    </article>
                ))}
            </div>
        </main>
    );
};

export default BookList;
