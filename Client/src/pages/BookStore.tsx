import { Outlet } from "react-router-dom";

const BookStore = () => {
    return (
        <main className="grid place-items-center">
            <Outlet />
        </main>
    );
};

export default BookStore;
