import { createBrowserRouter } from "react-router-dom";
import Posts from "../features/Posts/Posts";
import SinglePosts from "../features/Posts/SinglePosts";
import CreatePost from "../features/Posts/CreatePost";

// create post routes

const route = createBrowserRouter([
  {
    path: "/",
    element: <Posts />,
  },
  {
    path: "/:id",
    element: <SinglePosts />,
  },
  {
    path: "/create",
    element: <CreatePost />,
  },
]);

// export route

export default route;
