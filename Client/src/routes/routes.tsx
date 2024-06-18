import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import BookStore from "../pages/BookStore";
import Home from "../pages/LandingPage";
import BookList from "../components/books/BookList";
import Book from "../components/books/BookDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/auth",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/books",
        element: <BookStore />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/books",
                element: <BookList />,
            },
            {
                path: "/books/:sku",
                element: <Book />,
            },
        ],
    },
]);

const MyRoutes = () => {
    return <RouterProvider router={router} />;
};

export default MyRoutes;
