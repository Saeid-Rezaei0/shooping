import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'swiper/css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Admin from "./Admin.jsx";
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Home from './home/Home.jsx';
import Blog from './assets/blog/Blog.jsx';
import Shoping from './Shop/Shoping.jsx';
import SingleProduct from './Shop/SingleProduct.jsx';
import SingleBlog from './assets/blog/SingleBlog.jsx';
import CartPage from './Shop/CartPage.jsx';
import About from './About/About.jsx';
import Contact from './Contact/Contact.jsx';
import Login from './Login.jsx';
import NotFound from './NotFound.jsx';
import ADDminblog from './ADDminblog.jsx';
import AddminPRoductSEction from './AddminPRoductSEction.jsx';
import Register from './Register.jsx';
import swal from 'sweetalert';
import AdminOrder from './AdminOrder.jsx';
import ADminComment from './ADminComment.jsx';
import Styke from './Styke.jsx';
import UsersAdmin from './UsersAdmin.jsx';
import UserTeket from './compones/UserTeket.jsx';
import Adminadvise from './Adminadvise.jsx';
import productCommentADmin from './productCommentADmin.jsx';

const PrivateRoute = ({ component: Component, adminOnly, ...rest }) => {
  const navigate = useNavigate();
  const userEmail = localStorage.getItem("userEmail");

  useEffect(() => {
    if (!userEmail || (adminOnly && userEmail !== "saeidrr@gimail.com")) {
      swal("برای مشاهده این صفحه ابتدا ثبت نام کنید");
      navigate("/login");
    }
  }, [userEmail, navigate, adminOnly]);

  return userEmail && (!adminOnly || userEmail === "saeidrr@gimail.com") ? (
    <Component {...rest} />
  ) : null;
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const navigate = useNavigate();
  const userEmail = localStorage.getItem("userEmail");

  useEffect(() => {
    if (!userEmail) {
      swal("برای مشاهده سبد خرید ابتدا ثبت نام کنید");
      navigate("/login");
    }
  }, [userEmail, navigate]);

  return userEmail ? <Component {...rest} /> : null;
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/blog", element: <Blog /> },
      { path: "/blog/:id", element: <SingleBlog /> },
      { path: "/shop", element: <Shoping /> },
      { path: "/shop/:id", element: <SingleProduct /> },
      { path: "/card-page", element: <ProtectedRoute component={CartPage} /> },
      { path: "/UserTeket", element: <ProtectedRoute component={UserTeket} /> },
      { path: "/about", element: <About /> },
      { path: "/contect", element: <Contact /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/admin", element: <PrivateRoute component={Admin} adminOnly={true} /> },
      { path: "/admin/blog", element: <PrivateRoute component={ADDminblog} adminOnly={true} /> },
      { path: "/admin/product", element: <PrivateRoute component={AddminPRoductSEction} adminOnly={true} /> },
      { path: "/admin/order", element: <PrivateRoute component={AdminOrder} adminOnly={true} /> },
      { path: "/admin/comment", element: <PrivateRoute component={ADminComment} adminOnly={true} /> },
      { path: "/admin/styke", element: <PrivateRoute component={Styke} adminOnly={true} /> },
      { path: "/admin/users", element: <PrivateRoute component={UsersAdmin} adminOnly={true} /> },
      { path: "/admin/advise", element: <PrivateRoute component={Adminadvise} adminOnly={true} /> },
      { path: "/admin/commentProduct", element: <PrivateRoute component={productCommentADmin} adminOnly={true} /> },
      { path: "*", element: <NotFound /> },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
