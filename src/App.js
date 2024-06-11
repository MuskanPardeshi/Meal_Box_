import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import * as ReactDOM from "react-dom";
import About from './components/About';
import Contact from './components/Contact';
import {createBrowserRouter,RouterProvider, Outlet} from "react-router-dom";
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import User from './components/User';
import UserClass from './components/UserClass';



const App = () => {
return (
  <div>
    <Header/>
    <Outlet/>
    {/* <User name = {"Muskan(function Component)"} contact = "9518311489"></User>
    <UserClass name = {"Muskan(Class Component)"} contact = "9518311489"></UserClass> */}
  </div>
)
}
const AppLayout = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
      path: "/",
      element: <Body/>,
      },
      {
      path: "/about",
      element: <About />,
      },
      {
        path: "/contact",
        element:<Contact/>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>,
      }
    ],
    errorElement: <Error />
  },
  
])

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<RouterProvider  router={AppLayout}/>)

// ReactDOM.render(
//   <RouterProvider router={AppLayout} />,
//   document.getElementById('root')
// );

const AppWithRouter = () => (
  <RouterProvider router={AppLayout} />
);
export default AppWithRouter;