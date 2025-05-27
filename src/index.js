import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import { ErrorBoundary } from "./components/error-boundary";
import { booksRoute } from "./components/S8/48-async-react-router/components/books";
import { mainRoute } from "./components/S8/48-async-react-router/components/main";
import Nav from "./components/S8/48-async-react-router/components/nav";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { loader } from "./components/S8/48-async-react-router/components/main-loader";

const Club = lazy(() =>
  import("./components/S8/48-async-react-router/components/club"), 1000
);
const Main = lazy(() =>
  import("./components/S8/48-async-react-router/components/main"), 1000
);

const router = createBrowserRouter([
  {
    element: <Nav />,
    children: [
      { index: true, loader: loader, element: <Main /> },
      { path: "/books", ...booksRoute },
      { path: "/club", element: <Club /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary fallback={<h1>Error at App Level</h1>}>
      {/* // ? 47. Async React Router */}
      {/* <RouterProvider router={router} /> */}

      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
