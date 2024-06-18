import { useNavigate } from "react-router";
import Button from "../generals/Button";

const BookList = () => {
    const books = [
        {
            sku: "efgh",
            title: "The Final Empire",
            stock: 7,
            genre: ["Fantasy", "Novel"],
            author: {
                name: "Brandon Sanderson",
                email: "brandon@cosmere.com",
            },
        },
        {
            sku: "abcd",
            title: "The Hero of ages",
            stock: 7,
            genre: ["Fantasy", "Novel"],
            author: {
                name: "Brandon Sanderson",
                email: "brandon@cosmere.com",
            },
        },
    ];
    const navigate = useNavigate();
    const handleClick = (sku: string) => {
        navigate("/books/" + sku);
    };
    return (
        <>
            <h1 className="text-center text-3xl font-bold my-6">
                Welcome to our library!
            </h1>
            <div className="my-4 border border-white p-4 container grid gap-4">
                {books.map((book, i) => (
                    <article
                        key={i}
                        className="border-b border-b-white last-of-type:border-b-0"
                    >
                        <p>{book.title}</p>
                        <p>{book.stock}</p>
                        <p>{book.author.name}</p>
                        <Button onClick={() => handleClick(book.sku)}>
                            <span>See book</span>
                        </Button>
                    </article>
                ))}
            </div>
        </>
    );
};

export default BookList;
