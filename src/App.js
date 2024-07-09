import Navbar from "./utils/navbar";
import Job from "./components/jobs";
import JobView from "./components/jobView";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import JobyByLocation from "./components/jobBylocation";
import JobByProfession from "./components/jobByprofession";

const Layout = () => (
  <div>
    <Navbar />
    <Outlet />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Use Layout component as the wrapper
    children: [
      {
        path: "/",
        element: <Job />,
      },
      {
        path: "/jobview",
        element: <JobView />,
      },
      {
        path: "jobbylocation",
        element: <JobyByLocation />,
      }
      ,
      {
        path: "jobbyprofession",
        element: <JobByProfession />,
      }
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
