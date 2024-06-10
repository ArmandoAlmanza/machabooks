import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import BookStore from "../pages/BookStore";
import BookList from "../components/books/BookList";

const router = createBrowserRouter([
    {
        path: "/",
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
        ],
    },
]);

const MyRoutes = () => {
    return <RouterProvider router={router} />;
};

export default MyRoutes;
