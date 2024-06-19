import { Outlet } from "react-router-dom";
import Footer from "../components/generals/Footer";

const BookStore = () => {
    return (
        <>
            <main className="grid place-items-center">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default BookStore;
