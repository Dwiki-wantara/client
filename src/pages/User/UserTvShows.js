import React from "react";
import BodyTvShowsUser from "../../components/Body/BodyTvShows"
import NavbarUser from "../../components/Navbar/NavbarUser";
import UserDetailFilm from "../../components/User/UserDetailFilm"

export default function LayoutUser() {
  return (
    <div>
      <NavbarUser />
      <BodyTvShowsUser />
      <UserDetailFilm />
    </div>
  );
}
