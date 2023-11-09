import "./App.css";
import AppLayout from "./layout/app.layout";
import HomePage from "./pages/home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
          errorElement: <div>404</div>,
        },
        {
          path: "/post/:id",
          errorElement: <div>404</div>,
          element: <div>SinglePostPage</div>,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
