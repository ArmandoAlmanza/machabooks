import { useNavigate, useParams } from "react-router-dom";
import Button from "../generals/Button";

const Book = () => {
    const { sku } = useParams();
    const currentBook = {
        sku: sku,
        title: "The Final Empire",
        stock: 7,
        genres: ["Fantasy", "Novel"],
        author: "Brandon Sanderson",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus harum sapiente earum iusto magnam enim magni dolor reprehenderit. Dolores modi tempora animi optio libero accusamus architecto corrupti sequi eum autem.",
    };
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    };
    return (
        <article>
            <header>
                <section>
                    <h1>{currentBook.title}</h1>
                    <p>{currentBook.description}</p>
                    <div>
                        {currentBook.genres.map((genre, i) => (
                            <p key={i}>{genre}</p>
                        ))}
                    </div>
                </section>
                <aside>
                    <img src="" alt="" />
                    <p>{currentBook.author}</p>
                    <small>On Stock: {currentBook.stock}</small>
                </aside>
            </header>
            <main>
                <Button onClick={() => console.log(currentBook.sku)}>
                    <span>Buy it now</span>
                </Button>
                <Button onClick={handleClick}>
                    <span>Back</span>
                </Button>
            </main>
        </article>
    );
};
export default Book;
