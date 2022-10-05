import React, { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { UserContext } from "./context/userContext";

import Auth from "./pages/Auth/Auth";
import AuthTvShows from "./pages/Auth/AuthTvShows";
import AuthMovies from "./pages/Auth/AuthMovies";


import User from "./pages/User/UserHome";
import TvShowsUser from "./pages/User/UserTvShows";
import UserFilm from "./components/User/ListFilmUser"
import MoviesUser from "./pages/User/UserMovies";
import ProfileUser from "./components/User/Profile";
import Payment from "./components/User/Payment";
import DetailUser from "./components/User/UserDetail";


import Admin from "./pages/Admin/AdminHome";
import AdminFilm from "./components/Admin/AdminFilm"
import AdminAddFilm from "./pages/Admin/AdminAddFilm";
import DetailAdmin from "./components/Admin/AdminDetail";

import { API, setAuthToken } from "./config/api";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  let navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    if (state.isLogin === false) {
      navigate("/");
    } else {
      if (state.user.role === "admin") {
        navigate("/admin");
      } else if (state.user.role === "user") {
        navigate("/user");
      }
    }
  }, [state]);

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");
      console.log("ini response:", response);

      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      // Get user data
      let payload = response.data.data;
      // Get token from local storage
      payload.token = localStorage.token;

      // Send data to useContext
      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.token) {
      checkUser();
    }
    console.log("user context", state);
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/tvshows" element={<AuthTvShows />} />
        <Route path="/movies" element={<AuthMovies />} />
       
        <Route path="/user" element={<User />} />
        <Route path="/user/tvshows" element={<TvShowsUser />} />
        <Route path="/user/movies" element={<MoviesUser />} />
        <Route path="/user/profile" element={<ProfileUser />} />
        <Route path="/user/payment" element={<Payment />} />
        <Route path="/user/film" element={<UserFilm />} />
        <Route path="/user/detail/:id" element={<DetailUser />} />
        
      
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/film" element={<AdminFilm />} />
        <Route path="/admin/addfilm" element={<AdminAddFilm />} />
        <Route path="/admin/detail/:id" element={<DetailAdmin />} />
  
      </Routes>
    </>
  );
}

export default App;
