import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import About from "./components/About";
import Books from "./components/Books";
import BookDetails from "./components/BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    //ErrorPage event bubble er moto kaj kore error kujte take kun jaygay ase , j jaygay pay shey jaygay dekay dey, tai sb jaygay likha lage na
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "home",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "books",
        element: <Books />,
        loader: () => fetch("https://api.itbook.store/1.0/new")
      },
      {
        path: "book/:id",
        element: <BookDetails />,
        loader: async ({params}) => {
          return fetch(`https://api.itbook.store/1.0/books/${params.id}`)
        }
      },
    ]
  },

])

export default router;


//window.location.href = url pete pari