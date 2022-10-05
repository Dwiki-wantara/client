import React from "react";
import BodyMoviesUser from "../../components/Body/BodyMovies"
import NavbarUser from "../../components/Navbar/NavbarUser";
import UserListFilm from "../../components/User/ListFilmUser"

export default function LayoutUser() {
  return (
    <div>
      <NavbarUser />
      <BodyMoviesUser />
      <UserListFilm />
    </div>
  );
}
