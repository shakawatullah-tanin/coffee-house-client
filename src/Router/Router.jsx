import { createBrowserRouter } from "react-router";
import Root from "../Components/Root";
import Home from "../Components/Home";
import UpdateUser from "../Components/UpdateUser";


export const router = createBrowserRouter([
  {

    path: "/",
    element: <Root></Root>,
    children :[
      {
        index : true,
        loader : ()=> fetch("http://localhost:5000/coffees"),
        Component : Home
      },
      {
        path : "/update",
        Component : UpdateUser
      }

    ]
  },
]);
