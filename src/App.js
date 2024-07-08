
// import Navbar from "./utils/navbar";
import Job from "./components/jobs"
import JobView from "./components/jobView";
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Exploreoffice from "./components/exploreOffice";
const router=createBrowserRouter([
  {
    path:"/",
    element:<Job/>
  },
  {path:"/jobs",
    element:<JobView/>
  },
  {path:"/explore",
    element:<Exploreoffice/>
  }
])

function App() {
  return (
     
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
