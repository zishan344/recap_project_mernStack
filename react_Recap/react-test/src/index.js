import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { action as destroyAction } from "./Routes/destroy";
import ErrorPage from "./error-page";
import Contact, { loader as contactLoader } from "./Routes/contact";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./Routes/Root.jsx";
import EditContact, { action as editAction } from "./Routes/edit";
import Index from "./Routes/RootIndex";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      { index: true, element: <Index /> },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
        errorElement: <div>Oops! There was an error.</div>,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
