import "./index.css";
// import App from "./App";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { action as destroyAction } from "./Routes/destroy";
import ErrorPage from "./error-page";
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from "./Routes/contact";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./Routes/Root.jsx";
import EditContact, { action as editAction } from "./Routes/edit";
import Index from "./Routes/RootIndex";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
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
    ],
  },
]);

export default router;
