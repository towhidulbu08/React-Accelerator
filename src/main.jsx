import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  createAction,
  deleteContactAction,
  editContactAction,
  updateContactFavorite,
} from "./actions/createActions";
import Contact from "./contact";
import EditContact from "./edit-contact";
import ErrorPage from "./error-page";
import Index from "./index";
import "./index.css";
import { getContactLoader, getContactsLoader } from "./loaders/contactsLoader";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/", //=> root route
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: getContactsLoader,
    action: createAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "contacts/:id",
            element: <Contact />,
            loader: getContactLoader,
            action: updateContactFavorite,
          },
          {
            path: "contacts/:id/edit",
            element: <EditContact />,
            loader: getContactLoader,
            action: editContactAction,
          },
          {
            path: "contacts/:id/destroy",

            action: deleteContactAction,
            errorElement: <div>Oops! There was an error.</div>,
          },
        ],
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
