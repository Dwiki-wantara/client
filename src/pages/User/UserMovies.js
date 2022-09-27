import React from "react";
import BodyMoviesUser from "../../components/Body/BodyMovies"
import NavbarUser from "../../components/Navbar/NavbarUser";
import UserDetailFilm from "../../components/User/UserDetailFilm"

export default function LayoutUser() {
  return (
    <div>
      <NavbarUser />
      <BodyMoviesUser />
      <UserDetailFilm />
    </div>
  );
}
